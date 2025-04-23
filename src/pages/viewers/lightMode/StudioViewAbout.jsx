import React, { useState, useEffect } from "react";
import emailIcon from "../../../assets/icons/studioViewIcons/emailIcon.png";
import mobileIcon from "../../../assets/icons/studioViewIcons/mobileIcon.png";
import videoIcon from "../../../assets/icons/studioViewIcons/videoIcon.png";
import viewIcon from "../../../assets/icons/studioViewIcons/viewIcon.png";
import xIcon from "../../../assets/icons/studioViewIcons/xIcon.png";
import ytIcon from "../../../assets/icons/studioViewIcons/ytIcon.png";
import instaIcon from "../../../assets/icons/studioViewIcons/instaIcon.png";

const StudioViewAbout = ({ isVisible, onClose }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Effect to check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for resize
    window.addEventListener("resize", checkScreenSize);

    // Clean up
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Dark overlay for background */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal - Responsive positioning */}
      <div
        className={`fixed bg-white shadow-lg rounded-2xl z-50 ${
          isMobile ? "w-auto h-[462px]" : "w-[340px] h-[450px]"
        }`}
        style={
          isMobile
            ? {
                left: "8px",
                right: "8px",
                bottom: "8px",
              }
            : {
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }
        }
      >
        <div className="p-4">
          {/* Header with Title and Close Button */}
          <div className="flex justify-between items-center mb-4 border-b border-gray-300 pb-2">
            <h3 className="text-lg font-bold ">About</h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center">
              <img src={emailIcon} alt="Email" className="w-5 h-5 mr-3" />
              <span className="text-sm">studio001@gmail.com</span>
            </div>

            {/* Phone */}
            <div className="flex items-center">
              <img src={mobileIcon} alt="Mobile" className="w-5 h-5 mr-3" />
              <span className="text-sm">+91 9876543210</span>
            </div>

            {/* Videos */}
            <div className="flex items-center">
              <img src={videoIcon} alt="Videos" className="w-5 h-5 mr-3" />
              <span className="text-sm">4,567</span>
            </div>

            {/* Views */}
            <div className="flex items-center">
              <img src={viewIcon} alt="Views" className="w-5 h-5 mr-3" />
              <span className="text-sm">22,707</span>
            </div>

            {/* Stats */}
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
              <span className="text-sm">6,74,706</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mt-6">
            <div className="flex items-center mb-4">
              <img src={ytIcon} alt="YouTube" className="w-5 h-5 mr-3" />
              <span className="text-sm">/studio1official</span>
            </div>

            <div className="flex items-center mb-4">
              <img src={xIcon} alt="X (Twitter)" className="w-5 h-5 mr-3" />
              <span className="text-sm">/studio1official</span>
            </div>

            <div className="flex items-center">
              <img src={instaIcon} alt="Instagram" className="w-5 h-5 mr-3" />
              <span className="text-sm">/studio1official</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-2">
            <button className="flex-1 py-2 border border-red-500 rounded-md text-red-500 text-sm font-medium">
              Report
            </button>
            <button className="flex-1 py-2 border border-gray-400 rounded-md text-gray-700 text-sm font-medium">
              Share
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudioViewAbout;
