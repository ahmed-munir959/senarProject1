import { useState } from "react";
import "./components/GlobalCSS.css";
import "./App.css";
import CreateAccountEmail from "./pages/signUp/components/CreateAccountEmail";
import ChooseAccount from "./pages/signUp/components/ChooseAccount";
import CombinedStudioOnBoarding from "./pages/studioOnBoarding/components/CombinedStudioOnboarding";
import ViewersLandingPage from "./pages/viewers/lightMode/tieTogether/ViewersLandingPage";
import SingleMovie from "./pages/viewers/lightMode/SingleMovie";
import CombinedViewerOnBoarding from "./pages/viewerOnBoarding/CombinedViewerOnBoarding";
import DashBoardLayout from "./pages/studio/dashBoard/DashBoardLayout";
import EditContent from "./pages/studio/dashBoard/EditContent";

function App() {
  const [step, setStep] = useState("email");
  const [userData, setUserData] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [allVideos, setAllVideos] = useState([]);

  // Mock video data structure with required fields
  const mockVideoData = {
    url: "sample.mp4",
    title: "Sample Movie",
    uploader: "Studio XYZ",
    cast: [
      { name: "John Doe", role: "Protagonist" },
      { name: "Jane Smith", role: "Supporting Role" },
    ],
    crew: [
      { name: "Director Bob", role: "Director" },
      { name: "Cinematographer Alice", role: "DOP" },
    ],
    languages: ["English", "Spanish"],
    tags: ["Action", "Thriller", "2023"],
    subtitles: ["English", "French"],
    description: "A sample movie description for testing purposes.",
    ranking: "#1 Trending",
  };

  const handleEmailContinue = () => setStep("chooseAccount");
  const handleSelectStudio = () => setStep("studioOnboarding");
  const handleSelectViewer = () => setStep("viewerOnboarding");
  const handleOnboardingComplete = (formData) => {
    setUserData(formData);
    setStep("complete");
  };

  const handleVideoSelect = (videoData, videosCollection) => {
    // Use mock data with proper structure
    setSelectedVideo({
      ...mockVideoData,
      ...videoData, // Preserve any existing video data
    });
    setAllVideos(videosCollection);
    setStep("singleMovie");
  };

  const handleBackToHome = () => setStep("complete");

  return (
    <>
      {/* {step === "email" && (
        <CreateAccountEmail onContinue={handleEmailContinue} />
      )}
      {step === "chooseAccount" && (
        <ChooseAccount
          onSelectStudio={handleSelectStudio}
          onSelectViewer={handleSelectViewer}
        />
      )}
      {step === "studioOnboarding" && (
        <CombinedStudioOnBoarding onComplete={handleOnboardingComplete} />
      )}
      {step === "viewerOnboarding" && (
        <CombinedViewerOnBoarding onComplete={handleOnboardingComplete} />
      )}
      {step === "complete" && (
        <ViewersLandingPage
          portfolioData={userData?.portfolio}
          onVideoSelect={handleVideoSelect}
        />
      )}
      {step === "singleMovie" && (
        <SingleMovie
          videoData={selectedVideo}
          similarVideos={allVideos}
          onBackClick={handleBackToHome}
          onVideoSelect={handleVideoSelect}
        />
      )} */}

      <DashBoardLayout></DashBoardLayout>
      {/* <ViewersLandingPage></ViewersLandingPage> */}
      {/* <EditContent></EditContent> */}
    </>
  );
}

export default App;
