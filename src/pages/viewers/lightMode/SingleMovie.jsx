import React, { useState } from "react";
import ReactPlayer from "react-player";
import backArrow from "../../../assets/images/singleMovieImages/backArrow.png";
import bwIcon from "../../../assets/images/singleMovieImages/bwIcon.png";
import SingleMovieShare from "./SingleMovieShare";

const SingleMovie = ({
  videoData,
  similarVideos,
  onBackClick,
  onVideoSelect,
}) => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(false); // New state for controls visibility

  const toggleShareModal = () => {
    setShowShareModal(!showShareModal);
  };

  const toggleMute = () => {
    setVideoMuted(!videoMuted);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    setShowControls(true); // Show controls in fullscreen mode
  };

  const handlePlayClick = () => {
    setShowControls(true); // Show controls when Play button is clicked
    if (!isFullscreen) {
      toggleFullscreen();
    }
  };

  const getSimilarVideos = () => {
    if (!videoData || !similarVideos) return [];
    return similarVideos.slice(0, 4);
  };

  const exitFullscreen = () => {
    setIsFullscreen(false);
    setShowControls(false); // Hide controls when exiting fullscreen
  };

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
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
            url={videoData?.url || ""}
            width="100%"
            height="100%"
            playing={true}
            muted={videoMuted}
            controls={true} // Always show controls in fullscreen
            className="w-full h-full"
          />
        </div>
      )}

      {showShareModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-50 flex md:items-center justify-center items-end"
          onClick={toggleShareModal}
        >
          <SingleMovieShare closeModal={toggleShareModal} />
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
                onBackClick();
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

      {/* Main Content */}
      <div
        className={`flex flex-col md:flex-row overflow-visible ${
          isFullscreen ? "hidden" : ""
        }`}
      >
        {/* Desktop Back Link */}
        <div className="hidden md:block py-4 px-6">
          <a
            href="#"
            className="flex items-center text-gray-600"
            onClick={(e) => {
              e.preventDefault();
              onBackClick();
            }}
          >
            <img src={backArrow} alt="Back" className="w-4 h-4 mr-2" />
            <span>Back to content</span>
          </a>
        </div>

        {/* Video Content */}
        <div className="flex-1 px-4 md:px-0 md:ml-8 md:pr-6">
          {/* Video Player */}
          <div className="relative mt-2 rounded-lg overflow-hidden">
            {/* Mobile Player */}
            <div
              className="block md:hidden relative w-full"
              style={{ height: "240px" }}
            >
              <ReactPlayer
                url={videoData?.url || ""}
                width="100%"
                height="100%"
                playing={true}
                muted={videoMuted}
                controls={showControls} // Show controls conditionally
                style={{ borderRadius: "0.5rem" }}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-2 right-2"></div>
            </div>

            {/* Desktop Player */}
            <div
              className="hidden md:block relative w-full"
              style={{ height: "600px" }}
            >
              <ReactPlayer
                url={videoData?.url || ""}
                width="100%"
                height="100%"
                playing={true}
                muted={videoMuted}
                controls={showControls} // Show controls conditionally
                style={{ maxWidth: "1080px", borderRadius: "0.5rem" }}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-6 right-6"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="mb-4">
                  <span className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full">
                    {videoData?.ranking || "#1 in India"}
                  </span>
                </div>
                <h1 className="text-4xl font-bold mb-2">
                  {videoData?.title || "Video Title"}
                </h1>
                <p className="text-sm max-w-xl mb-6">
                  {videoData?.description || "Video description unavailable."}
                </p>
                <div className="flex space-x-3 items-center">
                  <button
                    className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-md flex items-center"
                    onClick={handlePlayClick} // Updated to use handlePlayClick
                  >
                    <span className="bg-white rounded-full p-1 mr-2">
                      <svg
                        className="w-4 h-4 text-purple-700"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    Play
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full">
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
                  <button className="bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full">
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
                        d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2"
                      />
                    </svg>
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full">
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
                  </button>
                  <button
                    className="bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full"
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

          {/* Mobile Content */}
          <div className="md:hidden mt-4 px-2">
            <div className="mb-2">
              <span className="bg-[#E8DFF7] text-black text-xs font-semibold px-3 py-1 rounded-full">
                {videoData?.ranking || "#1 in India"}
              </span>
            </div>
            <h1 className="text-2xl font-bold mb-2">
              {videoData?.title || "Video Title"}
            </h1>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden mt-4">
            <button
              className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-md flex items-center justify-center mb-4"
              onClick={handlePlayClick} // Updated to use handlePlayClick
            >
              <span className="bg-white rounded-full p-1 mr-2">
                <svg
                  className="w-4 h-4 text-purple-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Play
            </button>
            <div className="flex justify-around mb-6">
              <button className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-1">
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
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                </div>
                <span className="text-xs">Like</span>
              </button>
              <button className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-1">
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
                      d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2"
                    />
                  </svg>
                </div>
                <span className="text-xs">Not for me</span>
              </button>
              <button className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-1">
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
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-1">
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
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                    />
                  </svg>
                </div>
                <span className="text-xs">Share</span>
              </button>
            </div>
          </div>

          {/* Mobile Description */}
          <div className="md:hidden px-2 mb-6">
            <p className="text-sm text-gray-700">
              {videoData?.description || "Video description unavailable."}
            </p>
          </div>

          {/* Similar Videos Section */}
          <div className="py-4 md:py-8">
            <div className="flex justify-between items-center mb-4 px-2 md:px-0 md:pr-8">
              <h2 className="text-lg font-semibold">Similar movies</h2>
              <a
                href="#"
                className="text-sm text-blue-600"
                onClick={(e) => {
                  e.preventDefault();
                  onBackClick();
                }}
              >
                View all
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 px-2 md:hidden">
              {getSimilarVideos().map((video, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => {
                    // Create deep clones to avoid reference issues
                    const previousMainVideo = JSON.parse(
                      JSON.stringify(videoData)
                    );

                    // Ensure each video has stable identifiers we can use for comparisons
                    if (!previousMainVideo.uniqueId) {
                      previousMainVideo.uniqueId = `video-${Date.now()}-${Math.random()
                        .toString(36)
                        .substr(2, 9)}`;
                    }

                    // Create a deep clone of the clicked video
                    const newVideoData = JSON.parse(JSON.stringify(video));

                    // Ensure proper metadata
                    newVideoData.title = newVideoData.title || "Video Title";
                    newVideoData.description =
                      newVideoData.description ||
                      "Video description placeholder.";

                    // Assign a unique ID if it doesn't have one
                    if (!newVideoData.uniqueId) {
                      newVideoData.uniqueId = `video-${Date.now()}-${Math.random()
                        .toString(36)
                        .substr(2, 9)}`;
                    }

                    // Create a fresh deep copy of the similarVideos array
                    const updatedSimilarVideos = JSON.parse(
                      JSON.stringify(similarVideos)
                    );

                    // Remove the clicked video from suggestions by uniqueId if available, otherwise by URL+indices
                    let clickedVideoIndex = -1;

                    if (newVideoData.uniqueId) {
                      clickedVideoIndex = updatedSimilarVideos.findIndex(
                        (v) => v.uniqueId === newVideoData.uniqueId
                      );
                    }

                    if (clickedVideoIndex === -1) {
                      clickedVideoIndex = updatedSimilarVideos.findIndex(
                        (v) =>
                          v.url === newVideoData.url &&
                          v.sectionIndex === newVideoData.sectionIndex &&
                          v.movieIndex === newVideoData.movieIndex
                      );
                    }

                    if (clickedVideoIndex !== -1) {
                      updatedSimilarVideos.splice(clickedVideoIndex, 1);
                    }

                    // Ensure we don't add duplicates of the previous main video
                    const existingPrevIndex = updatedSimilarVideos.findIndex(
                      (v) =>
                        (v.uniqueId &&
                          v.uniqueId === previousMainVideo.uniqueId) ||
                        (v.url === previousMainVideo.url &&
                          v.sectionIndex === previousMainVideo.sectionIndex &&
                          v.movieIndex === previousMainVideo.movieIndex)
                    );

                    if (existingPrevIndex !== -1) {
                      updatedSimilarVideos.splice(existingPrevIndex, 1);
                    }

                    // Add previous main video to suggestions at the beginning
                    updatedSimilarVideos.unshift(previousMainVideo);

                    // Keep only 4 videos in the suggestions
                    const finalSimilarVideos = updatedSimilarVideos.slice(0, 4);

                    // Pass the updated data to parent
                    onVideoSelect(newVideoData, finalSimilarVideos);
                  }}
                >
                  <ReactPlayer
                    url={video.url}
                    width="100%"
                    height="100px"
                    playing={false}
                    muted={true}
                    controls={false}
                    className="w-full object-cover"
                    light={true}
                  />
                </div>
              ))}
            </div>

            <div className="hidden md:grid md:grid-cols-4 md:gap-4">
              {getSimilarVideos().map((video, index) => (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => {
                    const previousMainVideo = { ...videoData };

                    const newVideoData = {
                      ...video,
                      title: video.title,
                      description:
                        video.description || "Video description placeholder.",
                    };

                    const updatedSimilarVideos = [...similarVideos];

                    const clickedVideoIndex = updatedSimilarVideos.findIndex(
                      (v) =>
                        v.url === video.url &&
                        v.sectionIndex === video.sectionIndex &&
                        v.movieIndex === video.movieIndex
                    );

                    // Remove clicked video if found
                    if (clickedVideoIndex !== -1) {
                      updatedSimilarVideos.splice(clickedVideoIndex, 1);
                    }

                    // Add previous main video to suggestions
                    updatedSimilarVideos.unshift(previousMainVideo);

                    // Keep only 4 videos in the suggestions
                    const finalSimilarVideos = updatedSimilarVideos.slice(0, 4);

                    // Call the original onVideoSelect with updated lists
                    onVideoSelect(newVideoData, finalSimilarVideos);
                  }}
                >
                  <ReactPlayer
                    url={video.url}
                    width="279px"
                    height="180px"
                    playing={false}
                    muted={true}
                    controls={false}
                    style={{ borderRadius: "20px" }}
                    className="w-full object-cover"
                    light={true}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info Sections */}
          <div className="grid grid-cols-1 gap-4 mb-12 px-2 md:px-0 md:gap-6">
            {/* Uploader Section */}
            {videoData?.uploader && (
              <div className="py-2">
                <p className="text-sm text-gray-600 mb-2">Uploaded by</p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-black rounded-full mr-2 flex items-center justify-center text-white text-xs">
                    <img
                      src={bwIcon}
                      alt="Uploader"
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <span className="font-medium">{videoData.uploader}</span>
                </div>
              </div>
            )}

            {/* Dynamic Cast Section */}
            {videoData?.cast && (
              <div className="py-2">
                <h3 className="text-sm text-gray-600 mb-2">Cast</h3>
                <div className="space-y-1">
                  {videoData.cast.map((actor, index) => (
                    <p key={index}>
                      {actor.name}{" "}
                      <span className="text-sm text-gray-600">
                        as {actor.role}
                      </span>
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Dynamic Crew Section */}
            {videoData?.crew && (
              <div className="py-2">
                <h3 className="text-sm text-gray-600 mb-2">Crew</h3>
                <div>
                  {videoData.crew.map((member, index) => (
                    <p key={index}>
                      {member.name}{" "}
                      <span className="text-sm text-gray-600">
                        {member.role}
                      </span>
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Languages */}
            {videoData?.languages && (
              <div className="py-2">
                <h3 className="text-sm text-gray-600 mb-2">Audio languages</h3>
                <div>
                  <p>{videoData.languages.join(", ")}</p>
                </div>
              </div>
            )}

            {/* Tags */}
            {videoData?.tags && (
              <div className="py-2">
                <h3 className="text-sm text-gray-600 mb-2">Tags</h3>
                <div>
                  <p>{videoData.tags.join(", ")}</p>
                </div>
              </div>
            )}

            {/* Subtitles */}
            {videoData?.subtitles && (
              <div className="py-2">
                <h3 className="text-sm text-gray-600 mb-2">Subtitles</h3>
                <div>
                  <p>{videoData.subtitles.join(", ")}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
