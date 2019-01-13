import React from "react";
import Particles from "react-particles-js";

const AuthenticationLayout = props => {
  return (
    <div className="AuthenticationLayout">
      <div>
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
            backgroundColor: "rgb(248, 248, 248)"
          }}
          className="particle-container"
        />
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default AuthenticationLayout;
