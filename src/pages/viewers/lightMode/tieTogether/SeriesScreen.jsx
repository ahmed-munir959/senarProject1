import React from "react";

// Reuse existing image imports from homeImages
import thriller1 from "../../../../assets/images/homeImages/thriller1.png";
import thriller2 from "../../../../assets/images/homeImages/thriller2.png";
import thriller3 from "../../../../assets/images/homeImages/thriller3.png";
import thriller4 from "../../../../assets/images/homeImages/thriller4.png";
import adventure1 from "../../../../assets/images/homeImages/adventure1.png";
import adventure2 from "../../../../assets/images/homeImages/adventure2.png";
import adventure3 from "../../../../assets/images/homeImages/adventure3.png";
import adventure4 from "../../../../assets/images/homeImages/adventure4.png";
import comedy1 from "../../../../assets/images/homeImages/comedy1.png";
import comedy2 from "../../../../assets/images/homeImages/comedy2.png";
import comedy3 from "../../../../assets/images/homeImages/comedy3.png";
import comedy4 from "../../../../assets/images/homeImages/comedy4.png";

const SeriesScreen = () => {
  const sections = [
    {
      title: "Popular Series",
      items: Array(4).fill(null),
    },
    {
      title: "Continuing Series",
      items: Array(4).fill(null),
    },
    {
      title: "Completed Series",
      items: Array(4).fill(null),
    },
  ];

  const getSeriesImages = (sectionTitle, index) => {
    switch (sectionTitle) {
      case "Popular Series":
        return [thriller1, thriller2, thriller3, thriller4][index];
      case "Continuing Series":
        return [adventure1, adventure2, adventure3, adventure4][index];
      case "Completed Series":
        return [comedy1, comedy2, comedy3, comedy4][index];
      default:
        return thriller1;
    }
  };

  return (
    <div className="p-4 md:p-6">
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-6 md:mb-10">
          <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">
            {section.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {section.items.map((_, itemIndex) => {
              const imgSrc = getSeriesImages(section.title, itemIndex);
              return (
                <div key={itemIndex} className="relative">
                  <img
                    src={imgSrc}
                    className="w-full h-32 md:h-44 object-cover rounded-lg md:rounded-2xl"
                    alt={`${section.title} ${itemIndex + 1}`}
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

export default SeriesScreen;
