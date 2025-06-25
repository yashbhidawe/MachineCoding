import React, { useEffect, useState } from "react";

export default function Greeting() {
  const [currentTime, setCurrentTime] = useState("");
  const [greetingMessage, setGreetingMessage] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const localeTimeString = date.toLocaleTimeString("en-US");
      setCurrentTime(localeTimeString);

      const hours = date.getHours();
      if (hours < 12) {
        setGreetingMessage("Good Morning! ☀️");
      } else if (hours < 18) {
        setGreetingMessage("Good Afternoon! 🌤️");
      } else if (hours < 22) {
        setGreetingMessage("Good Evening! 🌆");
      } else {
        setGreetingMessage("Good Night! 🌙✨");
      }
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="modal-content"
      style={{
        textAlign: "center",
        padding: "50px",
        fontFamily: "Arial, sans-serif",
        color: "#333",
      }}
    >
      <h1
        style={{ fontSize: "2em", marginBottom: "20px", maxWidth: "600px" }}
        data-testid="greeting"
      >
        {greetingMessage}
      </h1>
      <p
        style={{
          fontSize: "1.5em",
          background: "#f5f5f5",
          padding: "20px",
          borderRadius: "10px",
        }}
        data-testid="time"
      >
        {currentTime}
      </p>
    </div>
  );
}
