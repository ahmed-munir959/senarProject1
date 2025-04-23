import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";

import ourBlock from "../../../assets/images/singleSeriesImages/ourBlock.png";
import injureIcon from "../../../assets/images/singleSeriesImages/injureIcon.png";
import backArrow from "../../../assets/images/singleMovieImages/backArrow.png";

// Video URLs available for the series
const videoUrls = {
  "Popular Series": [
    "https://youtu.be/aa0TL_iA0KA?si=qcucs4w_zI6eAODQ",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "https://youtu.be/UhvVxMl3OHg?si=GNjhSg-haDuqjiin",
    "https://youtu.be/_QnYtzTU8qs?si=OPKjdm2FucDYCn1m",
  ],
  "Continuing Series": [
    "https://youtu.be/eDzGLZEPEzM?si=nzB7Vn1n6OO84tF_",
    "https://youtu.be/TA0CRcD57Vg?si=H2PrEsZnFBX3Ehtz",
    "https://youtu.be/AM9oeS44RCs?si=hIZU9dr6BJTDpGcE",
    "https://youtu.be/_-5xJQ4U8g0?si=MzBQF265_Q6baXIg",
  ],
  "Completed Series": [
    "https://youtu.be/psRAsLQRdqU?si=PtscBlQo1SVIpuVL",
    "https://youtu.be/9_8Nnh3NVKw?si=bLMQBlsTT_eT0BXW",
    "https://youtu.be/kGtEax1WQFg?si=y6g0ZNltjlXFHEQ_",
    "https://youtu.be/TBIjgBVFjVI?si=036W2YX4gle5sCCd",
  ],
};

// Helper function to extract video ID
const getVideoId = (url) => {
  const ytMatch = url.match(/(?:youtu\.be\/|v=)([^?&]+)/);
  if (ytMatch && ytMatch[1]) return ytMatch[1];
  return url.split("/").pop().split("?")[0];
};

