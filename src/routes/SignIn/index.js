import React from "react";
import AuthenticationLayout from "../../layouts/AuthenticationLayout";
import SignInForm from "./SignInForm";

const SignIn = () => {
  return (
    <AuthenticationLayout>
      <SignInForm />
    </AuthenticationLayout>
  );
};

export default SignIn;
