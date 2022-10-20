import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Game = ({ score, choice, setScore }) => {
  const [house, setHouse] = useState("");
  const [playerWin, setPlayerWin] = useState("");
  const [counter, setCounter] = useState(3);
  const newHousePick = () => {
    const choices = ["rock", "paper", "scissors"];
    setHouse(choices[Math.floor(Math.random() * 3)]);
  };
  //when the page rander, the house will chose a new pick
  useEffect(() => {
    newHousePick();
  }, []);

  const Result = () => {
    if (choice === "rock" && house === "scissors") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (choice === "rock" && house === "paper") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (choice === "scissors" && house === "paper") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (choice === "scissors" && house === "rock") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (choice === "paper" && house === "rock") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (choice === "paper" && house === "scissors") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else {
      setPlayerWin("draw");
    }
  };
  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : Result();

    return () => {
      clearInterval(timer);
    };
  }, [counter, house]);


  return (
    <div className="game">
      <div className="game__you">
        <span className="text">You Picked</span>
        <div
          className={`icon icon--${choice} ${
            playerWin === "win" ? `icon icon--${choice}--winner` : ""
          }`}
        ></div>
      </div>
      {playerWin === "win" && (
        <div className="result__play">
          <span className="text">You Win</span>
          <Link to="/" className="play-again" onClick={() => setHouse()}>
            Play Again
          </Link>
        </div>
      )}
      {playerWin === "lose" && (
        <div className="result__play">
          <span className="text">You Lose</span>
          <Link to="/" className="play-again" onClick={() => setHouse()}>
            Play Again
          </Link>
        </div>
      )}
      {playerWin === "draw" && (
        <div className="result__play">
          <span className="text">Draw</span>
          <Link to="/" className="play-again" onClick={() => setHouse()}>
            Play Again
          </Link>
        </div>
      )}
      <div className="game__house">
        <span className="text">The House Picked</span>
        {counter === 0 ? (
          <div
            className={`icon icon--${house} ${
              playerWin === "lose" ? `icon icon--${house}--winner` : ""
            }`}
          ></div>
        ) : (
          <div className="counter">{counter}</div>
        )}
      </div>
    </div>
  );
};

export default Game;
