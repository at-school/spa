import { ApolloLink } from "apollo-link";
import { createHttpLink } from "apollo-link-http";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_SERVER_HOST || "http://localhost:4000/"
});
const middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: localStorage.getItem("token") || null
    }
  });
  return forward(operation);
});

// use with apollo-client
const link = middlewareLink.concat(httpLink);

export default link;
