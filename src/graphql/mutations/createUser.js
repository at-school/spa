import gql from "graphql-tag";

const CREATE_USER = gql`
  mutation CreateUser(
    $name: String!
    $email: String!
    $password: String!
    $confirmedPassword: String!
    $role: String!
  ) {
    createUser(
      name: $name
      email: $email
      password: $password
      confirmedPassword: $confirmedPassword
      role: $role
    ) {
      id
    }
  }
`;

export default CREATE_USER;
