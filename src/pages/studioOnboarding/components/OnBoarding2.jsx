import { useState } from "react";

const OnBoarding2 = () => {
  // State for showreel uploads
  const [showreelMobileFile, setShowreelMobileFile] = useState(null);
  const [showreelMobileError, setShowreelMobileError] = useState("");
  const [showreelDesktopFiles, setShowreelDesktopFiles] = useState([
    null,
    null,
  ]);
  const [showreelDesktopErrors, setShowreelDesktopErrors] = useState(["", ""]);

  // State for filmography uploads
  const [filmographyFiles, setFilmographyFiles] = useState([null, null]);
  const [filmographyErrors, setFilmographyErrors] = useState(["", ""]);

  // Mobile Showreel Handler
  const handleMobileShowreel = (file) => {
    // Size validation
    if (file.size > 4 * 1024 * 1024) {
      setShowreelMobileError("File size must be 4MB or less");
      return;
    }

    // Image validation
    if (!file.type.startsWith("image/")) {
      setShowreelMobileError("Please upload an image file");
      return;
    }

    // Dimension validation
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

  // Desktop Showreel Handler
  const handleDesktopShowreel = (file, index) => {
    const allowedTypes = ["video/mp4", "video/quicktime"];
    let error = "";

    if (!allowedTypes.includes(file.type)) {
      error = "Please upload .mp4 or .mov file";
    } else if (file.size > 10 * 1024 * 1024) {
      // 10MB limit for videos
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

  // Filmography Handler
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

  // File Input Handler Creator
  const createFileHandler = (handler, index) => (e) => {
    const file = e.target.files?.[0];
    if (file) handler(file, index);
  };

  // Drag & Drop Handler
  const createDragHandler = (handler, index) => (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) handler(file, index);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      {/* Responsive Width Container */}
      <div className="w-full max-w-[342.94px] md:max-w-[820px] mx-4 md:mx-auto">
        <section className="flex flex-col">
          {/* Content Section */}
          <div className="pt-6 md:pt-0">
            <div className="flex flex-col gap-1">
              <h1 className="text-left font-helvetica font-medium text-[32px] leading-[40px] text-[#222222]">
                Portfolio submission
              </h1>
              <p className="font-helvetica font-normal text-[14px] text-[#646464]">
                Upload the necessary documents to get verified.
              </p>
            </div>

            {/* Showreel Section */}
            <div className="mt-6">
              <h2 className="w-[59px] h-[20px] whitespace-nowrap font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222] mb-2">
                Showreel
              </h2>
              <div className="flex flex-col md:flex-row gap-[12px] md:gap-[16px]">
                {/* Mobile Version - Single Upload Box */}
                <div
                  className="md:hidden relative w-full h-[200px] border-2 border-dashed border-[#999999] rounded-[20px] flex flex-col items-center justify-center text-center py-[60px] px-[30px] cursor-pointer"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    e.preventDefault();
                    handleMobileShowreel(e.dataTransfer.files[0]);
                  }}
                  onClick={() =>
                    document.getElementById("mobile-showreel-input")?.click()
                  }
                >
                  <input
                    id="mobile-showreel-input"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={createFileHandler(handleMobileShowreel, 0)}
                  />
                  <div className="flex flex-col items-center">
                    <h3 className="font-medium text-[14px] leading-[1.4] text-center font-helvetica text-[#222222]">
                      + Upload media
                    </h3>
                    <p className="text-[12px] leading-[1.4] text-center font-helvetica text-[#646464]">
                      that's at least 98 x 98 pixels and 4MB or less
                    </p>
                  </div>
                  {showreelMobileFile && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-[20px]">
                      <span className="text-white font-medium">
                        Image uploaded
                      </span>
                    </div>
                  )}
                  {showreelMobileError && (
                    <p className="absolute bottom-2 text-red-500 text-xs">
                      {showreelMobileError}
                    </p>
                  )}
                </div>

                {/* Desktop Versions - Two Upload Boxes */}
                {[0, 1].map((index) => (
                  <div
                    key={`desktop-showreel-${index}`}
                    className="hidden md:flex relative w-full md:w-[402px] h-[200px] border-2 border-dashed border-[#999999] rounded-[20px] flex-col items-center justify-center text-center py-[60px] px-[30px] cursor-pointer"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={createDragHandler(handleDesktopShowreel, index)}
                    onClick={() =>
                      document
                        .getElementById(`desktop-showreel-input-${index}`)
                        ?.click()
                    }
                  >
                    <input
                      id={`desktop-showreel-input-${index}`}
                      type="file"
                      className="hidden"
                      accept=".mp4,.mov"
                      onChange={createFileHandler(handleDesktopShowreel, index)}
                    />
                    <div className="flex flex-col items-center">
                      <h3 className="font-medium text-[20px] leading-[1.4] text-center font-helvetica text-[#222222]">
                        + Upload media
                      </h3>
                      <p className="text-[16px] leading-[1.4] text-center font-helvetica text-[#646464]">
                        Preferred formats: .mp4, .mov, YouTube/Vimeo links
                      </p>
                    </div>
                    {showreelDesktopFiles[index] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-[20px]">
                        <span className="text-white font-medium">
                          Video uploaded
                        </span>
                      </div>
                    )}
                    {showreelDesktopErrors[index] && (
                      <p className="absolute bottom-2 text-red-500 text-sm">
                        {showreelDesktopErrors[index]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Filmography & Past Work Section */}
            <div className="mt-8">
              <h2 className="w-[159px] h-[20px] whitespace-nowrap font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222] mb-2">
                Filmography & Past Work
              </h2>
              <div className="flex flex-col md:flex-row gap-[12px] md:gap-[16px]">
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
                    className="hidden md:flex relative w-full md:w-[402px] h-[200px] border-2 border-dashed border-[#999999] rounded-[20px] flex-col items-center justify-center text-center py-[60px] px-[30px] cursor-pointer"
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

            {/* Updated Social Media Section */}
            <div className="mt-8">
              <h2 className="w-[81px] h-[20px] whitespace-nowrap font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222] mb-2">
                Social Media
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-4">
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
            <div className="flex justify-center mt-8 md:mt-10">
              <button className="w-full md:w-[820px] h-[54px] bg-[#532E88] text-white rounded-[8px] font-semibold font-helvetica">
                Continue
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OnBoarding2;
