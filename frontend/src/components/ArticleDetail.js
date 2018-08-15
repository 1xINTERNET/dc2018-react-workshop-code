import React from "react";
import PropTypes from "prop-types";

const ArticleDetail = ({ id }) => {
  return (
    <div className="ArticleDetail">I am an ArticleDetail! My ID is {id}</div>
  );
};

ArticleDetail.propTypes = {
  id: PropTypes.string.isRequired
};

export default ArticleDetail;
