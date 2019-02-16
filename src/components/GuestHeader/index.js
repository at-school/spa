import { Layout } from "antd";
import React from "react";
import "./GuestHeader.scss";
import GuestHeaderLogo from "./GuestHeaderLogo";
import Navigation from "./Navigation";
import PropTypes from "prop-types";

const HeaderGuest = ({ menu, textLogoHidden }) => (
  <Layout.Header className="GuestHeader">
    <GuestHeaderLogo textLogoHidden={textLogoHidden} />
    <Navigation menu={menu} />
  </Layout.Header>
);

HeaderGuest.defaultProps = {
  textLogoHidden: false
};

HeaderGuest.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string
    })
  ).isRequired,
  textLogoHidden: PropTypes.bool
};

export default HeaderGuest;
