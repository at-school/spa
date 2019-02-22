import React from "react";
import "./BlogHomePostList.scss";
import BlogHomePostListItem from "./BlogHomePostListItem";
import PropTypes from "prop-types";

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

BlogHomePostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      authors: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired
        })
      ).isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    })
  )
};

export default BlogHomePostList;
