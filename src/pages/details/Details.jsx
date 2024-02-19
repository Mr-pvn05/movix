import DetailsBanner from "./DetailsBanner";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import Cast from "./cast/Cast";
import VideosSection from "./videos/VideosSection";
import Recomend from "./recomendation/Recomend";
import Similar from "./recomendation/Similar";
import { Container } from "../../components";
import { useEffect } from "react";

const Details = () => {
  const { mediaType, id } = useParams();

  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div>
      <DetailsBanner
        video={data?.data?.results[0]}
        crew={credits?.data?.crew}
      />
      <Cast cast={credits?.data?.cast} />
      <VideosSection videos={data?.data?.results} />
      <Container>
        <Recomend mediaType={mediaType} id={id} />
        <Similar mediaType={mediaType} id={id} />
      </Container>
    </div>
  );
};

export default Details;
