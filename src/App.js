import 'ant-design-pro/dist/ant-design-pro.css';
import React, { Component } from 'react';
import AppRouter from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRouter />
      </div>
    );
  }
}

export default App;
