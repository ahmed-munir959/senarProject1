import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  ChevronDown,
  ChevronUp,
  Upload,
  ExternalLink,
  User,
  Plus,
  Settings,
  LogOut,
  MonitorPlay,
} from "lucide-react";

const SearchBar = ({
  currentScreen,
  onUploadClick,
  onImportClick,
  onProfileClick,
  isProfileMenuOpen,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);

  // Handle clicking outside of dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }

      // Handle profile dropdown hide
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        if (isProfileMenuOpen && onProfileClick) {
          onProfileClick();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onProfileClick, isProfileMenuOpen]);

  const handleProfileClick = () => {
    if (onProfileClick && typeof onProfileClick === "function") {
      onProfileClick();
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleUploadButtonClick = () => {
    console.log("Upload clicked in SearchBar!");
    if (onUploadClick && typeof onUploadClick === "function") {
      onUploadClick();
    }
  };
  // ADD this function inside the SearchBar component:
  const handleImportButtonClick = () => {
    console.log("Import clicked in SearchBar!");
    if (onImportClick && typeof onImportClick === "function") {
      onImportClick();
    }
    // Close the dropdown after clicking
    setIsDropdownOpen(false);
  };

  // Determine if search bar should be visible based on current screen
  const showSearch = currentScreen === "home";

  return (
    <div className="flex justify-between items-center p-4 border-b">
      {/* Search bar - only visible on home screen or on desktop */}
      {showSearch ? (
        <div className="relative w-full md:w-1/3">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search videos here"
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
        </div>
      ) : (
        <div className="hidden md:block relative w-1/3">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search videos here"
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
        </div>
      )}

      {/* Desktop Create Button & Dropdown - Hidden on mobile */}
      <div className="hidden md:flex items-center gap-4 ml-auto">
        <div className="relative" ref={dropdownRef}>
          <button
            className="bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-4 rounded-md flex items-center"
            onClick={toggleDropdown}
          >
            Create
            {isDropdownOpen ? (
              <ChevronUp size={16} className="ml-1" />
            ) : (
              <ChevronDown size={16} className="ml-1" />
            )}
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 border">
              <div className="py-3">
                <button
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  onClick={handleImportButtonClick}
                >
                  <Upload size={18} />
                  <div>
                    <div className="font-medium">Upload</div>
                  </div>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                  <ExternalLink size={18} />
                  <div>
                    <div className="font-medium">Import</div>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Desktop user profile with dropdown */}
        <div className="relative" ref={profileDropdownRef}>
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={handleProfileClick}
          >
            <div className="bg-gray-200 p-1 rounded-full">
              <User size={20} className="text-gray-600" />
            </div>
            <ChevronDown size={16} className="text-gray-600" />
          </div>

          {/* Desktop profile dropdown */}
          {isProfileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 border">
              <div className="py-1">
                <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                  <MonitorPlay size={18} />
                  <span>Switch to Viewer</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                  <Settings size={18} />
                  <span>Settings</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
