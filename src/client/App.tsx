import "./App.css";
import { useState } from "react";
import Homepage from "./pages/Homepage";
import { Songs } from "./pages/Songs";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/songs" element={<Songs />} />
      </Routes>
    </div>
  );
}

export default App;
