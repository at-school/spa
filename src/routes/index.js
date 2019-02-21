import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { CreateAccountSuccess, Register, SignIn } from "./Authentication";
import Blog from "./Blog";
import Landing from "./Landing";

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={Landing} />
          <Route path="/signin" component={SignIn} />
          <Route path="/blog" component={Blog} />
          <Route path="/register" component={Register} />
          <Route path="/create-account-success" component={CreateAccountSuccess} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
