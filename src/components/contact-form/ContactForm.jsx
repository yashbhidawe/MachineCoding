import React, { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSubmittedName(form.name);
      setSubmitted(true);
      setErrors({});
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  const styles = {
    container: {
      maxWidth: "500px",
      margin: "60px auto",
      padding: "32px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      backgroundColor: "#fafafa",
      fontFamily: "sans-serif",
    },
    group: {
      marginBottom: "20px",
    },
    label: {
      display: "block",
      marginBottom: "6px",
      fontWeight: "600",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "10px",
      border: "1px solid #bbb",
      borderRadius: "4px",
      fontSize: "14px",
      backgroundColor: "#fff",
    },
    textarea: {
      width: "100%",
      padding: "10px",
      border: "1px solid #bbb",
      borderRadius: "4px",
      fontSize: "14px",
      backgroundColor: "#fff",
      minHeight: "100px",
      resize: "vertical",
    },
    button: {
      padding: "10px 20px",
      fontSize: "15px",
      fontWeight: "600",
      border: "none",
      borderRadius: "4px",
      backgroundColor: "#eee",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#ddd",
    },
    error: {
      color: "#b00020",
      fontSize: "13px",
      marginTop: "5px",
    },
    thankYou: {
      textAlign: "center",
      fontSize: "20px",
      color: "#333",
    },
  };

  return (
    <div style={styles.container}>
      {submitted ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            padding: "20px",
            gap: "10px",
          }}
        >
          {" "}
          <h2 style={styles.thankYou}>Thank you, {submittedName}!</h2>
          <button
            onClick={() => setSubmitted(false)}
            style={{
              padding: "10px 20px",
              fontSize: "15px",
              fontWeight: "600",
              border: "none",
              borderRadius: "4px",
              backgroundColor: "#eee",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            Go Back
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div style={styles.group}>
            <label htmlFor="name" style={styles.label}>
              Name:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.name && <p style={styles.error}>{errors.name}</p>}
          </div>

          <div style={styles.group}>
            <label htmlFor="email" style={styles.label}>
              Email:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.email && <p style={styles.error}>{errors.email}</p>}
          </div>

          <div style={styles.group}>
            <label htmlFor="message" style={styles.label}>
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              style={styles.textarea}
            />
            {errors.message && <p style={styles.error}>{errors.message}</p>}
          </div>

          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
