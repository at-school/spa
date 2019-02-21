import { Button } from "antd";
import React from "react";
import GuestLayout from "../../layouts/GuestLayout";
import LandingAnimatedCloud from "./LandingAnimatedCloud";
import "./Landing.scss";

const Landing = () => {
  return (
    <GuestLayout
      menu={[
        { name: "Sign In", url: "/signin" },
        { name: "Register", url: "/register" },
        { name: "Blog", url: "/blog" }
      ]}
    >
      <div className="Landing">
        <LandingAnimatedCloud>
          <div className="main-intro-title">
            The school that is on the cloud
          </div>
          <Button disabled={true} size="large">
            Discover more
          </Button>
        </LandingAnimatedCloud>
      </div>
    </GuestLayout>
  );
};

export default Landing;
