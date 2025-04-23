import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import TopHeader from "./TopHeader";
import SideBar from "./SideBar";
import OverView from "./OverView";
import Membership from "./Membership";
import Devices from "./Devices";
import Security from "./Security";
const AccountPage = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const menuItems = [
    { id: "overview", name: "Overview" },
    { id: "membership", name: "Membership" },
    { id: "security", name: "Security" },
    { id: "devices", name: "Devices" },
  ];

  // Extract activeItem from URL path
  const getActiveItemFromPath = () => {
    const path = location.pathname.split("/").pop();
    return menuItems.some((item) => item.id === path) ? path : "overview";
  };

  const [activeItem, setActiveItem] = useState(getActiveItemFromPath());

  // Update the active item when the URL changes
  useEffect(() => {
    setActiveItem(getActiveItemFromPath());
  }, [location]);

  // Define menu items to keep them consistent

  // Render content based on active sidebar item
  // const renderContent = () => {
  //   switch (activeItem) {
  //     case "overview":
  //       return <OverView />;
  //     case "membership":
  //       return <Membership />;
  //     case "security":
  //       return <Security />;
  //     case "devices":
  //       return <Devices />;
  //     default:
  //       return <OverView />;
  //   }
  // };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  // Handle active item selection and hide sidebar on mobile
  const handleSetActiveItem = (itemId) => {
    setActiveItem(itemId);
    // Update URL when activeItem changes
    navigate(`/viewerlanding/account/${itemId}`);
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
          <div className="flex-1 w-full">
            <Routes>
              <Route path="/" element={<Navigate to="overview" replace />} />
              <Route path="overview" element={<OverView />} />
              <Route path="membership" element={<Membership />} />
              <Route path="security" element={<Security />} />
              <Route path="devices" element={<Devices />} />
              <Route path="*" element={<Navigate to="overview" replace />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
