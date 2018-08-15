import React from "react";
import PropTypes from "prop-types";

const ArticleDetail = ({
  match: {
    params: { id }
  }
}) => {
  return (
    <div className="ArticleDetail">I am an ArticleDetail! My ID is {id}</div>
  );
};

ArticleDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default ArticleDetail;
