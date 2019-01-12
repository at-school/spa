import React from "react";
import Particles from "react-particles-js";
import { css, StyleSheet } from "aphrodite";

const AuthenticationLayout = props => {
  return (
    <div className={css(styles.container)}>
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
          className={css(styles.particleContainer)}
        />
      </div>
      <div>{props.children}</div>
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: "100%"
  },
  particleContainer: {
    minHeight: "100%",
    backgroundColor: "#f8f8f8",
    position: "fixed",
    zIndex: -1
  }
});

export default AuthenticationLayout;
