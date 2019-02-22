import React from "react";
import "./BlogHomePostListItem.scss";
import moment from "moment";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BlogHomePostListItem = ({ title, date, authors, slug }) => {
  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-4 BlogHomePostListItem">
      <Link to={"/blog/" + slug}>
        <h4 className="text-bold text-underline font-weight-bold">{title}</h4>
      </Link>
      <h6 className="mt-2 text-uppercase font-weightbold">
        {moment(date, "DD/MM/YYYY").format("DD MMM YYYY")}
      </h6>
      <div>
        {authors.map((author, index) => {
          return (
            <React.Fragment>
              <a href={author.url}>{author.name}</a>
              {index + 1 === authors.length ? "" : <span> and </span>}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

BlogHomePostListItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired,
  slug: PropTypes.string.isRequired
};

export default BlogHomePostListItem;
