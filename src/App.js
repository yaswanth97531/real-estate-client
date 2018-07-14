import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import "./App.css";
import Routes from "./routes/index";
import Login from "./components/HomeComponent";


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Login />
          <Routes />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
