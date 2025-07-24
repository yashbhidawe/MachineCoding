import React, { useState } from "react";

import "./styles.css";

function AsteriskFieldValidation() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [errors, setErrors] = useState({ name: false, location: false });
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: name.trim() === "",
      location: location.trim() === "",
    };

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.location) {
      setSuccessMessage(
        `Submitted Successfully!\nName: ${name}\nLocation: ${location}`
      );
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit} data-testid="form">
        <div className="input-group">
          <label htmlFor="name" className="label">
            Name <span className="asterisk">*</span>
          </label>
          <input
            id="name"
            className="input"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            data-testid="name-input"
          />
          {errors.name && (
            <span className="error" data-testid="name-error">
              Name is required.
            </span>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="location" className="label">
            Location <span className="asterisk">*</span>
          </label>
          <input
            id="location"
            className="input"
            type="text"
            placeholder="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            data-testid="location-input"
          />
          {errors.location && (
            <span className="error" data-testid="location-error">
              Location is required.
            </span>
          )}
        </div>

        <button
          type="submit"
          className="submit-button"
          data-testid="submit-button"
        >
          Submit
        </button>
      </form>

      {successMessage && (
        <div className="success" data-testid="success-message">
          {successMessage}
        </div>
      )}
    </div>
  );
}

export default AsteriskFieldValidation;
