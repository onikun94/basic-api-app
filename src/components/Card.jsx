import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="cardImage">
        <figure className="image">
          <img src={props.src} alt="cute dog" />
        </figure>
      </div>
    </div>
  );
}

export default Card;