const SingleSeries = () => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [playing, setPlaying] = useState(false);
  // Add this with other state declarations
  const [videoMuted, setVideoMuted] = useState(true);
  const { videoId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { videoUrl, sectionTitle, allVideos } = location.state || {};

  useEffect(() => {
    if (videoUrl) {
      // Auto-play video when a videoUrl is provided (when navigating to this page)
      setPlaying(true);
    }
  }, [videoUrl]);

  const toggleShareModal = () => {
    setShowShareModal(!showShareModal);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    setShowControls(true); // Show controls in fullscreen mode
  };

  const handlePlayClick = () => {
    setShowControls(true); // Add this line
    setPlaying(true);
    if (!isFullscreen) {
      toggleFullscreen();
    }
  };

  const exitFullscreen = () => {
    setIsFullscreen(false);
    setShowControls(false); // Hide controls when exiting fullscreen
    setPlaying(false); // Stop playing when exiting fullscreen
  };
  return (
    <div className="flex flex-col w-full min-h-screen bg-white overflow-x-hidden">
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

      {/* Fullscreen Video Player */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button
            onClick={exitFullscreen}
            className="absolute top-4 left-4 p-2 bg-black bg-opacity-50 text-white rounded-full z-10"
          >
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ReactPlayer
            url={videoUrl || ""}
            width="100%"
            height="100%"
            playing={playing}
            controls={true} // Always show controls in fullscreen
            muted={videoMuted}
            className="w-full h-full"
            config={{
              youtube: {
                playerVars: { modestbranding: 1 },
              },
            }}
          />
        </div>
      )}

      {/* Header */}
      <header
        className={`flex items-start justify-between p-6 md:p-6 ${
          isFullscreen ? "hidden" : ""
        }`}
      >
        <div className="flex items-center w-full md:w-auto">
          {/* Mobile Back Arrow */}
          <div className="md:hidden">
            <a
              href="#"
              className="flex items-center"
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              <img src={backArrow} alt="Back" className="w-4 h-4" />
            </a>
          </div>

          {/* Desktop Logo */}
          <div className="hidden md:block text-purple-800 text-2xl font-bold">
            senar
          </div>

          {/* Desktop Search */}
          <div className="hidden md:block ml-32">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search videos here"
                className="w-full h-12 p-2 pl-10 border rounded-md"
                style={{ width: "419px" }}
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

        {/* Desktop User Icons */}
        <div className="hidden md:flex space-x-4">
          <div className="p-2 rounded-full border">
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
          </div>
          <div className="p-2 rounded-full border">
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
          </div>
        </div>

        {/* Mobile User Menu */}
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

      <div className="flex flex-col md:flex-row w-full">
        {/* Desktop Back Button */}
        <div className="hidden md:block py-4 px-6">
          <a
            href="#"
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600"
          >
            <img src={backArrow} alt="Back" className="w-4 h-4 mr-2" />
            <span>Back to content</span>
          </a>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 w-full px-4 md:px-6">
          {/* Video Player Section */}
          <div className="relative w-full mt-2 rounded-lg overflow-hidden">
            {/* Mobile Video Player */}
            <div
              className="block md:hidden relative w-full"
              style={{ height: "240px" }}
            >
              {videoUrl ? (
                <ReactPlayer
                  url={videoUrl}
                  controls={showControls} // Changed from 'controls'
                  muted={videoMuted} // Add this
                  playing={playing && !isFullscreen} // Only play in this view if not fullscreen
                  width="100%"
                  height="100%"
                  className="rounded-lg"
                  config={{
                    youtube: {
                      playerVars: { modestbranding: 1 },
                    },
                  }}
                />
              ) : (
                <img
                  src={ourBlock}
                  alt="Our Block"
                  className="w-full h-full object-cover rounded-lg"
                />
              )}

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

            {/* Mobile Content Info */}
            <div className="block md:hidden pt-4 pb-6">
              <div className="mb-2">
                <span className="bg-[#E8DFF7] text-black text-xs font-semibold px-3 py-1 rounded-full">
                  4 EPISODES
                </span>
              </div>
              <h1 className="text-2xl font-bold mb-2 text-black">Our Block</h1>

              <div className="flex flex-col space-y-4">
                <button
                  className="bg-purple-700 text-white px-6 py-2 rounded-md flex items-center justify-center w-full"
                  onClick={handlePlayClick}
                >
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

            {/* Desktop Video Player */}
            <div
              className="hidden md:block relative w-full"
              style={{ height: "600px" }}
            >
              {videoUrl ? (
                <ReactPlayer
                  url={videoUrl}
                  controls={showControls} // Changed from 'controls'
                  playing={playing && !isFullscreen} // Only play in this view if not fullscreen
                  muted={videoMuted} // Add this
                  width="100%"
                  height="100%"
                  className="rounded-lg"
                  config={{
                    youtube: {
                      playerVars: { modestbranding: 1 },
                    },
                  }}
                />
              ) : (
                <img
                  src={ourBlock}
                  alt="Our Block"
                  className="w-full h-full object-cover rounded-lg"
                />
              )}

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
                  <button
                    className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md flex items-center"
                    onClick={handlePlayClick}
                  >
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

          {/* Episodes Section */}
          <div className="py-4 md:py-8 w-full">
            <h2 className="text-lg font-semibold mb-4 px-2 md:px-0">
              Episodes
            </h2>

            {/* Episodes List */}
            {(allVideos
              ? allVideos
              : Object.entries(videoUrls).find(
                  ([title]) => title === sectionTitle
                )?.[1] || []
            ).map((url, index) => (
              <div key={index} className="flex flex-col md:flex-row mb-3">
                <div className="md:w-1/3 mb-4 md:mb-0 md:mr-4">
                  <div
                    className="relative w-full rounded-lg cursor-pointer"
                    style={{ height: "180px" }}
                    onClick={() => {
                      navigate(`/viewerlanding/series/${getVideoId(url)}`, {
                        state: {
                          videoUrl: url,
                          sectionTitle,
                          allVideos:
                            allVideos ||
                            Object.entries(videoUrls).find(
                              ([title]) => title === sectionTitle
                            )?.[1],
                        },
                      });
                      setPlaying(true); // Start playing when selecting a new episode
                    }}
                  >
                    <ReactPlayer
                      url={url}
                      width="100%"
                      height="100%"
                      light={true}
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="font-semibold">Episode {index + 1}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    January 17, 2025 · 44min · A
                  </p>
                  <p className="text-sm">
                    {url.includes("youtu") ? "YouTube Video" : "Video Content"}{" "}
                    - Episode {index + 1} of {sectionTitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Similar Series Section */}
          <div className="py-4 md:py-8 w-full">
            <div className="flex justify-between items-center mb-4 px-2 md:px-0">
              <h2 className="text-lg font-semibold">Similar series</h2>
              <a href="#" className="text-sm text-blue-600">
                View all
              </a>
            </div>

            {/* Mobile Similar Series */}
            <div className="md:hidden px-2">
              <div className="flex overflow-x-scroll space-x-4 pb-4 hide-scrollbar">
                {Object.entries(videoUrls)
                  .filter(([title]) => title !== sectionTitle)
                  .flatMap(([title, videos]) => videos.slice(0, 2))
                  .map((url, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => {
                        const newSection =
                          Object.entries(videoUrls).find(([_, videos]) =>
                            videos.includes(url)
                          )?.[0] || sectionTitle;

                        navigate(`/viewerlanding/series/${getVideoId(url)}`, {
                          state: { videoUrl: url, sectionTitle: newSection },
                        });
                        setPlaying(true); // Start playing when selecting a new related video
                      }}
                    >
                      <ReactPlayer
                        url={url}
                        width="160px"
                        height="100px"
                        light={true}
                        className="rounded-lg"
                      />
                    </div>
                  ))}
              </div>
            </div>

            {/* Desktop Similar Series */}
            {/* Desktop Similar Series */}
            <div className="hidden md:grid md:grid-cols-4 md:gap-4">
              {Object.entries(videoUrls)
                .filter(([title]) => title !== sectionTitle)
                .flatMap(([title, videos]) => videos.slice(0, 2)) // Take 2 videos from each section
                .slice(0, 4) // Limit to 4 videos total
                .map((url, index) => (
                  <div
                    key={index}
                    className="rounded-2xl overflow-hidden cursor-pointer"
                    onClick={() => {
                      const newSection =
                        Object.entries(videoUrls).find(([_, videos]) =>
                          videos.includes(url)
                        )?.[0] || sectionTitle;

                      navigate(`/viewerlanding/series/${getVideoId(url)}`, {
                        state: { videoUrl: url, sectionTitle: newSection },
                      });
                    }}
                  >
                    <ReactPlayer
                      url={url}
                      width="100%"
                      height="180px"
                      light={true}
                      className="rounded-2xl"
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

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Share</h3>
            <div className="flex flex-wrap gap-4 mb-6">
              {/* Social media buttons would go here */}
              <button className="bg-blue-500 text-white p-2 rounded-full">
                Facebook
              </button>
              <button className="bg-blue-400 text-white p-2 rounded-full">
                Twitter
              </button>
              <button className="bg-green-500 text-white p-2 rounded-full">
                WhatsApp
              </button>
              <button className="bg-red-500 text-white p-2 rounded-full">
                Email
              </button>
            </div>
            <button
              onClick={toggleShareModal}
              className="w-full bg-gray-200 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleSeries;
