// Element that will hold all the color squares.
import React from "react";
import { v4 as uuidv4 } from "uuid";
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

const Board = () => {
  return (
    <section className="Board">
      {colors.map(c => (
        <ColorBox color={c} key={uuidv4()}/>
      ))}
    </section>
  );
}

export default Board;