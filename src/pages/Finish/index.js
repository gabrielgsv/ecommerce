import React from "react";

import finishImage from "../../images/finish.svg";

import "./finish.css"

const Finish = () => {
  return (
    <div className="finishContainer">
      <img src={finishImage} alt="finish" className="finishImage"/>
      <p className="finishText">Sua compra já está sendo selecionada e em breve será entregue</p>
    </div>
  )
};

export default Finish;
