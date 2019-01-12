import React from "react";
import { StyleSheet, css } from "aphrodite";

const Header = () => (
  <div className={"logo " + css(styles.mainContainer)}>
    <a className={css(styles.anchorText)} href="/">
      <img className={css(styles.logo)} src="/logo.png" alt="Logo" />
      <h2 className={css(styles.whiteText)}>
        <span className="at">@</span> School
      </h2>
    </a>
  </div>
);

const styles = StyleSheet.create({
  mainContainer: { 
    height: "64px", 
    paddingLeft: "24px",
    flexGrow: 1,
    display: "flex"
  },
  anchorText: {
    fontFamily: "Heebo",
    textDecoration: "none",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  logo: {
    height: 60,
    marginRight: 10
  },
  whiteText: {
    color: "white",
    margin: 0
  }
});

export default Header;
