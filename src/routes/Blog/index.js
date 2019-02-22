import React from "react";
import { Route } from "react-router-dom";
import BlogHome from "./BlogHome";
import BlogPost from "./BlogPost";

const Blog = () => {
  return (
    <React.Fragment>
      <Route exact path="/blog" component={BlogHome} />
      <Route path="/blog/:postId" component={BlogPost} />
    </React.Fragment>
  );
};

export default Blog;
