// A single color square
import React from "react";
import "./ColorBox.css";

const ColorBox = ({ color }) => {
  return (
    <div className="color-box" style={{background: color}}></div>
  );
}

export default ColorBox;