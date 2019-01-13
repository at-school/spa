import React from "react";
import { Route } from "react-router-dom";
import GlobalRouteLanding from "./GlobalRouteLanding";
import GlobalRouteRegister from "./GlobalRouteRegister";
import GlobalRouteSignIn from "./GlobalRouteSignIn";

const GlobalRoute = () => {
  return (
    <div>
      <Route exact path="/" render={GlobalRouteLanding} />
      <Route exact path="/signin" render={GlobalRouteSignIn} />
      <Route exact path="/register" render={GlobalRouteRegister} />
    </div>
  );
};

export default GlobalRoute;
