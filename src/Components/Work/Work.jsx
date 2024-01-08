import React from "react";
import "./work.css";
const Work = () => {
  return (
    <div className="workContainer">
      <h1>
        how we <span className="grey">work</span>
        <span className="orange">/</span>
      </h1>

      <div className="workList">
        <ul>
          <li>You gain control over your workflow, not the other way around</li>
          <li>
            You bring your skills to exciting, challenging tasks and develop
            yourself professionally
          </li>
          <li>
            You choose whether to work flexible hours, a hybrid schedule, or a
            completely remote
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Work;
