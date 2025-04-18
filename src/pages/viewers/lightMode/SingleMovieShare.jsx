import React from "react";
import copyIcon from "../../../assets/icons/singleMovieShareIcon/copyIcon.png";
import emailIcon from "../../../assets/icons/singleMovieShareIcon/emailIcon.png";
import faceBookIcon from "../../../assets/icons/singleMovieShareIcon/faceBookIcon.png";
import instagramIcon from "../../../assets/icons/singleMovieShareIcon/instagramIcon.png";
import whatsAppIcon from "../../../assets/icons/singleMovieShareIcon/whatsAppIcon.png";
import xIcon from "../../../assets/icons/singleMovieShareIcon/xIcon.png";

const SingleMovieShare = ({ closeModal }) => {
  const handleStopPropagation = (e) => {
    e.stopPropagation();
  };

  const options = [
    { name: "Copy", icon: copyIcon },
    { name: "Email", icon: emailIcon },
    { name: "Instagram", icon: instagramIcon },
    { name: "Whatsapp", icon: whatsAppIcon },
    { name: "Facebook", icon: faceBookIcon },
    { name: "X", icon: xIcon },
  ];

  return (
    <>
      {/* Desktop version (md and above) */}
      <div
        className="hidden md:block bg-white rounded-lg shadow-lg w-full max-w-lg"
        style={{ width: "525px", height: "234px" }}
        onClick={handleStopPropagation}
      >
        <div className="flex justify-between items-center px-6 pt-4 pb-2 border-b">
          <h2 className="text-2xl font-bold">Share</h2>
          <button onClick={closeModal} className="text-2xl font-light">
            &times;
          </button>
        </div>

        <div className="flex justify-around items-center px-6 pt-6">
          {options.map((option) => (
            <div key={option.name} className="flex flex-col items-center">
              <div
                className="rounded-full overflow-hidden flex items-center justify-center mb-2"
                style={{ width: "50px", height: "50px" }}
              >
                <img
                  src={option.icon}
                  alt={option.name}
                  className="w-full h-full"
                />
              </div>
              <span className="text-center text-sm">{option.name}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center px-6 pt-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="start-at-desktop"
              className="w-5 h-5 border-gray-300 rounded"
            />
            <label htmlFor="start-at-desktop" className="ml-2 text-lg">
              Start at
            </label>
          </div>
          <div className="ml-4 flex-grow">
            <input
              type="text"
              placeholder="00:00"
              className="border rounded-lg p-2 w-full"
            />
          </div>
        </div>
      </div>

      {/* Mobile version (below md) - with vertical icon list */}
      <div
        className="md:hidden bg-white rounded-t-lg shadow-lg w-full max-w-sm overflow-hidden"
        style={{ width: "359px", height: "650px" }}
        onClick={handleStopPropagation}
      >
        <div className="flex justify-between items-center px-6 pt-4 pb-2 border-b">
          <h2 className="text-2xl font-bold">Share</h2>
          <button onClick={closeModal} className="text-2xl font-light">
            &times;
          </button>
        </div>

        <div
          className="flex flex-col space-y-6 px-6 py-6 overflow-y-auto"
          style={{ maxHeight: "480px" }}
        >
          {options.map((option) => (
            <div key={option.name} className="flex items-center">
              <div
                className="rounded-full overflow-hidden flex items-center justify-center mr-4"
                style={{ width: "50px", height: "50px" }}
              >
                <img
                  src={option.icon}
                  alt={option.name}
                  className="w-full h-full"
                />
              </div>
              <span className="text-lg">{option.name}</span>
            </div>
          ))}
        </div>

        <div className="px-6 pt-4 pb-8 bg-white border-t">
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="start-at-mobile"
              className="w-5 h-5 border-gray-300 rounded"
            />
            <label htmlFor="start-at-mobile" className="ml-2 text-lg">
              Start at
            </label>
          </div>
          <div className="w-full">
            <input
              type="text"
              placeholder="00:00"
              className="border rounded-lg p-2 w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleMovieShare;
