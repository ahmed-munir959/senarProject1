import React from "react";
import { Video } from "lucide-react";

const SearchBar = ({ mobile, onLaunchStudio }) => {
  const handleLaunchStudio = () => {
    if (onLaunchStudio) {
      onLaunchStudio();
    }
  };

  if (mobile) {
    return (
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </span>
        <input
          type="text"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Search videos here"
        />
        <div className="mt-2">
          <button
            className="flex items-center bg-purple-800 text-white px-3 py-2 rounded-md"
            onClick={handleLaunchStudio}
          >
            <Video size={18} className="mr-2" />
            <span>Launch Studio</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 pt-6 pb-4">
      <div className="flex justify-between items-center">
        <div className="relative w-full max-w-xl">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </span>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Search videos here"
          />
        </div>

        <div className="flex items-center ml-4">
          <button
            className="flex items-center bg-purple-800 text-white px-3 py-2 rounded-md mr-4"
            onClick={handleLaunchStudio}
          >
            <Video size={18} className="mr-2" />
            <span>Launch Studio</span>
          </button>

          <button className="p-2 mr-4 text-gray-500 hover:text-gray-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
          </button>

          <div className="relative">
            <button className="flex items-center text-gray-700 focus:outline-none">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <svg
                className="w-4 h-4 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

// import DashBoardLayout from "../../../studio/dashBoard/DashBoardLayout";
// import React from "react";
// import { Video } from "lucide-react";

// const SearchBar = ({ mobile }) => {
//   if (mobile) {
//     return (
//       <div className="relative">
//         <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//           <svg
//             className="w-5 h-5 text-gray-400"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//             ></path>
//           </svg>
//         </span>
//         <input
//           type="text"
//           className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//           placeholder="Search videos here"
//         />
//         <div className="mt-2">
//           <button className="flex items-center bg-purple-800 text-white px-3 py-2 rounded-md">
//             <Video size={18} className="mr-2" />
//             <span>Launch Studio</span>
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="px-6 pt-6 pb-4">
//       <div className="flex justify-between items-center">
//         <div className="relative w-full max-w-xl">
//           <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//             <svg
//               className="w-5 h-5 text-gray-400"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//               ></path>
//             </svg>
//           </span>
//           <input
//             type="text"
//             className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//             placeholder="Search videos here"
//           />
//         </div>

//         <div className="flex items-center ml-4">
//           <button className="flex items-center bg-purple-800 text-white px-3 py-2 rounded-md mr-4">
//             <Video size={18} className="mr-2" />
//             <span>Launch Studio</span>
//           </button>

//           <button className="p-2 mr-4 text-gray-500 hover:text-gray-700">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//               ></path>
//             </svg>
//           </button>

//           <div className="relative">
//             <button className="flex items-center text-gray-700 focus:outline-none">
//               <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
//                 <svg
//                   className="w-5 h-5"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
//                     clipRule="evenodd"
//                   ></path>
//                 </svg>
//               </div>
//               <svg
//                 className="w-4 h-4 ml-2"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                   clipRule="evenodd"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;
