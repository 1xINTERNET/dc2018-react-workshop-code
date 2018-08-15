import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import App from "./components/App";
import registerServiceWorker from "./utils/registerServiceWorker";
import apolloClient from "./utils/apolloClient";

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

registerServiceWorker();
