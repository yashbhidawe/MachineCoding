import React, { useState } from "react";

// ✅ Complete the custom hook below
function useToggle(initialValue = false) {
  const [switchVal, setSwitchVal] = useState(initialValue);

  // Toggle function that flips the boolean value
  const toggle = () => {
    setSwitchVal((prevVal) => !prevVal);
  };

  // Return the current value and the toggle function
  return [switchVal, toggle];
}

export default function ToggleButtonCustom() {
  // ✅ Use the custom hook inside this component
  const [isOn, toggle] = useToggle(false);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <button
        data-testid="toggle-button"
        onClick={toggle}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: isOn ? "#4CAF50" : "#f44336",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {isOn ? "ON" : "OFF"}
      </button>
      <p style={{ marginTop: "10px" }}>
        Button is currently: <strong>{isOn ? "ON" : "OFF"}</strong>
      </p>
    </div>
  );
}
