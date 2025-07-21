import React, { useState } from "react";
import "./styles.css";

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);
  const [error, setError] = useState("");

  const calculateAge = () => {
    if (!birthDate) {
      setError("Please select a date");
      setAge(null);
      return;
    }
    const today = new Date();
    const birth = new Date(birthDate);

    if (birth > today)
      return setError("Birthdate cannot be in the future"), setAge(null);

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0)
      (days += new Date(today.getFullYear(), today.getMonth(), 0)), months--;

    if (months < 0) (months += 12), years--;

    setError("");
    setAge({ years, months, days });
  };

  return (
    <div className="conatiner">
      <h2 className="title">Age Calulator</h2>
      <label className="label" data-testid="label-birthdate">
        {" "}
        Enter/Select a birthdate:
      </label>
      <input
        id="birthdate"
        type="date"
        className="input-date"
        data-testid="input-birthdate"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <button
        className="btn-calc"
        onClick={calculateAge}
        data-testid="btn-calculate"
      >
        Calculate Age
      </button>
      {error && (
        <p className="error-msg" data-testid="error-msg">
          {error}
        </p>
      )}

      {age && !error && (
        <p className="age-result" data-testid="age-result">
          {age.years} years, {age.months} months, {age.days} days
        </p>
      )}
    </div>
  );
}

export default AgeCalculator;
