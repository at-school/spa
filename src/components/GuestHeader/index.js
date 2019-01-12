import { Layout } from "antd";
import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import "./GuestHeader.scss";
import { css, StyleSheet } from "aphrodite";

const HeaderGuest = ({ menu, background }) => (
  <Layout.Header
    className={
      css(styles.mainContainer) +
      " navigation" +
      (background ? " navigation-background" : "")
    }
  >
    <Logo />
    <Navigation menu={menu} />
  </Layout.Header>
);

const styles = StyleSheet.create({
  mainContainer: {
    position: "absolute",
    left: 0,
    width: "100%",
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 48
  }
});

export default HeaderGuest;
