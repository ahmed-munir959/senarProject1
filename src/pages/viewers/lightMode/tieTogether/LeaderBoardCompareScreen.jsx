import React, { useState } from "react";
import CompareScreen from "./CompareScreen";

const LeaderBoardCompareScreen = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [month] = useState("February 2025");
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
      logo: "⚫️",
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
      logo: "📸",
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
      logo: "🎵",
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
  ];

  const tabs = ["All", "Growing", "Action", "Comedy", "Romance", "Thriller"];

  return (
    <div className="p-4 md:p-6 bg-white">
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
            className="bg-white p-4 rounded-lg shadow relative border border-gray-100"
          >
            <div className="absolute right-4 top-4">
              <span className="text-4xl font-light text-purple-300/70">
                {studio.id < 10 ? `0${studio.id}` : studio.id}
              </span>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                <span className="text-xl">{studio.logo}</span>
              </div>
              <div>
                <div className="font-medium">{studio.name}</div>
                <div className="text-gray-500 text-sm">@{studio.username}</div>
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
                ? "text-white bg-purple-800"
                : "text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto no-scrollbar">
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
                    <span className="text-xl">{studio.logo}</span>
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

      {/* Compare Button */}
      {selectedStudios.length > 0 && (
        <button
          onClick={() => setShowCompare(true)}
          className="fixed bottom-20 md:bottom-8 right-8 bg-purple-700 text-white px-4 py-2 rounded-md shadow-lg hover:bg-purple-800 transition-colors flex items-center"
        >
          <span>Compare ({selectedStudios.length})</span>
        </button>
      )}

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

export default LeaderBoardCompareScreen;
