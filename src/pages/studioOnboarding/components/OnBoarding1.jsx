import statusBar1 from "../../../assets/images/statusBar1.png";
import SenarLogo from "../../../assets/images/senarImage.png";
import backArrow from "../../../assets/images/backArrow.png";

const OnBoarding1 = () => {
  return (
    <div className="min-h-screen bg-white md:flex md:items-center md:justify-center">
      {/* Main Container */}
      <section className="max-w-[505px] md:flex md:flex-col md:mr-16">
        {/* Mobile Header - Visible only on small screens */}
        <div className="md:hidden px-4 mt-4 flex flex-col">
          {/* Back Arrow and Status Bar Container */}
          <div className="flex flex-col">
            <button className="mb-4 bg-transparent p-0 border-none self-start">
              <img src={backArrow} alt="Back" className="w-6 h-6" />
            </button>
            <img
              src={statusBar1}
              alt="status bar"
              className="w-full"
              style={{ height: "auto" }}
            />
          </div>
        </div>

        {/* Logo and Status Bar Container for medium and above screens */}
        <div className="hidden md:block px-4">
          <img
            src={SenarLogo}
            alt="Senar logo"
            className="mb-4"
            style={{
              width: "105px",
              height: "18px",
              marginLeft: "0",
            }}
          />
          <img
            src={statusBar1}
            alt="status bar"
            className="w-full mb-4"
            style={{ height: "auto" }}
          />
        </div>

        {/* Form Content */}
        <div className="pt-12 px-4 md:pt-0">
          <h1
            className="mb-4 text-left"
            style={{
              width: "505px",
              fontFamily: "Helvetica Neue",
              fontWeight: 500,
              fontSize: "32px",
              lineHeight: "40px",
            }}
          >
            Setup your studio profile
          </h1>

          <p
            className="mb-4 md:mb-6"
            style={{
              width: "505px",
              fontFamily: "Helvetica Neue",
              fontWeight: 400,
              fontSize: "14px",
              color: "#646464",
            }}
          >
            Enter details below to create your new studio account
          </p>

          {/* Mobile Upload Section - Visible only on small screens */}
          <div className="md:hidden w-full max-w-[200px] mx-auto mb-6">
            <div
              className="border rounded-[20px] flex flex-col items-center justify-center text-center"
              style={{
                width: "200px",
                height: "200px",
                border: "2px dashed #999999",
                padding: "60px 30px",
              }}
            >
              <div className="flex flex-col items-center">
                <h2 className="w-[133px] h-[20px] m-0 font-medium text-[14px] leading-[1.4] text-center font-['Helvetica Neue']">
                  + Upload Image
                </h2>
                <p className="w-[133px] h-[34px] m-0 mt-2 font-normal text-[12px] leading-[1.4] text-center font-['Helvetica Neue'] text-[#646464]">
                  that's at least 98 x 98 pixels and 4MB or less
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-lg mx-auto space-y-4 md:mx-0">
            {/* Name Field */}
            <div>
              <h2
                className="font-bold mb-1"
                style={{
                  fontFamily: "Helvetica Neue",
                  fontSize: "14px",
                  color: "#222222",
                }}
              >
                Name
              </h2>
              <input
                type="text"
                placeholder="Enter studio name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  height: "48px",
                  border: "1px solid #CCCCCC",
                  padding: "12px",
                }}
              />
            </div>

            {/* Website Field */}
            <div>
              <h2
                className="font-bold mb-1"
                style={{
                  fontFamily: "Helvetica Neue",
                  fontSize: "14px",
                  color: "#222222",
                }}
              >
                Website
              </h2>
              <input
                type="text"
                placeholder="Enter website"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  height: "48px",
                  border: "1px solid #CCCCCC",
                  padding: "12px",
                }}
              />
            </div>

            {/* Category Field */}
            <div>
              <h2
                className="font-bold mb-1"
                style={{
                  fontFamily: "Helvetica Neue",
                  fontSize: "14px",
                  color: "#222222",
                }}
              >
                Category
              </h2>
              <div className="relative">
                <select
                  className="w-full p-3 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#646464] font-normal text-[14px] font-['Helvetica Neue'] appearance-none"
                  style={{
                    height: "48px",
                    border: "1px solid #CCCCCC",
                    padding: "12px",
                    paddingRight: "40px",
                  }}
                >
                  <option value="" disabled selected>
                    Select category
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* About Field */}
            <div>
              <h2
                className="font-bold mb-1"
                style={{
                  fontFamily: "Helvetica Neue",
                  fontSize: "14px",
                  color: "#222222",
                }}
              >
                About
              </h2>
              <textarea
                placeholder="Tell us about your studio..."
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  height: "100px",
                  border: "1px solid #CCCCCC",
                  padding: "12px",
                }}
              />
            </div>

            {/* Continue Button */}
            <button
              className="w-full bg-[#532E88] text-white py-4 rounded-lg font-semibold"
              style={{
                height: "48px",
                padding: "12px 45px",
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </section>

      {/* Desktop Upload Section - Visible only on medium screens and above */}
      <div
        className="hidden md:flex flex-col"
        style={{
          marginTop: "-280px",
        }}
      >
        <div
          className="border rounded-[20px] flex flex-col items-center justify-center text-center"
          style={{
            width: "200px",
            height: "200px",
            border: "2px dashed #999999",
            padding: "60px 30px",
          }}
        >
          <div className="flex flex-col items-center">
            <h2 className="w-[133px] h-[20px] md:w-[166px] md:h-[28px] m-0 !font-medium !text-[14px] md:!text-[20px] leading-[1.4] text-center font-['Helvetica Neue']">
              + Upload Image
            </h2>
            <p className="w-[133px] h-[34px] md:w-[166px] md:h-[44px] m-0 mt-2 !font-normal !text-[12px] md:!text-[16px] leading-[1.4] text-center font-['Helvetica Neue']">
              that's at least 98 x 98 pixels and 4MB or less
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnBoarding1;
