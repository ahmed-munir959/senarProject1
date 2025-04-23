import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";
import HomeScreen from "./HomeScreen";
import VideoScreen from "./VideoScreen";
import AnalyticsScreen from "./AnalyticsScreen";
import ReportsScreen from "./ReportsScreen";
import ImportUploadMobile from "./ImportUploadMobile";
import ProfileOptionsMobile from "./ProfileOptionsMobile";
import FeedbackScreen from "./FeedbackScreen";
import EditContent from "./EditContent";
import UploadVideo from "./UploadVideo";
import AccountPage from "../account/AccountPageStudio";
import {
  Home,
  Film,
  BarChart2,
  FileText,
  Heart,
  Search,
  Upload,
  User,
} from "lucide-react";
import senarLogo from "../../../assets/icons/senarLogo.png";

const DashBoardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract screen from URL path
  const pathParts = location.pathname.split("/");
  const activeScreen = pathParts.length > 2 ? pathParts[2] : "home";

  const [isImportUploadOpen, setIsImportUploadOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [editingVideo, setEditingVideo] = useState(null);
  const [isUploadVideoOpen, setIsUploadVideoOpen] = useState(false);

  // Track window width
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // Effect to update window width and add resize listener
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      // Set initial width
      setWindowWidth(window.innerWidth);

      // Add resize listener
      window.addEventListener("resize", handleResize);

      // Cleanup
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const navItems = [
    { name: "Home", icon: Home, id: "home" },
    { name: "Videos", icon: Film, id: "videos" },
    { name: "Analytics", icon: BarChart2, id: "analytics" },
    { name: "Reports", icon: FileText, id: "reports" },
    { name: "Feedback", icon: Heart, id: "feedback" },
  ];

  const handleUploadClick = () => {
    console.log("Upload clicked in DashboardLayout!");
    setIsImportUploadOpen(true);
  };
  const handleImportClick = () => {
    console.log("Import clicked in DashboardLayout!");
    setIsUploadVideoOpen(true);
  };

  const handleProfileMenuToggle = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  // Add this after your other handler functions
  const handleUploadFromComputer = () => {
    console.log("Upload from computer clicked in HomeScreen!");
    setIsUploadVideoOpen(true);
  };
  const handleOpenSettings = () => {
    setIsProfileMenuOpen(false); // Close the profile dropdown
    navigate("/account/overview"); // Navigate to standalone account page
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case "home":
        return <HomeScreen onUploadFromComputer={handleUploadFromComputer} />;
      case "videos":
        return (
          <VideoScreen
            onEditVideo={(video) => {
              setEditingVideo(video);
              navigate("/studiodashboard/edit");
            }}
          />
        );
      case "edit":
        return (
          <EditContent
            video={editingVideo}
            onBack={() => navigate("/studiodashboard/videos")}
          />
        );
      case "analytics":
        return <AnalyticsScreen />;
      case "reports":
        return <ReportsScreen />;
      case "feedback":
        return <FeedbackScreen />;
      default:
        return <HomeScreen />;
    }
  };

  // Determine if we should show dropdown or mobile component
  const isDesktop = windowWidth >= 768; // md breakpoint
  const isEditing = activeScreen === "edit";

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50">
      {/* Mobile Header - Only show when not editing */}
      {!isEditing && (
        <div className="md:hidden flex justify-between items-center p-4 border-b">
          <img src={senarLogo} alt="Senar Logo" className="h-[38px] w-auto" />
          <div className="flex items-center gap-4">
            <button
              className="text-gray-600 hover:text-purple-700"
              onClick={handleUploadClick}
            >
              <Upload size={24} />
            </button>
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={handleProfileMenuToggle}
            >
              <div className="bg-gray-200 p-1 rounded-full">
                <User size={20} className="text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Desktop Sidebar - Only show when not editing */}
      {!isEditing && (
        <div className="hidden md:block">
          <SideBar
            activeScreen={activeScreen}
            setActiveScreen={(screen) => navigate(`/studiodashboard/${screen}`)}
            navItems={navItems}
          />
        </div>
      )}
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-visible">
        {/* Desktop Search Bar - Only show when not editing */}
        {!isEditing && (
          <div className="hidden md:block">
            <SearchBar
              currentScreen={activeScreen}
              onProfileClick={handleProfileMenuToggle}
              isProfileMenuOpen={isProfileMenuOpen}
              onUploadClick={handleUploadClick}
              onImportClick={handleImportClick}
              onSwitchToViewer={() => navigate("/viewerlanding")}
              onLogout={() => navigate("/")}
              onOpenSettings={handleOpenSettings}
            />
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto pb-16 md:pb-0">
          {renderScreen()}
        </div>

        {/* Mobile Bottom Navigation - Only show when not editing */}
        {!isEditing && (
          <div className="block md:hidden fixed bottom-0 left-0 right-0 bg-white border-t py-2 px-4 z-20">
            <div className="flex justify-between items-center">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeScreen === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveScreen(item.id)}
                    className="flex flex-col items-center"
                  >
                    <IconComponent
                      size={20}
                      className={isActive ? "text-purple-700" : "text-gray-500"}
                    />
                    <span
                      className={`text-xs mt-1 ${
                        isActive ? "text-purple-700" : "text-gray-500"
                      }`}
                    >
                      {item.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
      {/* Mobile Profile Options Modal - Render at root level, only when not desktop and not editing */}

      {isProfileMenuOpen && !isDesktop && !isEditing && (
        <ProfileOptionsMobile
          isOpen={isProfileMenuOpen}
          onClose={() => setIsProfileMenuOpen(false)}
          onSwitchToViewer={() => navigate("/viewerlanding")}
          onLogout={() => navigate("/")}
          onOpenSettings={handleOpenSettings}
        />
      )}
      {/* Mobile Import/Upload Modal - Render at root level */}
      {isImportUploadOpen && (
        <ImportUploadMobile
          isOpen={isImportUploadOpen}
          onClose={() => setIsImportUploadOpen(false)}
        />
      )}
      {/* Upload Video Modal */}
      {isUploadVideoOpen && (
        <UploadVideo
          isOpen={isUploadVideoOpen}
          onClose={() => setIsUploadVideoOpen(false)}
        />
      )}
    </div>
  );
};

export default DashBoardLayout;
