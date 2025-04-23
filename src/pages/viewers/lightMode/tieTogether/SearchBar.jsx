import React, { useState, useEffect, useRef } from "react";
import { Video } from "lucide-react";
import switchIcon from "../../../../assets/icons/switchIcon.png";
import watchLaterIcon from "../../../../assets/icons/watchLaterIcon.png";
import settingsIcon from "../../../../assets/icons/settingsIcon.png";
import logoutIcon from "../../../../assets/icons/logoutIcon.png";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ mobile, onLaunchStudio }) => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const profileRef = useRef(null);
  const profileButtonRef = useRef(null);
  const navigate = useNavigate();

  // Update the useEffect for click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Check if clicked outside both the dropdown and the button
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target) &&
        profileButtonRef.current &&
        !profileButtonRef.current.contains(e.target)
      ) {
        setShowProfileDropdown(false);
        if (isMobile) document.body.style.overflow = "";
      }
    };

    if (showProfileDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showProfileDropdown, isMobile]);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
    if (isMobile) {
      document.body.style.overflow = !showProfileDropdown ? "hidden" : "";
    }
  };

  const handleLaunchStudio = () => {
    navigate("/studiodashboard");
  };

  if (mobile) {
    return (
      <div className="relative">
        {/* Search Input */}
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
              />
            </svg>
          </span>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Search videos here"
          />
        </div>

        {/* Mobile Profile Section */}
        <div className="mt-2 flex justify-between items-center">
          <button
            className="flex items-center bg-purple-800 text-white px-3 py-2 rounded-md"
            onClick={handleLaunchStudio}
          >
            <Video size={18} className="mr-2" />
            <span>Launch Studio</span>
          </button>

          {/* Mobile Profile Icon */}
          <div className="relative">
            <button
              ref={profileButtonRef}
              className="flex items-center text-gray-700 focus:outline-none"
              onClick={toggleProfileDropdown}
            >
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
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Profile Modal */}
        {showProfileDropdown && isMobile && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-50"
              onClick={toggleProfileDropdown}
            />

            <div
              ref={profileRef}
              className="fixed inset-x-0 bottom-0 rounded-t-lg bg-white shadow-md z-50 animate-slide-up"
              style={{
                fontFamily: "Helvetica Neue",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "120%",
              }}
            >
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Profile Options</h3>
                  <button onClick={toggleProfileDropdown}>
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="space-y-2">
                  <button
                    className="w-full flex items-center p-3 hover:bg-gray-100 rounded-md"
                    onClick={() => {
                      toggleProfileDropdown();
                      navigate("/viewerlanding/studioview");
                    }}
                  >
                    <img
                      src={switchIcon}
                      alt="Switch"
                      className="w-5 h-5 mr-3"
                    />
                    Switch to Studio
                  </button>
                  <button className="w-full flex items-center p-3 hover:bg-gray-100 rounded-md">
                    <img
                      src={watchLaterIcon}
                      alt="Watch Later"
                      className="w-5 h-5 mr-3"
                    />
                    Watch Later
                  </button>
                  <button
                    className="w-full flex items-center p-3 hover:bg-gray-100 rounded-md"
                    onClick={() => {
                      toggleProfileDropdown();
                      navigate("/viewerlanding/account");
                    }}
                  >
                    <img
                      src={settingsIcon}
                      alt="Settings"
                      className="w-5 h-5 mr-3"
                    />
                    Settings
                  </button>
                  <button
                    className="w-full flex items-center p-3 hover:bg-gray-100 rounded-md"
                    onClick={() => {
                      toggleProfileDropdown();
                      navigate("/");
                    }}
                  >
                    <img
                      src={logoutIcon}
                      alt="Logout"
                      className="w-5 h-5 mr-3"
                    />
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  // Desktop Version
  return (
    <div className="px-6 pt-6 pb-4">
      <div className="flex justify-between items-center">
        <div className="relative w-full max-w-xl">
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
              />
            </svg>
          </span>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Search videos here"
          />
        </div>

        <div className="flex items-center ml-4">
          <button
            className="flex items-center bg-purple-800 text-white px-3 py-2 rounded-md mr-4"
            onClick={handleLaunchStudio}
          >
            <Video size={18} className="mr-2" />
            <span>Launch Studio</span>
          </button>

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
              />
            </svg>
          </button>

          <div className="relative">
            <button
              ref={profileButtonRef}
              className="flex items-center text-gray-700 focus:outline-none"
              onClick={toggleProfileDropdown}
            >
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
                  />
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
                />
              </svg>
            </button>

            {/* Desktop Profile Dropdown */}
            {showProfileDropdown && !isMobile && (
              <div
                ref={profileRef}
                className="absolute right-0 mt-2 w-[171px] h-[120px] rounded-lg bg-white shadow-md p-2 border border-[#CCCCCC] z-50"
                style={{
                  fontFamily: "Helvetica Neue",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "120%",
                  color: "#222222",
                }}
              >
                <button
                  className="w-full flex items-center p-2 hover:bg-gray-100 rounded-md"
                  onClick={() => {
                    setShowProfileDropdown(false);
                    navigate("/viewerlanding/studioview");
                  }}
                >
                  <img
                    src={switchIcon}
                    alt="Switch"
                    className="w-5 h-5 mr-2"
                    style={{ width: "20px", height: "20px" }}
                  />
                  Switch to Studio
                </button>
                <button
                  className="w-full flex items-center p-2 hover:bg-gray-100 rounded-md"
                  onClick={() => {
                    toggleProfileDropdown();
                    navigate("/viewerlanding/account");
                  }}
                >
                  <img
                    src={settingsIcon}
                    alt="Settings"
                    className="w-5 h-5 mr-2"
                    style={{ width: "20px", height: "20px" }}
                  />
                  Settings
                </button>
                <button
                  className="w-full flex items-center p-2 hover:bg-gray-100 rounded-md"
                  onClick={() => {
                    toggleProfileDropdown();
                    navigate("/");
                  }}
                >
                  <img
                    src={logoutIcon}
                    alt="Logout"
                    className="w-5 h-5 mr-2"
                    style={{ width: "20px", height: "20px" }}
                  />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
