import React, { useState } from "react";
import backArrowImg from "../../../assets/images/studioViewImages/backArrow.png";
import { useNavigate } from "react-router-dom";

import bwIcon from "../../../assets/images/studioViewImages/bwIcon.png";
import galiGuleyan from "../../../assets/images/studioViewImages/galiGuleyan.png";
import latestUploads1 from "../../../assets/images/studioViewImages/latestUploads1.png";
import latestUploads2 from "../../../assets/images/studioViewImages/latestUploads2.png";
import latestUploads3 from "../../../assets/images/studioViewImages/latestUploads3.png";
import latestUploads4 from "../../../assets/images/studioViewImages/latestUploads4.png";
import allUploads1 from "../../../assets/images/studioViewImages/allUploads1.png";
import allUploads2 from "../../../assets/images/studioViewImages/allUploads2.png";
import allUploads3 from "../../../assets/images/studioViewImages/allUploads3.png";
import allUploads4 from "../../../assets/images/studioViewImages/allUploads4.png";
import allUploads5 from "../../../assets/images/studioViewImages/allUploads5.png";
import allUploads6 from "../../../assets/images/studioViewImages/allUploads6.png";
import allUploads7 from "../../../assets/images/studioViewImages/allUploads7.png";
import allUploads8 from "../../../assets/images/studioViewImages/allUploads8.png";
import allUploads9 from "../../../assets/images/studioViewImages/allUploads9.png";
import styles from "./customCSS/studioView.module.css";
import StudioViewAbout from "./StudioViewAbout"; // Import the StudioViewAbout component

