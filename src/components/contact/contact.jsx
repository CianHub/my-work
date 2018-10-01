import React, { Component } from "react";
//Import animations
import Fade from "react-reveal/Fade";
//Import components
import Header from "../header";
//Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contactmain extends Component {
  state = {};
  render() {
    return (
      <section id="contact">
        <Fade left>
          <Header text="" textId="contactText" hrId="contactHr" />
          <div className="container ">
            <div className="row text-center">
              <div className="col-md">
                <ul className="social-network social-circle">
                  <li>
                    <a
                      href="mailto:cian@cianogralaigh.com"
                      className="email"
                      title="email"
                    >
                      <FontAwesomeIcon icon="envelope" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/cian-o-gralaigh/"
                      className="linkedin"
                      title="linkedin"
                    >
                      <FontAwesomeIcon icon={["fab", "linkedin"]} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/CianHub"
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