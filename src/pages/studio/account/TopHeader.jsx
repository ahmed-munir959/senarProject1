// TopHeader.jsx
import React from "react";
import { User, ChevronDown, ArrowLeft } from "lucide-react";
import senarLogo from "../../../assets/icons/senarLogo.png";

const TopHeader = ({ toggleSidebar, showBackArrow }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="md:hidden mr-2 cursor-pointer">
          <ArrowLeft size={20} className="text-gray-700" />
        </div>
        {/* Logo - hidden on mobile if showBackArrow is true */}
        <div className={showBackArrow ? "hidden md:block" : ""}>
          <img src={senarLogo} alt="Senor Logo" width="105" height="18" />
        </div>
      </div>
      <div className="flex items-center">
        <div className="rounded-full bg-gray-100 p-2">
          <User size={20} className="text-gray-500" />
        </div>
        <div className="ml-2 cursor-pointer">
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
