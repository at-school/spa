import React from "react";
import AuthenticationLayout from "../../../layouts/AuthenticationLayout";
import GlobalRouteSignInForm from "./GlobalRouteSignInForm";

const GlobalRouteSignIn = () => {
  return (
    <AuthenticationLayout>
      <GlobalRouteSignInForm />
    </AuthenticationLayout>
  );
};

export default GlobalRouteSignIn;
