import React from "react";

function Card({ title, text, imageSource }) {
  return (
    <div className="card mx-auto">
      <div className="body">
        <h2 className="card-title rounded-top">{title}</h2>
      </div>
      <img
        className="img-fluid"
        src={imageSource}
        alt="Imagen de espiritu"
      ></img>

      <div className="card-body">
        <p className="card-text rounded-pill">{text}</p>
      </div>
    </div>
  );
}

export default Card;
