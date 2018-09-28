import React, { Component } from "react";
import "./App.css";
import Navsection from "./components/navbar";
import Jumbosection from "./components/jumbotron";
import Socialsection from "./components/social";
import Footersection from "./components/footer";
import Projectsection from "./components/projects";
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
          <Aboutsection />
        </Fade>
        <Projectsection />
        <Footersection />
        <Socialsection />
      </div>
    );
  }
}

export default App;
