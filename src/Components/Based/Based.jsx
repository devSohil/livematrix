import React from "react";
import "./based.css";
import image1 from "../../assets/city-view.webp";
import image2 from "../../assets/sunrise.webp";
const Based = () => {
  return (
    <div className="basedContainer">
      <h1>
        where we're <span className="grey">based</span>
        <span className="orange">/</span>
      </h1>

      <div className="basedSubContainer">
        <div className="left">
          <p>
            Executive Towers – a prime location in the heart of hyderabad,
            Telangana
          </p>
          <img src={image1} alt="" />
        </div>
        <div className="right">
          <img src={image2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Based;
