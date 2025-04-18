import React, { useState } from "react";
import CompareScreen from "./CompareScreen";

const bwIcon = "⚫️";
const lenslyIcon = "📸";
const grooveGang = "🎵";

const LeaderboardCompare = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [month, setMonth] = useState("February 2025");
  const [activeSection, setActiveSection] = useState("Home");
  const [selectedStudios, setSelectedStudios] = useState([]);
  const [showCompare, setShowCompare] = useState(false);
  const [studioToCompare, setStudioToCompare] = useState(null);

  const handleStudioSelect = (studio) => {
    if (selectedStudios.some((s) => s.id === studio.id)) {
      setSelectedStudios(selectedStudios.filter((s) => s.id !== studio.id));
    } else if (selectedStudios.length < 2) {
      setSelectedStudios([...selectedStudios, studio]);
    } else {
      const newSelection = [...selectedStudios];
      newSelection[1] = studio;
      setSelectedStudios(newSelection);
    }
  };

  const topStudios = [
    {
      id: 1,
      name: "B&W Studio",
      username: "bwstudio",
      rank: "01",
      rankNumber: "#01",
      uploads: "22,707",
      views: "6,74,706",
      engagement: "15.2%",
      logo: bwIcon,
    },
    {
      id: 2,
      name: "Lensly",
      username: "lensly",
      rank: "02",
      rankNumber: "#02",
      uploads: "20,052",
      views: "4,27,706",
      engagement: "12.8%",
      logo: lenslyIcon,
    },
    {
      id: 3,
      name: "Groove Gang",
      username: "ganggroove",
      rank: "03",
      rankNumber: "#03",
      uploads: "22,707",
      views: "20,052",
      engagement: "9.5%",
      logo: grooveGang,
    },
  ];

  const allStudios = [
    ...topStudios,
    {
      id: 4,
      name: "Heritage Media",
      rankNumber: "#04",
      views: "5,32,891",
      uploads: "18,245",
      engagement: "8.3%",
      logo: "🏛️",
    },
    {
      id: 5,
      name: "Injure Picture",
      rankNumber: "#05",
      views: "4,89,102",
      uploads: "15,987",
      engagement: "7.9%",
      logo: "🎬",
    },
    {
      id: 6,
      name: "Kingdom Studios",
      rankNumber: "#06",
      views: "4,12,456",
      uploads: "14,321",
      engagement: "7.2%",
      logo: "👑",
    },
    {
      id: 7,
      name: "Liberty Movies",
      rankNumber: "#07",
      views: "3,98,765",
      uploads: "13,456",
      engagement: "6.8%",
      logo: "🗽",
    },
    {
      id: 8,
      name: "Pixxel Studio",
      rankNumber: "#08",
      views: "3,45,678",
      uploads: "12,345",
      engagement: "6.5%",
      logo: "🎮",
    },
  ];

  const tabs = ["All", "Growing", "Action", "Comedy", "Romance", "Thriller"];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="flex h-full">
        <div className="w-56 bg-[#F1EDFF] p-6 hidden md:block">
          <div className="text-purple-700 text-2xl font-bold mb-10">senar</div>
          <nav className="space-y-1">
            {[
              {
                name: "Home",
                icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
              },
              {
                name: "Leaderboard",
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
              },
              {
                name: "Movies",
                icon: "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z",
              },
              {
                name: "Series",
                icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2",
              },
              {
                name: "Watch Later",
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
              },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveSection(item.name)}
                className={`flex items-center w-full px-4 py-2 rounded-lg ${
                  activeSection === item.name
                    ? "text-purple-700 bg-white font-medium shadow-sm"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={item.icon}
                  />
                </svg>
                {item.name}
              </button>
            ))}
          </nav>
          <div className="absolute bottom-8">
            <button
              onClick={() => setActiveSection("Subscriptions")}
              className={`flex items-center w-full px-4 py-2 rounded-lg ${
                activeSection === "Subscriptions"
                  ? "text-purple-700 bg-white font-medium shadow-sm"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                />
              </svg>
              Subscriptions
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-6 pb-16 md:pb-6 overflow-x-hidden">
          {/* Mobile header */}
          <div className="md:hidden px-4 py-3 flex items-center justify-between border-b">
            <h1 className="text-2xl font-bold text-purple-800">senar</h1>
            <div className="flex items-center">
              <button className="p-2 mr-2 text-gray-600">
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
                  />
                </svg>
              </button>
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
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Mobile search */}
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
                  />
                </svg>
              </span>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Search videos here"
              />
            </div>
          </div>

          {/* Desktop header */}
          <div className="hidden md:flex items-center justify-between mb-6">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Search videos here"
              />
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100">
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
                  />
                </svg>
              </button>
              <button className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Leaderboard header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold text-gray-800">Leaderboard</h1>
            <div className="relative">
              <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-sm">
                <span>Month: {month}</span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Top 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {topStudios.map((studio) => (
              <div
                key={studio.id}
                className="bg-white p-4 rounded-lg shadow relative"
              >
                <div className="absolute right-4 top-4">
                  <span className="text-4xl font-light text-purple-300/70">
                    {studio.id < 10 ? `0${studio.id}` : studio.id}
                  </span>
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                    {typeof studio.logo === "string" &&
                    studio.logo.includes("/") ? (
                      <img
                        src={studio.logo}
                        alt={`${studio.name} logo`}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className="text-xl">{studio.logo}</span>
                    )}
                  </div>
                  <div>
                    <div className="font-medium">{studio.name}</div>
                    <div className="text-gray-500 text-sm">
                      @{studio.username}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-gray-500 text-sm">Rank</div>
                    <div className="font-medium">{studio.rankNumber}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm">Uploads</div>
                    <div className="font-medium">{studio.uploads}</div>
                  </div>
                  <div>
                    <div className="text-gray-500 text-sm">Views</div>
                    <div className="font-medium">{studio.views}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Category Tabs */}
          <div className="flex overflow-x-auto pb-2 mb-6 border-b space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`py-2 px-4 whitespace-nowrap rounded-md transition-colors ${
                  activeTab === tab
                    ? "text-white bg-[#532E88]"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="w-full overflow-x-auto">
            <div className="bg-gray-100 rounded-lg overflow-hidden mb-6">
              {/* Table Header */}
              <div className="grid grid-cols-4 bg-gray-100 p-4 text-sm">
                {["Studio", "Rank", "Views", "Uploads"].map((header) => (
                  <div key={header} className="flex items-center text-gray-600">
                    {header}
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                ))}
              </div>

              {/* Table Body */}
              <div className="bg-white overflow-y-auto max-h-[384px]">
                {allStudios.map((studio) => (
                  <div
                    key={studio.id}
                    className={`grid grid-cols-4 p-4 border-b border-gray-100 items-center text-sm cursor-pointer ${
                      selectedStudios.some((s) => s.id === studio.id)
                        ? "bg-purple-50"
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => {
                      const initialComparison = [topStudios[0], topStudios[1]];
                      setSelectedStudios(initialComparison);
                      setStudioToCompare(studio);
                      setShowCompare(true);
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                        {typeof studio.logo === "string" &&
                        studio.logo.includes("/") ? (
                          <img
                            src={studio.logo}
                            alt={`${studio.name} logo`}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <span className="text-xl">{studio.logo}</span>
                        )}
                      </div>
                      <div className="font-medium">{studio.name}</div>
                    </div>
                    <div>{studio.rankNumber}</div>
                    <div>{studio.views}</div>
                    <div className="flex items-center justify-between">
                      <span>{studio.uploads}</span>
                      <button className="text-gray-500 hover:text-gray-700">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7h12m0 0l-4-4m4 4l-4 4m-8 6H4m0 0l4 4m-4-4l4-4"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="hidden md:flex justify-center space-x-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 hover:bg-gray-100">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-md bg-purple-700 text-white">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 hover:bg-gray-100">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 hover:bg-gray-100">
              3
            </button>
            <div className="flex items-center justify-center">...</div>
            <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 hover:bg-gray-100">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Compare Button */}
          {selectedStudios.length > 0 && (
            <button
              onClick={() => setShowCompare(true)}
              className="fixed bottom-20 md:bottom-8 right-8 bg-purple-700 text-white px-4 py-2 rounded-md shadow-lg hover:bg-purple-800 transition-colors flex items-center"
            >
              <span>Compare ({selectedStudios.length})</span>
            </button>
          )}
        </div>
      </div>

      {/* Mobile bottom navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white z-10">
        <div className="flex justify-around py-2">
          {[
            {
              name: "Home",
              icon: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z",
            },
            {
              name: "Leaderboard",
              icon: "M5 3a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V3zM3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z",
            },
            {
              name: "Subscriptions",
              icon: "M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1zM9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z",
            },
            {
              name: "Movies",
              icon: "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6v4H7V5zm8 8v2h1v-2h-1zm-2-6h1V5h-1v2zm-2 0h1V5h-1v2zM9 5h1v2H9V5zM5 9h10v2H5V9zm0 4h3v2H5v-2zm5 0h5v2h-5v-2z",
            },
            {
              name: "Series",
              icon: "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",
            },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveSection(item.name)}
              className={`flex flex-col items-center p-2 ${
                activeSection === item.name
                  ? "text-purple-800"
                  : "text-gray-600"
              }`}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d={item.icon} />
              </svg>
              <span className="text-xs mt-1">{item.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Comparison Modal */}
      {showCompare && (
        <CompareScreen
          selectedStudios={selectedStudios}
          studioToCompare={studioToCompare}
          setSelectedStudios={setSelectedStudios}
          setShowCompare={setShowCompare}
        />
      )}
    </div>
  );
};

export default LeaderboardCompare;
