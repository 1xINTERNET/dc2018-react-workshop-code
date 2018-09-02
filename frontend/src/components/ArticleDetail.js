import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import PropTypes from "prop-types";

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
      {/* variables are exposed to the graphql query prefixed with a $ sign. */}
      <Query query={GET_ARTICLE} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          // The actual entities are in data.nodeById
          const { nodeById } = data;
          console.log(nodeById);
          return <div>I am an ArticleDetail! My ID is {id}</div>;
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
