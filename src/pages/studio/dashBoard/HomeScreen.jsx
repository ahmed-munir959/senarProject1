import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ExternalLink } from "lucide-react";
import galiGuleyan from "../../../assets/images/studioDashBoardImages/galiGuleiyan.png";
import ulluzhukku from "../../../assets/images/studioDashBoardImages/ulluzhukku.png";
import kottukkaali from "../../../assets/images/studioDashBoardImages/kottukkaali.png";
import allWeImagineAsLight from "../../../assets/images/studioDashBoardImages/allWeImagineAsLight.png";
import dhanak from "../../../assets/images/studioDashBoardImages/dhanak.png";
import bwIcon from "../../../assets/icons/bwIcon.png";

const HomeScreen = ({ onUploadFromComputer }) => {
  // Sample data for the analytics chart
  const analyticsData = [
    { name: "Jan", views: 5000, uploads: 6500, uniqueViewers: 2000 },
    { name: "Feb", views: 7000, uploads: 5500, uniqueViewers: 3000 },
    { name: "Mar", views: 4500, uploads: 2000, uniqueViewers: 4000 },
    { name: "Apr", views: 6000, uploads: 9000, uniqueViewers: 3000 },
    { name: "May", views: 5500, uploads: 7000, uniqueViewers: 2500 },
    { name: "Jun", views: 6200, uploads: 5500, uniqueViewers: 4500 },
  ];

  // Content items for the contents section
  const contentItems = [
    {
      title: "Gali Guleiyan",
      date: "January 17, 2025",
      duration: "44min",
      categories: ["Action", "Drama", "Romantic"],
      image: galiGuleyan,
    },
    {
      title: "Ulluzhukku",
      date: "January 17, 2025",
      duration: "44min",
      categories: ["Action", "Drama", "Comedy"],
      image: ulluzhukku,
    },
    {
      title: "Kottukkaali",
      date: "January 17, 2025",
      duration: "44min",
      categories: ["Action", "Drama", "Romantic"],
      image: kottukkaali,
    },
    {
      title: "All we imagine as light",
      date: "January 17, 2025",
      duration: "44min",
      categories: ["Action", "Drama", "Thriller"],
      image: allWeImagineAsLight,
    },
    {
      title: "Dhanak",
      date: "January 17, 2025",
      duration: "44min",
      categories: ["Action", "Drama"],
      image: dhanak,
    },
  ];

  return (
    <div className="p-4">
      {/* Top Section: Left (Upload/Import + Upload Video) & Right (Studio Info) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Left Side: Upload/Import cards and Upload Video section grouped in one container */}
        <div className="md:col-span-8 flex flex-col gap-4">
          {/* Upload & Import Cards in one row (or stacked on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {/* Upload Card */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <button
                  type="button"
                  onClick={() => {
                    if (onUploadFromComputer) onUploadFromComputer();
                  }}
                  className="w-full bg-white p-4 rounded-md shadow-sm border hover:shadow-md cursor-pointer text-left"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-gray-100 rounded-md">
                      <ExternalLink size={20} className="text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-medium">Upload</h3>
                      <p className="text-sm text-gray-500">From computer</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            {/* Import Card */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <button
                  type="button"
                  className="w-full bg-white p-4 rounded-md shadow-sm border hover:shadow-md cursor-pointer text-left"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-gray-100 rounded-md">
                      <ExternalLink size={20} className="text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-medium">Import</h3>
                      <p className="text-sm text-gray-500">
                        From Drive and more
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          {/* Upload Video Section directly below the Upload/Import cards */}
          <div className="bg-white p-6 md:p-8 rounded-md shadow-sm border flex flex-col items-center justify-center">
            <p className="text-gray-600 mb-4 text-center">
              Upload and publish a video to get started.
            </p>
            <button className="bg-purple-700 hover:bg-purple-800 text-white font-medium py-2 px-4 rounded-md">
              Upload video
            </button>
          </div>
        </div>

        {/* Right Side: Studio Info Card */}
        <div className="md:col-span-4">
          <div className="bg-white p-4 rounded-md shadow-sm border">
            <div className="flex items-center gap-3">
              <img
                src={bwIcon}
                alt="B&W Studio"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h3 className="font-medium">B&W Studio</h3>
                <p className="text-sm text-gray-500">@b&wstudio</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-sm text-gray-500">Rank</p>
                <p className="font-medium">#01</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Uploads</p>
                <p className="font-medium">22,707</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Views</p>
                <p className="font-medium">6,74,706</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Member since</p>
                <p className="font-medium">January 2020</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Views</p>
                <p className="font-medium">6,74,706</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Country</p>
                <p className="font-medium">India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Below Section: Analytics and Contents */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Analytics Section */}
        <div className="md:col-span-8">
          <div className="bg-white p-4 rounded-md shadow-sm border">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-medium text-lg">Analytics</h2>
              <a href="#" className="text-sm text-purple-700 hover:underline">
                View all
              </a>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={analyticsData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="views"
                  stroke="#7339c4"
                  activeDot={{ r: 6 }}
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="uploads"
                  stroke="#22c55e"
                  activeDot={{ r: 6 }}
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="uniqueViewers"
                  stroke="#ef4444"
                  activeDot={{ r: 6 }}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 flex-wrap mt-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-700"></div>
                <span className="text-sm text-gray-600">Views</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm text-gray-600">Uploads</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-sm text-gray-600">Unique viewers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contents Section - IMPROVED RESPONSIVE DESIGN */}
        <div className="md:col-span-4">
          <div className="bg-white p-4 rounded-md shadow-sm border h-full overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-medium text-lg">Contents</h2>
              <a href="#" className="text-sm text-purple-700 hover:underline">
                View all
              </a>
            </div>
            {/* Added overflow-y-auto to create scrollable content area */}
            <div className="space-y-4 overflow-y-auto max-h-[540px] pr-1">
              {contentItems.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-2 sm:gap-3 md:gap-2 lg:gap-4"
                >
                  {/* Responsive image that shrinks appropriately */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 sm:w-24 sm:h-16 md:w-20 md:h-12 lg:w-24 lg:h-16 object-cover rounded-md flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    {/* Used truncate class to prevent text overflow */}
                    <h3 className="font-medium text-sm md:text-base truncate">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 truncate">
                      {item.date} · {item.duration}
                    </p>
                    {/* Made categories section wrap properly */}
                    <div className="flex flex-wrap gap-1 mt-1">
                      {item.categories.map((category, i) => (
                        <span
                          key={i}
                          className="text-xs text-gray-600 whitespace-nowrap"
                        >
                          {category}
                          {i < item.categories.length - 1 ? " · " : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
