import { useState } from "react";
import backArrow from "../../assets/images/backArrow.png";
import SenarLogoComponent from "../../components/SenarLogoComponent";

// Temporary imports - replace with actual genre images
import actionImage from "../../assets/images/actionImage.png";
import adventureImage from "../../assets/images/adventureImage.png";
import comedyImage from "../../assets/images/comedyImage.png";
import fantasyImage from "../../assets/images/fantasyImage.png";
import historicalImage from "../../assets/images/historicalImage.png";
import horrorImage from "../../assets/images/horrorImage.png";
import romanceImage from "../../assets/images/romanceImage.png";
import othersImage from "../../assets/images/othersImage.png";
import crimeImage from "../../assets/images/crimeImage.png";

const ViewerOnBoarding2 = () => {
  const [selectedGenres, setSelectedGenres] = useState(new Set());
  const progressPercentage = 66;

  const genres = [
    { id: 1, name: "Action", image: actionImage },
    { id: 2, name: "Adventure", image: adventureImage },
    { id: 3, name: "Comedy", image: comedyImage },
    { id: 4, name: "Crime and mystery", image: crimeImage },
    { id: 5, name: "Fantasy", image: fantasyImage },
    { id: 6, name: "Historical", image: historicalImage },
    { id: 7, name: "Horror", image: horrorImage },
    { id: 8, name: "Romance", image: romanceImage },
    { id: 9, name: "Others", image: othersImage },
  ];

  const handleGenreSelect = (genreId) => {
    const newSelection = new Set(selectedGenres);
    if (newSelection.has(genreId)) {
      newSelection.delete(genreId);
    } else {
      newSelection.add(genreId);
    }
    setSelectedGenres(newSelection);
  };

  return (
    <div className="min-h-screen bg-white md:flex md:items-center md:justify-center">
      <section className="w-full px-4 md:max-w-[820px] md:h-[658px] md:flex md:flex-col md:justify-between">
        <div className="md:hidden mt-4 flex flex-col">
          <div className="flex flex-col">
            <button className="mb-4 bg-transparent p-0 border-none self-start">
              <img src={backArrow} alt="Back" className="w-6 h-6" />
            </button>
            <div className="w-full mb-4">
              <div className="text-sm font-medium text-purple-700 font-[Helvetica Neue]">
                Progress ({progressPercentage}%)
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-purple-600 h-2.5 rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <SenarLogoComponent progressPercentage={progressPercentage} />

        <div className="md:flex-1 md:flex md:flex-col md:justify-between">
          <div>
            <h1 className="mb-2 text-left text-[32px] leading-[40px] font-[Helvetica Neue] font-medium">
              Choose preferred genres
            </h1>
            <p className="mb-6 text-[14px] text-[#646464] font-[Helvetica Neue]">
              Select your preferred genres to setup your account
            </p>

            {/* Genre Grid */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-[16px] md:mb-8 mb-6">
              {genres.map((genre) => (
                <button
                  key={genre.id}
                  onClick={() => handleGenreSelect(genre.id)}
                  className={`relative w-full rounded-lg overflow-hidden transition-all 
                    ${
                      selectedGenres.has(genre.id)
                        ? "ring-2 ring-purple-600"
                        : "ring-1 ring-gray-200"
                    }
                    ${
                      genre.name === "Others"
                        ? "col-span-2 md:col-span-1 h-[100px] md:h-[148px]"
                        : "h-[94.23px] md:h-[148px]"
                    }
                    md:w-[256px]`}
                >
                  <img
                    src={genre.image}
                    alt={genre.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bottom-0 left-0 right-0 p-2 flex justify-center items-center">
                    <p className="text-white font-[Helvetica Neue] font-medium text-[20px] leading-[140%] text-center">
                      {genre.name}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <button className="w-full bg-[#532E88] text-white py-4 rounded-lg font-semibold font-[Helvetica Neue] hover:bg-[#431C6E] mt-6 md:mt-0">
            Continue
          </button>
        </div>
      </section>
    </div>
  );
};

export default ViewerOnBoarding2;
