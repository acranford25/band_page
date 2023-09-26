import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NavBar() {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname === "/" ? (
        <div>
          <nav className="pt-2 pb-2 text-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-5">
              <p className="h-8 ml-60 text-3xl">The Vinyl Birds</p>
              <div className="space-x-14 text-xl" id="navbar">
                <Link to="/" className="no-underline hover:underline">
                  Home
                </Link>
                <Link to="/bio" className="no-underline hover:underline">
                  Bio
                </Link>
                <Link to="/pics" className="no-underline hover:underline">
                  Pics
                </Link>
                <Link to="/songs" className="no-underline hover:underline">
                  Songs
                </Link>
                <Link to="/videos" className="no-underline hover:underline">
                  Videos
                </Link>
              </div>
            </div>
          </nav>
        </div>
      ) : (
        <div>
          <nav className="pt-2 pb-2 bg-black bg-opacity-75 text-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-5">
              <p className="h-8 ml-60 text-3xl">The Vinyl Birds</p>
              <div className="space-x-14 text-xl" id="navbar">
                <Link to="/" className="no-underline hover:underline">
                  Home
                </Link>
                <Link to="/bio" className="no-underline hover:underline">
                  Bio
                </Link>
                <Link to="/pics" className="no-underline hover:underline">
                  Pics
                </Link>
                <Link to="/songs" className="no-underline hover:underline">
                  Songs
                </Link>
                <Link to="/videos" className="no-underline hover:underline">
                  Videos
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}

export default NavBar;
