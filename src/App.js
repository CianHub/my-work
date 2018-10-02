import React, { Component } from "react";
import "./App.css";
import Navsection from "./components/navbar/navbar";
import Jumbosection from "./components//jumbotron/jumbotron";
import Contactsection from "./components/contact/contact";
import Projectsection from "./components/projects/projects";
import Aboutsection from "./components/about/about";
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
  state = {
    icon: "http://www.iconj.com/ico/0/3/0394ny5uuj.ico"
  };
  render() {
    return (
      <div className="App">
        <Favicon url={this.state.icon} />
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
