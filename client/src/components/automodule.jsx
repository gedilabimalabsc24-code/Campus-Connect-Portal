import { useState } from "react";
import styles from "./AuthModule.module.css";

export default function AuthModule({ initialMode = "login" }) {
  const [mode, setMode] = useState(initialMode);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    // Add login/signup functionality here
  };

  const toggleMode = () => {
    setMode((prev) => (prev === "login" ? "signup" : "login"));
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn}>×</button>

        <h2>
          {mode === "login"
            ? "Welcome Back!"
            : "Create Your Account"}
        </h2>

        <p className={styles.subtitle}>
          {mode === "login"
            ? "Login to continue to Campus Connect"
            : "Join Campus Connect today"}
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          {mode === "signup" && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="RVU Email Address"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />

          <button type="submit" style={styles.submitBtn}>
            {mode === "login" ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className={styles.switchText}>
          {mode === "login"
            ? "Don't have an account?"
            : "Already have an account?"}

          <button
            type="button"
            onClick={toggleMode}
            className={styles.switchBtn}
          >
            {mode === "login" ? " Sign Up" : " Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
































