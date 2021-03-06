import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export default class Navsection extends React.Component {
  // Creates the navsection

  constructor(props) {
    // Call component constructor function and reinitialise it
    super(props);

    // Bind the toggle function to this object so it can be used outside of the class
    this.toggle = this.toggle.bind(this);

    this.state = {
      // Initialise the state
      isOpen: false,
      cv:
        "https://drive.google.com/file/d/1XjSEkJNjIpcjNdtNM3osbvoj3HVqUCIb/view?usp=sharing"
    };
  }
  toggle() {
    // Accesses the bound object and updates its state prop

    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light " id="mainNav">
          <div className="container mx-auto ">
            <a className="navbar-brand" href="#jumbotron">
              Cian's Work
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse " id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#projects">
                    Project
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link js-scroll-trigger"
                    href={this.state.cv}
                    target="_blank"
                  >
                    Download CV
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
