import React from "react";
import DBAngeles from "../Assets/DB/Datos";
import Card from "./Card";
function Cards() {
  return (
    <div className="container-fluid ">
      <div className="row d-flex justify-content-start gy-4 pt-4 pb-4">
        {DBAngeles.map((card) => (
          <div className="col" key={card.id}>
            <Card
              imageSource={card.image}
              title={card.name}
              text={card.angel}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/*
<div className="row d-flex justify-content-evenly">
  <div className="col-sm-3 col-md-2 col-12">
    <Card imageSource={Princess} />
  </div>
  <div className="col-sm-3 col-md-2 col-12">
    <Card imageSource={Diva} />
  </div>
  <div className="col-sm-3 col-md-2 col-12">
    <Card imageSource={Princess} />
  </div>
  <div className="col-sm-3 col-md-2 col-12">
    <Card imageSource={Diva} />
  </div>
</div>

*/

export default Cards;
