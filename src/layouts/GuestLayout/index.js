import React from "react";
import GuestHeader from "../../components/GuestHeader";
import PropTypes from "prop-types";
import "./GuestLayout.scss"

const GuestLayout = props => {
  return (
    <React.Fragment>
      <GuestHeader menu={props.menu} />
      <div className="GuestLayout">{props.children}</div>
    </React.Fragment>
  );
};

GuestLayout.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string
    })
  ).isRequired
};

export default GuestLayout;
