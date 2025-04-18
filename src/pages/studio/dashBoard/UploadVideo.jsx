import React, { useRef, useState } from "react";
import { X, Upload, Pencil } from "lucide-react";

const UploadVideo = ({ isOpen, onClose }) => {
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [currentStage, setCurrentStage] = useState(0); // 0: Initial upload, 1: Details, 2: Categories, 3: Assets
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const [category, setCategory] = useState("");
  const [genre, setGenre] = useState("");
  const [language, setLanguage] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [trailer, setTrailer] = useState(null);

  if (!isOpen) return null;

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith("video/")) {
        setSelectedFile(file);
        if (currentStage === 0) {
          setCurrentStage(1);
        }
      } else {
        alert("Please upload a video file");
      }
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.type.startsWith("video/")) {
        setSelectedFile(file);
        if (currentStage === 0) {
          setCurrentStage(1);
        }
      } else {
        alert("Please upload a video file");
      }
    }
  };

  const handleThumbnailSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setThumbnail(e.target.files[0]);
    }
  };

  const handleTrailerSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setTrailer(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    if (currentStage === 0) {
      setCurrentStage(1);
    } else {
      fileInputRef.current.click();
    }
  };

  const handleNextClick = () => {
    if (currentStage === 1) {
      const newErrors = {};
      if (!title.trim()) newErrors.title = "Title is required";
      if (!selectedFile) newErrors.file = "Please select a video to upload";
      setErrors(newErrors);
      if (Object.keys(newErrors).length === 0) setCurrentStage(2);
    } else if (currentStage === 2) {
      const newErrors = {};
      if (!category) newErrors.category = "Please select a category";
      if (!genre) newErrors.genre = "Please select a genre";
      if (!language) newErrors.language = "Please select a language";
      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
        setCurrentStage(3); // Set to stage 3 after validations pass
      }
    }
  };

  const handleUpload = () => {
    // Collect all data from previous stages
    const completeData = {
      videoFile: selectedFile,
      title,
      description,
      category,
      genre,
      language,
      thumbnail,
      trailer,
    };

    // Convert to JSON (note: actual File objects won't be stringified properly)
    console.log("Complete upload data:", completeData);
    console.log(
      "JSON data:",
      JSON.stringify(
        {
          ...completeData,
          videoFile: selectedFile ? selectedFile.name : null,
          thumbnail: thumbnail ? thumbnail.name : null,
          trailer: trailer ? trailer.name : null,
        },
        null,
        2
      )
    );

    // Here you would typically make an API call to upload the data
    // onClose(); // Uncomment to close the modal after upload
  };

  // Initial upload screen
  if (currentStage === 0) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-2/4 max-w-screen-lg mx-3 h-3/4 max-h-screen overflow-auto flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center border-b p-4">
            <h2 className="text-lg font-medium">Upload</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div
            className={`flex-1 flex flex-col items-center justify-center p-8 space-y-4 ${
              isDragging ? "bg-gray-100" : ""
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-purple-700">
              <Upload size={32} />
            </div>
            <h3 className="text-lg font-medium text-center">
              Drag and drop video files to upload
            </h3>
            <p className="text-gray-500 text-sm text-center">
              Your videos will be private until you publish them.
            </p>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileSelect}
              accept="video/*"
              className="hidden"
            />
            <button
              onClick={handleUploadClick}
              className="bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-6 rounded-md"
            >
              Upload video
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Stage 1: Details screen
  if (currentStage === 1) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-2/4 max-w-screen-lg mx-3 h-3/4 max-h-screen overflow-auto flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center border-b p-4">
            <h2 className="text-lg font-medium">Details</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="px-4 pt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-700 h-2 rounded-full w-1/3"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 grid grid-cols-3 gap-4">
            {/* Left Column: Form Fields */}
            <div className="col-span-2 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter title of the content"
                  className={`w-full p-2 border rounded-md ${
                    errors.title ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.title && (
                  <p className="text-red-500 text-xs mt-1">{errors.title}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tell viewers about your content"
                  className="w-full p-2 border border-gray-300 rounded-md h-32"
                />
              </div>
            </div>

            {/* Right Column: Video Upload */}
            <div className="col-span-1">
              <div
                className={`h-40 border-2 border-dashed rounded-md flex flex-col items-center justify-center p-4 bg-purple-100 ${
                  isDragging ? "border-purple-500" : "border-gray-300"
                } ${errors.file ? "border-red-500" : ""}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={handleUploadClick}
              >
                {selectedFile ? (
                  <div className="flex flex-col items-center text-center w-full">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-purple-700 mb-2">
                      <Pencil size={20} />
                    </div>
                    <p className="text-sm text-gray-600 truncate w-full max-w-full px-2">
                      {selectedFile.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-purple-700 mb-2">
                      <Upload size={20} />
                    </div>
                    <p className="text-sm text-gray-600">
                      Click or drag to upload
                    </p>
                  </div>
                )}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                  accept="video/*"
                  className="hidden"
                />
              </div>
              {errors.file && (
                <p className="text-red-500 text-xs mt-1">{errors.file}</p>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t p-4 flex justify-end">
            <button
              onClick={handleNextClick}
              className="bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-6 rounded-md"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Stage 2: Categories screen
  if (currentStage === 2) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-2/4 max-w-screen-lg mx-3 h-3/4 max-h-screen overflow-auto flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center border-b p-4">
            <h2 className="text-lg font-medium">Details</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="px-4 pt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-700 h-2 rounded-full w-2/3"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 grid grid-cols-3 gap-4">
            {/* Left Column: Form Fields */}
            <div className="col-span-2 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category <span className="text-red-500">*</span>
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={`w-full p-2 border rounded-md ${
                    errors.category ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="" disabled hidden>
                    Select a category
                  </option>
                  <option
                    value="education"
                    className="font-light text-gray-500"
                  >
                    Education
                  </option>
                  <option
                    value="entertainment"
                    className="font-light text-gray-500"
                  >
                    Entertainment
                  </option>
                  <option value="gaming" className="font-light text-gray-500">
                    Gaming
                  </option>
                </select>
                {errors.category && (
                  <p className="text-red-500 text-xs mt-1">{errors.category}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Genres <span className="text-red-500">*</span>
                </label>
                <select
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  className={`w-full p-2 border rounded-md ${
                    errors.genre ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="" disabled hidden>
                    Select a genre
                  </option>
                  <option value="comedy" className="font-light text-gray-500">
                    Comedy
                  </option>
                  <option
                    value="documentary"
                    className="font-light text-gray-500"
                  >
                    Documentary
                  </option>
                  <option value="tutorial" className="font-light text-gray-500">
                    Tutorial
                  </option>
                </select>
                {errors.genre && (
                  <p className="text-red-500 text-xs mt-1">{errors.genre}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Languages <span className="text-red-500">*</span>
                </label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className={`w-full p-2 border rounded-md ${
                    errors.language ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="" disabled hidden>
                    Select a language
                  </option>
                  <option value="english" className="font-light text-gray-500">
                    English
                  </option>
                  <option value="spanish" className="font-light text-gray-500">
                    Spanish
                  </option>
                  <option value="french" className="font-light text-gray-500">
                    French
                  </option>
                </select>
                {errors.language && (
                  <p className="text-red-500 text-xs mt-1">{errors.language}</p>
                )}
              </div>
            </div>

            {/* Right Column: Video Preview */}
            <div className="col-span-1">
              <div className="h-40 border-2 border-dashed rounded-md flex flex-col items-center justify-center p-4 bg-purple-100 border-gray-300">
                <div className="flex flex-col items-center text-center w-full">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-purple-700 mb-2">
                    <Pencil size={20} />
                  </div>
                  <p className="text-sm text-gray-600 truncate w-full max-w-full px-2">
                    {selectedFile?.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {selectedFile
                      ? (selectedFile.size / (1024 * 1024)).toFixed(2) + " MB"
                      : ""}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t p-4 flex justify-end">
            <button
              onClick={handleNextClick}
              className="bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-6 rounded-md"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Stage 3: Upload Assets screen
  if (currentStage === 3) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg w-2/4 max-w-screen-lg mx-3 h-3/4 max-h-screen overflow-auto flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center border-b p-4">
            <h2 className="text-lg font-medium">Upload Assets</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="px-4 pt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-700 h-2 rounded-full w-full"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 grid grid-cols-3 gap-4">
            {/* Left Column: Form Fields */}
            <div className="col-span-2 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Thumbnail
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center h-32">
                  <input
                    type="file"
                    id="thumbnail-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleThumbnailSelect}
                  />
                  <label
                    htmlFor="thumbnail-upload"
                    className="cursor-pointer text-center"
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-purple-700">+ Upload Image</span>
                      <span className="text-xs text-gray-500 mt-2">
                        Make your thumbnail 1280 by 720 pixels (16:9 ratio)
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="" disabled hidden>
                    Select a category
                  </option>
                  <option
                    value="education"
                    className="font-light text-gray-500"
                  >
                    Education
                  </option>
                  <option
                    value="entertainment"
                    className="font-light text-gray-500"
                  >
                    Entertainment
                  </option>
                  <option value="gaming" className="font-light text-gray-500">
                    Gaming
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Trailer
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center h-32">
                  <input
                    type="file"
                    id="trailer-upload"
                    className="hidden"
                    accept="video/*"
                    onChange={handleTrailerSelect}
                  />
                  <label
                    htmlFor="trailer-upload"
                    className="cursor-pointer text-center"
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-purple-700">+ Upload Image</span>
                      <span className="text-xs text-gray-500 mt-2">
                        Make your thumbnail 1280 by 720 pixels (16:9 ratio)
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Column: Video Preview */}
            <div className="col-span-1">
              <div className="bg-purple-100 rounded-md p-4 h-40 flex items-center justify-center">
                {selectedFile && (
                  <div className="flex flex-col items-center text-center w-full">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-purple-700 mb-2">
                      <Pencil size={20} />
                    </div>
                    <p className="text-sm text-gray-600 truncate w-full max-w-full px-2">
                      {selectedFile.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t p-4 flex justify-end">
            <button
              onClick={handleUpload}
              className="bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-6 rounded-md"
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default UploadVideo;
