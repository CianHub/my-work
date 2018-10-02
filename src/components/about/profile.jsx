import React from "react";

const Profile = props => {
  //Creates a profile component
  return (
    <div className="col-lg text-center">
      <img className="img-cian img-responsive" src={props.img} />
      <h3>Who?</h3>
      <hr className="my-4" />
      <p className="text-muted mb-0">{props.text}</p>
      <br />
      <a href={props.cv} className="btn btn-info" target="_blank">
        Download My CV
      </a>
    </div>
  );
};

export default Profile;
