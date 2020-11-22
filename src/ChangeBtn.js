// "Button" for changing the color of another, random card.
import React from "react";
import "./ChangeBtn.css";

const ChangeBtn = ({ doChange }) => {
  return (
    <button onClick={doChange()}>Change</button>
  );
}

export default ChangeBtn;