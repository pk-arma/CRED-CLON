import Header from "../../compoment/common/Header";
import CredExperience from "../../compoment/CredExperience";
import CredSecurty from "../../compoment/CredSecurty";
import FealSpacial from "../../compoment/FealSpecial";
import HeroSection from "../../compoment/HeroSection";
import ProductShowcase from "../../compoment/ProductShowcase";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProductShowcase />
      <FealSpacial />
      <CredExperience />
      <CredSecurty />
    </div>
  );
};
export default Home;
