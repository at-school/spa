import React from "react";
import GuestHeader from "../../components/GuestHeader";
import PropTypes from "prop-types";

const GuestLayout = props => {
  return (
    <React.Fragment>
      <GuestHeader menu={props.menu} />
      {props.children}
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
