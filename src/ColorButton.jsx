import React from "react";
import "./App.css";

const ColorButton = ({ color, changeColor }) => {
  if (!color || typeof color !== "string") {
    return null; 
  }

  return (
    <button
      className="color-button"
      onClick={() => changeColor(color)}
      style={{
        backgroundColor: color,
        color: color === "yellow" ? "black" : "white", 
        border: "none",
        padding: "10px 20px",
        margin: "10px",
        cursor: "pointer",
        borderRadius: "5px",
      }}
    >
      {color.charAt(0).toUpperCase() + color.slice(1)}
    </button>
  );
};

export default ColorButton;
