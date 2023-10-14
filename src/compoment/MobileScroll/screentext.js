import { useEffect, useRef, useState } from "react";
import React from 'react';
import "./mobilescroll.css";
const ScreenText = ({ screen, setCurrentimg, i }) => {
  const [showanimation, setShowanimation] = useState(false);
  const ref = useRef(null);

  const toggleAnimation = (e) => {
    if (e[0]?.isIntersecting) {
      setShowanimation(true);
      setCurrentimg(i);
    }
  };
  const option = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6
  };
  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, option);
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  });
  return (
    <div
      className={`screen-text ${showanimation ? "text-visible" : ""} `}
      ref={ref}
    >
      <div className="screen-heading">{screen.heading} </div>
      <div className="mobile-mockup-wrapper only-mobile">
        <div className="mobile-mockup">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={screen.mobile_img}
              alt="0"
              className="mobile-screen-img"
            />
          </div>
        </div>
      </div>
      <div className="screem-description"> {screen.description} </div>
    </div>
  );
};
export default ScreenText;
