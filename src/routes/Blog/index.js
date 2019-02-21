import { Icon } from "antd";
import React from "react";
import GuestLayout from "../../layouts/GuestLayout";
import "./Blog.scss";

const Blog = () => {
  return (
    <GuestLayout
      menu={[
        { name: "Sign In", url: "/signin" },
        { name: "Register", url: "/register" }
      ]}
    >
      <div className="Blog">
        <div className="SearchInput">
          <Icon type="search" />
          <input />
        </div>
      </div>
    </GuestLayout>
  );
};

export default Blog;
