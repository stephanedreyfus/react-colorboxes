// Container for the simple color "card" and the change button.
import React from "react";
import "./ColorBox.css";
import ColorCard from "./ColorCard";
import ChangeBtn from "./ChangeBtn";

const ColorBox = ({ id, color, changeHandler }) => {
  return (
    <div className="color-box" id={id}>
      <ColorCard color={color}/>
      <ChangeBtn id={id} changeHandler={changeHandler}/>
    </div>
  );
}

export default ColorBox;