import React from "react";
import AuthenticationLayout from "../../../layouts/AuthenticationLayout";
import "./GlobalRouteRegister.scss";
import GlobalRouteRegisterForm from "./GlobalRouteRegisterForm";
import GlobalRouteRegisterMarketing from "./GlobalRouteRegisterMarketing";

const GlobalRouteRegister = () => {
  return (
    <AuthenticationLayout>
      <div>
        <div className="GlobalRouteRegister">
          <GlobalRouteRegisterMarketing />
          <GlobalRouteRegisterForm />
        </div>
      </div>
    </AuthenticationLayout>
  );
};

export default GlobalRouteRegister;
