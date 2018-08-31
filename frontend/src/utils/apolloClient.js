import ApolloClient from "apollo-boost";
import packageInfo from "../../package.json";

const client = new ApolloClient({
  uri: packageInfo.config.apiBase + "/graphql"
});

export default client;
