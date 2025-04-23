import React, { useState } from "react";
import TopHeader from "./TopHeader";
import SideBar from "./SideBar";
import OverView from "./OverView";
import Devices from "./Devices";
import Security from "./Security";
const AccountPageStudio = () => {
  const [activeItem, setActiveItem] = useState("overview");
  const [showSidebar, setShowSidebar] = useState(false);

  // Render content based on active sidebar item
  const renderContent = () => {
    switch (activeItem) {
      case "overview":
        return <OverView />;
      case "security":
        return <Security />;
      case "devices":
        return <Devices />;
      default:
        return <OverView />;
    }
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  // Handle active item selection and hide sidebar on mobile
  const handleSetActiveItem = (itemId) => {
    setActiveItem(itemId);
    // Hide sidebar on mobile when navigating to a new section
    if (window.innerWidth < 768) {
      setShowSidebar(false);
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <TopHeader toggleSidebar={toggleSidebar} showBackArrow={true} />
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar - hidden on mobile by default */}
          <div
            className={`md:w-64 md:block border-r ${
              showSidebar ? "block w-64" : "hidden"
            }`}
          >
            <SideBar
              activeItem={activeItem}
              setActiveItem={handleSetActiveItem}
            />
          </div>
          {/* Main content */}
          <div className="flex-1 w-full">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default AccountPageStudio;
