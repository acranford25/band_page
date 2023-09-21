import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/songs">Songs</Link>
    </nav>
  );
}

export default Navigation;
