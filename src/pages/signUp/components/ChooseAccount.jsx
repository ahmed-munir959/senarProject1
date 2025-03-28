import ExperienceStudio from "../../../assets/images/ExperienceStudio.png";
import ExperienceViewer from "../../../assets/images/ExperienceViewer.png";
import SenarLogo from "../../../assets/images/SenarLogo.png";

const ChooseAccount = () => {
  return (
    <section className="h-screen bg-white flex flex-col overflow-hidden">
      {/* Logo Section - Hidden on mobile */}
      <div className="pl-20 rounded-lg w-full mt-6 md:block hidden">
        <img
          className="w-[105px] h-[18px] object-cover block"
          src={SenarLogo}
          alt="Senar Logo"
        />
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col items-center flex-1 md:justify-center px-4 pt-8 md:pt-0">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 text-center mb-8 px-4">
          How do you want to
          <br className="md:hidden" /> experience Senar?
        </h1>

        {/* Options Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-[400px] md:max-w-none">
          {/* Studio Option */}
          <div className="w-full md:w-auto">
            <div className="p-3 border-2 border-gray-200 rounded-[28px] md:rounded-2xl hover:border-gray-300 transition-all w-full">
              <div className="flex items-center md:flex-col md:justify-center">
                <img
                  src={ExperienceStudio}
                  alt="Studio selection"
                  className="w-24 h-24 md:w-48 md:h-48 object-contain p-2 md:p-4 rounded-[20px]"
                />
                <div className="md:mt-2 md:text-center">
                  <span className="md:hidden text-base font-medium text-gray-900 ml-4">
                    I'm a Studio
                  </span>
                  <span className="hidden md:block text-lg font-medium text-gray-900">
                    I'm a Studio
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Viewer Option */}
          <div className="w-full md:w-auto">
            <div className="p-3 border-2 border-gray-200 rounded-[28px] md:rounded-2xl hover:border-gray-300 transition-all w-full">
              <div className="flex items-center md:flex-col md:justify-center">
                <img
                  src={ExperienceViewer}
                  alt="Viewer selection"
                  className="w-24 h-24 md:w-48 md:h-48 object-contain p-2 md:p-4 rounded-[20px]"
                />
                <div className="md:mt-2 md:text-center">
                  <span className="md:hidden text-base font-medium text-gray-900 ml-4">
                    I'm a Viewer
                  </span>
                  <span className="hidden md:block text-lg font-medium text-gray-900">
                    I'm a Viewer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseAccount;
