import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const GET_ARTICLE = gql`
  # Wrap the actual query so we can call it with a variable from the props.
  query articleById($id: String!) {
    nodeById(id: $id) {
      ... on NodeArticle {
        entityId
        title
        fieldImage {
          alt
          title
          width
          height
          url
        }
        body {
          processed
        }
      }
    }
  }
`;

const ArticleDetail = ({
  match: {
    params: { id }
  }
}) => {
  return (
    <div className="ArticleDetail">
      <Link to="/" className="ArticleDetail__close" aria-label="Close">
        ⮃
      </Link>
      {/* variables are exposed to the graphql query prefixed with a $ sign. */}
      <Query query={GET_ARTICLE} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          // The actual entities are in data.nodeById
          const {
            nodeById: {
              title,
              fieldImage: { url, alt, width, height },
              body: { processed }
            }
          } = data;
          return (
            <div className="ArticleDetail__content-wrapper">
              <img
                className="ArticleDetail__image"
                src={url}
                alt={alt}
                width={width}
                height={height}
              />
              <h2 className="ArticleDetail__title">{title}</h2>
              {/* Using dangerouslySetInnerHTML allows for XSS attacks. Avoid this in production. */}
              <div
                className="ArticleDetail__body"
                dangerouslySetInnerHTML={{ __html: processed }}
              />
            </div>
          );
        }}
      </Query>
    </div>
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
