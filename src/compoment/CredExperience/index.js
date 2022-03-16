import Button from "../common/Button";
import "./credexperience.css";

const CredExperience = () => {
  return (
    <div className="cred-spacial photo-component">
      <div className="max-width absolute-center flex  photo-section">
        <div className="photo-section-child">
          <div className="photo-section-top">
            <div className="photo-section-heading cred-experince-heading">
              we take your money matters seriously.
            </div>
            <div className="photo-section-sub-heading">
              so that you don’t have to.
            </div>
          </div>
          <div className="photo-section-bottom">
            <div className="photo-section-description cred-experince-description">
              never miss a due date with reminders to help you pay your bills on
              time, instant settlements mean you never wait for your payments to
              go through and statement analysis lets you know where your money
              goes, always.
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
export default CredExperience;
