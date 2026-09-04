import Header from "../../components/Header/Header";
import MainContent from "../../components/MainContent/MainContent";
import PopularCategory from "../../components/PopularCategory/PopularCategory";
import Footer from "../../components/Footer/Footer";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

import "./Home.css";

function Home() {
  return (
    <>

      <div className="home-container">
    <Header />
    <MainContent />
    <PopularCategory />
     <FeaturedProducts />
    <Footer />
  </div>
    </>
  );
}

export default Home;