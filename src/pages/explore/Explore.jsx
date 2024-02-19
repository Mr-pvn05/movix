import InfiniteScroll from "react-infinite-scroll-component";
import { fetchDataFromApi } from "../../utils/api";
import { Container, Spinner, MovieCard } from "../../components/index";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { sortbyData } from "./index";
import useFetch from "../../hooks/useFetch";
import Select from "react-select";
import "./explore.scss"

const Explore = () => {

  

  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState(null);
  const [sortby, setSortby] = useState(null);
  const { mediaType } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [mediaType]);

  const { data: genresData } = useFetch(`genre/${mediaType}/list`);

  let filters = {};

  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(`discover/${mediaType}`, filters).then((res) => {
      setData(res?.data?.results);
      setPage((prev) => prev + 1);
      setLoading(false);
    });
  };

  const fetchNextPageData = () => {
    fetchDataFromApi(`/discover/${mediaType}?page=${page}`, filters).then(
      (res) => {
        if (data) {
          setData((prevData) => [...prevData, ...res.data.results]);
        } else {
          setData(res);
        }
        setPage((prev) => prev + 1);
      }
    );
  };

  useEffect(() => {
    filters = {};
    setData(null);
    setPage(1);
    setSortby(null);
    setGenre(null);
    fetchInitialData();
  }, [mediaType]);

  const onChange = (selectedItems, action) => {
    if (action.name === "sortby") {
      setSortby(selectedItems);
      if (action.action !== "clear") {
        filters.sort_by = selectedItems.value;
      } else {
        delete filters.sort_by;
      }
    }

    if (action.name === "genres") {
      console.log("Selected : ", selectedItems)
      setGenre(selectedItems);
      if (action.action !== "clear") {
        let genreId = selectedItems.map((g) => g.id);
        genreId = JSON.stringify(genreId).slice(1, -1);
        filters.with_genres = genreId;
      } else {
        delete filters.with_genres;
      }
    }

    setPage(1);
    fetchInitialData();
  };

  return (
    <div className="explorePage">
      <Container>
        <div className="pageHeader">
          <div className="pageTitle">
            {mediaType === "tv" ? "Explore TV Shows" : "Explore Movies"}
          </div>
          <div className="filters">
            <Select
              isMulti
              name="genres"
              value={genre}
              closeMenuOnSelect={false}
              options={genresData?.data?.genres}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
              onChange={onChange}
              placeholder="Select genres"
              className="react-select-container genresDD"
              classNamePrefix="react-select"
            />
            <Select
              name="sortby"
              value={sortby}
              options={sortbyData}
              onChange={onChange}
              isClearable={true}
              placeholder="Sort by"
              className="react-select-container sortbyDD"
              classNamePrefix="react-select"
            />
          </div>
        </div>
        {loading && <Spinner initial={true} />}
        {!loading && (
          <>
            {data?.length > 0 ? (
              <InfiniteScroll
                className="content"
                dataLength={data?.length || []}
                next={fetchNextPageData}
                hasMore={page <= data?.total_pages}
                loader={<Spinner />}
              >
                {data?.map((item, index) => {
                  if (item.media_type === "person") return;
                  return (
                    <MovieCard key={index} data={item} media_type={mediaType} />
                  );
                })}
              </InfiniteScroll>
            ) : (
              <span className="resultNotFound">Sorry, Results not found!</span>
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default Explore;
