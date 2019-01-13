import { Layout } from "antd";
import React from "react";
import "./GuestHeader.scss";
import GuestHeaderLogo from "./GuestHeaderLogo";
import Navigation from "./Navigation";
import PropTypes from "prop-types";

const HeaderGuest = ({ menu }) => (
  <Layout.Header className="GuestHeader">
    <GuestHeaderLogo />
    <Navigation menu={menu} />
  </Layout.Header>
);

HeaderGuest.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string
  })).isRequired
}

export default HeaderGuest;
