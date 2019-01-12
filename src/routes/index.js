import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import GlobalRoute from "./GlobalRoute"

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route path="/" render={GlobalRoute} />
          <Route path="/authentication" render={Temp}/>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

const Temp = () => {
  return (
    <div>This is the temp component</div>
  )
}

export default AppRouter;