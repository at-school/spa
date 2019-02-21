import React from "react";
import { Mutation } from "react-apollo";
import { CREATE_USER } from "../../../graphql/mutations";
import AuthenticationLayout from "../../../layouts/AuthenticationLayout";
import "./Register.scss";
import RegisterForm from "./RegisterForm";
import RegisterMarketing from "./RegisterMarketing";
import { message } from "antd";

const Register = () => {
  return (
    <AuthenticationLayout>
      <Mutation mutation={CREATE_USER}>
        {(createUser, { data, loading, error }) => {
          if (error) {
            message.error("Failed to fetch data.");
          }
          return (
            <div>
              <div className="Register">
                <RegisterMarketing />
                <RegisterForm
                  createUser={createUser}
                  data={data}
                  loading={loading}
                />
              </div>
            </div>
          );
        }}
      </Mutation>
    </AuthenticationLayout>
  );
};

export default Register;
