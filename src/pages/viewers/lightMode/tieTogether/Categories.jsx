import React from "react";

const Categories = ({ selectedGenre, setSelectedGenre }) => {
  const genres = [
    "All",
    "Action",
    "Adventure",
    "Comedy",
    "Crime and mystery",
    "Fantasy",
    "Historical",
    "Horror",
    "Romance",
    "Science fiction",
  ];

  return (
    <div className="px-1 md:px-6 pb-2 md:pb-4 overflow-x-auto md:overflow-x-visible no-scrollbar">
      <div className="inline-flex space-x-1 md:space-x-[6px] whitespace-nowrap max-w-[100vw]">
        {genres.map((genre, index) => (
          <button
            key={index}
            className={`py-2 px-3 md:px-6 rounded text-sm font-normal
                ${
                  genre === selectedGenre
                    ? "bg-purple-800 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
