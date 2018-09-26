import React, { Component } from "react";
import "./App.css";
import Navsection from "./components/navbar";
import Jumbosection from "./components/jumbotron";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navsection />
        <Jumbosection />
      </div>
    );
  }
}

export default App;
