import gql from "graphql-tag";

const SEND_ACCOUNT_CONFIRMATION_EMAIL = gql`
  mutation SendAccountConfirmationEmail($id: ID!) {
    sendAccountConfirmationEmail(id: $id)
  }
`;

export default SEND_ACCOUNT_CONFIRMATION_EMAIL;
