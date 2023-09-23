import "./App.css";
import { useState } from "react";
import Homepage from "./pages/Homepage";
import { Songs } from "./pages/Songs";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="font-mono">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/songs" element={<Songs />} />
      </Routes>
    </div>
  );
}

export default App;
