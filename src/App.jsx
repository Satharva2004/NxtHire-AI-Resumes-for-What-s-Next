import Features from "./components/Features";
import FancyGrid from "./components/Hero";
import FancyBg from "./components/bg";
const Home = () => {
  return (
    <div className="relative">
      <FancyBg />
      <div className="relative z-10">
        <FancyGrid />
        <Features />
      </div>
    </div>
  );
};

export default Home;
