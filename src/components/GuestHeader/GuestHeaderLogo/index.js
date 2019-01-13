import React from "react";
import "./GuestHeaderLogo.scss";

const GuestHeaderLogo = () => (
  <div className="GuestHeaderLogo">
    <a href="/">
      <img src="/logo.png" alt="Logo" />
      <h2 className="hidden-xs hidden-sm">
        <span className="at">@</span> School
      </h2>
    </a>
  </div>
);

export default GuestHeaderLogo;
