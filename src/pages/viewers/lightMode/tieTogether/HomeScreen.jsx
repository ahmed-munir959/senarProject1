import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { Volume2, VolumeX, Play, Pause, Bookmark, Heart } from "lucide-react";

const HomeScreen = ({ portfolioData, onVideoSelect }) => {
  // Parse YouTube ID from URL
  const isYouTubeUrl = (url) => {
    return url?.includes("youtube.com") || url?.includes("youtu.be");
  };

  const parseYouTubeId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url?.match(regExp);
    return match?.[2]?.length === 11 ? match[2] : null;
  };

  // Default YouTube video IDs for sections
  const defaultIDs = [
    ["0xS68sl2D70", "g8KtwLB9UMM", "LeIoaKLG2Js", "cibXW4sZi5k"],
    ["-wzOetb-D3w", "_P_-DGzB9bo", "29O0hjcojCk", "UCo6ytdNy7w"],
    ["Q50jSglX0hA", "uJue4BnVZAo", "p5P0_Or6Z8Q", "5UhnQ2h-5BY"],
  ];

  const generateSections = () => {
    const userVideos = portfolioData?.videoLinks;

    if (userVideos && userVideos.length > 0) {
      return [
        {
          title: "Your Uploads",
          movies: userVideos.slice(0, 4),
          userContent: true,
        },
        { title: "Thriller", movies: Array(4).fill(null) },
        { title: "Adventure", movies: Array(4).fill(null) },
        { title: "Comedy", movies: Array(4).fill(null) },
      ];
    }

    return [
      { title: "Thriller", movies: Array(4).fill(null) },
      { title: "Adventure", movies: Array(4).fill(null) },
      { title: "Comedy", movies: Array(4).fill(null) },
    ];
  };
  const sections = generateSections();

  // States for video interaction
  const [mutedVideos, setMutedVideos] = useState({});
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const [manualState, setManualState] = useState({});
  const playerRefs = useRef({});

  // Get video URL
  const getVideoUrl = (sectionIndex, movieIndex) => {
    const section = sections[sectionIndex];
    if (section.userContent) {
      const url = section.movies[movieIndex];
      if (!url) return "";
      if (isYouTubeUrl(url)) {
        const youtubeId = parseYouTubeId(url);
        return youtubeId ? `https://www.youtube.com/watch?v=${youtubeId}` : "";
      }
      return url;
    }
    const adjustedIndex =
      portfolioData?.videoLinks?.length > 0 ? sectionIndex - 1 : sectionIndex;
    const defaultId = defaultIDs[adjustedIndex]?.[movieIndex] || "";
    return defaultId ? `https://www.youtube.com/watch?v=${defaultId}` : "";
  };

  // Toggle mute state
  const toggleMute = (sectionIndex, movieIndex, e) => {
    e.stopPropagation();
    const key = `${sectionIndex}-${movieIndex}`;
    setMutedVideos((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Hover handlers
  const handleVideoHover = (sectionIndex, movieIndex) => {
    const key = `${sectionIndex}-${movieIndex}`;
    setHoveredMovie(key);
    // Only auto-play if not manually paused
    if (manualState[key] !== false) {
      setCurrentlyPlaying(key);
    }
  };

  const handleVideoLeave = (sectionIndex, movieIndex) => {
    const key = `${sectionIndex}-${movieIndex}`;
    setHoveredMovie(null);
    // Only stop auto-play if not manually playing
    if (manualState[key] !== true) {
      setCurrentlyPlaying(null);
    }
  };

  // Manual play/pause toggle
  const handlePlayPauseClick = (sectionIndex, movieIndex, e) => {
    e.stopPropagation();
    const key = `${sectionIndex}-${movieIndex}`;
    const isPlaying = currentlyPlaying === key;
    if (isPlaying) {
      setManualState((prev) => ({ ...prev, [key]: false }));
      setCurrentlyPlaying(null);
    } else {
      setManualState((prev) => ({ ...prev, [key]: true }));
      setCurrentlyPlaying(key);
    }
  };

  // Collect all videos
  const getAllVideos = () => {
    const videos = [];
    sections.forEach((section, si) => {
      section.movies.forEach((_, mi) => {
        const url = getVideoUrl(si, mi);
        if (url)
          videos.push({
            url,
            title: `${section.title} Movie ${mi + 1}`,
            section: section.title,
            sectionIndex: si,
            movieIndex: mi,
          });
      });
    });
    return videos;
  };

  // Handle video selection
  const handleVideoClick = (sectionIndex, movieIndex) => {
    const url = getVideoUrl(sectionIndex, movieIndex);
    const section = sections[sectionIndex];
    const videoData = {
      url,
      title: `${section.title} Movie ${movieIndex + 1}`,
      description: "Video description placeholder.",
      section: section.title,
      sectionIndex,
      movieIndex,
    };
    onVideoSelect(videoData, getAllVideos());
  };

  return (
    <div className="p-4 md:p-6">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-6 md:mb-10">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">
            {section.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {section.movies.map((_, movieIndex) => {
              const key = `${sectionIndex}-${movieIndex}`;
              const videoUrl = getVideoUrl(sectionIndex, movieIndex);
              const isHovered = hoveredMovie === key;
              const isPlaying = currentlyPlaying === key;
              const isMuted = mutedVideos[key] !== false;

              return (
                <div
                  key={movieIndex}
                  className="relative group cursor-pointer"
                  style={{ zIndex: isHovered ? 50 : 10 }}
                  onMouseEnter={() =>
                    handleVideoHover(sectionIndex, movieIndex)
                  }
                  onMouseLeave={() =>
                    handleVideoLeave(sectionIndex, movieIndex)
                  }
                  onClick={() => handleVideoClick(sectionIndex, movieIndex)}
                >
                  <div className="relative w-full h-32 md:h-44 rounded-lg md:rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 rounded-lg md:rounded-2xl overflow-hidden">
                      <ReactPlayer
                        ref={(player) => {
                          if (player) playerRefs.current[key] = player;
                        }}
                        url={videoUrl}
                        width="100%"
                        height="100%"
                        playing={isPlaying}
                        muted={isMuted}
                        controls={false}
                        playsinline
                        style={{ borderRadius: "inherit" }}
                        onPause={() => {
                          if (currentlyPlaying === key)
                            setCurrentlyPlaying(null);
                        }}
                        config={{
                          youtube: {
                            playerVars: {
                              modestbranding: 1,
                              controls: 0,
                              showinfo: 0,
                              rel: 0,
                              enablejsapi: 1,
                              playsinline: 1,
                              autoplay: 0,
                            },
                            onUnstarted: () => {
                              if (!isPlaying) {
                                const player = playerRefs.current[key];
                                if (player && player.getInternalPlayer())
                                  player.getInternalPlayer().pauseVideo();
                              }
                            },
                          },
                          file: {
                            attributes: {
                              style: {
                                width: "100%",
                                height: "100%",
                                borderRadius: "inherit",
                                objectFit: "cover",
                              },
                              playsInline: true,
                            },
                            forceVideo: true,
                          },
                        }}
                      />
                    </div>
                    <div className="hidden md:group-hover:block absolute bottom-2 right-2">
                      <button
                        className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                        onClick={(e) => toggleMute(sectionIndex, movieIndex, e)}
                      >
                        {isMuted ? (
                          <VolumeX className="w-5 h-5 text-white" />
                        ) : (
                          <Volume2 className="w-5 h-5 text-white" />
                        )}
                      </button>
                    </div>
                  </div>

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
                      <div className="flex items-center space-x-4 mb-3">
                        <button
                          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-800 hover:text-white hover:w-12 hover:h-12 transition-all duration-300"
                          onClick={(e) =>
                            handlePlayPauseClick(sectionIndex, movieIndex, e)
                          }
                        >
                          {isPlaying ? (
                            <Pause className="w-5 h-5" />
                          ) : (
                            <Play className="w-5 h-5" />
                          )}
                        </button>
                        <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-800 hover:text-white hover:w-12 hover:h-12 transition-all duration-300">
                          <Bookmark className="w-5 h-5" />
                        </button>
                        <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-800 hover:text-white hover:w-12 hover:h-12 transition-all duration-300">
                          <Heart className="w-5 h-5" />
                        </button>
                      </div>
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
  );
};

export default HomeScreen;
