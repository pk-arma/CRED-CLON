import Button from "../common/botton";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section-wrapper">
      <div className="flex absolute-center hero-claim-label">
        <div callName="hero-section">
          pay credit card bill. earn guaranteed ₹200 back.
        </div>
        <div className="claim-anchor">
          cliam now
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png"
            alt="claim"
            className="claim-arrow"
          />
        </div>
      </div>
      <div className="flex absolute-center flex-col max-width">
        <div className="hero-heading">
          rewards for paying credit card bills.
        </div>
        <div className="hero-sub-heading">
          join 7.5M+ members who win rewards and cashbacks everyday
        </div>
        <Button buttonText="Download CRED" />
      </div>
    </div>
  );
};
export default HeroSection;
