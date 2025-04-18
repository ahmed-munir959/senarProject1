import { useState, useRef } from "react";
import backArrow from "../../assets/images/backArrow.png";
import SenarLogoComponent from "../../components/SenarLogoComponent";

const ViewerOnBoarding1 = () => {
  const [progressStage, setProgressStage] = useState(1);
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [about, setAbout] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const fileInputRef = useRef(null);

  const handleContinue = () => {
    if (
      name.trim() === "" ||
      website.trim() === "" ||
      phoneNumber.trim() === ""
    ) {
      setErrorMessage("Please fill in all required fields");
      return;
    }
    setErrorMessage("");
    if (progressStage < 3) {
      setProgressStage(progressStage + 1);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setErrorMessage("");
    setUploadedFile(null);

    if (file.size > 4 * 1024 * 1024) {
      setErrorMessage("File size exceeds 4MB");
      return;
    }

    const img = new Image();
    img.onload = () => {
      if (img.width < 98 || img.height < 98) {
        setErrorMessage("Image must be at least 98x98 pixels");
      } else {
        setUploadedFile(file.name);
      }
    };
    img.onerror = () => {
      setErrorMessage("Invalid image file");
    };
    img.src = URL.createObjectURL(file);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const progressPercentage = Math.round((progressStage / 3) * 100);

  return (
    <div className="min-h-screen bg-white md:flex md:items-center md:justify-center">
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileUpload}
        className="hidden"
      />

      {/* Main Container - Updated width */}
      <section className="w-full px-4 md:max-w-[505px] md:flex md:flex-col md:mr-16">
        {/* Mobile Header */}
        <div className="md:hidden mt-4 flex flex-col">
          <div className="flex flex-col">
            <button className="mb-4 bg-transparent p-0 border-none self-start">
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

        {/* Desktop Header - Using the new component */}
        <SenarLogoComponent progressPercentage={progressPercentage} />

        {/* Form Content */}
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
            {errorMessage && (
              <p className="text-red-500 text-sm mt-2 text-center font-[Helvetica Neue]">
                {errorMessage}
              </p>
            )}
          </div>

          {/* Form Fields - Full width */}
          <div className="w-full space-y-4">
            {/* Name Field */}
            <div>
              <h2 className="font-bold mb-1 text-[14px] text-[#222222] font-[Helvetica Neue]">
                Name
              </h2>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter studio name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-[Helvetica Neue]"
              />
            </div>

            {/* Website Field */}
            <div>
              <h2 className="font-bold mb-1 text-[14px] text-[#222222] font-[Helvetica Neue]">
                Username
              </h2>
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="Enter username"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-[Helvetica Neue]"
              />
            </div>

            {/* Mobile Number Field */}
            <div>
              <h2 className="font-bold mb-1 text-[14px] text-[#222222] font-[Helvetica Neue]">
                Mobile no.
              </h2>
              <div className="flex items-center w-full border rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
                {/* Country Code Selector */}
                <div className="relative flex-shrink-0 border-r">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="pl-3 pr-8 py-3 bg-transparent appearance-none border-none text-[#646464] font-[Helvetica Neue]"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+92</option>
                    <option value="+44">+93</option>
                    <option value="+61">+94</option>
                    <option value="+33">+95</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
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

                {/* Phone Number Input */}
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter mobile number"
                  className="flex-grow pl-3 pr-3 py-3 border-none focus:outline-none font-[Helvetica Neue]"
                />
              </div>
            </div>

            {/* About Field */}
            <div>
              <h2 className="font-bold mb-1 text-[14px] text-[#222222] font-[Helvetica Neue]">
                Bio
              </h2>
              <textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                placeholder="A brief about yourself"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-[Helvetica Neue]"
              />
            </div>

            {/* Error Message */}
            {errorMessage && (
              <p className="text-red-500 text-sm font-[Helvetica Neue]">
                {errorMessage}
              </p>
            )}

            {/* Continue Button */}
            <button
              onClick={handleContinue}
              className="w-full bg-[#532E88] text-white py-4 rounded-lg font-semibold font-[Helvetica Neue] hover:bg-[#431C6E]"
            >
              Continue
            </button>
          </div>
        </div>
      </section>

      {/* Desktop Upload Section */}
      <div className="hidden md:flex flex-col" style={{ marginTop: "-280px" }}>
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
        {errorMessage && (
          <p className="text-red-500 text-sm mt-2 text-center font-[Helvetica Neue]">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default ViewerOnBoarding1;
