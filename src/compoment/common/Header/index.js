import "./header.css";

const Header = () => {
  return (
    <div className="mobile-menu-wrapper">
      <div className="flex max-width header">
        <img
          className="header-logo"
          src="	https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
          alt="logo"
        />
        <div className="only-mobile flex">
          <div className="header-nav-item"> credit score check</div>
          <div>credit card bill payment</div>
        </div>
      </div>
    </div>
  );
};
export default Header;
