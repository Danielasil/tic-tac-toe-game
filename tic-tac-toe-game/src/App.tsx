import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.tsx";
import GamePage from "./GamePage.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/game" element={<GamePage />} />
    </Routes>
  );
}
