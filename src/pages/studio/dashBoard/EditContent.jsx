import React, { useState } from "react";
import { ChevronDown, Edit, ArrowLeft } from "lucide-react";
import senarLogo from "../../../assets/icons/senarLogo.png";
import galiGuleyan from "../../../assets/images/studioDashBoardImages/galiGuleiyan.png";
import ulluzhukku from "../../../assets/images/studioDashBoardImages/ulluzhukku.png";
import kottukkaali from "../../../assets/images/studioDashBoardImages/kottukkaali.png";

const EditContent = ({ video, onBack }) => {
  const [categories, setCategories] = useState([
    "Category 1",
    "Category 2",
    "Category 3",
  ]);
  const [languages, setLanguages] = useState([
    "Language 1",
    "Language 2",
    "Language 3",
  ]);

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* Header Section */}
      <header className="flex items-center justify-between p-2 md:p-4">
        {/* Senar logo - Hidden on mobile */}
        <div className="hidden md:block md:ml-[11vw]">
          <img src={senarLogo} alt="Senar Logo" className="h-16 w-auto" />
        </div>

        {/* Mobile back button */}
        <div className="md:hidden">
          <button className="flex items-center text-gray-700" onClick={onBack}>
            <ArrowLeft size={20} />
          </button>
        </div>

        {/* Profile icon */}
        <div className="md:mr-[18vw]">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-sm">👤</span>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Back button - Hidden on mobile */}
        <div className="hidden md:block p-4">
          <button className="flex items-center text-gray-700" onClick={onBack}>
            <ArrowLeft size={20} />
            <span className="ml-2">Back to content</span>
          </button>
        </div>

        {/* Main content container */}
        <div className="p-4 w-full md:w-[70%] mx-auto md:mx-0 max-w-md md:max-w-none">
          {/* Content details heading */}
          <h1 className="text-2xl font-medium mb-4 md:mb-6">Content details</h1>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Content preview image - Shown at top on mobile */}
            <div className="w-full md:hidden mb-4">
              <div className="rounded-lg overflow-hidden">
                <div className="relative w-full aspect-video">
                  <img
                    src={ulluzhukku}
                    alt="Content Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <button className="w-12 h-12 rounded-full bg-white bg-opacity-60 flex items-center justify-center">
                      <Edit size={24} className="text-purple-700" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Left form section */}
            <div className="flex-1 space-y-4 md:space-y-6">
              {/* Title */}
              <div className="space-y-1 md:space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  defaultValue="Interstellar"
                  className="w-full p-2 md:p-3 border rounded"
                />
              </div>

              {/* Description */}
              <div className="space-y-1 md:space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  className="w-full p-2 md:p-3 border rounded h-24 md:h-32"
                  defaultValue="Quis nulla dolorum repellendus voluptatem. Id ad dolor ipsum delectus sint autem nihil vel laboriosam. Magnam consequatur illum iuta veniam. Nihil architecto doloremque facilis laudantium rem ad."
                />
              </div>

              {/* Category */}
              <div className="space-y-1 md:space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Genres
                </label>
                <div className="relative">
                  <div className="flex items-center border rounded p-2">
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category, index) => (
                        <div
                          key={index}
                          className="bg-purple-100 rounded-full px-3 py-1 text-xs md:text-sm flex items-center"
                        >
                          <span>{category}</span>
                          <div className="w-3 h-3 md:w-4 md:h-4 bg-purple-500 rounded-full ml-1 md:ml-2 flex items-center justify-center text-white text-xs">
                            ✓
                          </div>
                        </div>
                      ))}
                    </div>
                    <ChevronDown size={18} className="ml-auto" />
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="space-y-1 md:space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Languages
                </label>
                <div className="relative">
                  <div className="flex items-center border rounded p-2">
                    <div className="flex flex-wrap gap-2">
                      {languages.map((language, index) => (
                        <div
                          key={index}
                          className="bg-purple-100 rounded-full px-3 py-1 text-xs md:text-sm flex items-center"
                        >
                          <span>{language}</span>
                          <div className="w-3 h-3 md:w-4 md:h-4 bg-purple-500 rounded-full ml-1 md:ml-2 flex items-center justify-center text-white text-xs">
                            ✓
                          </div>
                        </div>
                      ))}
                    </div>
                    <ChevronDown size={18} className="ml-auto" />
                  </div>
                </div>
              </div>

              {/* Thumbnail */}
              <div className="space-y-1 md:space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Thumbnail
                </label>
                <div className="p-0 md:p-2">
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                    <img
                      src={galiGuleyan}
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                      <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white bg-opacity-60 flex items-center justify-center">
                        <Edit size={20} className="text-purple-700" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtitles */}
              <div className="space-y-1 md:space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Subtitles
                </label>
                <div className="border rounded p-2">
                  <div className="flex items-center">
                    <div className="bg-purple-100 rounded-full px-3 py-1 text-xs md:text-sm flex items-center">
                      <span>Subtitle added</span>
                      <div className="w-3 h-3 md:w-4 md:h-4 bg-purple-500 rounded-full ml-1 md:ml-2 flex items-center justify-center text-white text-xs">
                        ✓
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trailer */}
              <div className="space-y-1 md:space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Thumbnail
                </label>
                <div className="p-0 md:p-2">
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                    <img
                      src={kottukkaali}
                      alt="Trailer Preview"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                      <button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white bg-opacity-60 flex items-center justify-center">
                        <Edit size={20} className="text-purple-700" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right preview section - Hidden on mobile */}
            <div className="hidden md:block w-full md:w-80 lg:w-96">
              <div className="rounded-lg overflow-hidden">
                <div className="relative w-full aspect-video">
                  <img
                    src={ulluzhukku}
                    alt="Content Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                    <button className="w-12 h-12 rounded-full bg-white bg-opacity-60 flex items-center justify-center">
                      <Edit size={24} className="text-purple-700" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Save button */}
          <div className="flex justify-center md:justify-end mt-6 md:mt-8">
            <button className="bg-purple-700 text-white w-full md:w-auto px-4 py-3 md:py-2 rounded">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditContent;
