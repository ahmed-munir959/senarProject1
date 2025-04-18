import React from "react";
import { Monitor, Clock, Smartphone } from "lucide-react";

const Devices = () => {
  const devices = [
    {
      id: 1,
      type: "PC Chrome - Web browser",
      time: "18/02/25, 6:14 am GMT",
      icon: <Monitor size={20} />,
      isCurrent: true,
    },
    {
      id: 2,
      type: "Mac Chrome - Web browser",
      time: "18/02/25, 6:14 am GMT",
      icon: <Monitor size={20} />,
      isCurrent: false,
    },
    {
      id: 3,
      type: "Apple - iPhone",
      time: "18/02/25, 6:14 am GMT",
      icon: <Smartphone size={20} />,
      isCurrent: false,
    },
    {
      id: 4,
      type: "Mac Chrome - Web browser",
      time: "18/02/25, 6:14 am GMT",
      icon: <Monitor size={20} />,
      isCurrent: false,
    },
    {
      id: 5,
      type: "Apple - iPhone",
      time: "18/02/25, 6:14 am GMT",
      icon: <Smartphone size={20} />,
      isCurrent: false,
    },
  ];

  return (
    <div className="p-4 md:p-6 bg-white">
      <h2 className="text-lg md:text-xl font-medium mb-4 md:mb-6">Devices</h2>

      {devices.map((device) => (
        <div key={device.id} className="border rounded-lg mb-4 p-3 md:p-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div className="flex items-start mb-3 md:mb-0">
              <div className="mr-3 text-gray-700 mt-1">{device.icon}</div>
              <div>
                <div className="font-medium">{device.type}</div>
                <div className="flex items-center text-gray-500 text-sm mt-2">
                  <Clock size={16} className="mr-2" />
                  <span>{device.time}</span>
                </div>
              </div>
            </div>
            {device.isCurrent ? (
              <div className="bg-[#E8DFF7] px-3 py-1 rounded-full text-xs font-medium self-start md:self-auto">
                Current Device
              </div>
            ) : (
              <button className="text-[#532E88] border border-[#532E88] px-4 py-2 rounded-lg text-sm font-medium w-full md:w-auto mt-3 md:mt-0">
                Sign out
              </button>
            )}
          </div>
        </div>
      ))}

      <button className="w-full border border-[#532E88] text-[#532E88] rounded-lg p-4 text-center font-medium mt-2">
        Sign out of all devices
      </button>
    </div>
  );
};

export default Devices;
