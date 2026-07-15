import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import PopularCategory from "../../components/PopularCategory/PopularCategory";
import Footer from "../../components/Footer/Footer";

import bgVideo from "../../assets/Shopping/shopping.mp4";

import "./Home.css";

function Home() {
  return (
    <>
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      <Header />
      <MainContent />
      <PopularCategory />
      <Footer />
    </>
  );
}

export default Home;