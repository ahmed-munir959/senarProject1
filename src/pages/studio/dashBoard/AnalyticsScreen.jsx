import React, { useState, useEffect, useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { ChevronDown } from "lucide-react";
import galiGuleyan from "../../../assets/images/studioDashBoardImages/galiGuleiyan.png";
import ulluzhukku from "../../../assets/images/studioDashBoardImages/ulluzhukku.png";
import kottukkaali from "../../../assets/images/studioDashBoardImages/kottukkaali.png";

const AnalyticsScreen = () => {
  const [selectedMonth, setSelectedMonth] = useState("February 2025");
  const [pieChartDimensions, setPieChartDimensions] = useState({
    innerRadius: 60,
    outerRadius: 80,
  });
  const pieContainerRef = useRef(null);

  // Responsive pie chart dimensions
  useEffect(() => {
    const handleResize = () => {
      if (pieContainerRef.current) {
        const containerWidth = pieContainerRef.current.clientWidth;
        // Scale the pie chart dimensions proportionally to the container width
        const scaleFactor = Math.min(1, containerWidth / 250); // 250px is a reference width
        setPieChartDimensions({
          innerRadius: Math.max(30, Math.floor(60 * scaleFactor)),
          outerRadius: Math.max(50, Math.floor(80 * scaleFactor)),
        });
      }
    };

    // Initial size calculation
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Data for the line chart
  const lineChartData = [
    { name: "Jan", views: 5000, uploads: 6000, viewers: 1500 },
    { name: "Feb", views: 4000, uploads: 5500, viewers: 1000 },
    { name: "Mar", views: 6500, uploads: 5000, viewers: 3000 },
    { name: "Apr", views: 3500, uploads: 8500, viewers: 2000 },
    { name: "May", views: 2500, uploads: 6000, viewers: 3500 },
    { name: "Jun", views: 1000, uploads: 6200, viewers: 4500 },
  ];

  // Data for pie chart
  const pieChartData = [
    { name: "Mobile phone", value: 50, color: "#4CAF50" },
    { name: "Computer", value: 20, color: "#F44336" },
    { name: "TV", value: 30, color: "#3F3D56" },
  ];

  // Data for top content
  const topContentData = [
    { id: 1, title: "Gali Guleiyan", views: "74,706", image: galiGuleyan },
    { id: 2, title: "Ulluzhuкku", views: "70,560", image: ulluzhukku },
    { id: 3, title: "Kottukkaali", views: "65,103", image: kottukkaali },
  ];

  // Data for audience countries
  const audienceData = [
    { country: "India", percentage: "60%", flag: "🇮🇳" },
    { country: "United States of America", percentage: "60%", flag: "🇺🇸" },
    { country: "Australia", percentage: "60%", flag: "🇦🇺" },
    { country: "New Zealand", percentage: "60%", flag: "🇳🇿" },
    { country: "Canada", percentage: "60%", flag: "🇨🇦" },
  ];

  const handleSortTitle = () => {
    // Add sort functionality here
    console.log("Sorting by title");
  };

  const handleSortViews = () => {
    // Add sort functionality here
    console.log("Sorting by views");
  };

  const handleSortCountry = () => {
    // Add sort functionality here
    console.log("Sorting by country");
  };

  const handleSortPercentage = () => {
    // Add sort functionality here
    console.log("Sorting by percentage");
  };

  return (
    <div className="p-6">
      {/* Header with title and month selector */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4 sm:gap-0">
        <h1 className="text-2xl font-medium">Analytics</h1>
        <div className="relative inline-block">
          <select
            className="appearance-none bg-white border border-gray-200 rounded-md py-2 px-4 pr-8 text-sm focus:outline-none"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option>Month: February 2025</option>
            <option>Month: January 2025</option>
            <option>Month: December 2024</option>
          </select>
        </div>
      </div>

      {/* First row: Line chart and audience */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Line chart */}
        <div className="bg-white rounded-lg shadow-sm p-4 col-span-1 lg:col-span-2">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={lineChartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={true}
                  vertical={false}
                />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 10000]} tickCount={6} />
                <Tooltip />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  iconType="circle"
                  payload={[
                    { value: "Views", type: "circle", color: "#673AB7" },
                    { value: "Uploads", type: "circle", color: "#4CAF50" },
                    {
                      value: "Unique viewers",
                      type: "circle",
                      color: "#F44336",
                    },
                  ]}
                />
                <Line
                  type="monotone"
                  dataKey="views"
                  stroke="#673AB7"
                  strokeWidth={3}
                  dot={{ r: 0 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="uploads"
                  stroke="#4CAF50"
                  strokeWidth={3}
                  dot={{ r: 0 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="viewers"
                  stroke="#F44336"
                  strokeWidth={3}
                  dot={{ r: 0 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Audience countries */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h2 className="text-lg font-medium mb-4">Where your audience from</h2>

          {/* Table header */}
          <div className="grid grid-cols-2 gap-2 bg-purple-50 py-2 px-4 rounded-t-md">
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={handleSortCountry}
            >
              <span className="text-sm font-medium">Country</span>
              <ChevronDown size={16} />
            </div>
            <div
              className="flex items-center gap-1 cursor-pointer justify-end"
              onClick={handleSortPercentage}
            >
              <span className="text-sm font-medium">Percentage</span>
              <ChevronDown size={16} />
            </div>
          </div>

          {/* Table body */}
          <div className="bg-white">
            {audienceData.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-2 gap-2 py-3 px-4 border-b border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{item.flag}</span>
                  <span className="text-sm truncate">{item.country}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm">{item.percentage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second row: Top content and device type */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top content */}
        <div className="bg-white rounded-lg shadow-sm p-4 col-span-1 lg:col-span-2">
          <h2 className="text-lg font-medium mb-4">
            Your top content in this period
          </h2>

          {/* Table header */}
          <div className="grid grid-cols-2 gap-2 bg-purple-50 py-2 px-4 rounded-t-md">
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={handleSortTitle}
            >
              <span className="text-sm font-medium">Title</span>
              <ChevronDown size={16} />
            </div>
            <div
              className="flex items-center gap-1 cursor-pointer justify-end"
              onClick={handleSortViews}
            >
              <span className="text-sm font-medium">Views</span>
              <ChevronDown size={16} />
            </div>
          </div>

          {/* Table body */}
          <div className="bg-white">
            {topContentData.map((content, index) => (
              <div
                key={content.id}
                className="grid grid-cols-2 gap-2 py-3 px-4 border-b border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-500">
                    #{index + 1}
                  </span>
                  <img
                    src={content.image}
                    alt={content.title}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <span className="text-sm truncate">{content.title}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm">{content.views}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Device type pie chart - Responsive version with dynamic scaling */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <h2 className="text-lg font-medium mb-4">Device type</h2>

          {/* Make the pie chart and legend responsive */}
          <div className="flex flex-col md:flex-row items-center">
            {/* Chart container - with dynamic scaling */}
            <div
              ref={pieContainerRef}
              className="w-full md:w-1/2 h-56 flex justify-center items-center"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                  <Pie
                    data={pieChartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={pieChartDimensions.innerRadius}
                    outerRadius={pieChartDimensions.outerRadius}
                    paddingAngle={0}
                    dataKey="value"
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend - below on mobile, right side on md+ */}
            <div className="w-full md:w-1/2 md:pl-6 mt-4 md:mt-0">
              <div className="flex flex-row md:flex-col justify-center md:justify-start gap-6 md:gap-3">
                {pieChartData.map((entry, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: entry.color }}
                    ></div>
                    <span className="text-sm text-gray-600">{entry.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsScreen;
