import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x160`}
        alt="monster"
      />
      <h2>{props.monster.name}</h2>
      <p>props.monster.email</p>
    </div>
  );
};

export default Card;
