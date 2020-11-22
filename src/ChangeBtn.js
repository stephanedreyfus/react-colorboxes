// "Button" for changing the color of another, random card.
import React from "react";
import "./ChangeBtn.css";

const ChangeBtn = ({ id, changeHandler }) => {
  return (
    <button className="change" onClick={() => changeHandler(id)}>Change</button>
  );
}

export default ChangeBtn;