import HeroBanner from "./HeroBanner";
import Trending from "./Trending";
import Popular from "./Popular";
import TopRated from "./TopRated";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Trending />
      <Popular/>
      <TopRated/>
    </>
  );
};

export default Home;
