import React from "react";

// Reuse existing image imports
import thriller1 from "../../../../assets/images/homeImages/thriller1.png";
import thriller2 from "../../../../assets/images/homeImages/thriller2.png";
import thriller3 from "../../../../assets/images/homeImages/thriller3.png";
import thriller4 from "../../../../assets/images/homeImages/thriller4.png";

const WatchLaterScreen = () => {
  const sections = [
    {
      title: "Watch Later",
      items: Array(12).fill(null), // 12 items for scroll testing
    },
  ];

  const getWatchLaterImages = (index) => {
    const images = [thriller1, thriller2, thriller3, thriller4];
    return images[index % 4];
  };

  return (
    <div className="p-4 md:p-6">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-6 md:mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-3 md:mb-4">
            {section.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {section.items.map((_, itemIndex) => {
              const imgSrc = getWatchLaterImages(itemIndex);
              return (
                <div key={itemIndex} className="relative">
                  <img
                    src={imgSrc}
                    className="w-full h-48 object-cover rounded-2xl"
                    alt={`${section.title} ${itemIndex + 1}`}
                    // style={{
                    //   width: "358px",
                    //   height: "200px",
                    //   maxWidth: "100%",
                    // }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WatchLaterScreen;
