import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Fade";

const Card = props => {
  return (
    <Fade left>
      <div className="col-lg-4 col-md-4 col-xs-6">
        <div className="card">
          <img
            className="img-fluid img-thumbnail"
            src={props.img}
            alt={props.imgAlt}
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text text-muted">{props.text}</p>
            <ul className="social-network ">
              <li>
                <a
                  href={props.link}
                  className="btn btn-success"
                  target="_blank"
                >
                  View Project
                </a>
              </li>
              <li>
                <a
                  href={props.github}
                  className="project-icon btn btn-info"
                  title="Github"
                  target="_blank"
                >
                  <FontAwesomeIcon className="" icon={["fab", "github"]} /> Code
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Card;
