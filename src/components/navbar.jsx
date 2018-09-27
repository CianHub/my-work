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
  // Sets the class as the default export

  constructor(props) {
    // Call component constructor function and reinitialise it
    super(props);

    // Bind the toggle function to this object so it can be used outside of the class
    this.toggle = this.toggle.bind(this);

    this.state = {
      // Initialise the state
      isOpen: false
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
        <Navbar id="nav-bg" color="dark" dark expand="md">
          <NavbarBrand href="/">Home</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className=" ml-auto" navbar>
              <NavItem>
                <NavLink href="#">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