const StudioView = () => {
  const [showAbout, setShowAbout] = useState(false); // State to control the About modal visibility
  const navigate = useNavigate();

  return (
    <div className="w-full md:px-8 md:py-6 px-4 py-4 overflow-x-hidden">
      {/* Main content container with side navigation */}
      <div className="md:flex md:gap-12">
        {/* Left navigation - hidden on mobile */}
        <div className="flex-shrink-0 pt-16 hidden md:block">
          <button
            className="flex items-center text-gray-600 "
            onClick={() => navigate(-1)}
          >
            <img src={backArrowImg} alt="Back Arrow" className="w-5 h-5" />
            <span className="ml-2">Back to content</span>
          </button>
        </div>

        {/* Mobile back button */}
        <div className="md:hidden mb-4">
          <button
            className="flex items-center text-gray-600"
            onClick={() => navigate(-1)}
          >
            <img src={backArrowImg} alt="Back Arrow" className="w-5 h-5" />
          </button>
        </div>

        {/* Main content area */}
        <div className="flex-grow w-full">
          {/* Top search bar and icons */}
          <div className="md:flex md:justify-between md:items-center mb-6">
            {/* Profile section for mobile */}
            <div className="md:hidden flex items-center mb-4 justify-between">
              <div className="flex items-center">
                <img
                  src={bwIcon}
                  alt="B&W Studio"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <h2 className="text-lg font-bold">B&W Studio</h2>
                  <p className="text-sm text-gray-500">@bkwstudio</p>
                  <button
                    className="text-[#532E88] text-sm"
                    onClick={() => setShowAbout(true)} // Added onClick handler
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div className="rounded-full border border-gray-300 p-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>

            {/* Search input and profile icons */}
            <div className="relative w-full md:max-w-lg">
              <input
                type="text"
                placeholder="Search videos here"
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg"
              />
              <div className="absolute inset-y-0 left-3 flex items-center">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="hidden md:flex gap-4">
              <div className="bg-gray-100 rounded-full p-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  ></path>
                </svg>
              </div>
              <div className="bg-gray-100 rounded-full p-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Studio Profile - Desktop Only */}
          <div
            className="hidden md:flex justify-between items-center mb-8"
            style={{ width: "937px", height: "80px" }}
          >
            {/* Profile Info */}
            <div
              className="flex items-center"
              style={{ width: "193px", height: "80px" }}
            >
              <img
                src={bwIcon}
                alt="B&W Studio"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-bold">B&W Studio</h2>
                <p className="text-gray-500">@bkwstudio</p>
                <button
                  className="text-blue-600 font-medium"
                  onClick={() => setShowAbout(true)} // Added onClick handler
                >
                  View Details
                </button>
              </div>
            </div>

            {/* Stats Section */}
            <div
              className="flex justify-between items-center"
              style={{ width: "566px", height: "80px" }}
            >
              <div className="text-center">
                <p className="text-gray-500">Rank</p>
                <p className="font-bold">#01</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500">Videos</p>
                <p className="font-bold">4,567</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500">Views</p>
                <p className="font-bold">6,74,706</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500">Uploads</p>
                <p className="font-bold">22,707</p>
              </div>
            </div>
          </div>

          {/* Mobile Stats Section */}
          <div className="flex justify-between items-center mb-4 md:hidden">
            <div className="text-center">
              <p className="text-xs text-gray-500">Videos</p>
              <p className="font-bold">4,567</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-500">Views</p>
              <p className="font-bold">6,74,706</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-500">Uploads</p>
              <p className="font-bold">22,707</p>
            </div>
          </div>

          {/* Categories - With Scrollable Container for Mobile */}
          <div className="mb-6 md:mb-8">
            <div
              className={`flex overflow-x-auto gap-2 md:gap-4 pb-2 md:pb-0 ${styles.hideScrollbar}`}
            >
              <button className="flex-shrink-0 bg-[#532E88] text-white py-2 px-4 md:px-6 rounded-md whitespace-nowrap text-sm md:text-base">
                All
              </button>
              <button className="flex-shrink-0 text-gray-500 py-2 px-4 md:px-6 whitespace-nowrap text-sm md:text-base">
                Category 1
              </button>
              <button className="flex-shrink-0 text-gray-500 py-2 px-4 md:px-6 whitespace-nowrap text-sm md:text-base">
                Category 2
              </button>
              <button className="flex-shrink-0 text-gray-500 py-2 px-4 md:px-6 whitespace-nowrap text-sm md:text-base">
                Category 3
              </button>
              <button className="flex-shrink-0 text-gray-500 py-2 px-4 md:px-6 whitespace-nowrap text-sm md:text-base">
                Category 4
              </button>
              <button className="flex-shrink-0 text-gray-500 py-2 px-4 md:px-6 whitespace-nowrap text-sm md:text-base">
                Category 5
              </button>
            </div>
          </div>

          {/* Featured Video - Desktop */}
          <div className="hidden md:block mb-8">
            <div className="flex gap-6">
              <div className="relative">
                <img
                  src={galiGuleyan}
                  alt="Gali Guleiyan"
                  className="rounded-2xl"
                  style={{ width: "300px", height: "198px" }}
                />
              </div>
              <div className="flex-1 relative">
                <h3 className="text-xl font-bold">Gali Guleiyan</h3>
                <p className="text-gray-500 mb-2">
                  January 17, 2025 . 44min . A
                </p>
                {/* Added the responsive text classes and container with max height */}
                <div
                  className={`${styles.descriptionContainer}`}
                  style={{ maxHeight: "120px", overflow: "hidden" }}
                >
                  <p className={`${styles.descriptionText}`}>
                    Quam a laudantium similique quis odio temporibus excepturi.
                    Et numquam perspiciatis et vel vel at magni architecto. Iure
                    quae illum aut rerum dolore quaerat praesentium et eius.
                    Nihil ex fugit praesentium porro. Suscipit minima natus aut
                    perspiciatis.
                  </p>
                </div>
                {/* Absolute position for the button to maintain its position */}
                <div className="mt-4 absolute bottom-0">
                  <button className="bg-[#532E88] text-white flex items-center gap-2 py-2 px-4 rounded-md">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Play
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Video - Mobile */}
          <div className="md:hidden mb-6">
            <div className="relative mb-2">
              <img
                src={galiGuleyan}
                alt="Gali Guleiyan"
                className="rounded-2xl w-full h-auto"
              />
            </div>
            <div>
              <div className="text-sm font-medium mb-1">Hindi Medium</div>
              <h3 className="text-lg font-bold">Gali Guleiyan</h3>
              <p className="text-gray-500 text-sm mb-2">
                January 17, 2025 . 44min . A
              </p>
              <p className="text-gray-700 text-sm mb-3">
                Quam a laudantium similique quis odio temporibus excepturi. Et
                numquam perspiciatis et vel vel at magni architecto.
              </p>
              <button className="w-full bg-[#532E88] text-white flex items-center justify-center gap-2 py-3 px-4 rounded-md">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Play
              </button>
            </div>
          </div>

          {/* Latest Uploads - Modified for mobile horizontal scroll */}
          <div className="mb-6 md:mb-8">
            <h3 className="text-lg font-bold mb-4">Latest uploads</h3>
            {/* Desktop view - grid */}
            <div className="hidden md:grid md:grid-cols-4 gap-4">
              {[
                latestUploads1,
                latestUploads2,
                latestUploads3,
                latestUploads4,
              ].map((upload, index) => (
                <div key={index} className="relative">
                  <img
                    src={upload}
                    alt={`Latest upload ${index + 1}`}
                    className="rounded-2xl w-full h-44 object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Mobile view - horizontal scroll */}
            <div
              className={`md:hidden overflow-x-auto ${styles.hideScrollbar}`}
            >
              <div className="flex gap-3">
                {[
                  latestUploads1,
                  latestUploads2,
                  latestUploads3,
                  latestUploads4,
                ].map((upload, index) => (
                  <div
                    key={index}
                    className="relative flex-shrink-0"
                    style={{ width: "160px" }}
                  >
                    <img
                      src={upload}
                      alt={`Latest upload ${index + 1}`}
                      className="rounded-2xl w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* All Uploads */}
          <div>
            <h3 className="text-lg font-bold mb-4">All uploads</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
              {[
                allUploads1,
                allUploads2,
                allUploads3,
                allUploads4,
                allUploads5,
                allUploads6,
                allUploads7,
                allUploads8,
                allUploads9,
              ].map((upload, index) => (
                <div key={index} className="relative">
                  <img
                    src={upload}
                    alt={`All upload ${index + 1}`}
                    className="rounded-2xl w-full h-auto md:h-52 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* StudioViewAbout Modal */}
      <StudioViewAbout
        isVisible={showAbout}
        onClose={() => setShowAbout(false)}
      />
    </div>
  );
};

export default StudioView;
