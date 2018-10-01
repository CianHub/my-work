import React from "react";
// Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = props => {
  return (
    <div className="service-box mt-5 mx-auto">
      <FontAwesomeIcon
        className="about-icon fa-4x  mb-3 sr-icon-1"
        icon={props.icon}
      />
      <h3 className="mb-3">{props.title}</h3>
      <p className="text-muted mb-0">{props.text}</p>
    </div>
  );
};

export default Icon;
