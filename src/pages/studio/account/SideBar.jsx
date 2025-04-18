import React from "react";
import { Home, CreditCard, Shield, Monitor } from "lucide-react";

const SideBar = ({ activeItem, setActiveItem }) => {
  const menuItems = [
    { id: "overview", name: "Overview", icon: <Home size={18} /> },
    { id: "security", name: "Security", icon: <Shield size={18} /> },
    { id: "devices", name: "Devices", icon: <Monitor size={18} /> },
  ];
  return (
    <div className="w-full bg-white p-4">
      {menuItems.map((item) => (
        <div
          key={item.id}
          onClick={() => setActiveItem(item.id)}
          className={`flex items-center p-3 mb-1 rounded cursor-pointer ${
            activeItem === item.id
              ? "bg-purple-100 text-purple-800"
              : "hover:bg-gray-50"
          }`}
        >
          <div
            className={`mr-3 ${
              activeItem === item.id ? "text-purple-800" : "text-gray-500"
            }`}
          >
            {item.icon}
          </div>
          <span className={activeItem === item.id ? "font-medium" : ""}>
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
