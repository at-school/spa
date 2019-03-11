import gql from "graphql-tag";

const SIGN_IN = gql`
  mutation SignIn(
    $email: String!
    $password: String!
  ) {
    signin(
      email: $email
      password: $password
    ) {
      id
      refreshToken
      accessToken
      blacklisted
    }
  }
`;

export default SIGN_IN;
