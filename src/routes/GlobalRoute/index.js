import React from "react";
import { Route } from "react-router-dom";
import GlobalRouteLanding from "./GlobalRouteLanding";
import Register from "./Register";
import SignIn from "./SignIn";

const GlobalRoute = () => {
  return (
    <div>
      <Route exact path="/" render={GlobalRouteLanding} />
      <Route exact path="/signin" render={SignIn} />
      <Route exact path="/register" render={Register} />
    </div>
  );
};

export default GlobalRoute;
