// Element that will hold all the color squares.
import React from "react";
import "./Board.css";
import ColorBox from "./ColorBox";

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "gray",
  "gold",
  "pink",
  "teal",
  "black",
  "magenta",
  "skyblue",
  "plum",
  "peachpuff"
]

const randInt = (maxInt) => {
  return Math.floor(Math.random() * maxInt);
}

const clickHandler = (targetId) => {
  // Might have to change targetId to string if not coerced.
  let card = document.getElementById(targetId);
  let newColor = colors[randInt(colors.length)];

  card.style.background = newColor;

  // for testing
  return [card, newColor];
}

const Board = () => {
  return (
    <section className="Board">
      {colors.map((c, idx) => (
        <ColorBox
          key={idx}
          id={idx}
          color={c}
          changeHandler={clickHandler}
        />
      ))}
    </section>
  );
}

export default Board;