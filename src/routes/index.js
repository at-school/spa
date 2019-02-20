import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Landing";
import { SignIn, Register, CreateAccountSuccess } from "./Authentication";

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" render={Landing} />
          <Route path="/signin" render={SignIn} />
          <Route path="/register" render={Register} />
          <Route path="/create-account-success" render={CreateAccountSuccess} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
