import React from "react";
import "./header.css";
import image1 from "../../assets/media-1.webp";
import image2 from "../../assets/media-2.webp";
import image3 from "../../assets/meeting.webp";
const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <div className="subTitle">
          <span className="subtitleFirst">welcome to</span>{" "}
          <span className="titleColor">LiveMatrix</span> development
        </div>
        <div className="headerTitle">
          <div className="div_row">
            <div>software</div>
            <div className="imageSpan">
              <img src={image1} alt="" />
            </div>
          </div>
          <div className="div_row">
            <div className="imageSpan">
              <img src={image2} alt="" />
            </div>
            <div>development</div>
          </div>
          <div className="div_row">
            <div>company</div>
            <div className="imageSpan">
              <img src={image3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="headerSubContainer">
        <div className="headerBanner">
          <h2>
            We make your goals a reality with our{" "}
            <span className="bannerColor"> software systems</span>
          </h2>
          <p>
            LiveMatrix provides technology solutions to optimize your business/
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
