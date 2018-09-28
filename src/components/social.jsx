import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Socialmain extends Component {
  state = {};
  render() {
    return (
      <section className="socialsection">
        <div className="container ">
          <div className="row text-center">
            <div class="col-md">
              <ul class="social-network social-circle">
                <li>
                  <a href="#" className="linkedin" title="linkedin">
                    <FontAwesomeIcon icon="linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#" class="github" title="Github">
                    <FontAwesomeIcon icon="github" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Socialmain;
