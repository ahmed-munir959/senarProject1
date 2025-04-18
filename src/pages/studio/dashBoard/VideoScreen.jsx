import React, { useState } from "react";
import {
  MoreVertical,
  Edit,
  ChevronLeft,
  ChevronDown,
  ChevronRight,
  Search,
} from "lucide-react";
import galiGuleyan from "../../../assets/images/studioDashBoardImages/galiGuleiyan.png";
import ulluzhukku from "../../../assets/images/studioDashBoardImages/ulluzhukku.png";
import kottukkaali from "../../../assets/images/studioDashBoardImages/kottukkaali.png";
import allWeImagineAsLight from "../../../assets/images/studioDashBoardImages/allWeImagineAsLight.png";
import dhanak from "../../../assets/images/studioDashBoardImages/dhanak.png";
import cinemaTravells from "../../../assets/images/studioDashBoardImages/cinemaTravells.png";
import massan from "../../../assets/images/studioDashBoardImages/massan.png";
import lunchBox from "../../../assets/images/studioDashBoardImages/lunchBox.png";
import shipOfTheseus from "../../../assets/images/studioDashBoardImages/shipOfTheseus.png";
import frank from "../../../assets/images/studioDashBoardImages/frank.png";

const VideoScreen = ({ onEditVideo }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState("February 2025");

  const videoData = [
    {
      id: 1,
      title: "Gali Guleiyan",
      type: "Movie",
      uploaded: "January 17, 2025",
      views: "6,74,706",
      duration: "1h 45m",
      image: galiGuleyan,
    },
    {
      id: 2,
      title: "Ulluzhukku",
      type: "Movie",
      uploaded: "January 17, 2025",
      views: "6,74,706",
      duration: "1h 45m",
      image: ulluzhukku,
    },
    {
      id: 3,
      title: "Kottukkaali",
      type: "Movie",
      uploaded: "January 17, 2025",
      views: "6,74,706",
      duration: "1h 45m",
      image: kottukkaali,
    },
    {
      id: 4,
      title: "All we imagine as light",
      type: "Movie",
      uploaded: "January 17, 2025",
      views: "6,74,706",
      duration: "1h 45m",
      image: allWeImagineAsLight,
    },
    {
      id: 5,
      title: "Dhanak",
      type: "Movie",
      uploaded: "January 17, 2025",
      views: "6,74,706",
      duration: "1h 45m",
      image: dhanak,
    },
    {
      id: 6,
      title: "Cinema Travellers",
      type: "Movie",
      uploaded: "January 17, 2025",
      views: "6,74,706",
      duration: "1h 45m",
      image: cinemaTravells,
    },
    {
      id: 7,
      title: "Masaan",
      type: "Movie",
      uploaded: "January 17, 2025",
      views: "6,74,706",
      duration: "1h 45m",
      image: massan,
    },
    {
      id: 8,
      title: "Lunchbox",
      type: "Movie",
      uploaded: "January 17, 2025",
      views: "6,74,706",
      duration: "1h 45m",
      image: lunchBox,
    },
    {
      id: 9,
      title: "Ship of Theseus",
      type: "Movie",
      uploaded: "January 17, 2025",
      views: "6,74,706",
      duration: "1h 45m",
      image: shipOfTheseus,
    },
    {
      id: 10,
      title: "Frank",
      type: "Movie",
      uploaded: "January 17, 2025",
      views: "6,74,706",
      duration: "1h 45m",
      image: frank,
    },
  ];

  // Function to handle sort by column
  const handleSort = (column) => {
    // Implement sorting logic here
    console.log(`Sorting by ${column}`);
  };

  return (
    <div className="p-2 md:p-6 pb-16 md:pb-4">
      {/* Header with title and filter - responsive for mobile */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
        <h1 className="text-xl md:text-2xl font-medium">Videos</h1>

        {/* Search Bar - Only for mobile view (shown at top) */}
        <div className="relative w-full md:hidden mb-2">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search videos here"
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
        </div>

        {/* Month Filter - Full width on mobile, normal on desktop */}
        <div className="relative w-full md:w-auto">
          <select
            className="appearance-none bg-white border border-gray-200 rounded-md py-2 px-4 pr-8 text-sm focus:outline-none w-full md:w-auto"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option>Month: February 2025</option>
            <option>Month: January 2025</option>
            <option>Month: December 2024</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <ChevronDown size={16} className="text-gray-500" />
          </div>
        </div>
      </div>

      {/* Videos table/list with horizontal scroll for mobile */}
      <div className="bg-purple-50 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          {/* Table header - Show all columns on all screen sizes */}
          <div
            className="min-w-full grid grid-cols-12 gap-2 bg-purple-100 py-3 px-2 md:px-4"
            style={{ minWidth: "800px" }}
          >
            <div className="col-span-1">
              <input type="checkbox" className="rounded" />
            </div>
            <div
              className="col-span-3 flex items-center gap-1 cursor-pointer"
              onClick={() => handleSort("title")}
            >
              <span className="text-sm font-medium">Title</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 10l5 5 5-5"></path>
              </svg>
            </div>
            <div
              className="col-span-2 flex items-center gap-1 cursor-pointer"
              onClick={() => handleSort("type")}
            >
              <span className="text-sm font-medium">Type</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 10l5 5 5-5"></path>
              </svg>
            </div>
            <div
              className="col-span-2 flex items-center gap-1 cursor-pointer"
              onClick={() => handleSort("uploaded")}
            >
              <span className="text-sm font-medium">Uploaded</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 10l5 5 5-5"></path>
              </svg>
            </div>
            <div
              className="col-span-2 flex items-center gap-1 cursor-pointer"
              onClick={() => handleSort("views")}
            >
              <span className="text-sm font-medium">Views</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 10l5 5 5-5"></path>
              </svg>
            </div>
            <div
              className="col-span-2 flex items-center gap-1 cursor-pointer"
              onClick={() => handleSort("duration")}
            >
              <span className="text-sm font-medium">Duration</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 10l5 5 5-5"></path>
              </svg>
            </div>
          </div>

          {/* Table body - All columns visible with horizontal scroll */}
          <div className="bg-white min-w-full" style={{ minWidth: "800px" }}>
            {videoData.map((video) => (
              <div
                key={video.id}
                className="grid grid-cols-12 gap-2 py-3 px-2 md:px-4 border-b border-gray-100 items-center"
              >
                <div className="col-span-1">
                  <input type="checkbox" className="rounded" />
                </div>
                <div className="col-span-3 flex items-center gap-2 md:gap-3">
                  <img
                    src={video.image}
                    alt={video.title}
                    className="w-8 h-8 md:w-10 md:h-10 object-cover rounded"
                  />
                  <span className="text-xs md:text-sm truncate">
                    {video.title}
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="text-xs md:text-sm">{video.type}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-xs md:text-sm">{video.uploaded}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-xs md:text-sm">{video.views}</span>
                </div>
                <div className="col-span-2 flex justify-between items-center">
                  <span className="text-xs md:text-sm">{video.duration}</span>
                  <div className="flex items-center gap-2">
                    <button
                      className="text-gray-500"
                      onClick={() => onEditVideo(video)}
                    >
                      <Edit size={16} />
                    </button>
                    <button className="text-gray-500">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination - Simplified for mobile */}
      <div className="flex justify-center mt-4 gap-1 md:gap-2">
        <button
          className="p-1 rounded border border-gray-200"
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        >
          <ChevronLeft size={16} />
        </button>
        <button
          className={`px-2 md:px-3 py-1 rounded ${
            currentPage === 1
              ? "bg-purple-100 border border-purple-200"
              : "border border-gray-200"
          }`}
        >
          1
        </button>
        <button
          className={`px-2 md:px-3 py-1 rounded ${
            currentPage === 2
              ? "bg-purple-100 border border-purple-200"
              : "border border-gray-200"
          }`}
        >
          2
        </button>
        <button
          className={`px-2 md:px-3 py-1 rounded ${
            currentPage === 3
              ? "bg-purple-100 border border-purple-200"
              : "border border-gray-200"
          }`}
        >
          3
        </button>
        <span className="flex items-center">...</span>
        <button
          className="p-1 rounded border border-gray-200"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default VideoScreen;
