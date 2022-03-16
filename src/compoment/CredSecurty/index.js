import Button from "../common/Button";
import "./credsecurty.css";

const CredSecurty = () => {
  return (
    <div className="securty-spacial photo-component">
      <div className="max-width absolute-center flex  photo-section">
        <div className="photo-section-child">
          <div className="photo-section-top">
            <div className="photo-section-heading cred-experince-heading">
              security first. and second.
            </div>
            <div className="photo-section-sub-heading">
              what’s yours remains only yours.
            </div>
          </div>
          <div className="photo-section-bottom">
            <div className="photo-section-description cred-experince-description">
              CRED ensures that all your personal data and transactions are
              encrypted, and secured so what’s yours remains only yours. there’s
              no room for mistakes because we didn’t leave any.
            </div>
            <div className="">
              <Button buttonText="Experieance the upgread" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CredSecurty;
