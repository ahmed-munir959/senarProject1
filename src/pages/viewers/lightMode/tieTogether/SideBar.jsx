import React from "react";
import SenarLogo from "../../../../assets/images/SenarLogo.png";
import { Link } from "react-router-dom";

const SideBar = ({ activeItem, setActiveItem }) => {
  // Create a mapping for URL paths
  const itemToPath = {
    Home: "home",
    Leaderboard: "leaderboard",
    Movies: "movies",
    Series: "series",
    "Watch Later": "watchlater",
    Subscriptions: "subscriptions",
  };
  return (
    <div className="hidden md:flex w-64 bg-purple-100 border-r border-gray-200 flex-col h-full">
      {/* Scrollable content area */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-1 flex items-center">
          <img
            src={SenarLogo}
            alt="Senar Logo"
            className="h-20 w-auto max-w-full"
          />
        </div>

        <nav className="mt-6">
          <div className="px-6">
            {/* Home Item */}
            <Link
              to={`/viewerlanding/${itemToPath["Home"]}`}
              className={`flex items-center py-3 ${
                activeItem === "Home" ? "bg-white" : ""
              } hover:bg-white rounded-md`}
              onClick={() => setActiveItem("Home")}
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              <span
                className={`font-medium ${
                  activeItem === "Home" ? "text-purple-800" : "text-gray-600"
                }`}
              >
                Home
              </span>
            </Link>

            {/* Leaderboard Item */}
            <Link
              to={`/viewerlanding/${itemToPath["Leaderboard"]}`}
              className={`flex items-center py-3 ${
                activeItem === "Leaderboard" ? "bg-white" : ""
              } hover:bg-white rounded-md`}
              onClick={() => setActiveItem("Leaderboard")}
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5 3a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V3z"></path>
                <path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
              </svg>
              <span
                className={`font-medium ${
                  activeItem === "Leaderboard"
                    ? "text-purple-800"
                    : "text-gray-600"
                }`}
              >
                Leaderboard
              </span>
            </Link>

            {/* Movies Item */}
            <Link
              to={`/viewerlanding/${itemToPath["Movies"]}`}
              className={`flex items-center py-3 ${
                activeItem === "Movies" ? "bg-white" : ""
              } hover:bg-white rounded-md`}
              onClick={() => setActiveItem("Movies")}
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-6h1V5h-1v2zm-2 0h1V5h-1v2zM9 5h1v2H9V5zM5 9h10v2H5V9zm0 4h3v2H5v-2zm5 0h5v2h-5v-2z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span
                className={`font-medium ${
                  activeItem === "Movies" ? "text-purple-800" : "text-gray-600"
                }`}
              >
                Movies
              </span>
            </Link>

            {/* Series Item */}
            <Link
              to={`/viewerlanding/${itemToPath["Series"]}`}
              className={`flex items-center py-3 ${
                activeItem === "Series" ? "bg-white" : ""
              } hover:bg-white rounded-md`}
              onClick={() => setActiveItem("Series")}
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span
                className={`font-medium ${
                  activeItem === "Series" ? "text-purple-800" : "text-gray-600"
                }`}
              >
                Series
              </span>
            </Link>

            {/* Watch Later Item */}
            <Link
              to={`/viewerlanding/${itemToPath["Watch Later"]}`}
              className={`flex items-center py-3 ${
                activeItem === "Watch Later" ? "bg-white" : ""
              } hover:bg-white rounded-md`}
              onClick={() => setActiveItem("Watch Later")}
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span
                className={`font-medium ${
                  activeItem === "Watch Later"
                    ? "text-purple-800"
                    : "text-gray-600"
                }`}
              >
                Watch Later
              </span>
            </Link>
          </div>
        </nav>
      </div>

      {/* Subscriptions Item */}
      <div className="p-6" style={{ paddingBottom: "2rem" }}>
        <Link
          to={`/viewerlanding/${itemToPath["Subscriptions"]}`}
          className={`flex items-center py-3 ${
            activeItem === "Subscriptions" ? "bg-white" : ""
          } hover:bg-white rounded-md`}
          onClick={() => setActiveItem("Subscriptions")}
        >
          <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
              clipRule="evenodd"
            ></path>
            <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
          </svg>
          <span
            className={`font-medium ${
              activeItem === "Subscriptions"
                ? "text-purple-800"
                : "text-gray-600"
            }`}
          >
            Subscriptions
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
