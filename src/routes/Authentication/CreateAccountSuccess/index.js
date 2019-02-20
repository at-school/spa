import React from "react";
import "./CreateAccountSuccess.scss";
import AuthenticationLayout from "../../../layouts/AuthenticationLayout";
import { Button } from "antd";
import { Link } from "react-router-dom";

const CreateAccountSuccess = () => {
  return (
    <AuthenticationLayout>
      <div class="container text-center">
        <h4>Account Registration Success</h4>
        <hr />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="svg-success"
          viewBox="0 0 24 24"
        >
          <g
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
          >
            <circle class="success-circle-outline" cx="12" cy="12" r="11.5" />
            <circle class="success-circle-fill" cx="12" cy="12" r="11.5" />
            <polyline class="success-tick" points="17,8.5 9.5,15.5 7,13" />
          </g>
        </svg>
        <hr />
      </div>
      <div className="text-center mb-3">
        <Button type="primary">Resend Email</Button>
      </div>
      <div className="text-center">
        <Link to="/signin">Continue</Link>
      </div>
    </AuthenticationLayout>
  );
};

export default CreateAccountSuccess;
