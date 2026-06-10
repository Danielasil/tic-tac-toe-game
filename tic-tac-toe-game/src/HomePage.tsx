import React from "react";

import { useNavigate } from "react-router-dom";
import { useState, useEffect}from "react";

export default function HomePage() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });
  
  const toggleDarkMode = () => {
    setDarkMode(prev => {
      localStorage.setItem("darkMode", (!prev).toString());
      return !prev;
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-space">
      <h1 className="title-page">Tic Tac Toe</h1>
      <button
        className="start-game-button"
        onClick={() => navigate("/game")}
      >
        <h2 className="subtitle-page">Start Game</h2>
        <div className="triangle-start-button"></div>
      </button>

      <div className="toggle-button-dm-lm">
      <label className="switch">
      <input
        type="checkbox"
        checked={darkMode}
        onChange={toggleDarkMode}
        />
      <span className="slider"></span>
    </label>
      </div>
    </div>
  );
}
