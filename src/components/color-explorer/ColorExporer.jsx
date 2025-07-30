import React, { useState } from "react";
import "./styles.css";

const colorNameToHex = (colorName) => {
  const colors = {
    red: "#FF0000",
    blue: "#0000FF",
    green: "#008000",
    yellow: "#FFFF00",
    purple: "#800080",
    orange: "#FFA500",
    pink: "#FFC0CB",
    brown: "#A52A2A",
    black: "#000000",
    white: "#FFFFFF",
    gray: "#808080",
    "light gray": "#D3D3D3",
    lavender: "#E6E6FA",
    turquoise: "#40E0D0",
    coral: "#FF7F50",
    gold: "#FFD700",
    silver: "#C0C0C0",
    navy: "#000080",
    maroon: "#800000",
    lime: "#00FF00",
    cyan: "#00FFFF",
  };

  return colors[colorName.trim().toLowerCase().replace(/\s+/g, " ")] || null;
};

const ColorExplorer = () => {
  const [input, setInput] = useState("");
  const [color, setColor] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = () => {
    const normalizedInput = input.trim().toLowerCase().replace(/\s+/g, " ");
    const hex = colorNameToHex(normalizedInput);
    if (hex) {
      setColor({ name: input, hex });
      setError("");
    } else {
      setError("Sorry, I couldn't recognize that color.");
      setColor(null);
    }
  };

  return (
    <div className="container">
      <h1>Color Explorer</h1>
      <div className="input-section">
        <input
          type="text"
          data-testid="color-input"
          placeholder="Type a color name e.g. lavender"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError("");
          }}
        />
        <button onClick={handleSearch} data-testid="search-button">
          🔍
        </button>
      </div>
      {error && (
        <p className="error" data-testid="error-msg">
          {error}
        </p>
      )}
      {color && (
        <div className="color-box" data-testid="color-box">
          <div
            className="preview"
            role="presentation"
            data-testid="color-preview"
            style={{ backgroundColor: color.hex }}
          ></div>
          <p data-testid="color-name">
            <strong>Name:</strong> {color.name}
          </p>
          <p data-testid="color-hex">
            <strong>Hex:</strong> {color.hex.toLowerCase()}
          </p>
        </div>
      )}
    </div>
  );
};

export default ColorExplorer;
