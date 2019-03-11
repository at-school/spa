import React, { useEffect } from "react";
import "./CreateAccountSuccess.scss";
import AuthenticationLayout from "../../../layouts/AuthenticationLayout";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { message } from "antd";
import { SEND_ACCOUNT_CONFIRMATION_EMAIL } from "../../../graphql/mutations";
import { graphql } from "react-apollo";

const CreateAccountSuccess = ({ history, mutate }) => {
  const userId = history.location.state.id;
  if (!userId) {
    message.error("Invalid Request");
    history.push("/");
  }

  const sendAccountConfirmationEmail = () => {
    mutate({
      variables: {
        id: userId
      }
    })
      .then(() => message.success("Sent email confirmation succesfully."))
      .catch(() => message.error("Failed to fetch."));
  };

  useEffect(() => {
    sendAccountConfirmationEmail();
  }, []);
  return (
    <AuthenticationLayout>
      <div className="container text-center">
        <h4>Account Registration Success</h4>
        <hr />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="svg-success"
          viewBox="0 0 24 24"
        >
          <g strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
            <circle
              className="success-circle-outline"
              cx="12"
              cy="12"
              r="11.5"
            />
            <circle className="success-circle-fill" cx="12" cy="12" r="11.5" />
            <polyline className="success-tick" points="17,8.5 9.5,15.5 7,13" />
          </g>
        </svg>
        <hr />
      </div>
      <div className="text-center mb-3">
        <Button onClick={sendAccountConfirmationEmail} type="primary">
          Resend Email
        </Button>
      </div>
      <div className="text-center">
        <Link to="/signin">Continue</Link>
      </div>
    </AuthenticationLayout>
  );
};

export default graphql(SEND_ACCOUNT_CONFIRMATION_EMAIL)(
  withRouter(CreateAccountSuccess)
);
