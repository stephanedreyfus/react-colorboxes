// Simple "card" with a color.
import React from "react";
import "./ColorCard.css";

const ColorCard = ({ color }) => {
  return (
    <div className="card" style={{background: color}} >
      <span id="message"/>
    </div>
  );
}

export default ColorCard;