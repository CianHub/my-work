import React from "react";
import Fade from "react-reveal/Fade";

//Import progress bars
import { Progress } from "reactstrap";

const Bar = props => {
  return (
    <Fade left>
      <div className="row">
        <div className="col-lg">
          <p className="text-muted mb-0">{props.skill}</p>
          <Progress multi>
            <Progress bar animated value={props.percent}>
              <span className="title">{props.percent}%</span>
            </Progress>
          </Progress>
        </div>
      </div>
      <br />
    </Fade>
  );
};

export default Bar;
