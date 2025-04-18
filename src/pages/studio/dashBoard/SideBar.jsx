import React from "react";
import senarLogo from "../../../assets/icons/senarLogo.png";
import { Home, Film, BarChart2, FileText, Heart } from "lucide-react";

const SideBar = ({ activeScreen, setActiveScreen }) => {
  const navItems = [
    { name: "Home", icon: Home, id: "home" },
    { name: "Videos", icon: Film, id: "videos" },
    { name: "Analytics", icon: BarChart2, id: "analytics" },
    { name: "Reports", icon: FileText, id: "reports" },
    { name: "Feedback", icon: Heart, id: "feedback" },
  ];

  return (
    <div className="w-52 bg-purple-100 h-screen p-4 flex flex-col">
      <div className="mb-8 relative h-[72px]">
        {" "}
        {/* 36px top padding + 18px height + some space */}
        <img
          src={senarLogo}
          alt="Senar Logo"
          className="absolute w-[105px] h-[58px] top-[16px] left-[1px]"
        />
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = activeScreen === item.id;
            const IconComponent = item.icon;

            return (
              <li key={item.name}>
                <button
                  onClick={() => setActiveScreen(item.id)}
                  className={`flex items-center gap-3 p-3 rounded-md transition-colors w-full text-left ${
                    isActive
                      ? "bg-white text-purple-800"
                      : "text-gray-600 hover:bg-purple-100"
                  }`}
                >
                  <IconComponent size={20} />
                  <span>{item.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
