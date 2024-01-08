import React from "react";
import "./design.css";
import image1 from "../../assets/meeting.webp";
import image2 from "../../assets/team.webp";
import image3 from "../../assets/ok.webp";
import video1 from "../../assets/new-year.mp4";
const Desgin = () => {
  return (
    <div className="desginContainer">
      <div className="designTop">
        <div className="div_row">
          <div>design with</div>
          <div className="imageSpan">
            <img src={image1} alt="" />
          </div>
        </div>
        <div className="designBottom">
          <div className="left">
            <img src={image2} alt="ni" />
          </div>
          <div className="right">
            <p>team intelligence,</p>
            <p>
              deliver
              <span>
                <img src={image3} alt="" />
              </span>
              with
            </p>
            <div>
              <p>
                love <video src={video1} autoPlay loop muted></video>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desgin;
