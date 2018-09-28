import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class Footermain extends Component {
  state = {};
  render() {
    return (
      <section className="footersection">
        <Fade left>
          <div className="container footer-header">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading footer-header">Contact</h2>
                <hr className="my-4 white-hr" />
              </div>
            </div>
          </div>
          <div className="container">
            <form>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  aria-describedby="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  required
                />
              </div>

              <div class="form-group">
                <textarea
                  class="form-control"
                  id="exampleTextarea"
                  rows="3"
                  placeholder="Your Message"
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn " id="jumbo-button">
                  Submit {"  "}
                </button>
              </div>
            </form>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Footermain;
