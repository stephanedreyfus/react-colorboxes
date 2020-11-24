// Simple "card" with a color.
import React from "react";
import "./ColorCard.css";

const ColorCard = ({ color }) => {
  return (
    <div className="card" style={{background: color}} >
      <span className="card-message"/>
    </div>
  );
}

export default ColorCard;