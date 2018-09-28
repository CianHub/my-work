import React, { Component } from "react";
import "./App.css";
import Navsection from "./components/navbar";
import Jumbosection from "./components/jumbotron";
import Contactsection from "./components/contact";
import Projectsection from "./components/projects";
import Aboutsection from "./components/about";
import Fade from "react-reveal/Fade";
import Favicon from "react-favicon";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faRocket,
  faLightbulb,
  faUsers,
  faMobileAlt,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faArrowRight,
  faLightbulb,
  faRocket,
  faUsers,
  faMobileAlt,
  faEnvelope
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Favicon url="http://www.iconj.com/ico/0/3/0394ny5uuj.ico" />
        <Navsection />
        <Jumbosection />
        <Fade bottom>
          <Aboutsection />
        </Fade>
        <Projectsection />
        <Contactsection />
      </div>
    );
  }
}

export default App;
