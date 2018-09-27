import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Fade";
import { Progress } from "reactstrap";

class Aboutsection extends Component {
  state = {};
  render() {
    return (
      <section className="aboutsection">
        <div className="container about-header">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">At Your Service</h2>
              <hr className="my-4" />
            </div>
          </div>
        </div>
        <div className="container about-icons">
          <div className="row">
            <Fade left>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <FontAwesomeIcon
                    className="about-icon fas fa-4x  mb-3 sr-icon-1"
                    icon="rocket"
                  />
                  <h3 className="mb-3">Dynamic</h3>
                  <p className="text-muted mb-0">
                    I love making projects feel alive and vibrant to the user.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade left>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <FontAwesomeIcon
                    className=" about-icon fas fa-4x fa-paper-plane  mb-3 sr-icon-2"
                    icon="mobile-alt"
                  />
                  <h3 className="mb-3">Responsive</h3>
                  <p className="text-muted mb-0">
                    I like web applications to seemlessly function on any
                    device.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade left>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <FontAwesomeIcon
                    className="about-icon fas fa-4x fa-code  mb-3 sr-icon-3"
                    icon="lightbulb"
                  />
                  <h3 className="mb-3">Always Learning</h3>
                  <p className="text-muted mb-0">
                    I enjoy learning new technologies and staying up to date
                    with the latest tools.
                  </p>
                </div>
              </div>
            </Fade>
            <Fade left>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <FontAwesomeIcon
                    className="about-icon fas fa-4x fa-heart  mb-3 sr-icon-4"
                    icon="users"
                  />
                  <h3 className="mb-3">User Friendly</h3>
                  <p className="text-muted mb-0">
                    I aim to provide the user with best UX experience possible.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </div>

        <br />
        <div className="container about-cian align-center ">
          <Fade left>
            <div className="row">
              <div className="col-lg text-center">
                <img
                  className="img-cian img-responsive"
                  src="https://i.postimg.cc/NfRVTRBD/image.jpg"
                />
                <h3>Who?</h3>
                <p className="text-muted mb-0">
                  I'm a highly focused web developer with several years of
                  diverse experience in a variety of digital media and design
                  based roles. <br /> I like to create dynamic, user-friendly
                  web applications and continue to improve my abilities.
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <br />
        <div className="container about-progress-bars ">
          <Fade left>
            <div className="row">
              <div className="col-lg text-center">
                <p className="text-muted mb-0">HTML</p>
                <Progress multi>
                  <Progress className="bar" bar animated value="90" />
                </Progress>
              </div>
            </div>
            <br />
          </Fade>
          <Fade left>
            <div className="row">
              <div className="col-lg text-center">
                <p className="text-muted mb-0">SASS/SCSS</p>
                <Progress multi>
                  <Progress bar animated value="75" />
                </Progress>
              </div>
            </div>
            <br />
          </Fade>
          <Fade left>
            <div className="row">
              <div className="col-lg text-center">
                <p className="text-muted mb-0">JavaScript</p>
                <Progress multi>
                  <Progress bar animated value="80" />
                </Progress>
              </div>
            </div>
            <br />
          </Fade>
          <Fade left>
            <div className="row">
              <div className="col-lg text-center">
                <p className="text-muted mb-0">React</p>
                <Progress multi>
                  <Progress bar animated value="70" />
                </Progress>
              </div>
            </div>
            <br />
          </Fade>
          <Fade left>
            <div className="row">
              <div className="col-lg text-center">
                <p className="text-muted mb-0">Photoshop</p>
                <Progress multi>
                  <Progress bar animated value="60" />
                </Progress>
              </div>
            </div>
            <br />
          </Fade>
          <Fade left>
            <div className="row">
              <div className="col-lg text-center">
                <p className="text-muted mb-0">Python</p>
                <Progress multi>
                  <Progress bar animated value="80" />
                </Progress>
              </div>
            </div>
            <br />
          </Fade>
          <Fade left>
            <div className="row">
              <div className="col-lg text-center">
                <p className="text-muted mb-0">Django</p>
                <Progress multi>
                  <Progress bar animated value="70" />
                </Progress>
              </div>
            </div>
            <br />
          </Fade>
          <Fade left>
            <div className="row">
              <div className="col-lg text-center">
                <p className="text-muted mb-0">
                  Databases (MongoDB, PostgreSQL, MySQL)
                </p>
                <Progress multi>
                  <Progress bar animated value="65" />
                </Progress>
              </div>
            </div>
            <br />
          </Fade>
        </div>
      </section>
    );
  }
}

export default Aboutsection;
