import React, { Component } from "react";
//Import animations
import Fade from "react-reveal/Fade";
//Import components
import Header from "../header/header";
//Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contactmain extends Component {
  state = {
    email: "mailto:cian@cianogralaigh.com",
    linkedin: "https://www.linkedin.com/in/cian-o-gralaigh/",
    github: "https://github.com/CianHub"
  };
  render() {
    return (
      <section id="contact">
        <Fade left>
          <Header text="" textId="contactText" hrId="contactHr" />
          <div className="container ">
            <div className="row text-center">
              <div className="col-md">
                <ul className="horizontal-list social-circle">
                  <li>
                    <a href={this.state.email} className="email" title="email">
                      <FontAwesomeIcon icon="envelope" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={this.state.linkedin}
                      className="linkedin"
                      title="linkedin"
                    >
                      <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </a>
                  </li>
                  <li>
                    <a
                      href={this.state.github}
                      className="github"
                      title="Github"
                    >
                      <FontAwesomeIcon icon={["fab", "github"]} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-muted text-center">
            Cian O'Gralaigh&copy;2018 <br />
            <br />
            <a className="back" href="#jumbo">
              Back To Top
            </a>
          </p>
        </Fade>
      </section>
    );
  }
}

export default Contactmain;
