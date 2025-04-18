import { useState, useRef } from "react";
import SenarLogo from "../../../assets/images/senarImage.png";
import backArrow from "../../../assets/images/backArrow.png";
import SenarLogoComponent from "../../../components/SenarLogoComponent";

const CombinedStudioOnBoarding = (props) => {
  const [progressStage, setProgressStage] = useState(1);
  const progressPercentage = Math.round((progressStage / 3) * 100); // Now 3 stages

  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [category, setCategory] = useState("");
  const [about, setAbout] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [stage1ErrorMessage, setStage1ErrorMessage] = useState("");

  // Stage 2 state (from OnBoarding2)
  const [showreelMobileFile, setShowreelMobileFile] = useState(null);
  const [showreelMobileError, setShowreelMobileError] = useState("");
  const [showreelDesktopFiles, setShowreelDesktopFiles] = useState([
    null,
    null,
  ]);
  const [showreelDesktopErrors, setShowreelDesktopErrors] = useState(["", ""]);
  const [filmographyFiles, setFilmographyFiles] = useState([null, null]);
  const [filmographyErrors, setFilmographyErrors] = useState(["", ""]);
  const [stage2ErrorMessage, setStage2ErrorMessage] = useState("");
  const [youtubeLinks, setYoutubeLinks] = useState(["", ""]);
  const [linkErrors, setLinkErrors] = useState(["", ""]);

  // Validation function for YouTube URLs
  const validateVideoLink = (url) => {
    // Basic URL validation
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  };

  // Stage 3 state (from OnBoarding3)
  const [isChecked, setIsChecked] = useState(false);

  const fileInputRef = useRef(null);

  // Common handlers
  const handleBack = () => {
    if (progressStage > 1) {
      setProgressStage(progressStage - 1);
    }
  };

  // Stage 1 handlers
  const handleContinueStage1 = () => {
    if (!name.trim() || !website.trim() || !category.trim()) {
      setStage1ErrorMessage("Please fill in all required fields");
      return;
    }
    setStage1ErrorMessage("");
    setProgressStage(2);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setStage1ErrorMessage("");
    setUploadedFile(null);

    if (file.size > 4 * 1024 * 1024) {
      setStage1ErrorMessage("File size exceeds 4MB");
      return;
    }

    const img = new Image();
    img.onload = () => {
      if (img.width < 98 || img.height < 98) {
        setStage1ErrorMessage("Image must be at least 98x98 pixels");
      } else {
        setUploadedFile(file.name);
      }
    };
    img.onerror = () => {
      setStage1ErrorMessage("Invalid image file");
    };
    img.src = URL.createObjectURL(file);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // Stage 2 handlers
  const handleMobileShowreel = (file) => {
    if (file.size > 4 * 1024 * 1024) {
      setShowreelMobileError("File size must be 4MB or less");
      return;
    }

    if (!file.type.startsWith("image/")) {
      setShowreelMobileError("Please upload an image file");
      return;
    }

    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      if (img.width < 98 || img.height < 98) {
        setShowreelMobileError("Image must be at least 98x98 pixels");
      } else {
        setShowreelMobileError("");
        setShowreelMobileFile(file);
      }
      URL.revokeObjectURL(img.src);
    };
    img.onerror = () => {
      setShowreelMobileError("Invalid image file");
      URL.revokeObjectURL(img.src);
    };
  };

  const handleDesktopShowreel = (file, index) => {
    const allowedTypes = ["video/mp4", "video/quicktime"];
    let error = "";

    if (!allowedTypes.includes(file.type)) {
      error = "Please upload .mp4 or .mov file";
    } else if (file.size > 10 * 1024 * 1024) {
      error = "File size must be 10MB or less";
    }

    setShowreelDesktopErrors((prev) => {
      const newErrors = [...prev];
      newErrors[index] = error;
      return newErrors;
    });

    if (!error) {
      setShowreelDesktopFiles((prev) => {
        const newFiles = [...prev];
        newFiles[index] = file;
        return newFiles;
      });
    }
  };

  const handleFilmography = (file, index) => {
    let error = "";

    if (file.type !== "application/pdf") {
      error = "Please upload a PDF file";
    } else if (file.size > 4 * 1024 * 1024) {
      error = "File size must be 4MB or less";
    }

    setFilmographyErrors((prev) => {
      const newErrors = [...prev];
      newErrors[index] = error;
      return newErrors;
    });

    if (!error) {
      setFilmographyFiles((prev) => {
        const newFiles = [...prev];
        newFiles[index] = file;
        return newFiles;
      });
    }
  };

  const createFileHandler = (handler, index) => (e) => {
    const file = e.target.files?.[0];
    if (file) handler(file, index);
  };

  const createDragHandler = (handler, index) => (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) handler(file, index);
  };

  // Continue handler for stage 2
  const handleContinueStage2 = () => {
    // Check for validation errors
    const hasErrors = linkErrors.some((error) => error !== "");
    const hasEmptyLinks = youtubeLinks.some((link) => link.trim() === "");

    // Check if both links are provided and valid
    if (hasErrors || hasEmptyLinks) {
      setStage2ErrorMessage("Please provide two valid video URLs");
      return;
    }

    // Clear errors if valid
    setStage2ErrorMessage("");
    setProgressStage(3);
  };

  // Updated form submission handler
  const handleCreateAccount = () => {
    if (isChecked) {
      // Create combined state object with both files and links
      const formData = {
        studioProfile: {
          name,
          website,
          category,
          about,
          logo: uploadedFile,
        },
        portfolio: {
          videoLinks: youtubeLinks.filter((link) => link.trim() !== ""),
          desktopShowreels: showreelDesktopFiles.map((file) =>
            file
              ? {
                  name: file.name,
                  type: file.type,
                  size: file.size,
                }
              : null
          ),
          filmography: filmographyFiles.map((file) =>
            file
              ? {
                  name: file.name,
                  type: file.type,
                  size: file.size,
                }
              : null
          ),
        },
        agreement: isChecked,
      };

      console.log("Combined Form Data:", formData);
      props.onComplete?.(formData);
    }
  };

  return (
    <div className="min-h-screen bg-white md:flex md:items-center md:justify-center">
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileUpload}
        className="hidden"
      />

      {/* Main Container */}
      <div
        className={`w-full px-4 md:flex md:flex-col ${
          progressStage === 1 ? "md:max-w-[505px] md:mr-16" : "md:max-w-[820px]"
        }`}
      >
        {/* Mobile Header */}
        <div className="md:hidden mt-4 flex flex-col">
          <div className="flex flex-col">
            <button
              onClick={handleBack}
              className="mb-4 bg-transparent p-0 border-none self-start"
            >
              <img src={backArrow} alt="Back" className="w-6 h-6" />
            </button>
            <div className="w-full mb-4">
              <div className="text-sm font-medium text-purple-700 font-[Helvetica Neue]">
                Progress ({progressPercentage}%)
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-purple-600 h-2.5 rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Header */}
        <SenarLogoComponent progressPercentage={progressPercentage} />

        {/* Stage 1 Content - Studio Profile Setup */}
        {progressStage === 1 && (
          <div className="pt-12 md:pt-0">
            <h1 className="mb-4 text-left text-[32px] leading-[40px] font-[Helvetica Neue] font-medium">
              Setup your studio profile
            </h1>

            <p className="mb-4 md:mb-6 text-[14px] text-[#646464] font-[Helvetica Neue]">
              Enter details below to create your new studio account
            </p>

            {/* Mobile Upload */}
            <div className="md:hidden w-full max-w-[200px] mx-auto mb-6">
              <div
                className="border-2 border-dashed border-[#999999] rounded-[20px] flex flex-col items-center justify-center text-center p-[60px_30px] cursor-pointer"
                onClick={handleUploadClick}
              >
                <div className="flex flex-col items-center">
                  {uploadedFile ? (
                    <p className="w-[133px] h-[20px] text-[14px] leading-[1.4] text-purple-600 break-words font-[Helvetica Neue]">
                      {uploadedFile}
                    </p>
                  ) : (
                    <>
                      <h2 className="w-[133px] h-[20px] text-[14px] leading-[1.4] font-[Helvetica Neue] text-center font-medium">
                        + Upload Image
                      </h2>
                      <p className="w-[133px] h-[34px] mt-2 text-[12px] leading-[1.4] font-[Helvetica Neue] text-[#646464] text-center">
                        that's at least 98 x 98 pixels and 4MB or less
                      </p>
                    </>
                  )}
                </div>
              </div>
              {stage1ErrorMessage && (
                <p className="text-red-500 text-sm mt-2 text-center font-[Helvetica Neue]">
                  {stage1ErrorMessage}
                </p>
              )}
            </div>

            {/* Form Fields */}
            <div className="w-full space-y-4">
              {/* Name Field */}
              <div>
                <h2 className="font-bold mb-1 text-[14px] text-[#222222] font-[Helvetica Neue]">
                  Name
                </h2>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    const value = e.target.value;
                    setName(value);
                  }}
                  placeholder="Enter studio name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-[Helvetica Neue]"
                />
              </div>

              {/* Website Field */}
              <div>
                <h2 className="font-bold mb-1 text-[14px] text-[#222222] font-[Helvetica Neue]">
                  Website
                </h2>
                <input
                  type="text"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="Enter website"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-[Helvetica Neue]"
                />
              </div>

              {/* Category Field */}
              <div>
                <h2 className="font-bold mb-1 text-[14px] text-[#222222] font-[Helvetica Neue]">
                  Category
                </h2>
                <div className="relative">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-3 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#646464] font-[Helvetica Neue] appearance-none"
                  >
                    <option value="" disabled>
                      Select category
                    </option>
                    <option value="Photography">Photography</option>
                    <option value="Music">Music</option>
                    <option value="Art">Art</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg
                      className="h-6 w-6 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* About Field */}
              <div>
                <h2 className="font-bold mb-1 text-[14px] text-[#222222] font-[Helvetica Neue]">
                  About
                </h2>
                <textarea
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  placeholder="Tell us about your studio..."
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-[Helvetica Neue]"
                />
              </div>

              {/* Error Message */}
              {stage1ErrorMessage && (
                <p className="text-red-500 text-sm font-[Helvetica Neue]">
                  {stage1ErrorMessage}
                </p>
              )}

              {/* Continue Button */}
              <button
                onClick={handleContinueStage1}
                className="w-full bg-[#532E88] text-white py-4 rounded-lg font-semibold font-[Helvetica Neue] hover:bg-[#431C6E]"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Stage 2 Content - Portfolio Submission */}
        {progressStage === 2 && (
          <div className="pt-12 md:pt-0 w-full mx-auto">
            <div className="flex flex-col gap-1">
              <h1 className="text-left font-helvetica font-medium text-[32px] leading-[40px] text-[#222222]">
                Portfolio submission
              </h1>
              <p className="font-helvetica font-normal text-[14px] text-[#646464]">
                Upload the necessary documents to get verified.
              </p>
            </div>

            {/* Showreel Section - Desktop */}
            <div className="mt-6 w-full">
              <h2 className="w-[59px] h-[20px] whitespace-nowrap font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222] mb-2">
                Showreel
              </h2>
              <div className="hidden md:flex flex-col gap-[16px] w-full">
                <div className="flex gap-[16px] w-full">
                  {[0, 1].map((index) => (
                    <div key={index} className="w-[calc(50%-8px)]">
                      <input
                        type="text"
                        value={youtubeLinks[index]}
                        onChange={(e) => {
                          const newLinks = [...youtubeLinks];
                          newLinks[index] = e.target.value;
                          setYoutubeLinks(newLinks);

                          const newErrors = [...linkErrors];
                          newErrors[index] = validateVideoLink(e.target.value)
                            ? ""
                            : "Invalid URL format";
                          setLinkErrors(newErrors);
                        }}
                        placeholder="Enter video URL"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 font-helvetica"
                      />
                      {linkErrors[index] && (
                        <p className="text-red-500 text-sm mt-1 font-helvetica">
                          {linkErrors[index]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                {stage2ErrorMessage && (
                  <p className="text-red-500 text-sm font-helvetica">
                    {stage2ErrorMessage}
                  </p>
                )}
              </div>
            </div>

            {/* Filmography & Past Work Section */}
            <div className="mt-8 w-full">
              <h2 className="w-[159px] h-[20px] whitespace-nowrap font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222] mb-2">
                Filmography & Past Work
              </h2>
              <div className="flex flex-col md:flex-row gap-[12px] md:gap-[16px] w-full">
                {/* Mobile Version - Single Upload Box */}
                <div
                  className="md:hidden relative w-full h-[200px] border-2 border-dashed border-[#999999] rounded-[20px] flex flex-col items-center justify-center text-center py-[60px] px-[30px] cursor-pointer"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    handleFilmography(e.dataTransfer.files[0], 0);
                  }}
                  onClick={() =>
                    document.getElementById("mobile-filmography-input")?.click()
                  }
                >
                  <input
                    id="mobile-filmography-input"
                    type="file"
                    className="hidden"
                    accept=".pdf"
                    onChange={createFileHandler(handleFilmography, 0)}
                  />
                  <div className="flex flex-col items-center">
                    <h3 className="font-medium text-[14px] leading-[1.4] text-center font-helvetica text-[#222222]">
                      + Upload file
                    </h3>
                    <p className="text-[12px] leading-[1.4] text-center font-helvetica text-[#646464]">
                      Preferred formats: PDF
                    </p>
                  </div>
                  {filmographyFiles[0] && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-[20px]">
                      <span className="text-white font-medium">
                        PDF uploaded
                      </span>
                    </div>
                  )}
                  {filmographyErrors[0] && (
                    <p className="absolute bottom-2 text-red-500 text-xs">
                      {filmographyErrors[0]}
                    </p>
                  )}
                </div>

                {/* Desktop Versions - Two Upload Boxes */}
                {[0, 1].map((index) => (
                  <div
                    key={`desktop-filmography-${index}`}
                    className="hidden md:flex relative w-full md:w-[calc(50%-8px)] h-[200px] border-2 border-dashed border-[#999999] rounded-[20px] flex-col items-center justify-center text-center py-[60px] px-[30px] cursor-pointer"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={createDragHandler(handleFilmography, index)}
                    onClick={() =>
                      document
                        .getElementById(`desktop-filmography-input-${index}`)
                        ?.click()
                    }
                  >
                    <input
                      id={`desktop-filmography-input-${index}`}
                      type="file"
                      className="hidden"
                      accept=".pdf"
                      onChange={createFileHandler(handleFilmography, index)}
                    />
                    <div className="flex flex-col items-center">
                      <h3 className="font-medium text-[20px] leading-[1.4] text-center font-helvetica text-[#222222]">
                        + Upload file
                      </h3>
                      <p className="text-[16px] leading-[1.4] text-center font-helvetica text-[#646464]">
                        Preferred formats: PDF
                      </p>
                    </div>
                    {filmographyFiles[index] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-[20px]">
                        <span className="text-white font-medium">
                          PDF uploaded
                        </span>
                      </div>
                    )}
                    {filmographyErrors[index] && (
                      <p className="absolute bottom-2 text-red-500 text-sm">
                        {filmographyErrors[index]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Section */}
            <div className="mt-8 w-full">
              <h2 className="w-[81px] h-[20px] whitespace-nowrap font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222] mb-2">
                Social Media
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-4 w-full">
                {/* YouTube */}
                <div className="flex items-center gap-[10px] w-full h-[54px] border border-[#E6E6E6] rounded-[8px] p-[16px]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#222222"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                  <span className="font-helvetica text-[16px] text-[#222222]">
                    /user
                  </span>
                </div>

                {/* Instagram */}
                <div className="flex items-center gap-[10px] w-full h-[54px] border border-[#E6E6E6] rounded-[8px] p-[16px]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#222222"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  <span className="font-helvetica text-[16px] text-[#222222]">
                    /user
                  </span>
                </div>

                {/* X (Twitter) */}
                <div className="flex items-center gap-[10px] w-full h-[54px] border border-[#E6E6E6] rounded-[8px] p-[16px]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#222222"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span className="font-helvetica text-[16px] text-[#222222]">
                    /user
                  </span>
                </div>

                {/* Facebook */}
                <div className="flex items-center gap-[10px] w-full h-[54px] border border-[#E6E6E6] rounded-[8px] p-[16px]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="#222222"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                  <span className="font-helvetica text-[16px] text-[#222222]">
                    /user
                  </span>
                </div>
              </div>
            </div>

            {/* Continue Button */}
            <div className="flex justify-center mt-8 md:mt-10 w-full">
              <button
                onClick={handleContinueStage2}
                className="w-full max-w-[820px] h-[54px] bg-[#532E88] text-white rounded-[8px] font-semibold font-helvetica"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Stage 3 Content - Self Declaration */}
        {progressStage === 3 && (
          <div className="pt-12 md:pt-0 w-full mx-auto">
            <div className="flex flex-col gap-1">
              <h1 className="text-left font-helvetica font-medium text-[32px] leading-[40px] text-[#222222]">
                Self-Declaration
              </h1>
              <p className="font-helvetica font-normal text-[14px] text-[#646464]">
                Check the declaration form to create your new studio account.
              </p>
            </div>

            {/* Self Declaration Form */}
            <div className="w-full mt-6">
              <p className="mb-4 font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222]">
                We, [Studio Name], hereby declare that:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-6">
                <li>
                  <span className="font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222]">
                    Ownership & Rights
                  </span>
                  <p className="font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222]">
                    I am the original creator and/or have full legal rights to
                    distribute the content submitted to Senar.
                  </p>
                </li>

                <li>
                  <span className="font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222]">
                    Copyright Compliance
                  </span>
                  <p className="font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222]">
                    My submission does not contain copyrighted material (e.g.,
                    music, footage, graphics) unless I have obtained proper
                    licensing or permission.
                  </p>
                </li>

                <li>
                  <span className="font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222]">
                    Third-Party Agreements
                  </span>
                  <p className="font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222]">
                    Any actors, crew members, or collaborators involved in the
                    production have given consent for their work to be showcased
                    on Senar.
                  </p>
                </li>

                <li>
                  <span className="font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222]">
                    No Infringement or Legal Disputes
                  </span>
                  <p className="font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222]">
                    My content is not subject to any legal disputes or copyright
                    claims.
                  </p>
                </li>

                <li>
                  <span className="font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222]">
                    Adherence to Senar's Guidelines
                  </span>
                  <p className="font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222]">
                    I acknowledge and agree to Senar's content policies, ethical
                    guidelines, and quality standards.
                  </p>
                </li>

                <li>
                  <span className="font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222]">
                    Liability Agreement
                  </span>
                  <p className="font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222]">
                    I accept full responsibility for any legal issues arising
                    from misrepresentation of ownership or content rights. Senar
                    is not liable for any legal disputes related to my
                    submission.
                  </p>
                </li>
              </ul>

              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="declaration-checkbox"
                  className="w-4 h-4 border-2 border-[#532E88]"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <label
                  htmlFor="declaration-checkbox"
                  className="ml-2 font-helvetica font-normal text-[14px] text-[#222222]"
                >
                  I agree to this self-declaration
                </label>
              </div>

              <button
                onClick={handleCreateAccount}
                className={`w-full h-[54px] ${
                  isChecked
                    ? "bg-[#532E88]"
                    : "bg-[#532E88] opacity-50 cursor-not-allowed"
                } text-white rounded-[8px] font-semibold font-helvetica`}
                disabled={!isChecked}
              >
                Create account
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Upload Section (for Stage 1 only) */}
      {progressStage === 1 && (
        <div className="hidden md:flex flex-col md:max-w-[300px]">
          <div
            className="border-2 border-dashed border-[#999999] rounded-[20px] flex flex-col items-center justify-center text-center p-[60px_30px] cursor-pointer"
            onClick={handleUploadClick}
          >
            <div className="flex flex-col items-center">
              {uploadedFile ? (
                <p className="w-[166px] h-[28px] text-[16px] text-purple-600 break-words font-[Helvetica Neue]">
                  {uploadedFile}
                </p>
              ) : (
                <>
                  <h2 className="w-[166px] h-[28px] m-0 text-[20px] leading-[1.4] font-[Helvetica Neue] text-center font-medium">
                    + Upload Image
                  </h2>
                  <p className="w-[166px] h-[44px] m-0 mt-2 text-[16px] leading-[1.4] font-[Helvetica Neue] text-center font-normal">
                    that's at least 98 x 98 pixels and 4MB or less
                  </p>
                </>
              )}
            </div>
          </div>
          {stage1ErrorMessage && (
            <p className="text-red-500 text-sm mt-2 text-center font-[Helvetica Neue]">
              {stage1ErrorMessage}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default CombinedStudioOnBoarding;
