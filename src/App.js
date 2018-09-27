import React, { Component } from "react";
import "./App.css";
import Navsection from "./components/navbar";
import Jumbosection from "./components/jumbotron";
import Aboutsection from "./components/about";
import Fade from "react-reveal/Fade";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowRight,
  faRocket,
  faLightbulb,
  faUsers,
  faMobileAlt
} from "@fortawesome/free-solid-svg-icons";

library.add(faArrowRight, faLightbulb, faRocket, faUsers, faMobileAlt);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navsection />
        <Jumbosection />
        <Fade bottom>
          <div className="test">
            <Aboutsection />
          </div>
        </Fade>
      </div>
    );
  }
}

export default App;
