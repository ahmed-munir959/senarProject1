import React, { useState } from "react";
import { MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";
import ReactPlayer from "react-player";

const ReportsScreen = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState("February 2025");
  const [hoveredVideoId, setHoveredVideoId] = useState(null);

  // Function to extract YouTube ID from URL
  const getYouTubeId = (url) => {
    const match = url.match(/youtu.be\/([^?]+)/);
    return match ? match[1] : null;
  };

  // Define all report data with YouTube URLs
  const reportData = [
    {
      id: 1,
      title: "Title of the content",
      timeRange: "00:44 - 01:25",
      type: "Report",
      videoUrl: "https://youtu.be/-wzOetb-D3w?si=WbLon0FSnqMCEpn9",
      description:
        "Quam a laudantium similique quis odio temporibus excepturi. Et numquam perspiciatis et vel vel at magni architecto. Iure quae illum aut rerum dolore quaerat praesentium et eius.",
    },
    {
      id: 2,
      title: "Title of the content",
      timeRange: "00:44 - 01:25",
      type: "Copyright claim",
      videoUrl: "https://youtu.be/RKBLyTVu7Q0?si=2ZoUJ3irULHhxGzq",
      description:
        "Quam a laudantium similique quis odio temporibus excepturi. Et numquam perspiciatis et vel vel at magni architecto. Iure quae illum aut rerum dolore quaerat praesentium et eius.",
    },
    {
      id: 3,
      title: "Title of the content",
      timeRange: "00:44 - 01:25",
      type: "Report",
      videoUrl: "https://youtu.be/WM9rdc0fsgo?si=4ycf7OOqWB_Ph0pV",
      description:
        "Quam a laudantium similique quis odio temporibus excepturi. Et numquam perspiciatis et vel vel at magni architecto. Iure quae illum aut rerum dolore quaerat praesentium et eius.",
    },
    {
      id: 4,
      title: "Title of the content",
      timeRange: "00:44 - 01:25",
      type: "Copyright claim",
      videoUrl: "https://youtu.be/SFb_KbrzznM?si=FDcR0XL1zDvB8tGi",
      description:
        "Quam a laudantium similique quis odio temporibus excepturi. Et numquam perspiciatis et vel vel at magni architecto. Iure quae illum aut rerum dolore quaerat praesentium et eius.",
    },
  ];

  const tabOptions = ["All", "Reports", "Copyrights"];
  const displayedReports = reportData;

  return (
    <div className="p-4 md:p-6">
      {/* Header with title and month selector */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-6 gap-3">
        <h1 className="text-xl md:text-2xl font-medium">Reports</h1>
        <div className="relative inline-block w-full md:w-auto">
          <select
            className="w-full md:w-auto appearance-none bg-white border border-gray-200 rounded-md py-2 px-4 pr-8 text-sm focus:outline-none"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option>Month: February 2025</option>
            <option>Month: January 2025</option>
            <option>Month: December 2024</option>
          </select>
        </div>
      </div>

      {/* Tab navigation */}
      <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
        {tabOptions.map((tab) => (
          <button
            key={tab}
            className={`px-4 md:px-6 py-2 rounded-md text-sm font-medium transition ${
              selectedTab === tab
                ? "bg-purple-800 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Reports list */}
      <div className="space-y-4">
        {displayedReports.map((report) => (
          <div
            key={report.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden p-3 md:p-4"
          >
            {/* On medium and larger screens: Original layout */}
            <div className="hidden md:flex">
              {/* Video player/thumbnail container */}
              <div
                className="w-40 h-28 relative bg-gray-100"
                onMouseEnter={() => setHoveredVideoId(report.id)}
                onMouseLeave={() => setHoveredVideoId(null)}
              >
                {hoveredVideoId === report.id ? (
                  <ReactPlayer
                    url={report.videoUrl}
                    playing={true}
                    width="100%"
                    height="100%"
                    controls={false}
                    className="absolute top-0 left-0"
                  />
                ) : (
                  <img
                    src={`https://img.youtube.com/vi/${getYouTubeId(
                      report.videoUrl
                    )}/0.jpg`}
                    alt={report.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Report content */}
              <div className="flex-1 pl-4">
                <div className="flex justify-between">
                  <h3 className="text-lg font-medium">{report.title}</h3>
                  <button className="text-gray-400">
                    <MoreVertical size={20} />
                  </button>
                </div>

                <div className="text-sm text-gray-500 mt-1">
                  {report.timeRange} · {report.type}
                </div>

                <p className="text-sm mt-2 text-gray-700">
                  {report.description}
                </p>
              </div>
            </div>

            {/* On smaller screens: Modified layout with description below */}
            <div className="flex flex-col md:hidden">
              {/* Top row with video and title */}
              <div className="flex">
                {/* Video player/thumbnail container */}
                <div
                  className="w-40 h-28 relative bg-gray-100 flex-shrink-0"
                  onMouseEnter={() => setHoveredVideoId(report.id)}
                  onMouseLeave={() => setHoveredVideoId(null)}
                >
                  {hoveredVideoId === report.id ? (
                    <ReactPlayer
                      url={report.videoUrl}
                      playing={true}
                      width="100%"
                      height="100%"
                      controls={false}
                      className="absolute top-0 left-0"
                    />
                  ) : (
                    <img
                      src={`https://img.youtube.com/vi/${getYouTubeId(
                        report.videoUrl
                      )}/0.jpg`}
                      alt={report.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Title and time info next to video */}
                <div className="flex-1 ml-3 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-base font-medium">{report.title}</h3>
                      <div className="text-xs text-gray-500 mt-1">
                        {report.timeRange} · {report.type}
                      </div>
                    </div>
                    <button className="text-gray-400">
                      <MoreVertical size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Description below video and title on small screens only */}
              <div className="mt-3">
                <p className="text-xs text-gray-700">{report.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 md:mt-6 gap-1 md:gap-2">
        <button
          className="p-1 rounded border border-gray-200"
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        >
          <ChevronLeft size={16} />
        </button>
        <button
          className={`px-2 md:px-3 py-1 rounded ${
            currentPage === 1
              ? "bg-purple-100 border border-purple-200"
              : "border border-gray-200"
          }`}
        >
          1
        </button>
        <button
          className={`px-2 md:px-3 py-1 rounded ${
            currentPage === 2
              ? "bg-purple-100 border border-purple-200"
              : "border border-gray-200"
          }`}
        >
          2
        </button>
        <button
          className={`px-2 md:px-3 py-1 rounded ${
            currentPage === 3
              ? "bg-purple-100 border border-purple-200"
              : "border border-gray-200"
          }`}
        >
          3
        </button>
        <span className="flex items-center">...</span>
        <button
          className="p-1 rounded border border-gray-200"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ReportsScreen;

// import React, { useState } from "react";
// import { MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";
// import ReactPlayer from "react-player";

// const ReportsScreen = () => {
//   const [selectedTab, setSelectedTab] = useState("All");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedMonth, setSelectedMonth] = useState("February 2025");
//   const [hoveredVideoId, setHoveredVideoId] = useState(null);

//   // Function to extract YouTube ID from URL
//   const getYouTubeId = (url) => {
//     const match = url.match(/youtu.be\/([^?]+)/);
//     return match ? match[1] : null;
//   };

//   // Define all report data with YouTube URLs
//   const reportData = [
//     {
//       id: 1,
//       title: "Title of the content",
//       timeRange: "00:44 - 01:25",
//       type: "Report",
//       videoUrl: "https://youtu.be/-wzOetb-D3w?si=WbLon0FSnqMCEpn9",
//       description:
//         "Quam a laudantium similique quis odio temporibus excepturi. Et numquam perspiciatis et vel vel at magni architecto. Iure quae illum aut rerum dolore quaerat praesentium et eius.",
//     },
//     {
//       id: 2,
//       title: "Title of the content",
//       timeRange: "00:44 - 01:25",
//       type: "Copyright claim",
//       videoUrl: "https://youtu.be/RKBLyTVu7Q0?si=2ZoUJ3irULHhxGzq",
//       description:
//         "Quam a laudantium similique quis odio temporibus excepturi. Et numquam perspiciatis et vel vel at magni architecto. Iure quae illum aut rerum dolore quaerat praesentium et eius.",
//     },
//     {
//       id: 3,
//       title: "Title of the content",
//       timeRange: "00:44 - 01:25",
//       type: "Report",
//       videoUrl: "https://youtu.be/WM9rdc0fsgo?si=4ycf7OOqWB_Ph0pV",
//       description:
//         "Quam a laudantium similique quis odio temporibus excepturi. Et numquam perspiciatis et vel vel at magni architecto. Iure quae illum aut rerum dolore quaerat praesentium et eius.",
//     },
//     {
//       id: 4,
//       title: "Title of the content",
//       timeRange: "00:44 - 01:25",
//       type: "Copyright claim",
//       videoUrl: "https://youtu.be/SFb_KbrzznM?si=FDcR0XL1zDvB8tGi",
//       description:
//         "Quam a laudantium similique quis odio temporibus excepturi. Et numquam perspiciatis et vel vel at magni architecto. Iure quae illum aut rerum dolore quaerat praesentium et eius.",
//     },
//   ];

//   const tabOptions = ["All", "Reports", "Copyrights"];
//   const displayedReports = reportData;

//   return (
//     <div className="p-6">
//       {/* Header with title and month selector */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-medium">Reports</h1>
//         <div className="relative inline-block">
//           <select
//             className="appearance-none bg-white border border-gray-200 rounded-md py-2 px-4 pr-8 text-sm focus:outline-none"
//             value={selectedMonth}
//             onChange={(e) => setSelectedMonth(e.target.value)}
//           >
//             <option>Month: February 2025</option>
//             <option>Month: January 2025</option>
//             <option>Month: December 2024</option>
//           </select>
//         </div>
//       </div>

//       {/* Tab navigation */}
//       <div className="flex gap-2 mb-6">
//         {tabOptions.map((tab) => (
//           <button
//             key={tab}
//             className={`px-6 py-2 rounded-md text-sm font-medium transition ${
//               selectedTab === tab
//                 ? "bg-purple-800 text-white"
//                 : "bg-white text-gray-600 hover:bg-gray-100"
//             }`}
//             onClick={() => setSelectedTab(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Reports list */}
//       <div className="space-y-4">
//         {displayedReports.map((report) => (
//           <div
//             key={report.id}
//             className="bg-white rounded-lg shadow-sm overflow-hidden"
//           >
//             <div className="flex">
//               {/* Video player/thumbnail container */}
//               <div
//                 className="w-40 h-28 relative bg-gray-100"
//                 onMouseEnter={() => setHoveredVideoId(report.id)}
//                 onMouseLeave={() => setHoveredVideoId(null)}
//               >
//                 {hoveredVideoId === report.id ? (
//                   <ReactPlayer
//                     url={report.videoUrl}
//                     playing={true}
//                     width="100%"
//                     height="100%"
//                     controls={false}
//                     className="absolute top-0 left-0"
//                   />
//                 ) : (
//                   <img
//                     src={`https://img.youtube.com/vi/${getYouTubeId(
//                       report.videoUrl
//                     )}/0.jpg`}
//                     alt={report.title}
//                     className="w-full h-full object-cover"
//                   />
//                 )}
//               </div>

//               {/* Report content */}
//               <div className="flex-1 p-4">
//                 <div className="flex justify-between">
//                   <h3 className="text-lg font-medium">{report.title}</h3>
//                   <button className="text-gray-400">
//                     <MoreVertical size={20} />
//                   </button>
//                 </div>

//                 <div className="text-sm text-gray-500 mt-1">
//                   {report.timeRange} · {report.type}
//                 </div>

//                 <p className="text-sm mt-2 text-gray-700 line-clamp-2">
//                   {report.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-6 gap-2">
//         <button
//           className="p-1 rounded border border-gray-200"
//           onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
//         >
//           <ChevronLeft size={16} />
//         </button>
//         <button
//           className={`px-3 py-1 rounded ${
//             currentPage === 1
//               ? "bg-purple-100 border border-purple-200"
//               : "border border-gray-200"
//           }`}
//         >
//           1
//         </button>
//         <button
//           className={`px-3 py-1 rounded ${
//             currentPage === 2
//               ? "bg-purple-100 border border-purple-200"
//               : "border border-gray-200"
//           }`}
//         >
//           2
//         </button>
//         <button
//           className={`px-3 py-1 rounded ${
//             currentPage === 3
//               ? "bg-purple-100 border border-purple-200"
//               : "border border-gray-200"
//           }`}
//         >
//           3
//         </button>
//         <span className="flex items-center">...</span>
//         <button
//           className="p-1 rounded border border-gray-200"
//           onClick={() => setCurrentPage(currentPage + 1)}
//         >
//           <ChevronRight size={16} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ReportsScreen;
