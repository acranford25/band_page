import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="col-span-2 flex-row justify-evenly margin-20px items-center text-white">
      <Link to="/">Home</Link>
      <Link to="/bio">Bio</Link>
      <Link to="/pics">Pics</Link>
      <Link to="/songs">Songs</Link>
      <Link to="/videos">Videos</Link>
    </nav>
  );
}

export default NavBar;
