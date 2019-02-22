import { Icon } from "antd";
import React, { useState } from "react";
import GuestLayout from "../../../layouts/GuestLayout";
import "./BlogHome.scss";
import BlogHomePostList from "./BlogHomePostList";
import posts from "../posts";

const BlogHome = () => {
  const [searchPattern, setSearchPattern] = useState("");

  const onInputChange = e => {
    setSearchPattern(e.target.value);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchPattern.toLowerCase())
  );

  return (
    <GuestLayout
      menu={[
        { name: "Sign In", url: "/signin" },
        { name: "Register", url: "/register" }
      ]}
    >
      <div className="BlogHome">
        <div className="BlogHomeSearchContainer mb-5">
          <h2 className="text-center mb-5">All Posts</h2>
          <div className="SearchInput">
            <Icon type="search" />
            <input value={searchPattern} onChange={onInputChange} />
          </div>
        </div>
        <BlogHomePostList posts={filteredPosts} />
      </div>
    </GuestLayout>
  );
};

export default BlogHome;
