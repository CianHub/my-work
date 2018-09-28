import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Fade";

class Projectsection extends Component {
  state = {};
  render() {
    return (
      <section className="projectsection">
        <Fade left>
          <div className="container about-header">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">Projects</h2>
                <hr className="my-4" />
                <br />
              </div>
            </div>
          </div>
        </Fade>
        <div className="container">
          <div className="row text-center text-lg-left">
            <Fade left>
              <div className="col-lg-4 col-md-4 col-xs-6">
                <div className="card">
                  <img
                    className="img-fluid img-thumbnail"
                    src="https://i.postimg.cc/904JZNwz/Screen_Shot_2018-09-27_at_23.45.02.png"
                    alt="Issue Tracker Project"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Issue Tracker App</h5>
                    <p className="card-text text-muted">
                      Technologies Used: Bootstrap, JavaScript, jQuery, Django,
                      Heroku, HighCharts.js, PostgreSQL
                    </p>
                    <a
                      href="https://issue-tracker-cian.herokuapp.com/"
                      className="btn btn-success"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade left>
              <div className="col-lg-4 col-md-4 col-xs-6">
                <div className="card">
                  <img
                    className="img-fluid img-thumbnail"
                    src="https://i.postimg.cc/Y2fV7jQs/Screen_Shot_2018-09-28_at_01.12.45.png"
                    alt="Digital Cookbook"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Digital Cookbook</h5>
                    <p className="card-text text-muted">
                      Technologies Used: Bootstrap, JavaScript, jQuery, Flask,
                      Heroku, PyMongo, MongoDB
                    </p>
                    <a
                      href="https://online-cookbook-project.herokuapp.com/"
                      className="btn btn-success"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade left>
              <div className="col-lg-4 col-md-4 col-xs-6">
                <div className="card">
                  <img
                    className="img-fluid img-thumbnail"
                    src="https://i.postimg.cc/HkKvzMCV/Screen_Shot_2018-09-28_at_01.14.19.png"
                    alt="Riddle Me This"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Riddle Me This</h5>
                    <p className="card-text text-muted">
                      Technologies Used: Bootstrap, JavaScript, jQuery, Flask,
                      Heroku, JSON
                    </p>
                    <a
                      href="https://riddle-me-this-game.herokuapp.com/"
                      className="btn btn-success"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </Fade>{" "}
            <Fade left>
              <div className="col-lg-4 col-md-4 col-xs-6">
                <div className="card">
                  <img
                    className="img-fluid img-thumbnail"
                    src="https://i.postimg.cc/NfjNwDsK/Screen_Shot_2018-09-28_at_01.15.12.png"
                    alt="SIMON Memory Game"
                  />
                  <div className="card-body">
                    <h5 className="card-title">SIMON Memory Game</h5>
                    <p className="card-text text-muted">
                      Technologies Used: HTML, CSS, JavaScript, jQuery, GitHub
                      Pages,
                    </p>
                    <a
                      href="https://cianhub.github.io/memory-game/"
                      className="btn btn-success"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade left>
              <div className="col-lg-4 col-md-4 col-xs-6">
                <div className="card">
                  <img
                    className="img-fluid img-thumbnail"
                    src="https://i.postimg.cc/Z59VWqyZ/Screen_Shot_2018-09-28_at_01.15.57.png"
                    alt="Band Website"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Band Website</h5>
                    <p className="card-text text-muted">
                      Technologies Used: Bootstrap, JavaScript, jQuery, Github
                      Pages
                    </p>
                    <a
                      href="https://cianhub.github.io/the-monkees-website/"
                      className="btn btn-success"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade left>
              <div className="col-lg- col-md-4 col-xs-6">
                <div className="card">
                  <img
                    className="img-fluid img-thumbnail"
                    src="https://i.postimg.cc/PxH4VzVr/Screen_Shot_2018-09-28_at_01.17.07.png"
                    alt="JavaScript Piano"
                  />
                  <div className="card-body">
                    <h5 className="card-title">JavaScript Piano</h5>
                    <p className="card-text text-muted">
                      Technologies Used: HTML5, CSS3, Bootstrap, JavaScript,
                      Audio
                    </p>
                    <a
                      href="https://cianhub.github.io/javascript-piano/"
                      className="btn btn-success"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </Fade>{" "}
            <Fade left>
              <div className="col-lg- col-md-4 col-xs-6">
                <div className="card">
                  <img
                    className="img-fluid img-thumbnail"
                    src="https://i.postimg.cc/nh8Q1VPn/Screen_Shot_2018-09-28_at_01.19.14.png"
                    alt="Weather Finder"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Weather Finder</h5>
                    <p className="card-text text-muted">
                      Technologies Used: HTML5, CSS3, Bootstrap, JavaScript,
                      SASS/SCSS, React
                    </p>
                    <a
                      href="https://cianhub.github.io/weather-finder-app/"
                      className="btn btn-success"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade left>
              <div className="col-lg- col-md-4 col-xs-6">
                <div className="card">
                  <img
                    className="img-fluid img-thumbnail"
                    src="https://i.postimg.cc/9Xr1fpRK/Screen_Shot_2018-09-28_at_01.20.23.png"
                    alt="React and Particle.js Animation"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Simple JS Animation</h5>
                    <p className="card-text text-muted">
                      Technologies Used: HTML5, CSS3, Particle.js, JavaScript,
                      SASS/SCSS, React
                    </p>
                    <a
                      href="https://cianhub.github.io/react-particlejs-animation/"
                      className="btn btn-success"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </Fade>{" "}
            <Fade left>
              <div className="col-lg- col-md-4 col-xs-6">
                <div className="card">
                  <img
                    className="img-fluid img-thumbnail"
                    src="https://i.postimg.cc/zfxSzbJq/Screen_Shot_2018-09-28_at_01.21.38.png"
                    alt="JavaScript Clock"
                  />
                  <div className="card-body">
                    <h5 className="card-title">JavaScript Clock</h5>
                    <p className="card-text text-muted">
                      Technologies Used: HTML5, CSS3, JavaScript <br />
                      <br />
                    </p>
                    <a
                      href="https://cianhub.github.io/javascript-clock/"
                      className="btn btn-success"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    );
  }
}

export default Projectsection;
