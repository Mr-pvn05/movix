import InfiniteScroll from "react-infinite-scroll-component";
import { fetchDataFromApi } from "../../utils/api";
import { Container, Spinner, MovieCard } from "../../components/index";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchResult = () => {
  const [data, setData] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(`search/multi?query=${query}&page=${page}`).then((res) => {
      setData(res?.data?.results);
      setApiResponse(res)
      setPage((prev) => prev + 1);
      setLoading(false);
    });
  };
  
  const fetchNextPageData = () => {
    fetchDataFromApi(`search/multi?query=${query}&page=${page}`).then((res) => {
      if (data) {
        setData((prevData) => [...prevData, ...res.data.results]);
        
      } else {
        setData(res);
      }
      setPage((prev) => prev + 1);
    });
  };

  useEffect(() => {
    setPage(1)
    fetchInitialData();
  }, [query]);

  return (
    <div className="min-h-[700px] pt-[100px]">
      {loading ? (
        <Spinner initial={true} />
      ) : (
        <Container>
          {data?.length > 0 ? (
            <>
              <div className="mb-5 text-xl">
                {`Search ${
                  apiResponse?.data?.total_results > 1 ? "results" : "result"
                } of '${query}'`}
              </div>
              <InfiniteScroll
                className="flex gap-3 md:gap-5 flex-wrap"
                dataLength={data?.length || []}
                next={fetchNextPageData}
                hasMore={page <= apiResponse?.data?.total_pages}
                loader={<Spinner />}
              >
                {data?.map((item, index) => {
                  if (item.media_type === "person") return;
                  return (                   
                      <MovieCard key={index} data={item}/>                    
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (
            <span className="text-2xl text-black1">
              Sorry, Result not found !
            </span>
          )}
        </Container>
      )}
    </div>
  );
};

export default SearchResult;
