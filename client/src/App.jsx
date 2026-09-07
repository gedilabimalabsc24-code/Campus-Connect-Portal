import { useEffect, useState } from "react";
import "./style.css";
import AuthModule from "./components/AuthModule.jsx";
import StudentsPortal from "./components/StudentsPortal.jsx";

export default function App() {
  const [activeView, setActiveView] = useState("auth");
  const [activeTab, setActiveTab] = useState("login");

  const scrollToAuth = () => {
    document.getElementById("auth-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (hash === "#login" || hash === "#auth") {
        setActiveView("auth");
        setActiveTab("login");
        scrollToAuth();
      } else if (hash === "#register") {
        setActiveView("auth");
        setActiveTab("signup");
        scrollToAuth();
      } else if (hash === "#student") {
        setActiveView("student");
        scrollToAuth();
      } else if (hash === "#admin") {
        setActiveView("admin");
        scrollToAuth();
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
        <StudentsPortal />
      ) : activeView === "admin" ? (
        <div>
          <h1>Admin</h1>
          <button
            onClick={() => {
              window.location.hash = "#login";
            }}
          >
            Back to Login
          </button>
        </div>
      ) : (
        <div id="auth-section">
          <AuthModule initialMode={activeTab} />
        </div>
      )}
    </div>
  );
}