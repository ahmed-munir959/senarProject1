import React from "react";

const CompareScreen = ({
  selectedStudios,
  studioToCompare,
  setSelectedStudios,
  setShowCompare,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl p-6 absolute bottom-0 md:relative md:bottom-auto md:w-[864px] md:h-[454px] md:mx-auto md:border md:border-gray-200 md:overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium">Compare Studios</h2>
          <button
            onClick={() => setShowCompare(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8 md:grid-cols-3 md:w-full md:max-w-[750px] md:h-[82px] md:mx-auto md:gap-6">
          {selectedStudios.slice(0, 2).map((studio) => (
            <div
              key={studio.id}
              className="border border-gray-200 rounded-lg p-4 relative md:w-[200px] md:h-[82px] md:p-5 md:rounded-xl md:border-[#CCCCCC] md:flex md:flex-row md:gap-2.5"
            >
              <div className="flex flex-col items-center md:flex-row md:items-center md:justify-start md:gap-2.5 md:w-full">
                <div className="mb-2 md:mb-0">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden md:w-10 md:h-10">
                    {typeof studio.logo === "string" &&
                    studio.logo.includes("/") ? (
                      <img
                        src={studio.logo}
                        alt={`${studio.name} logo`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-xl">{studio.logo}</span>
                    )}
                  </div>
                </div>
                <div className="md:flex md:flex-col md:max-w-[120px]">
                  <h3 className="font-medium text-sm md:truncate">
                    {studio.name}
                  </h3>
                  <p className="text-xs text-gray-500 md:truncate">
                    @
                    {studio.username ||
                      studio.name.toLowerCase().replace(/\s+/g, "")}
                  </p>
                </div>
              </div>
              <div className="absolute top-2 right-2">
                <button className="text-gray-400 hover:text-gray-600">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}

          <div className="col-span-2 md:col-span-1 border border-[#CCCCCC] rounded-lg p-4 flex items-center justify-center h-full w-full md:max-w-[214px] md:h-[82px] md:p-5 md:rounded-xl">
            <button
              onClick={() => {
                if (studioToCompare) {
                  const updated =
                    selectedStudios.length === 2
                      ? [selectedStudios[0], studioToCompare]
                      : [...selectedStudios, studioToCompare];
                  setSelectedStudios(updated);
                }
              }}
              className="w-full h-full text-[#CCCCCC] text-sm font-medium leading-[140%] hover:text-purple-500 transition-colors"
            >
              +Add to compare
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-3 py-2 border-b border-gray-200">
            <div className="font-medium text-sm">Rank</div>
            {selectedStudios.slice(0, 2).map((studio) => (
              <div key={`rank-${studio.id}`} className="text-center text-sm">
                {studio.rankNumber}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 py-2 border-b border-gray-200">
            <div className="font-medium text-sm">Views</div>
            {selectedStudios.slice(0, 2).map((studio) => (
              <div key={`views-${studio.id}`} className="text-center text-sm">
                {studio.views}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 py-2 border-b border-gray-200">
            <div className="font-medium text-sm">Uploads</div>
            {selectedStudios.slice(0, 2).map((studio) => (
              <div key={`uploads-${studio.id}`} className="text-center text-sm">
                {studio.uploads}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 py-2 border-b border-gray-200">
            <div className="font-medium text-sm">Engagement</div>
            {selectedStudios.slice(0, 2).map((studio) => (
              <div
                key={`engagement-${studio.id}`}
                className="text-center text-sm"
              >
                {studio.engagement || "N/A"}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareScreen;
