import { Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navigation = ({ menu }) => (
  <Menu
    theme="light"
    mode="horizontal"
    selectedKeys={["-1"]}
    style={{ lineHeight: "64px" }}
  >
    {menu.map((item, key) => (
      <Menu.Item key={key.toString()}>
        <Link className="text-decoration-none" to={item.url}>{item.name}</Link>
      </Menu.Item>
    ))}
  </Menu>
);

Navigation.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string
    })
  ).isRequired
};

export default Navigation;
