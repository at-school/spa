import React, { useEffect, useState } from "react";
import GuestLayout from "../../../layouts/GuestLayout";
import marked from "marked";
import posts from "../posts";
import "./BlogPost.scss";

const BlogPost = ({ match }) => {
  const mdPath = require(`../posts/${match.params.postId}.md`);
  const title = posts.find(post => post.slug === match.params.postId).title;
  const [content, setContent] = useState("");
  useEffect(() => {
    fetch(mdPath)
      .then(response => {
        return response.text();
      })
      .then(text => {
        setContent(marked(text));
      });
  }, []);
  return (
    <GuestLayout
      menu={[
        { name: "Sign In", url: "/signin" },
        { name: "Register", url: "/register" },
        { name: "Blog", url: "/blog" }
      ]}
    >
      <div className="BlogPost">
        <div className="BlogPostTitleContainer text-capitalized font-weight-bold">
          <h1>{title}</h1>
        </div>
        <div
          className="BlogPostContentContainer mt-5"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </GuestLayout>
  );
};

export default BlogPost;
