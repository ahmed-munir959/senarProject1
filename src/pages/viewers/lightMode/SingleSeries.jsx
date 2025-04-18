import React, { useState } from "react";

import ourBlock from "../../../assets/images/singleSeriesImages/ourBlock.png";
import episode1 from "../../../assets/images/singleSeriesImages/episode1.png";
import episode2 from "../../../assets/images/singleSeriesImages/episode2.png";
import episode3 from "../../../assets/images/singleSeriesImages/episode3.png";
import episode4 from "../../../assets/images/singleSeriesImages/episode4.png";
import similarSeries1 from "../../../assets/images/singleSeriesImages/similarSeries1.png";
import similarSeries2 from "../../../assets/images/singleSeriesImages/similarSeries2.png";
import similarSeries3 from "../../../assets/images/singleSeriesImages/similarSeries3.png";
import similarSeries4 from "../../../assets/images/singleSeriesImages/similarSeries4.png";
import injureIcon from "../../../assets/images/singleSeriesImages/injureIcon.png";
import backArrow from "../../../assets/images/singleMovieImages/backArrow.png";
//import SingleMovieShare from "./SingleMovieShare";

const SingleSeries = () => {
  const [showShareModal, setShowShareModal] = useState(false);

  const toggleShareModal = () => {
    setShowShareModal(!showShareModal);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* Scrollbar Hide CSS */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Share Modal Overlay */}
      {/* {showShareModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex md:items-center justify-center items-end"
          onClick={toggleShareModal}
        >
          <SingleMovieShare closeModal={toggleShareModal} />
        </div>
      )} */}

      {/* Header Section */}
      <header className="flex items-start justify-between p-6 md:p-6">
        <div className="flex items-center w-full md:w-auto">
          {/* Mobile Back Arrow */}
          <div className="md:hidden">
            <a href="#" className="flex items-center">
              <img src={backArrow} alt="Back" className="w-4 h-4" />
            </a>
          </div>

          {/* Search Input - Hidden on mobile */}
          <div className="hidden md:block" style={{ marginLeft: "12rem" }}>
            <div className="relative w-full" style={{ width: "400px" }}>
              <input
                type="text"
                placeholder="Search videos here"
                className="w-full h-12 p-4 pl-10 border rounded-md"
              />
              <svg
                className="absolute left-3 top-4 w-4 h-4 text-gray-400"
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
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex space-x-4">
          <button className="p-2 rounded-full border">
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
          <button className="p-2 rounded-full border">
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Profile Icon */}
        <div className="md:hidden">
          <button className="p-2 rounded-full border">
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row">
        {/* Desktop Back Link */}
        <div className="hidden md:block py-4 px-6">
          <a href="#" className="flex items-center text-gray-600">
            <img src={backArrow} alt="Back" className="w-4 h-4 mr-2" />
            <span>Back to content</span>
          </a>
        </div>

        {/* Series Content */}
        <div className="flex-1 px-4 md:px-0 md:ml-8 md:pr-6">
          {/* Hero Section */}
          <div className="relative mt-2 rounded-lg overflow-hidden">
            {/* Mobile View */}
            <div
              className="block md:hidden relative w-full"
              style={{ height: "240px" }}
            >
              <img
                src={ourBlock}
                alt="Our Block"
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Mobile mute button overlay */}
              <div className="absolute bottom-2 right-2">
                <button className="bg-gray-800 bg-opacity-70 text-white p-1 rounded-full">
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
                      d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Content (Outside of image) */}
            <div className="block md:hidden pt-4 pb-6">
              <div className="mb-2">
                <span className="bg-[#E8DFF7] text-black text-xs font-semibold px-3 py-1 rounded-full">
                  4 EPISODES
                </span>
              </div>
              <h1 className="text-2xl font-bold mb-2 text-black">Our Block</h1>

              {/* Updated Mobile Buttons Section */}
              <div className="flex flex-col space-y-4">
                <button className="bg-purple-700 text-white px-6 py-2 rounded-md flex items-center justify-center w-full">
                  <span className="bg-white rounded-full p-1 mr-2">
                    <svg
                      className="w-4 h-4 text-purple-700"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  Play
                </button>

                <div className="flex justify-between items-center w-full">
                  <button className="flex flex-col items-center">
                    <div className="bg-gray-100 text-gray-800 p-3 rounded-full mb-1">
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
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        />
                      </svg>
                    </div>
                    <span className="text-xs">Like</span>
                  </button>

                  <button className="flex flex-col items-center">
                    <div className="bg-gray-100 text-gray-800 p-3 rounded-full mb-1">
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
                          d="M7 10v11a2 2 0 01-2 2H4a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M20.59 10h-4.764a2 2 0 01-1.789-2.894l3.5-7a2 2 0 011.789-1.106h.5a2 2 0 012 2v.5a7 7 0 01-1.179 3.894L18 10v11"
                        />
                      </svg>
                    </div>
                    <span className="text-xs">Not for me</span>
                  </button>

                  <button className="flex flex-col items-center">
                    <div className="bg-gray-100 text-gray-800 p-3 rounded-full mb-1">
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
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                        />
                      </svg>
                    </div>
                    <span className="text-xs">Watchlist</span>
                  </button>

                  <button
                    className="flex flex-col items-center"
                    onClick={toggleShareModal}
                  >
                    <div className="bg-gray-100 text-gray-800 p-3 rounded-full mb-1">
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
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                        />
                      </svg>
                    </div>
                    <span className="text-xs">Share</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop View */}
            <div
              className="hidden md:block relative w-full"
              style={{ height: "600px" }}
            >
              <img
                src={ourBlock}
                alt="Our Block"
                className="w-full h-full object-cover rounded-lg"
                style={{ width: "100%", maxWidth: "1080px" }}
              />
              {/* Mute button with container that matches image dimensions */}
              <div
                className="absolute top-0 left-0"
                style={{ width: "100%", maxWidth: "1080px", height: "600px" }}
              >
                <div className="absolute bottom-6 right-6 hidden lg:block">
                  <button className="bg-gray-800 bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded-full">
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
                        d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="mb-4">
                  <span className="bg-[#E8DFF7] text-black text-xs font-semibold px-3 py-1 rounded-full">
                    4 EPISODES
                  </span>
                </div>
                <h1 className="text-4xl font-bold mb-2">Our Block</h1>
                <p className="text-sm max-w-xl mb-6">
                  Quam a laudantium similique aux color temporibus exegipt. Et
                  numquam perspiciatis et vel vel at magna domestici. Jens quae
                  illum aut enim, dolore quantit praesentum et eius.
                </p>
                <div className="flex space-x-3 items-center">
                  <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md flex items-center">
                    <span className="bg-white rounded-full p-1 mr-2">
                      <svg
                        className="w-4 h-4 text-purple-700"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                    Play
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-3 rounded-full">
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
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </svg>
                  </button>
                  <button
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-3 rounded-full"
                    onClick={toggleShareModal}
                  >
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
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Rest of the code remains the same */}
          {/* Episodes Section */}
          <div className="py-4 md:py-8 md:ml-4">
            <h2 className="text-lg font-semibold mb-4 px-2 md:px-0">
              Episodes
            </h2>

            {/* Episode 1 */}
            <div className="flex flex-col md:flex-row mb-3">
              <div className="md:w-1/3 mb-4 md:mb-0 md:mr-4">
                <img
                  src={episode1}
                  alt="Episode 1"
                  className="w-full rounded-lg object-cover"
                  style={{
                    width: "279px",
                    height: "180px",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div className="md:w-2/3 md:pl-0">
                <h3 className="font-semibold">Episode 1</h3>
                <p className="text-sm text-gray-600 mb-2">
                  January 17, 2025 · 44min · A
                </p>
                <p className="text-sm">
                  Quam a laudantium similique aux color temporibus exegipt. Et
                  numquam perspiciatis et vel vel at magna domestici. Les quae
                  illum aut enim, dolore quantit praesentum et eius.
                </p>
              </div>
            </div>

            {/* Episode 2 */}
            <div className="flex flex-col md:flex-row mb-3">
              <div className="md:w-1/3 mb-4 md:mb-0 md:mr-4">
                <img
                  src={episode2}
                  alt="Episode 2"
                  className="w-full rounded-lg object-cover"
                  style={{
                    width: "279px",
                    height: "180px",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="font-semibold">Episode 2</h3>
                <p className="text-sm text-gray-600 mb-2">
                  January 17, 2025 · 44min · A
                </p>
                <p className="text-sm">
                  Quam a laudantium similique aux color temporibus exegipt. Et
                  numquam perspiciatis et vel vel at magna domestici. Les quae
                  illum aut enim, dolore quantit praesentum et eius.
                </p>
              </div>
            </div>

            {/* Episode 3 */}
            <div className="flex flex-col md:flex-row mb-3">
              <div className="md:w-1/3 mb-4 md:mb-0 md:mr-4">
                <img
                  src={episode3}
                  alt="Episode 3"
                  className="w-full rounded-lg object-cover"
                  style={{
                    width: "279px",
                    height: "180px",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="font-semibold">Episode 3</h3>
                <p className="text-sm text-gray-600 mb-2">
                  January 17, 2025 · 44min · A
                </p>
                <p className="text-sm">
                  Quam a laudantium similique aux color temporibus exegipt. Et
                  numquam perspiciatis et vel vel at magna domestici. Les quae
                  illum aut enim, dolore quantit praesentum et eius.
                </p>
              </div>
            </div>

            {/* Episode 4 */}
            <div className="flex flex-col md:flex-row mb-3">
              <div className="md:w-1/3 mb-4 md:mb-0 md:mr-4">
                <img
                  src={episode4}
                  alt="Episode 4"
                  className="w-full rounded-lg object-cover"
                  style={{
                    width: "279px",
                    height: "180px",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="font-semibold">Episode 4</h3>
                <p className="text-sm text-gray-600 mb-2">
                  January 17, 2025 · 44min · A
                </p>
                <p className="text-sm">
                  Quam a laudantium similique aux color temporibus exegipt. Et
                  numquam perspiciatis et vel vel at magna domestici. Les quae
                  illum aut enim, dolore quantit praesentum et eius.
                </p>
              </div>
            </div>
          </div>

          {/* Similar Series Section */}
          <div className="py-4 md:py-8 md:ml-0">
            <div className="flex justify-between items-center mb-4 px-2 md:px-0">
              <h2 className="text-lg font-semibold">Similar series</h2>
              <a href="#" className="text-sm text-blue-600">
                View all
              </a>
            </div>

            {/* Mobile Similar Series */}
            <div className="md:hidden px-2">
              <div className="flex overflow-x-scroll space-x-4 pb-4 hide-scrollbar">
                {[
                  similarSeries1,
                  similarSeries2,
                  similarSeries3,
                  similarSeries4,
                ].map((img, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 rounded-lg overflow-hidden"
                  >
                    <img
                      src={img}
                      alt={`Similar Series ${index + 1}`}
                      className="object-cover"
                      style={{ width: "160px", height: "100px" }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Similar Series */}
            <div className="hidden md:grid md:grid-cols-4 md:gap-4 md:ml-0">
              {[
                similarSeries1,
                similarSeries2,
                similarSeries3,
                similarSeries4,
              ].map((img, index) => (
                <div key={index} className="rounded-2xl overflow-hidden">
                  <img
                    src={img}
                    alt={`Similar Series ${index + 1}`}
                    className="w-full object-cover"
                    style={{
                      width: "279px",
                      height: "180px",
                      borderRadius: "20px",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 gap-4 mb-12 md:gap-6">
            <div className="py-2">
              <p className="text-sm text-gray-600 mb-2">Uploaded by</p>
              <div className="flex items-center">
                <img
                  src={injureIcon}
                  alt="Injure Picture"
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="font-medium">Injure Picture</span>
              </div>
            </div>

            <div className="py-2">
              <h3 className="text-sm text-gray-600 mb-2">Cast</h3>
              <div className="space-y-1">
                {[
                  ["Chainle Cox", "Matt Murdock"],
                  ["Deborah Ann Wolf", "Karen Page"],
                  ["Jon Bermthal", "Frank Castle"],
                  ["Vincent D'Onofrio", "Kingpin"],
                  ["Elden Henson", "Foggy Nelson"],
                ].map(([name, role], index) => (
                  <p key={index}>
                    {name} <span className="text-gray-600">as {role}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="py-2">
              <h3 className="text-sm text-gray-600 mb-2">Crew</h3>
              <p>
                Matt Corman <span className="text-gray-600">Director</span>
              </p>
            </div>

            <div className="py-2">
              <h3 className="text-sm text-gray-600 mb-2">Audio languages</h3>
              <p>guluj, acuto, sigla, acetopac</p>
            </div>

            <div className="py-2">
              <h3 className="text-sm text-gray-600 mb-2">Tags</h3>
              <p>Violence, Blood, Fighting, Suggestive Scenes, foul language</p>
            </div>

            <div className="py-2">
              <h3 className="text-sm text-gray-600 mb-2">Subtitles</h3>
              <p>English [CC]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSeries;
