import React from "react";
import { Mutation } from "react-apollo";
import { SIGN_IN } from "../../../graphql/mutations";
import AuthenticationLayout from "../../../layouts/AuthenticationLayout";
import SignInForm from "./SignInForm";
import { message } from "antd";

const SignIn = () => {
  return (
    <AuthenticationLayout>
      <Mutation mutation={SIGN_IN}>
        {(signin, { data, loading, error }) => {
          if (error) {
            console.log(error);
            message.error("Failed to fetch data.");
          }
          return (
            <div>
              <div className="SignIn">
                <SignInForm
                  signin={signin}
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

export default SignIn;
