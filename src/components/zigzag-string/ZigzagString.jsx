import React, { useState } from "react";
import "./styles.css";

const zigzagJoin = (arr) => {
  return arr.map((str, i) =>
    i % 2 === 0 ? str : str.split("").reverse().join("")
  );
};

const ZigzagString = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);

  const handleSubmit = () => {
    if (!input.trim()) {
      setResult([]);
      return;
    }
    const arr = input.split(",").map((s) => s.trim());
    setResult(zigzagJoin(arr));
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter strings like one,two,three"
        onChange={(e) => setInput(e.target.value)}
        data-testid="input-box"
        className="input-box"
      />
      <br />
      <button
        onClick={handleSubmit}
        data-testid="submit-button"
        className="submit-button"
      >
        Submit
      </button>
      <p data-testid="output-result" className="output-result">
        Output: {result.join("")}
      </p>
    </div>
  );
};

export default ZigzagString;
