import "./App.css";
import Bio from "./pages/Bio";
import Homepage from "./pages/Homepage";
import { Songs } from "./pages/Songs";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="font-mono">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/bio" element={<Bio />} />
      </Routes>
    </div>
  );
}

export default App;
