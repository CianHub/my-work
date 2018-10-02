import React, { Component } from "react";
import Particles from "react-particles-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Jumbosection extends Component {
  //Create the Jumbotron section
  render() {
    return (
      <section className="text-center" id="jumbotron">
        <div className="container">
          <Particles
            className="jumbo-animation"
            params={{
              particles: {
                number: {
                  value: 90,

                  density: {
                    enable: false,
                    value_area: 1000
                  }
                },
                color: {
                  value: ["#1F7A8C", "#E3B505", "#BFDBF7"]
                },
                shape: {
                  type: ["circle", "polygon"],
                  stroke: {
                    width: 0,
                    color: "#ffffff"
                  },
                  polygon: {
                    nb_sides: 5
                  },
                  image: {
                    src: "https://ubisafe.org/images/bubble-transparent-6.png",
                    width: 100,
                    height: 100
                  }
                },
                opacity: {
                  value: 0.5,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: true
                  }
                },
                size: {
                  value: 10,
                  random: false,
                  anim: {
                    enable: false,
                    speed: 9.744926547616142,
                    size_min: 0.1,
                    sync: true
                  }
                },
                line_linked: {
                  enable: true,
                  distance: 130,
                  color: "#ffffff",
                  opacity: 0.4,
                  width: 1
                },
                move: {
                  enable: true,
                  speed: 6,
                  direction: "top-right",
                  random: false,
                  straight: true,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                  }
                }
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "grab"
                  },
                  onclick: {
                    enable: true,
                    mode: "push"
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 400,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4
                  },
                  push: {
                    particles_nb: 4
                  },
                  remove: {
                    particles_nb: 2
                  }
                }
              },
              retina_detect: true
            }}
          />
        </div>
        <div className="jumbotron" id="jumbo">
          <div className="overlay container">
            <div className="jumbo-heading">
              <h1 className="" id="jumbo-text ">
                Hi, I'm
                <strong className="jumbo-name"> Cian O'Gralaigh</strong> <br />
                and I'm a full-stack web developer.
              </h1>
            </div>
            <div className="jumbo-btn-div">
              <a href="#projects">
                <button type="button" className="btn " id="jumbo-button">
                  See My Work {"  "}
                  <FontAwesomeIcon className="jumbo-arrow" icon="arrow-right" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
