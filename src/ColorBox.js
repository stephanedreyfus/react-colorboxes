// Container for the simple color "card" and the change button.
import React from "react";
import "./ColorBox.css";
import ColorCard from "./ColorCard";
import ChangeBtn from "./ChangeBtn";

const ColorBox = ({ color, changeHandler }) => {
  return (
    <div className="color-box">
      <ColorCard color={color}/>
      <ChangeBtn doChange={changeHandler}/>
    </div>
  );
}

export default ColorBox;