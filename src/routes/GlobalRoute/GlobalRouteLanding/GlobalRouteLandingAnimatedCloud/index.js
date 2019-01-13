import React from "react";
import "./GlobalRouteLandingAnimatedCloud.scss"

const GlobalRouteLandingAnimatedCloud = props => {
  return (
    <div className="GlobalRouteLandingAnimatedCloud">
      <div className="main-intro">{props.children}</div>
      <div className="background-wrap">
        <div className="x1">
          <div className="cloud" />
        </div>
        <div className="x2">
          <div className="cloud" />
        </div>
        <div className="x3">
          <div className="cloud" />
        </div>
        <div className="x4">
          <div className="cloud" />
        </div>
        <div className="x5">
          <div className="cloud" />
        </div>
      </div>
    </div>
  );
};

export default GlobalRouteLandingAnimatedCloud;
