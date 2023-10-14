import Button from "../common/Button";
import "./fealspacial.css";
import React from 'react';
const FealSpacial = () => {
  return (
    <div className="feel-spacial photo-component">
      <div className="max-width absolute-center flex photo-section">
        <div className="photo-section-child">
          <div className="photo-section-top">
            <div className="photo-section-heading">
              feel special more often.
            </div>
            <div className="photo-section-sub-heading">
              exclusive rewards for paying your bills
            </div>
          </div>
          <div className="photo-section-bottom">
            <div className="photo-section-description">
              every time you pay your credit card bills on CRED, you receive
              CRED coins. you can use these to win exclusive rewards or get
              special access to curated products and experiences. on CRED, good
              begets good.
            </div>

            <div className="">
              <Button buttonText="Explore rewards" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FealSpacial;
