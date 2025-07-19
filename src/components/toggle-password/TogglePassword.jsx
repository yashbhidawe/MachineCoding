import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function TogglePassword() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordChange = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const styles = {
    container: {
      maxWidth: "400px",
      margin: "60px auto",
      padding: "32px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      backgroundColor: "#fafafa",
      fontFamily: "sans-serif",
      textAlign: "center",
    },
    title: {
      fontSize: "20px",
      fontWeight: "600",
      marginBottom: "24px",
      color: "#333",
    },
    passwordWrapper: {
      display: "flex",
      alignItems: "center",
      border: "1px solid #bbb",
      borderRadius: "4px",
      padding: "10px 12px",
      backgroundColor: "#fff",
    },
    passwordInput: {
      flex: 1,
      fontSize: "14px",
      border: "none",
      outline: "none",
    },
    icon: {
      cursor: "pointer",
      color: "#555",
    },
    visibilityLabel: {
      display: "block",
      marginTop: "16px",
      fontSize: "14px",
      color: "#666",
    },
  };

  return (
    <div className="container" style={styles.container}>
      <h1 className="title" style={styles.title}>
        Toggle Password
      </h1>
      <div className="password-wrapper" style={styles.passwordWrapper}>
        <input
          type={isPasswordVisible ? "text" : "password"}
          id="password"
          placeholder="Enter password"
          style={styles.passwordInput}
          data-testid="password-input"
        />
        <span
          className="icon"
          data-testid="toggle-icon"
          style={styles.icon}
          onClick={handlePasswordChange}
        >
          {isPasswordVisible ? <Eye size={18} /> : <EyeOff size={18} />}
        </span>
      </div>
      <span
        className="visibility-label"
        style={styles.visibilityLabel}
        data-testid="visibility-label"
      >
        {isPasswordVisible ? "Password Visible" : "Password Hidden"}
      </span>
    </div>
  );
}

export default TogglePassword;
