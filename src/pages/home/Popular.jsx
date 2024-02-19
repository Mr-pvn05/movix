import React, { useState } from "react";
import { Carousel, Container, SwitchTabs } from "../../components/index";
import useFetch from "../../hooks/useFetch";

const Popular = () => {

    const [endPoint, setEndPoint] = useState("movie")

  const { data, loading } = useFetch(`/${endPoint}/popular`);

  const onTabChange = (type) => {
    setEndPoint(type === "Movies" ? "movie" : "tv" )
  }

  return (
    <Container>
      <div className="flex justify-between">
        <p className="text-xl md:text-3xl lg:text-4xl lg:font-semibold">
          What&apos;s Popular
        </p>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </div>
      <Carousel data={data?.data?.results} endPoint={endPoint} loading={loading} />
    </Container>
  );
};

export default Popular;
