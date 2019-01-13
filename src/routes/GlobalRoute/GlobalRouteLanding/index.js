import { Button } from "antd";
import React from "react";
import GuestLayout from "../../../layouts/GuestLayout";
import "./GlobalRouteLanding.scss";
import GlobalRouteLandingAnimatedCloud from "./GlobalRouteLandingAnimatedCloud";

const GlobalRouteLanding = () => {
  return (
    <GuestLayout
      menu={[
        { name: "Sign In", url: "/signin" },
        { name: "Register", url: "/register" }
      ]}
    >
      <div className="GlobalRouteLanding">
        <GlobalRouteLandingAnimatedCloud>
          <div className="main-intro-title">
            The school that is on the cloud
          </div>
          <Button disabled={true} size="large">
            Discover more
          </Button>
        </GlobalRouteLandingAnimatedCloud>
      </div>
    </GuestLayout>
  );
};

export default GlobalRouteLanding;
