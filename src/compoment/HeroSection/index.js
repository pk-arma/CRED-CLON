import Button from "../common/Button";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section-wrapper">
      <div className="absolute-center flex hero-claim-label">
        <div> pay credit card bill. earn guaranteed ₹200 back.e</div>
        <div className="claim-anchor">
          claim now
          <img
            className="claim-arrow"
            src="https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png"
            alt="click"
          />
        </div>
      </div>
      <div className="max-width flex absolute-center flex-col hero-section">
        <div className="hero-heading">
          rewards for paying credit card bills.
        </div>
        <div className="hero-sub-heading">
          {" "}
          join 7.5M+ members who win rewards and cashbacks everyday
        </div>
        <Button buttonText="Downloas CRED" />
      </div>
    </div>
  );
};
export default HeroSection;
