// Update SenarLogoComponent.js
import React from "react";
import SenarLogo from "../assets/images/senarImage.png";

const SenarLogoComponent = ({ progressPercentage }) => {
  return (
    <div className="hidden md:block">
      <img
        src={SenarLogo}
        alt="Senar logo"
        className="mb-4 w-[105px] h-[18px]"
      />
      {/* Changed container width to 505px */}
      <div className="w-[505px] mb-4">
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
  );
};

export default SenarLogoComponent;
