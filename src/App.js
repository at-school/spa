import "ant-design-pro/dist/ant-design-pro.css";
import "antd/dist/antd.css";
import React, { Component } from "react";
import AppRouter from "./routes";
import "./App.scss";

class App extends Component {
  render() {
    return <AppRouter />;
  }
}

export default App;
