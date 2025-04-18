import { BrowserRouter, Route, Routes } from "react-router-dom";
import FancyGrid from "./components/Hero";
import Layout from "./components/Layouts";

const Home = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<FancyGrid />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Home;
