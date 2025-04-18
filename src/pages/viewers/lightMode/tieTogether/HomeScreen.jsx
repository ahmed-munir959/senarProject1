import React, { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { Volume2, VolumeX, Play, Bookmark, Heart } from "lucide-react";

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

  // const sections = [
  //   { title: "Thriller", movies: Array(4).fill(null) },
  //   { title: "Adventure", movies: Array(4).fill(null) },
  //   { title: "Comedy", movies: Array(4).fill(null) },
  // ];

  // Generate sections based on user videos if available
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
  const playerRefs = useRef({});

  // Get video ID for specific section and movie
  const getVideoUrl = (sectionIndex, movieIndex) => {
    const section = sections[sectionIndex];

    // For user content section, check if it's a YouTube URL or direct URL
    if (section.userContent) {
      const url = section.movies[movieIndex];
      if (!url) return "";

      // If it's a YouTube URL, extract the ID
      if (isYouTubeUrl(url)) {
        const youtubeId = parseYouTubeId(url);
        return youtubeId ? `https://www.youtube.com/watch?v=${youtubeId}` : "";
      }

      // If it's a direct URL, use it as is
      return url;
    }

    // For default content sections, use the defaultIDs as YouTube URLs
    const adjustedIndex =
      portfolioData?.videoLinks?.length > 0 ? sectionIndex - 1 : sectionIndex;
    const defaultId = defaultIDs[adjustedIndex]?.[movieIndex] || "";
    return defaultId ? `https://www.youtube.com/watch?v=${defaultId}` : "";
  };

  // Toggle mute state for specific video
  const toggleMute = (sectionIndex, movieIndex, e) => {
    e.stopPropagation();
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
    setCurrentlyPlaying(null);
  };

  // Function to collect all videos from all sections
  const getAllVideos = () => {
    const videos = [];
    sections.forEach((section, sectionIndex) => {
      section.movies.forEach((_, movieIndex) => {
        const url = getVideoUrl(sectionIndex, movieIndex);
        if (url) {
          videos.push({
            url,
            title: `${section.title} Movie ${movieIndex + 1}`,
            section: section.title,
            sectionIndex,
            movieIndex,
          });
        }
      });
    });
    return videos;
  };
  // Function to handle video click
  const handleVideoClick = (sectionIndex, movieIndex) => {
    const url = getVideoUrl(sectionIndex, movieIndex);
    const section = sections[sectionIndex];

    const videoData = {
      url,
      title: `${section.title} Movie ${movieIndex + 1}`,
      description:
        "Video description placeholder. This would typically come from your video metadata.",
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
              const videoId = parseYouTubeId(
                getVideoUrl(sectionIndex, movieIndex)
              );
              const videoKey = `${sectionIndex}-${movieIndex}`;
              const isHovered = hoveredMovie === videoKey;
              const isPlaying = currentlyPlaying === videoKey;
              const isMuted = mutedVideos[videoKey] !== false; // Default to muted

              return (
                <div
                  key={movieIndex}
                  className="relative group cursor-pointer"
                  style={{ zIndex: isHovered ? 50 : 10 }}
                  onMouseEnter={() =>
                    handleVideoHover(sectionIndex, movieIndex)
                  }
                  onMouseLeave={handleVideoLeave}
                  onClick={() => handleVideoClick(sectionIndex, movieIndex)}
                >
                  {/* Video container with fixed height */}
                  <div className="relative w-full h-32 md:h-44 rounded-lg md:rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 rounded-lg md:rounded-2xl overflow-hidden">
                      <ReactPlayer
                        ref={(player) => {
                          if (player) {
                            playerRefs.current[videoKey] = player;
                          }
                        }}
                        url={getVideoUrl(sectionIndex, movieIndex)}
                        width="100%"
                        height="100%"
                        playing={isPlaying}
                        muted={isMuted}
                        controls={false}
                        playsinline={true}
                        style={{ borderRadius: "inherit" }}
                        onPause={() => {
                          // Force consistent state when player pauses for any reason
                          if (currentlyPlaying === videoKey) {
                            setCurrentlyPlaying(null);
                          }
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
                                // Ensure YouTube player respects our play state
                                const player = playerRefs.current[videoKey];
                                if (player && player.getInternalPlayer()) {
                                  player.getInternalPlayer().pauseVideo();
                                }
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
                    {/* Mute button - always visible on hover */}
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
                        <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-800 hover:text-white hover:w-12 hover:h-12 transition-all duration-300">
                          <Play className="w-5 h-5" />
                        </button>
                        <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-800 hover:text-white hover:w-12 hover:h-12 transition-all duration-300">
                          <Bookmark className="w-5 h-5" />
                        </button>
                        <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-purple-800 hover:text-white hover:w-12 hover:h-12 transition-all duration-300">
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
  );
};

export default HomeScreen;

// import React from "react";

// // Import images
// import thriller1 from "../../../../assets/images/homeImages/thriller1.png";
// import thriller2 from "../../../../assets/images/homeImages/thriller2.png";
// import thriller3 from "../../../../assets/images/homeImages/thriller3.png";
// import thriller4 from "../../../../assets/images/homeImages/thriller4.png";
// import adventure1 from "../../../../assets/images/homeImages/adventure1.png";
// import adventure2 from "../../../../assets/images/homeImages/adventure2.png";
// import adventure3 from "../../../../assets/images/homeImages/adventure3.png";
// import adventure4 from "../../../../assets/images/homeImages/adventure4.png";
// import comedy1 from "../../../../assets/images/homeImages/comedy1.png";
// import comedy2 from "../../../../assets/images/homeImages/comedy2.png";
// import comedy3 from "../../../../assets/images/homeImages/comedy3.png";
// import comedy4 from "../../../../assets/images/homeImages/comedy4.png";

// const HomeScreen = () => {
//   const sections = [
//     {
//       title: "Thriller",
//       movies: Array(4).fill(null),
//     },
//     {
//       title: "Adventure",
//       movies: Array(4).fill(null),
//     },
//     {
//       title: "Comedy",
//       movies: Array(4).fill(null),
//     },
//   ];

//   const getMovieImages = (sectionTitle, index) => {
//     switch (sectionTitle) {
//       case "Thriller":
//         return [thriller1, thriller2, thriller3, thriller4][index];
//       case "Adventure":
//         return [adventure1, adventure2, adventure3, adventure4][index];
//       case "Comedy":
//         return [comedy1, comedy2, comedy3, comedy4][index];
//       default:
//         return thriller1; // Fallback image
//     }
//   };

//   return (
//     <div className="p-4 md:p-6">
//       {sections.map((section, sectionIndex) => (
//         <div key={sectionIndex} className="mb-6 md:mb-10">
//           <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">
//             {section.title}
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
//             {section.movies.map((_, movieIndex) => {
//               const imgSrc = getMovieImages(section.title, movieIndex);
//               return (
//                 <div key={movieIndex} className="relative">
//                   <img
//                     src={imgSrc}
//                     className="w-full h-32 md:h-44 object-cover rounded-lg md:rounded-2xl"
//                     alt={`${section.title} ${movieIndex + 1}`}
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HomeScreen;
