import React from "react";
import Particles from "react-particles-js";
import GuestHeader from "../../components/GuestHeader";
import "./AuthenticationLayout.scss";

const AuthenticationLayout = props => {
  return (
    <div className="AuthenticationLayout">
      <GuestHeader menu={[]} />
      <Particles
        params={{
          particles: {
            line_linked: {
              shadow: {
                blur: 5,
                color: "#3CA9D1",
                enable: true
              }
            }
          }
        }}
        style={{
          minHeight: "100%",
          position: "fixed",
          zIndex: "-1",
          top: 0,
          backgroundColor: "rgb(248, 248, 248)"
        }}
        className="particle-container"
      />
      <div className="form-container-wrapper">
        <div className="form-container">
          <h1>@ SCHOOL</h1>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default AuthenticationLayout;
