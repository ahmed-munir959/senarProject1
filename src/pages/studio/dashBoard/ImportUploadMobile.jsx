import React, { useEffect } from "react";
import { MonitorSmartphone, X } from "lucide-react";

const ImportUploadMobile = ({ isOpen, onClose }) => {
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
        className="bg-white rounded-t-xl w-full max-w-md mx-auto shadow-lg"
        style={{ maxHeight: "70vh" }}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-medium">Create</h2>
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
        <div className="flex flex-col items-center justify-center p-8">
          <div className="bg-blue-50 p-3 rounded-full mb-4">
            <MonitorSmartphone size={24} className="text-gray-600" />
          </div>
          <h3 className="text-lg font-medium mb-2">Cannot create from phone</h3>
          <p className="text-gray-500 text-center">
            Please use a desktop or laptop to create your content!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImportUploadMobile;
