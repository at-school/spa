import "ant-design-pro/dist/ant-design-pro.css";
import "antd/dist/antd.css";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { ApolloLink } from "apollo-link";
import { onError } from "apollo-link-error";
import { withClientState } from "apollo-link-state";
import React from "react";
import { ApolloProvider } from "react-apollo";
import authLink from "./apollo/auth";
import defaultStates from "./apollo/defaultStates";
import resolvers from "./apollo/resolvers";
import "./App.scss";
import AppRouter from "./routes";

const cache = new InMemoryCache();

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message));
});

const stateLink = withClientState({
  cache,
  defaults: defaultStates,
  resolvers
});

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, stateLink, authLink]),
  cache
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  );
};

export default App;
