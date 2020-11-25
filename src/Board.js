// Element that will hold all the color squares.
import React, { useState } from "react";
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


const Board = () => {
  const [changed, setChanged] = useState(null);
  
  const clickHandler = (currId) => {
    // Ensure that a card other than target is changed.
    if (changed) {
      changed.innerText = "";
    }

    let targetId = currId;
    while (targetId === currId) {
      targetId = randInt(colors.length);
    }
    
    let card = document.getElementById(targetId).firstChild
    let newColor = colors[randInt(colors.length)];
    
    card.style.background = newColor;
    card.firstChild.innerText = "changed";
    card.firstChild.classList.add("card-message");
    setChanged(card);
    
    // for testing
    return [card, newColor];
  }

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