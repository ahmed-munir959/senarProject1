import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import {
  Volume2,
  VolumeX,
  Play,
  Bookmark,
  Heart,
  Home,
  Award,
  Film,
  Clock,
  Tv2,
  ShoppingBag,
} from "lucide-react";

const HoverableCard = ({ portfolioData }) => {
  // Genre categories
  const genres = [
    "All",
    "Action",
    "Adventure",
    "Comedy",
    "Crime and mystery",
    "Fantasy",
    "Historical",
    "Horror",
    "Romance",
    "Science fiction",
  ];

  // Default fallback content
  const defaultSections = [
    { title: "Thriller", movies: Array(4).fill(null) },
    { title: "Adventure", movies: Array(4).fill(null) },
    { title: "Comedy", movies: Array(4).fill(null) },
  ];

  // Default video IDs for fallback content
  const defaultIDs = [
    ["0xS68sl2D70", "g8KtwLB9UMM", "LeIoaKLG2Js", "cibXW4sZi5k"],
    ["-wzOetb-D3w", "_P_-DGzB9bo", "29O0hjcojCk", "UCo6ytdNy7w"],
    ["Q50jSglX0hA", "uJue4BnVZAo", "p5P0_Or6Z8Q", "5UhnQ2h-5BY"],
  ];

  // Parse YouTube ID from URL
  const parseYouTubeId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url?.match(regExp);
    return match?.[2]?.length === 11 ? match[2] : null;
  };

  // Generate video IDs matrix
  const generateVideoIDs = () => {
    if (!portfolioData?.videoLinks?.length) return defaultIDs;

    const userVideoIDs = portfolioData.videoLinks
      .slice(0, 4)
      .map(parseYouTubeId)
      .filter(Boolean);

    while (userVideoIDs.length < 4) {
      userVideoIDs.push(defaultIDs[0][userVideoIDs.length]);
    }

    return [userVideoIDs, ...defaultIDs];
  };

  const videoIDs = generateVideoIDs();
  const [mutedVideos, setMutedVideos] = useState({});
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const playerRefs = useRef({});

  // Create sections data structure
  const sections = portfolioData?.videoLinks?.length
    ? [
        {
          title: "Your Uploads",
          movies: portfolioData.videoLinks.slice(0, 4),
        },
        ...defaultSections,
      ]
    : defaultSections;

  // Get video ID for specific section and movie
  const getVideoId = (sectionIndex, movieIndex) => {
    if (sectionIndex === 0 && portfolioData?.videoLinks?.length) {
      return (
        parseYouTubeId(portfolioData.videoLinks[movieIndex]) ||
        defaultIDs[0][movieIndex]
      );
    }
    return videoIDs[sectionIndex]?.[movieIndex] || "";
  };

  // Toggle mute state for specific video
  const toggleMute = (sectionIndex, movieIndex) => {
    const key = `${sectionIndex}-${movieIndex}`;
    setMutedVideos((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Handle hovering on a video
  const handleVideoHover = (sectionIndex, movieIndex) => {
    const key = `${sectionIndex}-${movieIndex}`;

    // Stop previous video if different from current one
    if (currentlyPlaying && currentlyPlaying !== key) {
      setCurrentlyPlaying(null);
    }

    // Start playing this video
    setCurrentlyPlaying(key);
    setHoveredMovie(key);
  };

  // Handle mouse leave on video
  const handleVideoLeave = () => {
    setHoveredMovie(null);
    // Keep video playing when mouse leaves
  };

  // State variables
  const [activeItem, setActiveItem] = useState("Home");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [hoveredMovie, setHoveredMovie] = useState(null);

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
                  <Home className="w-5 h-5 mr-3" />
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
                  <Award className="w-5 h-5 mr-3" />
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
                  <Film className="w-5 h-5 mr-3" />
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
                  <Tv2 className="w-5 h-5 mr-3" />
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
                  <Clock className="w-5 h-5 mr-3" />
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
              <ShoppingBag className="w-5 h-5 mr-3" />
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
            {/* Genre tabs */}
            <div className="px-1 md:px-6 pb-2 md:pb-4 overflow-x-auto md:overflow-x-visible">
              <div className="inline-flex space-x-1 md:space-x-[6px] whitespace-nowrap">
                {genres.map((genre, index) => (
                  <button
                    key={index}
                    className={`py-2 px-3 md:px-6 rounded text-sm font-normal 
                        ${
                          genre === selectedGenre
                            ? "bg-purple-800 text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                    onClick={() => setSelectedGenre(genre)}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>

            {/* Movie sections */}
            <div className="p-4 md:p-6">
              {sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-6 md:mb-10">
                  <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">
                    {section.title}
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                    {section.movies
                      .slice(0, sectionIndex === 3 ? 2 : 4)
                      .map((_, movieIndex) => {
                        const videoId = getVideoId(sectionIndex, movieIndex);
                        const videoKey = `${sectionIndex}-${movieIndex}`;
                        const isHovered = hoveredMovie === videoKey;
                        const isPlaying = currentlyPlaying === videoKey;
                        const isMuted = mutedVideos[videoKey] !== false; // Default to muted

                        return (
                          <div
                            key={movieIndex}
                            className="relative group"
                            style={{ zIndex: isHovered ? 50 : 10 }}
                            onMouseEnter={() =>
                              handleVideoHover(sectionIndex, movieIndex)
                            }
                            onMouseLeave={handleVideoLeave}
                          >
                            {/* Video container with fixed height */}
                            <div className="relative w-full h-32 md:h-44 rounded-lg md:rounded-2xl overflow-hidden">
                              <ReactPlayer
                                ref={(player) => {
                                  if (player) {
                                    playerRefs.current[videoKey] = player;
                                  }
                                }}
                                url={`https://www.youtube.com/watch?v=${videoId}`}
                                width="100%"
                                height="100%"
                                playing={isPlaying}
                                muted={isMuted}
                                controls={false}
                                config={{
                                  youtube: {
                                    playerVars: {
                                      modestbranding: 1,
                                      controls: 0,
                                      showinfo: 0,
                                      rel: 0,
                                      enablejsapi: 1,
                                    },
                                  },
                                }}
                              />
                              {/* Mute button - always visible on hover */}
                              <div className="hidden md:group-hover:block absolute bottom-2 right-2">
                                <button
                                  className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleMute(sectionIndex, movieIndex);
                                  }}
                                >
                                  {isMuted ? (
                                    <VolumeX className="w-5 h-5 text-white" />
                                  ) : (
                                    <Volume2 className="w-5 h-5 text-white" />
                                  )}
                                </button>
                              </div>
                            </div>

                            {/* Hover overlay content - positioned below the image */}
                            {isHovered && (
                              <div
                                className="hidden md:block absolute left-0 right-0 top-full bg-white rounded-lg shadow-lg p-4 z-50"
                                style={{ marginTop: "-1px" }}
                              >
                                <h3 className="font-medium text-xl text-gray-800 mb-1">
                                  {section.title} Movie {movieIndex + 1}
                                </h3>
                                <p className="text-gray-400 text-base mb-2">
                                  UA · 1h 49m · HD
                                </p>

                                {/* Action buttons */}
                                <div className="flex items-center space-x-4 mb-3">
                                  <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-800 hover:w-12 hover:h-12 transition-all duration-300">
                                    <Play className="w-5 h-5" />
                                  </button>
                                  <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-800 hover:w-12 hover:h-12 transition-all duration-300">
                                    <Bookmark className="w-5 h-5" />
                                  </button>
                                  <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-800 hover:w-12 hover:h-12 transition-all duration-300">
                                    <Heart className="w-5 h-5" />
                                  </button>
                                </div>

                                {/* Genre tags */}
                                <p className="text-gray-400 text-base">
                                  {section.title} · Drama · Romantic
                                </p>
                              </div>
                            )}
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
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1">Home</span>
          </a>

          <a
            href="#"
            className={`flex flex-col items-center p-2 ${
              activeItem === "Leaderboard" ? "text-purple-800" : "text-gray-600"
            }`}
            onClick={() => setActiveItem("Leaderboard")}
          >
            <Award className="w-6 h-6" />
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
            <ShoppingBag className="w-6 h-6" />
            <span className="text-xs mt-1">Subscriptions</span>
          </a>

          <a
            href="#"
            className={`flex flex-col items-center p-2 ${
              activeItem === "Movies" ? "text-purple-800" : "text-gray-600"
            }`}
            onClick={() => setActiveItem("Movies")}
          >
            <Film className="w-6 h-6" />
            <span className="text-xs mt-1">Movies</span>
          </a>

          <a
            href="#"
            className={`flex flex-col items-center p-2 ${
              activeItem === "Series" ? "text-purple-800" : "text-gray-600"
            }`}
            onClick={() => setActiveItem("Series")}
          >
            <Tv2 className="w-6 h-6" />
            <span className="text-xs mt-1">Series</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HoverableCard;
