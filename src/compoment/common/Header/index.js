import { useState } from "react";
import "./header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMobileMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="mobile-menu-wrapper">
      <div className={`mobile-menu only-mobile  ${showMenu ? "overlay" : " "}`}>
        <div className="mobile-nav">
          <div className="mobile-nav-item"> credit score check</div>
          <div className="mobile-nav-item">credit card bill payment</div>
        </div>
      </div>
      <div className="flex max-width header">
        <img
          className="header-logo"
          src="	https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
          alt="logo"
        />
        <div className="only-mobile  mobile-menu-button-wrapper">
          <button
            className={`hamburger hamburger--spin-r ${
              showMenu ? "is-active" : " "
            }`}
            type="button"
            onClick={toggleMobileMenu}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="non-mobile flex">
          <div className="header-nav-item"> credit score check</div>
          <div className="header-nav-item">credit card bill payment</div>
        </div>
      </div>
    </div>
  );
};
export default Header;
