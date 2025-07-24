import React, { useEffect, useState } from "react";

function ChipsInput() {
  const [chips, setChips] = useState(() => {
    const saved = localStorage.getItem("chips");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("chips", JSON.stringify(chips));
  }, [chips]);

  const handleAddChips = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      const trimmedInput = input.trim();

      if (!chips.includes(trimmedInput)) {
        setChips([...chips, trimmedInput]);
      }
      setInput("");
    }
  };

  const handleRemoveChips = (chipToRemove) => {
    const index = chips.indexOf(chipToRemove);
    if (index !== -1) {
      const newChips = [...chips];
      newChips.splice(index, 1);
      setChips(newChips);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0",
      }}
    >
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press Enter"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleAddChips}
        style={{ padding: "8px", width: "200px" }}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "10px",
          gap: "1rem",
        }}
      >
        {chips.map((chip, idx) => (
          <div
            key={idx}
            className="chip"
            style={{
              background: "lightGray",
              padding: "2px 8px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {chip}
            <span
              style={{ cursor: "pointer", color: "red" }}
              onClick={() => handleRemoveChips(chip)}
            >
              X
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChipsInput;
