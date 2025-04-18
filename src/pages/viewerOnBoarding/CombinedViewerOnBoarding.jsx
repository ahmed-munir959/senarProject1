import { useState, useRef } from "react";
import backArrow from "../../assets/images/backArrow.png";
import SenarLogoComponent from "../../components/SenarLogoComponent";

// Temporary imports - replace with actual genre images
import actionImage from "../../assets/images/actionImage.png";
import adventureImage from "../../assets/images/adventureImage.png";
import comedyImage from "../../assets/images/comedyImage.png";
import fantasyImage from "../../assets/images/fantasyImage.png";
import historicalImage from "../../assets/images/historicalImage.png";
import horrorImage from "../../assets/images/horrorImage.png";
import romanceImage from "../../assets/images/romanceImage.png";
import othersImage from "../../assets/images/othersImage.png";
import crimeImage from "../../assets/images/crimeImage.png";

const CombinedViewerOnBoarding = (props) => {
  // Stage management
  const [stage, setStage] = useState(1);

  // Stage 1 states
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [about, setAbout] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const fileInputRef = useRef(null);

  // Stage 2 states
  const [selectedGenres, setSelectedGenres] = useState(new Set());

  // Stage 3 states
  const [selectedLanguages, setSelectedLanguages] = useState(new Set());

  // Progress calculation
  const progressPercentage = Math.round((stage / 3) * 100);

  // Genres data for stage 2
  const genres = [
    { id: 1, name: "Action", image: actionImage },
    { id: 2, name: "Adventure", image: adventureImage },
    { id: 3, name: "Comedy", image: comedyImage },
    { id: 4, name: "Crime and mystery", image: crimeImage },
    { id: 5, name: "Fantasy", image: fantasyImage },
    { id: 6, name: "Historical", image: historicalImage },
    { id: 7, name: "Horror", image: horrorImage },
    { id: 8, name: "Romance", image: romanceImage },
    { id: 9, name: "Others", image: othersImage },
  ];

  // Languages data for stage 3
  const languages = [
    { id: 1, name: "English", image: actionImage },
    { id: 2, name: "हिन्दी", image: adventureImage },
    { id: 3, name: "தமிழ்", image: comedyImage },
    { id: 4, name: "తెలుగు", image: crimeImage },
    { id: 5, name: "ಕನ್ನಡ", image: fantasyImage },
    { id: 6, name: "മലയാളം", image: historicalImage },
    { id: 7, name: "বাংলা", image: horrorImage },
    { id: 8, name: "भोजपुरी", image: romanceImage },
    { id: 9, name: "Others", image: othersImage },
  ];

  const handleStage1Continue = () => {
    if (
      name.trim() === "" ||
      website.trim() === "" ||
      phoneNumber.trim() === ""
    ) {
      setErrorMessage("Please fill in all required fields");
      return;
    }
    setErrorMessage("");
    setStage(2);
  };

  const handleStage2Continue = () => {
    setStage(3);
  };

  const handleStage3Continue = () => {
    // Create JSON with all collected data
    const userData = {
      profile: {
        name,
        username: website,
        phone: countryCode + phoneNumber,
        bio: about,
        profileImage: uploadedFile,
      },
      preferences: {
        genres: Array.from(selectedGenres).map(
          (id) => genres.find((genre) => genre.id === id)?.name
        ),
        languages: Array.from(selectedLanguages).map(
          (id) => languages.find((lang) => lang.id === id)?.name
        ),
      },
    };

    // Log the collected data to console
    console.log("User Onboarding Data:", userData);
    // Call the onComplete prop if it exists
    if (props.onComplete) {
      props.onComplete(userData);
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

  const handleGenreSelect = (genreId) => {
    const newSelection = new Set(selectedGenres);
    if (newSelection.has(genreId)) {
      newSelection.delete(genreId);
    } else {
      newSelection.add(genreId);
    }
    setSelectedGenres(newSelection);
  };

  const handleLanguageSelect = (languageId) => {
    const newSelection = new Set(selectedLanguages);
    if (newSelection.has(languageId)) {
      newSelection.delete(languageId);
    } else {
      newSelection.add(languageId);
    }
    setSelectedLanguages(newSelection);
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

      {stage === 1 && (
        <>
          {/* Main Container - Stage 1 */}
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

            {/* Desktop Header */}
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
                        <option value="+92">+92</option>
                        <option value="+93">+93</option>
                        <option value="+94">+94</option>
                        <option value="+95">+95</option>
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
                  onClick={handleStage1Continue}
                  className="w-full bg-[#532E88] text-white py-4 rounded-lg font-semibold font-[Helvetica Neue] hover:bg-[#431C6E]"
                >
                  Continue
                </button>
              </div>
            </div>
          </section>

          {/* Desktop Upload Section */}
          <div
            className="hidden md:flex flex-col"
            style={{ marginTop: "-280px" }}
          >
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
        </>
      )}

      {stage === 2 && (
        <section className="w-full px-4 md:max-w-[820px] md:h-[658px] md:flex md:flex-col md:justify-between">
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

          {/* Desktop Header */}
          <SenarLogoComponent progressPercentage={progressPercentage} />

          <div className="md:flex-1 md:flex md:flex-col md:justify-between">
            <div>
              <h1 className="mb-2 text-left text-[32px] leading-[40px] font-[Helvetica Neue] font-medium">
                Choose preferred genres
              </h1>
              <p className="mb-6 text-[14px] text-[#646464] font-[Helvetica Neue]">
                Select your preferred genres to setup your account
              </p>

              {/* Genre Grid */}
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-[16px] md:mb-8 mb-6">
                {genres.map((genre) => (
                  <button
                    key={genre.id}
                    onClick={() => handleGenreSelect(genre.id)}
                    className={`relative w-full rounded-lg overflow-hidden transition-all 
                      ${
                        selectedGenres.has(genre.id)
                          ? "ring-2 ring-purple-600"
                          : "ring-1 ring-gray-200"
                      }
                      ${
                        genre.name === "Others"
                          ? "col-span-2 md:col-span-1 h-[100px] md:h-[148px]"
                          : "h-[94.23px] md:h-[148px]"
                      }
                      md:w-[256px]`}
                  >
                    <img
                      src={genre.image}
                      alt={genre.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bottom-0 left-0 right-0 p-2 flex justify-center items-center">
                      <p className="text-white font-[Helvetica Neue] font-medium text-[20px] leading-[140%] text-center">
                        {genre.name}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleStage2Continue}
              className="w-full bg-[#532E88] text-white py-4 rounded-lg font-semibold font-[Helvetica Neue] hover:bg-[#431C6E] mt-6 md:mt-0"
            >
              Continue
            </button>
          </div>
        </section>
      )}

      {stage === 3 && (
        <section className="w-full px-4 md:max-w-[820px] md:h-[658px] md:flex md:flex-col md:justify-between">
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

          {/* Desktop Header */}
          <SenarLogoComponent progressPercentage={progressPercentage} />

          <div className="md:flex-1 md:flex md:flex-col md:justify-between">
            <div>
              <h1 className="mb-2 text-left text-[32px] leading-[40px] font-[Helvetica Neue] font-medium">
                Choose preferred languages
              </h1>
              <p className="mb-6 text-[14px] text-[#646464] font-[Helvetica Neue]">
                Select your preferred languages to setup your account
              </p>

              {/* Language Grid */}
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-[16px] md:mb-8 mb-6">
                {languages.map((language) => (
                  <button
                    key={language.id}
                    onClick={() => handleLanguageSelect(language.id)}
                    className={`relative w-full rounded-lg overflow-hidden transition-all 
                      ${
                        selectedLanguages.has(language.id)
                          ? "ring-2 ring-purple-600"
                          : "ring-1 ring-gray-200"
                      }
                      ${
                        language.name === "Others"
                          ? "col-span-2 md:col-span-1 h-[100px] md:h-[148px]"
                          : "h-[94.23px] md:h-[148px]"
                      }
                      md:w-[256px]`}
                  >
                    <img
                      src={language.image}
                      alt={language.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bottom-0 left-0 right-0 p-2 flex justify-center items-center">
                      <p className="text-white font-[Helvetica Neue] font-medium text-[20px] leading-[140%] text-center">
                        {language.name}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleStage3Continue}
              className="w-full bg-[#532E88] text-white py-4 rounded-lg font-semibold font-[Helvetica Neue] hover:bg-[#431C6E] mt-6 md:mt-0"
            >
              Continue
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default CombinedViewerOnBoarding;
