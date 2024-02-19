import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { SwitchTabs, Container, Carousel } from "../../components/index";

const TopRated = () => {

  const [endPoint, setEndPoint] = useState("movie")

  const { data, loading } = useFetch(`/${endPoint}/top_rated`);

  const onTabChange = (type) => {
    setEndPoint(type === "Movies" ? "movie" : "tv")
  }

  return (
    <div>
      <Container>
        <div className="flex justify-between">
          <p className="text-xl md:text-3xl lg:text-4xl lg:font-semibold">
            Top Rated
          </p>
          <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
        </div>
        <Carousel data={data?.data?.results} endPoint={endPoint} loading={loading}/>
      </Container>
    </div>
  );
};

export default TopRated;
