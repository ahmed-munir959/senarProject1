import { useState } from "react";
import "./components/GlobalCSS.css";
import "./App.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import CreateAccountEmail from "./pages/signUp/components/CreateAccountEmail";
import ChooseAccount from "./pages/signUp/components/ChooseAccount";
import CombinedStudioOnBoarding from "./pages/studioOnBoarding/components/CombinedStudioOnboarding";
import CombinedViewerOnBoarding from "./pages/viewerOnBoarding/CombinedViewerOnBoarding";
import DashBoardLayout from "./pages/studio/dashBoard/DashBoardLayout";
import LogIn from "./pages/logIn/components/LogIn";
import SingleMovie from "./pages/viewers/lightMode/SingleMovie";
import ViewersLandingPage from "./pages/viewers/lightMode/tieTogether/ViewersLandingPage";
import HomeGuest from "./pages/viewers/lightMode/HomeGuest";
import SingleSeries from "./pages/viewers/lightMode/SingleSeries";
import StudioView from "./pages/viewers/lightMode/StudioView";
import AccountPage from "./pages/viewers/lightMode/account/AccountPage";
import AccountPageStudio from "./pages/studio/account/AccountPageStudio";

function App() {
  const [userData, setUserData] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [allVideos, setAllVideos] = useState([]);
  const navigate = useNavigate();

  // Mock video data
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

  // Handle video selection
  const handleVideoSelect = (videoData, videosCollection) => {
    setSelectedVideo({ ...mockVideoData, ...videoData });
    setAllVideos(videosCollection);
  };

  // Handle onboarding completion
  const handleOnboardingComplete = (formData) => {
    setUserData(formData);
    navigate("/viewerlanding/home");
  };

  return (
    <Routes>
      <Route path="/" element={<HomeGuest />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<CreateAccountEmail />} />
      <Route path="/chooseaccount" element={<ChooseAccount />} />
      <Route
        path="/studioonboarding"
        element={
          <CombinedStudioOnBoarding onComplete={handleOnboardingComplete} />
        }
      />
      <Route
        path="/vieweronboarding"
        element={
          <CombinedViewerOnBoarding onComplete={handleOnboardingComplete} />
        }
      />

      {/* Add this new route for StudioView */}
      <Route path="/viewerlanding/studioview" element={<StudioView />} />

      {/* Add new route for Account Page */}
      <Route path="/viewerlanding/account/*" element={<AccountPage />} />

      <Route path="/studiodashboard" element={<DashBoardLayout />}>
        <Route
          index
          element={<Navigate to="/studiodashboard/home" replace />}
        />
        <Route path="home" element={null} />
        <Route path="videos" element={null} />
        <Route path="analytics" element={null} />
        <Route path="reports" element={null} />
        <Route path="feedback" element={null} />
        <Route path="edit" element={null} />
      </Route>
      {/* {Here here} */}
      <Route path="account/*" element={<AccountPageStudio />} />

      {/* Viewer Landing Page routes */}
      <Route
        path="/viewerlanding"
        element={
          <ViewersLandingPage
            portfolioData={userData?.portfolio || []}
            onVideoSelect={handleVideoSelect}
          />
        }
      >
        <Route index element={<Navigate to="/viewerlanding/home" replace />} />
        <Route path="home" element={null} />{" "}
        {/* These will be handled by ViewersLandingPage */}
        <Route path="leaderboard" element={null} />
        <Route path="movies" element={null} />
        <Route path="series" element={null} />
        <Route path="watchlater" element={null} />
        <Route path="subscriptions" element={null} />
      </Route>
      <Route
        path="/viewerlanding/series/:videoId"
        element={
          <SingleSeries onBackClick={() => navigate("/viewerlanding/series")} />
        }
      />

      {/* Separate route for movie details to avoid nesting issues */}
      <Route
        path="/viewerlanding/movies/:movieId"
        element={
          <SingleMovie
            onBackClick={() => navigate("/viewerlanding/movies")}
            videoData={selectedVideo}
            similarVideos={allVideos}
            onVideoSelect={handleVideoSelect}
          />
        }
      />
    </Routes>
  );
}

export default App;
