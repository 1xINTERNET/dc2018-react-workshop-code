import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ArticleTeaser = ({
  entityId,
  title,
  // We use the alias syntax for the following destructuring because title is
  // already being defined above.
  fieldImage: { alt, title: imageTitle, width, height, url },
  body: { summaryProcessed }
}) => {
  return (
    <Link to={`/article/${entityId}`} className="ArticleTeaser">
      <div className="ArticleTeaser__image-wrapper">
        <img
          className="ArticleTeaser__image"
          src={url}
          alt={alt}
          width={width}
          height={height}
        />
      </div>
      <div className="ArticleTeaser__content-wrapper">
        <h3 className="ArticleTeaser__title">{title}</h3>
        <div className="ArticleTeaser__body">{summaryProcessed}</div>
      </div>
    </Link>
  );
};

ArticleTeaser.propTypes = {
  entityId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  fieldImage: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired
  }),
  body: PropTypes.shape({
    summaryProcessed: PropTypes.string.isRequired
  })
};

export default ArticleTeaser;
