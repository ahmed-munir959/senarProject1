import React from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

const FeedbackScreen = () => {
  const feedbackItems = [
    {
      id: 1,
      title: "Title about the feedback",
      content:
        "Quam a laudantium similique quis odio temporibus excepturi. Et numquam perspiciatis et vel vel at magni architecto. Iure quae illum aut rerum dolore quaerat praesentium et eius.",
      author: {
        name: "Aaron Nolan DVM",
        handle: "@aaronnolan",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
    },
    {
      id: 2,
      title: "Title about the feedback",
      content:
        "Quam a laudantium similique quis odio temporibus excepturi. Et numquam perspiciatis et vel vel at magni architecto. Iure quae illum aut rerum dolore quaerat praesentium et eius.",
      author: {
        name: "Cecilia Effertz",
        handle: "@ceciliaeffertz",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      },
    },
    {
      id: 3,
      title: "Title about the feedback",
      content:
        "Quam a laudantium similique quis odio temporibus excepturi. Et numquam perspiciatis et vel vel at magni architecto. Iure quae illum aut rerum dolore quaerat praesentium et eius.",
      author: {
        name: "Floyd Reilly",
        handle: "@reillyfloyd",
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      },
    },
    {
      id: 4,
      title: "Title about the feedback",
      content:
        "Quam a laudantium similique quis odio temporibus excepturi. Et numquam perspiciatis et vel vel at magni architecto. Iure quae illum aut rerum dolore quaerat praesentium et eius.",
      author: {
        name: "Jeffrey Turcotte",
        handle: "@jeffreyturcotte",
        avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      },
    },
    {
      id: 5,
      title: "Title about the feedback",
      content:
        "Quam a laudantium similique quis odio temporibus excepturi. Et numquam perspiciatis et vel vel at magni architecto. Iure quae illum aut rerum dolore quaerat praesentium et eius.",
      author: {
        name: "Alyssa Bayer",
        handle: "@alyssabayer",
        avatar: "https://randomuser.me/api/portraits/women/22.jpg",
      },
    },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-50 min-h-screen">
      {/* Header with responsive search bar */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
        <h1 className="text-2xl font-semibold">Feedback</h1>

        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search videos here"
            className="w-full pl-8 pr-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 block md:hidden"
          />
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400 block md:hidden" />
        </div>
      </div>

      {/* Feedback Items */}
      <div className="space-y-4">
        {feedbackItems.map((item) => (
          <div key={item.id} className="bg-white p-6 rounded-md shadow-sm">
            <h2
              className="mb-2 font-medium text-sm leading-[140%]"
              style={{ fontFamily: "Helvetica Neue" }}
            >
              {item.title}
            </h2>

            <p
              className="text-sm font-normal leading-[140%] mb-4"
              style={{ fontFamily: "Helvetica Neue" }}
            >
              {item.content}
            </p>

            <div className="flex items-center">
              <img
                src={item.author.avatar}
                alt={item.author.name}
                className="w-10 h-10 rounded-full mr-3"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/40";
                }}
              />
              <div>
                <div
                  className="font-medium text-xs leading-[140%]"
                  style={{ fontFamily: "Helvetica Neue" }}
                >
                  {item.author.name}
                </div>
                <div
                  className="text-xs font-normal leading-[140%]"
                  style={{ fontFamily: "Helvetica Neue", color: "#646464" }}
                >
                  {item.author.handle}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center mt-8">
        <button className="p-2 rounded-md hover:bg-gray-100">
          <ChevronLeft size={18} className="text-gray-600" />
        </button>

        <button className="mx-1 px-3 py-1 bg-purple-700 text-white rounded-md">
          1
        </button>
        <button className="mx-1 px-3 py-1 hover:bg-gray-100 text-gray-700 rounded-md">
          2
        </button>
        <button className="mx-1 px-3 py-1 hover:bg-gray-100 text-gray-700 rounded-md">
          3
        </button>
        <span className="mx-1 text-gray-500">...</span>

        <button className="p-2 rounded-md hover:bg-gray-100">
          <ChevronRight size={18} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default FeedbackScreen;
