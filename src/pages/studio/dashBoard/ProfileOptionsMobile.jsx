import React, { useEffect } from "react";
import { MonitorPlay, Clock, Settings, LogOut, X } from "lucide-react";

const ProfileOptionsMobile = ({ isOpen, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex justify-center items-end pb-2 px-2"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="bg-white rounded-xl w-full max-w-md mx-auto shadow-lg"
        style={{ maxHeight: "70vh" }}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-medium">User</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Handle/pill */}
        <div className="flex justify-center pt-1 -mt-1">
          <div className="w-12 h-1 bg-gray-200 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="p-2">
          <button className="flex items-center gap-3 p-3 w-full text-left hover:bg-gray-100 rounded-lg">
            <div className="text-gray-600">
              <MonitorPlay size={20} />
            </div>
            <span className="text-gray-800">Switch to Viewer</span>
          </button>

          <button className="flex items-center gap-3 p-3 w-full text-left hover:bg-gray-100 rounded-lg">
            <div className="text-gray-600">
              <Clock size={20} />
            </div>
            <span className="text-gray-800">Watch later</span>
          </button>

          <button className="flex items-center gap-3 p-3 w-full text-left hover:bg-gray-100 rounded-lg">
            <div className="text-gray-600">
              <Settings size={20} />
            </div>
            <span className="text-gray-800">Settings</span>
          </button>

          <button className="flex items-center gap-3 p-3 w-full text-left hover:bg-gray-100 rounded-lg">
            <div className="text-gray-600">
              <LogOut size={20} />
            </div>
            <span className="text-gray-800">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileOptionsMobile;
