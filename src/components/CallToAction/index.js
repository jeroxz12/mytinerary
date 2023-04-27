import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
const CallToAction = ({ title, desc, cardId, link }) => {
  return (
    <div
      className="card text-center mt-5 call_to_action_container"
      id={"card" + cardId}
    >
      <div className="card-body d-flex flex-column justify-content-center align-items-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text ">
          <em>{desc}</em>
        </p>
        <Link className="btn btn-primary" to={link}>
          Explore →
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;
