import React from "react";
import "./BlogHomePostList.scss";
import BlogHomePostListItem from "./BlogHomePostListItem";

const BlogHomePostList = ({ posts }) => {
  return (
    <div className="BlogHomePostList">
      <div className="row">
        {posts.map(post => (
          <BlogHomePostListItem
            key={post.slug}
            authors={post.authors}
            title={post.title}
            date={post.date}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogHomePostList;
