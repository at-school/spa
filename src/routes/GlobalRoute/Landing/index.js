import React from "react";
import "./Landing.scss";
import { Button } from "antd";
import GuestHeader from "../../../components/GuestHeader";

const Landing = () => {
  return (
    <React.Fragment>
      <GuestHeader menu={[{ name: "Sign In", url: "/signin" }]} />
      <div className="landing-page">
        <div id="clouds">
          <div className="main-intro">
            <div className="main-intro-title">
              The school that is on the cloud
            </div>
            <Button size="large">Discover more</Button>
          </div>
          <div id="background-wrap">
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
      </div>
    </React.Fragment>
  );
};

export default Landing;
