import React from "react";
import ColorButton from "./ColorButton";
import "./App.css";

const App = () => {
  const colors = ["red", "blue", "green", "yellow", "purple"];

  const handleColorChange = (color) => {
    document.body.style.backgroundColor = color;
  };

  return (
    <div className="app-container" style={{ textAlign: "center", padding: "20px" }}>
      <h1>Change the Background Color</h1>
      <div className="button-container">
        {colors.map((color) => (
          <ColorButton key={color} color={color} changeColor={handleColorChange} />
        ))}
      </div>
    </div>
  );
};

export default App;
