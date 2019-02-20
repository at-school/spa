import PropTypes from "prop-types";
import React from "react";
import "./GuestHeaderLogo.scss";
import { Link } from "react-router-dom";

const GuestHeaderLogo = ({ textLogoHidden }) => (
  <div className="GuestHeaderLogo">
    <Link className="text-decoration-none" to="/">
      <img src="/logo.png" alt="Logo" />
      <h2 className={`d-none ${textLogoHidden ? "d-md-none" : "d-md-block"}`}>
        <span className="at">@</span> School
      </h2>
    </Link>
  </div>
);

GuestHeaderLogo.defaultProps = {
  textLogoHidden: false
};

GuestHeaderLogo.propTypes = {
  textLogoHidden: PropTypes.bool
};

export default GuestHeaderLogo;
