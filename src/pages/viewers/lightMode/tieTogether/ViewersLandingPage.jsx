import React, { useState } from "react";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";
import Categories from "./Categories";
import HomeScreen from "./HomeScreen";
import LeaderBoardCompareScreen from "./LeaderBoardCompareScreen";
import MoviesScreen from "./MoviesScreen";
import SeriesScreen from "./SeriesScreen";
import WatchLaterScreen from "./WatchLaterScreen";
import SubscriptionsScreen from "./SubscriptionsScreen";
import DashBoardLayout from "../../../studio/dashBoard/DashBoardLayout";

const ViewersLandingPage = ({ portfolioData, onVideoSelect }) => {
  const [activeItem, setActiveItem] = useState("Home");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [studioMode, setStudioMode] = useState(false);

  const toggleMobileSidebar = () => {
    setMobileSidebarOpen(!mobileSidebarOpen);
  };

  const handleLaunchStudio = () => {
    setStudioMode(true);
  };

  // If studio mode is active, render the DashBoardLayout
  if (studioMode) {
    return <DashBoardLayout />;
  }

  // Otherwise render the viewer landing page
  return (
    <div className="flex flex-col h-screen bg-white overflow-x-hidden">
      {/* Mobile header */}
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

      {/* Mobile Search */}
      <div className="md:hidden px-4 py-2">
        <SearchBar mobile onLaunchStudio={handleLaunchStudio} />
      </div>

      {/* Main content wrapper */}
      <div className="flex flex-1 overflow-hidden">
        <SideBar activeItem={activeItem} setActiveItem={setActiveItem} />

        {/* Main content area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Desktop Search */}
          <div className="hidden md:block">
            <SearchBar onLaunchStudio={handleLaunchStudio} />
          </div>

          {/* Content area with scrolling */}
          <div className="flex-1 overflow-y-auto">
            {activeItem === "Home" && (
              <>
                <Categories
                  selectedGenre={selectedGenre}
                  setSelectedGenre={setSelectedGenre}
                />
                <HomeScreen
                  portfolioData={portfolioData}
                  onVideoSelect={onVideoSelect}
                />
              </>
            )}
            {activeItem === "Leaderboard" && <LeaderBoardCompareScreen />}
            {activeItem === "Movies" && <MoviesScreen />}
            {activeItem === "Series" && <SeriesScreen />}
            {activeItem === "Watch Later" && <WatchLaterScreen />}
            {activeItem === "Subscriptions" && <SubscriptionsScreen />}
          </div>
        </div>
      </div>

      {/* Mobile bottom navigation */}
      <div className="md:hidden border-t border-gray-200">
        <div className="flex justify-around py-2">
          <button
            className={`flex flex-col items-center p-2 ${
              activeItem === "Home" ? "text-purple-800" : "text-gray-600"
            }`}
            onClick={() => setActiveItem("Home")}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            <span className="text-xs mt-1">Home</span>
          </button>

          <button
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
          </button>

          <button
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
          </button>

          <button
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
          </button>

          <button
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewersLandingPage;
