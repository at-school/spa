import React from "react";
import { Route } from "react-router-dom";
import Authentication from "../../layouts/Authentication";

const GlobalRoute = () => {
  return (
    <div>
      <Route exact path="/" render={TempCom} />
      <Route exact path="/signin" render={SignIn} />
      <Route exact path="/register" render={Register} />
    </div>
  );
};

const TempCom = () => {
  return <div>This is a temp comp</div>;
};

const SignIn = () => {
  return (
    <Authentication>
      <div>This is the sign in route</div>
    </Authentication>
  );
};

const Register = () => {
  return <div> This is the register route</div>;
};

export default GlobalRoute;
