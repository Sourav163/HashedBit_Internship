import React from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <NavLink to={`/${props.title}`} className="card">
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
      <p>{props.type}</p>
    </NavLink>
  );
};

export default Card;
