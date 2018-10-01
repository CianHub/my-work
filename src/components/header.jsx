import React, { Component } from "react";

const Header = props => {
  // Create a header component

  return (
    <div className="container about-header">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading" id={props.textId}>
            {props.text}
          </h2>
          <hr className="my-4" id={props.hrId} />
        </div>
      </div>
    </div>
  );
};

export default Header;
