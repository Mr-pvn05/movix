import { Routes, Route } from "react-router-dom";
import { Home, SearchResult, Explore, Details, PageNotFound } from "./pages/index";
import { Header, Footer } from "./components/index";

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
