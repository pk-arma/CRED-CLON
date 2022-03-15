import { useEffect, useRef, useState } from "react";
import "./productShowcese.css";

const ProductShowcase = () => {
  const [showanimation, setShowanimation] = useState(false);
  const ref = useRef(null);

  const toggleAnimation = (e) => {
    if (e[0]?.isIntersecting) {
      setShowanimation(true);
    }
  };
  const option = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  };
  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, option);
    if (!showanimation) {
      if (ref.current) {
        observer.observe(ref.current);
      }
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  });
  return (
    <div
      className={`product-showcase scale-in-bottom ${
        showanimation ? "scale-in-bottom" : ""
      } `}
      ref={ref}
    >
      {showanimation && (
        <div className="showcase-wrapper">
          <img
            alt=""
            className="showcase-ui showcase-mockup-1"
            src="	https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png"
          />
          <img
            alt=""
            className="showcase-ui showcase-mockup-2"
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png"
          />
          <img
            alt=""
            className="showcase-ui showcase-mockup-3"
            src="		https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png"
          />
          <img
            alt=""
            className="showcase-ui showcase-mockup-4"
            src="	https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png"
          />
          <img
            alt=""
            className="showcase-ui showcase-mockup-5"
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png"
          />
        </div>
      )}
    </div>
  );
};
export default ProductShowcase;
