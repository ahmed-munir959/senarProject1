import { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import {
  ChevronLeft,
  Play,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";
import latestUploads1 from "../../../assets/images/studioViewImages/latestUploads1.png";
import latestUploads2 from "../../../assets/images/studioViewImages/latestUploads2.png";
import latestUploads3 from "../../../assets/images/studioViewImages/latestUploads3.png";
import latestUploads4 from "../../../assets/images/studioViewImages/latestUploads4.png";

const PlayContent = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [playing, setPlaying] = useState(true);

  // Check screen size on mount and when window is resized
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint in Tailwind
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const castMembers = [
    { name: "Charlie Cox", role: "Matt Murdock" },
    { name: "Deborah Ann Woll", role: "Karen Page" },
    { name: "Jon Bernthal", role: "Frank Castle" },
    { name: "Vincent D'Onofrio", role: "Kingpin" },
    { name: "Elden Henson", role: "Foggy Nelson" },
  ];

  const crewMembers = [{ role: "Director", name: "Matt Corman" }];

  const tags = [
    "Violence",
    "Blood",
    "Fighting",
    "Suggestive Scenes",
    "Foul Language",
  ];
  const audioLanguages = ["guluj", "acuto", "sigla", "acetopac"];

  // Content section that's the same for both mobile and desktop
  const renderContentInfo = () => (
    <div
      className={`${
        isMobile
          ? "bg-white text-black p-4"
          : "bg-white rounded-lg shadow-md p-6"
      }`}
    >
      <h1 className={`${isMobile ? "text-2xl" : "text-3xl"} font-bold mb-2`}>
        Gali Guleiyan
      </h1>
      <p
        className={`${
          isMobile ? "text-gray-500 text-sm" : "text-gray-700"
        } mb-4`}
      >
        Quam a laudantium similique quis odio temporibus exercitaut. Et quispiam
        perspiciatis et vel vel at magni architecto. Iure quae illum aut rerum
        dolore quaerat praesentium et quia. Nihil ex fugit inventium porro.
        Suscipit minima natus aut perspiciatis. Tenetur consequatur velit sit
        adipisim sint et voluptate animi. Voluptates aliquod laboriosam natus
        rem quam aut.
      </p>

      {/* Similar content */}
      <div className="mb-6">
        <h2
          className={`${isMobile ? "text-lg" : "text-xl"} font-semibold mb-2`}
        >
          Similar contents
        </h2>
        <div className="flex overflow-x-auto gap-2">
          <img
            src={latestUploads1}
            alt="Similar content"
            className={`${
              isMobile ? "w-24 h-24" : "w-44 h-44"
            } object-cover rounded`}
          />
          <img
            src={latestUploads2}
            alt="Similar content"
            className={`${
              isMobile ? "w-24 h-24" : "w-44 h-44"
            } object-cover rounded`}
          />
          <img
            src={latestUploads3}
            alt="Similar content"
            className={`${
              isMobile ? "w-24 h-24" : "w-44 h-44"
            } object-cover rounded`}
          />
          <img
            src={latestUploads4}
            alt="Similar content"
            className={`${
              isMobile ? "w-24 h-24" : "w-44 h-44"
            } object-cover rounded`}
          />
        </div>
      </div>

      {/* Uploaded by */}
      <div className="flex items-center gap-2 mb-6">
        <p className="text-sm text-gray-500">Uploaded by</p>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">
            B&W
          </div>
          <span className="font-medium">B&W Studio</span>
        </div>
      </div>

      {/* Cast */}
      <div className="mb-6">
        <h2
          className={`${isMobile ? "text-lg" : "text-xl"} font-semibold mb-2`}
        >
          Cast
        </h2>
        <ul className="space-y-1">
          {castMembers.map((member, index) => (
            <li key={index} className="text-sm">
              {member.name} as {member.role}
            </li>
          ))}
        </ul>
      </div>

      {/* Crew */}
      <div className="mb-6">
        <h2
          className={`${isMobile ? "text-lg" : "text-xl"} font-semibold mb-2`}
        >
          Crew
        </h2>
        <ul className="space-y-1">
          {crewMembers.map((member, index) => (
            <li key={index} className="text-sm">
              {member.name} {member.role}
            </li>
          ))}
        </ul>
      </div>

      {/* Audio languages */}
      <div className="mb-6">
        <h2
          className={`${isMobile ? "text-lg" : "text-xl"} font-semibold mb-2`}
        >
          Audio languages
        </h2>
        <div className="flex flex-wrap gap-2">
          {audioLanguages.map((language, index) => (
            <span key={index} className="text-sm">
              {language}
              {index < audioLanguages.length - 1 ? "," : ""}
            </span>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="mb-6">
        <h2
          className={`${isMobile ? "text-lg" : "text-xl"} font-semibold mb-2`}
        >
          Tags
        </h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`${
                isMobile
                  ? "text-sm"
                  : "bg-gray-100 px-3 py-1 rounded-full text-sm"
              }`}
            >
              {tag}
              {isMobile && index < tags.length - 1 ? "," : ""}
            </span>
          ))}
        </div>
      </div>

      {/* Subtitles */}
      <div className="mb-6">
        <h2
          className={`${isMobile ? "text-lg" : "text-xl"} font-semibold mb-2`}
        >
          Subtitles
        </h2>
        <p className="text-sm">English [CC]</p>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      {isMobile ? (
        // Mobile view similar to image
        <div className="w-full bg-black text-white">
          {/* Video player control bar */}
          <div className="relative">
            <div className="absolute top-4 left-4 z-10">
              <ChevronLeft size={24} />
            </div>

            <div className="w-full h-64 bg-gray-800 flex items-center justify-center">
              <div className="text-white">
                <Play size={48} />
              </div>
            </div>

            {/* Player controls */}
            <div className="px-4 py-2 flex items-center justify-between">
              <SkipBack size={20} />
              <Play size={20} />
              <SkipForward size={20} />
              <Volume2 size={20} />

              {/* Progress bar */}
              <div className="flex-1 px-4">
                <div className="h-1 w-full bg-gray-700 rounded-full">
                  <div className="h-1 bg-purple-600 rounded-full w-1/4"></div>
                </div>
              </div>

              <span className="text-xs">01:57:00</span>
            </div>

            {/* Trending badge */}
            <div className="absolute top-4 right-4 bg-red-600 text-white text-xs px-2 py-1 rounded">
              #1 in India
            </div>
          </div>

          {/* Content info */}
          {renderContentInfo()}
        </div>
      ) : (
        // Desktop view with react-player
        <div className="container mx-auto p-4">
          <div className="mb-8">
            <ReactPlayer
              url="https://youtu.be/p3uBMqCPSDk?si=5Acam8uZQ-vNIff2"
              width="100%"
              height="500px"
              playing={playing}
              controls={true}
              onReady={() => setPlaying(true)}
            />
          </div>

          {/* Content info - same as mobile but styled for desktop */}
          {renderContentInfo()}
        </div>
      )}
    </div>
  );
};

export default PlayContent;
