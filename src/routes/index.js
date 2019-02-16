import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Landing";
import Register from "./Register";
import SignIn from "./SignIn";

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" render={Landing} />
          <Route path="/signin" render={SignIn} />
          <Route path="/register" render={Register} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
