import { useState } from "react";
import { Container, SwitchTabs, Carousel } from "../../components/index";
import useFetch from "../../hooks/useFetch";

const Trending = () => {
  const [endPoint, setEndPoint] = useState("day");

  const { data, loading } = useFetch(`trending/all/${endPoint}`);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Day" ? "day" : "week");
  };
  return (
    <Container>
      <div className="flex justify-between">
        <p className="text-xl md:text-3xl lg:text-4xl lg:font-semibold">Trending</p>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </div>
      <Carousel data={data?.data?.results} loading={loading}/>
    </Container>
  );
};

export default Trending;
