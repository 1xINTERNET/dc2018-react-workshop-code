# Step 7

- Install Apollo graphql library and related dependencies: `yarn add apollo-boost react-apollo graphql-tag graphql --dev`

- Create a file in `./src/utils/apolloClient.js` which creates an `ApolloClient` instance and exports it. (We initialise it with the base URL of our backend)

- Add the `<ApolloProvider />` as a wrapper to our `<App />` root component in `./src/index.js`and pass the `ApolloClient` instance to it.
  - This Provider exposes the Apollo functionality to components anywhere in our component tree.

Further reading: [The Apollo docs](https://www.apollographql.com/docs/react/essentials/get-started.html)
