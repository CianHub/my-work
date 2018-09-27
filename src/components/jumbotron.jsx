import React, { Component } from "react";
import Particles from "react-particles-js";

export default class Jumbosection extends Component {
  state = {};
  render() {
    return (
      <div className="jumbosection text-center ">
        <div className="container">
          <Particles
            className="jumbo-animation"
            params={{
              particles: {
                number: {
                  value: 80,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                },
                color: {
                  value: "#b9b1a6"
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000000"
                  },
                  polygon: {
                    nb_sides: 5
                  },
                  image: {
                    src: "img/github.svg",
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
                    sync: false
                  }
                },
                size: {
                  value: 12.02559045649142,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 9.744926547616142,
                    size_min: 0.1,
                    sync: true
                  }
                },
                line_linked: {
                  enable: true,
                  distance: 150,
                  color: "#ffffff",
                  opacity: 0.4,
                  width: 1
                },
                move: {
                  enable: true,
                  speed: 6,
                  direction: "top-right",
                  random: true,
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
          />{" "}
        </div>
        <div className="jumbotron" id="jumbo">
          <div className="overlay container">
            <div className="jumbo-heading">
              <h1 className="" id="jumbo-text ">
                Hello I'm <b className="jumbo-name">Cian O'Gralaigh</b> <br />
                and I'm a full-stack web developer.
              </h1>
            </div>
            <div className="jumbo-btn-div">
              <button
                type="button"
                className="btn btn-success"
                id="jumbo-button"
              >
                See My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
