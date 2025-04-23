import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";

const MoviesScreen = ({ onVideoSelect }) => {
  const navigate = useNavigate();

  // List of video URLs (YouTube or direct MP4)
  const videoUrls = [
    "https://youtu.be/aa0TL_iA0KA?si=qcucs4w_zI6eAODQ",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "https://youtu.be/UhvVxMl3OHg?si=GNjhSg-haDuqjiin",
    "https://youtu.be/_QnYtzTU8qs?si=OPKjdm2FucDYCn1m",
    "https://youtu.be/eDzGLZEPEzM?si=nzB7Vn1n6OO84tF_",
    "https://youtu.be/TA0CRcD57Vg?si=H2PrEsZnFBX3Ehtz",
    "https://youtu.be/AM9oeS44RCs?si=hIZU9dr6BJTDpGcE",
    "https://youtu.be/_-5xJQ4U8g0?si=MzBQF265_Q6baXIg",
    "https://youtu.be/psRAsLQRdqU?si=PtscBlQo1SVIpuVL",
    "https://youtu.be/9_8Nnh3NVKw?si=bLMQBlsTT_eT0BXW",
    "https://youtu.be/kGtEax1WQFg?si=y6g0ZNltjlXFHEQ_",
    "https://youtu.be/TBIjgBVFjVI?si=036W2YX4gle5sCCd",
  ];

  // Helper to extract a unique ID from URL
  const getVideoId = (url) => {
    const ytMatch = url.match(/(?:youtu\.be\/|v=)([^?&]+)/);
    if (ytMatch && ytMatch[1]) return ytMatch[1];
    return url.split("/").pop().split("?")[0];
  };

  // Divide into three sections
  const sections = [
    { title: "Movies", videos: videoUrls.slice(0, 4) },
    { title: "Recommended movies", videos: videoUrls.slice(4, 8) },
    { title: "Top movies", videos: videoUrls.slice(8, 12) },
  ];

  return (
    <div className="p-4 md:p-6">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-6 md:mb-10">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">
            {section.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {section.videos.map((url, videoIndex) => (
              <VideoThumbnail
                key={`${getVideoId(url)}-${videoIndex}`}
                url={url}
                onClick={() => {
                  // Create videoData object
                  const videoData = {
                    url: url,
                    title: `Movie ${getVideoId(url)}`,
                    description: "An exciting movie worth watching.",
                    ranking:
                      "#" + Math.floor(Math.random() * 10 + 1) + " Trending",
                    uploader: "Studio XYZ",
                    cast: [
                      { name: "John Doe", role: "Protagonist" },
                      { name: "Jane Smith", role: "Supporting Role" },
                    ],
                    crew: [
                      { name: "Director Bob", role: "Director" },
                      { name: "Cinematographer Alice", role: "DOP" },
                    ],
                    languages: ["English", "Spanish"],
                    tags: ["Action", "Thriller", "2023"],
                    subtitles: ["English", "French"],
                  };

                  // Create collection of similar videos
                  const similarVideos = sections[sectionIndex].videos.map(
                    (videoUrl, idx) => ({
                      url: videoUrl,
                      title: `Similar Movie ${idx + 1}`,
                      description: "Related movie you might enjoy.",
                      sectionIndex: sectionIndex,
                      movieIndex: idx,
                    })
                  );

                  // Pass to parent component
                  onVideoSelect(videoData, similarVideos);

                  // Navigate to movie page
                  const videoId = getVideoId(url);
                  navigate(`/viewerlanding/movies/${videoId}`);
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const VideoThumbnail = ({ url, onClick }) => {
  const [isHovered, setHovered] = useState(false);
  const playerRef = useRef(null);
  const thumbnailRef = useRef(null);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    // Stop video playback when mouse leaves
    const internal = playerRef.current?.getInternalPlayer();
    if (internal && typeof internal.pause === "function") {
      internal.pause();
    }
  };

  // Get thumbnail for YouTube videos
  const getYouTubeThumbnail = (url) => {
    const videoId = url.match(/(?:youtu\.be\/|v=)([^?&]+)/)?.[1];
    return videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : "";
  };

  const isYouTube = url.includes("youtu");

  const handleThumbnailClick = (e) => {
    e.stopPropagation();
    // Call the onClick prop function to handle navigation
    onClick();
  };

  return (
    <div
      className="relative w-full h-32 md:h-44 overflow-hidden rounded-lg md:rounded-2xl cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleThumbnailClick}
      ref={thumbnailRef}
    >
      {/* Default thumbnail for non-hovering state */}
      {!isHovered && (
        <div className="absolute inset-0 bg-black">
          {isYouTube ? (
            <img
              src={getYouTubeThumbnail(url)}
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-white opacity-50"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          )}
        </div>
      )}

      {/* Play video on hover */}
      {(isHovered || isYouTube) && (
        <ReactPlayer
          ref={playerRef}
          url={url}
          playing={isHovered}
          muted={true}
          width="100%"
          height="100%"
          className="absolute top-0 left-0"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none", // Important: prevents ReactPlayer from capturing click events
          }}
          config={{
            file: {
              attributes: {
                preload: "metadata",
                playsInline: true,
                controls: false,
                className: "rounded-lg md:rounded-2xl object-cover",
              },
            },
            youtube: {
              playerVars: {
                modestbranding: 1,
                rel: 0,
                showinfo: 0,
                controls: 0,
                playsinline: 1,
                iv_load_policy: 3,
                origin: window.location.origin,
              },
            },
          }}
        />
      )}

      {/* Play button overlay when hovering */}
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 pointer-events-none">
          <svg
            className="w-12 h-12 text-white opacity-70"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default MoviesScreen;
