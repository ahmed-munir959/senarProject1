import React, { useState } from "react";

// Import images - these stay the same
import thriller1 from "../../assets/images/homeImages/thriller1.png";
import thriller2 from "../../assets/images/homeImages/thriller2.png";
import thriller3 from "../../assets/images/homeImages/thriller3.png";
import thriller4 from "../../assets/images/homeImages/thriller4.png";
import adventure1 from "../../assets/images/homeImages/adventure1.png";
import adventure2 from "../../assets/images/homeImages/adventure2.png";
import adventure3 from "../../assets/images/homeImages/adventure3.png";
import adventure4 from "../../assets/images/homeImages/adventure4.png";
import comedy1 from "../../assets/images/homeImages/comedy1.png";
import comedy2 from "../../assets/images/homeImages/comedy2.png";
import comedy3 from "../../assets/images/homeImages/comedy3.png";
import comedy4 from "../../assets/images/homeImages/comedy4.png";

const Subscription = () => {
  // Section categories with placeholder movies
  const sections = [
    {
      title: "Subscription",
      movies: Array(4).fill(null),
    },
    {
      title: "Top-rated TV shows on IMDb",
      movies: Array(4).fill(null),
    },
    {
      title: "Top TV",
      movies: Array(4).fill(null),
    },
  ];

  // State to track active sidebar/nav item
  const [activeItem, setActiveItem] = useState("Subscriptions");
  // State to track if mobile sidebar is open
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Function to toggle mobile sidebar
  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  // Get images based on section title
  const getMovieImages = (sectionTitle, index) => {
    switch (sectionTitle) {
      case "Subscription":
        return [thriller1, thriller2, thriller3, thriller4][index];
      case "Top-rated TV shows on IMDb":
        return [adventure1, adventure2, adventure3, adventure4][index];
      case "Top TV":
        return [comedy1, comedy2, comedy3, comedy4][index];
      default:
        return thriller1; // Fallback image
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Top header for mobile */}
      <div className="md:hidden px-4 py-3 flex items-center justify-between border-b">
        <h1 className="text-2xl font-bold text-purple-800">senar</h1>
        <div className="flex items-center">
          <button className="p-2 mr-2">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
          </button>
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Search bar - mobile */}
      <div className="md:hidden px-4 py-2">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </span>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Search videos here"
          />
        </div>
      </div>

      {/* Main content wrapper */}
      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar */}
        <div className="hidden md:flex w-64 bg-purple-100 border-r border-gray-200 flex-col h-full">
          {/* Scrollable content area */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6">
              <h1 className="text-3xl font-bold text-purple-800">senar</h1>
            </div>

            <nav className="mt-6">
              <div className="px-6">
                <a
                  href="#"
                  className="flex items-center py-3 hover:bg-white rounded-md"
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
                      activeItem === "Home"
                        ? "text-purple-800"
                        : "text-gray-600"
                    }`}
                  >
                    Home
                  </span>
                </a>

                <a
                  href="#"
                  className="flex items-center py-3 hover:bg-white rounded-md"
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
                </a>

                <a
                  href="#"
                  className="flex items-center py-3 hover:bg-white rounded-md"
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
                      activeItem === "Movies"
                        ? "text-purple-800"
                        : "text-gray-600"
                    }`}
                  >
                    Movies
                  </span>
                </a>

                <a
                  href="#"
                  className="flex items-center py-3 hover:bg-white rounded-md"
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
                      activeItem === "Series"
                        ? "text-purple-800"
                        : "text-gray-600"
                    }`}
                  >
                    Series
                  </span>
                </a>

                <a
                  href="#"
                  className="flex items-center py-3 hover:bg-white rounded-md"
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
                </a>
              </div>
            </nav>
          </div>

          {/* Fixed bottom section with Subscriptions */}
          <div className="p-6" style={{ paddingBottom: "2rem" }}>
            <a
              href="#"
              className="flex items-center py-3 hover:bg-white rounded-md"
              onClick={() => setActiveItem("Subscriptions")}
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
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
            </a>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Desktop search bar and user profile */}
          <div className="hidden md:flex p-6 justify-between items-center">
            <div className="relative w-1/2">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </span>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Search videos here"
              />
            </div>

            <div className="flex items-center">
              <button className="p-2 mr-4 text-gray-500 hover:text-gray-700">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  ></path>
                </svg>
              </button>

              <div className="relative">
                <button className="flex items-center text-gray-700 focus:outline-none">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Content area with scrolling */}
          <div className="flex-1 overflow-y-auto">
            {/* Movie sections - now directly under search bar */}
            <div className="p-4 md:p-6">
              {sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-6 md:mb-10">
                  <h2
                    className={`font-sans font-medium leading-[1.4] tracking-normal ${
                      section.title === "Subscription" ? "text-2xl" : "text-lg"
                    } text-gray-800 mb-3 md:mb-4`}
                  >
                    {section.title}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                    {section.movies
                      .slice(0, sectionIndex === 3 ? 2 : 4)
                      .map((_, movieIndex) => {
                        const imgSrc = getMovieImages(
                          section.title,
                          movieIndex
                        );
                        return (
                          <div key={movieIndex} className="relative">
                            <img
                              src={imgSrc}
                              className="w-full h-32 md:h-44 object-cover rounded-lg md:rounded-2xl"
                              alt={`${section.title} ${movieIndex + 1}`}
                            />
                          </div>
                        );
                      })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile bottom navigation */}
      <div className="md:hidden border-t border-gray-200">
        <div className="flex justify-around py-2">
          <a
            href="#"
            className={`flex flex-col items-center p-2 ${
              activeItem === "Home" ? "text-purple-800" : "text-gray-600"
            }`}
            onClick={() => setActiveItem("Home")}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            <span className="text-xs mt-1">Home</span>
          </a>

          <a
            href="#"
            className={`flex flex-col items-center p-2 ${
              activeItem === "Leaderboard" ? "text-purple-800" : "text-gray-600"
            }`}
            onClick={() => setActiveItem("Leaderboard")}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 3a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V3z"></path>
              <path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
            </svg>
            <span className="text-xs mt-1">Leaderboard</span>
          </a>

          <a
            href="#"
            className={`flex flex-col items-center p-2 ${
              activeItem === "Subscriptions"
                ? "text-purple-800"
                : "text-gray-600"
            }`}
            onClick={() => setActiveItem("Subscriptions")}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                clipRule="evenodd"
              ></path>
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
            </svg>
            <span className="text-xs mt-1">Subscriptions</span>
          </a>

          <a
            href="#"
            className={`flex flex-col items-center p-2 ${
              activeItem === "Movies" ? "text-purple-800" : "text-gray-600"
            }`}
            onClick={() => setActiveItem("Movies")}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-6h1V5h-1v2zm-2 0h1V5h-1v2zM9 5h1v2H9V5zM5 9h10v2H5V9zm0 4h3v2H5v-2zm5 0h5v2h-5v-2z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-xs mt-1">Movies</span>
          </a>

          <a
            href="#"
            className={`flex flex-col items-center p-2 ${
              activeItem === "Series" ? "text-purple-800" : "text-gray-600"
            }`}
            onClick={() => setActiveItem("Series")}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-xs mt-1">Series</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
