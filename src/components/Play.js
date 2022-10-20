import React from "react";
import { Link } from "react-router-dom";
import Triangle from "../assets/bg-triangle.svg";
const Play = ({ setChoice }) => {
  const setMyChoice = (e) => {
    setChoice(e.target.dataset.id);
  };

  return (
    <div className="play">
      <img src={Triangle} alt="" className="triangle" />
      <div className="items">
        <Link to="/game">
          <div
            data-id="paper"
            className="icon icon--paper"
            onClick={setMyChoice}
          >
         
          </div>
        </Link>
        <Link to="/game">
          <div
            data-id="scissors"
            className="icon icon--scissors"
            onClick={setMyChoice}
          >
           
          </div>
        </Link>
        <Link to="/game">
          <div data-id="rock" className="icon icon--rock" onClick={setMyChoice}>
            
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Play;
