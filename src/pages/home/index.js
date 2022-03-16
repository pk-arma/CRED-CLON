import Footer from "../../common/Footer";
import AppRating from "../../compoment/AppRating";
import BrandsLove from "../../compoment/brandsLove";
import Header from "../../compoment/common/Header";
import CredExperience from "../../compoment/CredExperience";
import CredSecurty from "../../compoment/CredSecurty";
import CredStory from "../../compoment/credStory";
import FealSpacial from "../../compoment/FealSpecial";
import HeroSection from "../../compoment/HeroSection";
import MobileScroll from "../../compoment/MobileScroll";
import ProductShowcase from "../../compoment/ProductShowcase";
import WindowPeac from "../../compoment/WindowPeak";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProductShowcase />
      <FealSpacial />
      <BrandsLove />
      <CredExperience />
      <MobileScroll />
      <div className="non-mobile">
        <WindowPeac />
      </div>
      <CredSecurty />
      <CredStory />
      <AppRating />
      <Footer />
    </div>
  );
};
export default Home;
