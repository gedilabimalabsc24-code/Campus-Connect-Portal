import { useEffect, useState } from "react";
import "./style.css";
import AuthModule from "./AuthModule";

export default function App() {
  const [activeView, setActiveView] = useState("student");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (hash === "#auth") {
        setActiveView("auth");
      } else if (hash === "#admin") {
        setActiveView("admin");
      } else {
        setActiveView("student");
      }
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div style={{ padding: "20px 0" }}>
      {activeView === "student" ? (
        <div>
          <h1>Student</h1>

          <button
            onClick={() => {
              window.location.hash = "#auth";
            }}
          >
            Login / Sign Up
          </button>
        </div>
      ) : activeView === "admin" ? (
        <div>
          <h1>Admin</h1>

          <button
            onClick={() => {
              window.location.hash = "";
            }}
          >
            Back
          </button>
        </div>
      ) : (
        <div id="auth-section">
          <AuthModule />
        </div>
      )}
    </div>
  );
}