import { useState } from "react";
import SenarLogoComponent from "../../../components/SenarLogoComponent";

const OnBoarding3 = () => {
  // State for checkbox
  const [isChecked, setIsChecked] = useState(false);

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      {/* Responsive Width Container */}
      <div className="w-full max-w-[342.94px] md:max-w-[820px] mx-4 md:mx-auto">
        <section className="flex flex-col">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            {/* Using SenarLogoComponent with a static 100% progress */}
            <SenarLogoComponent progressPercentage={100} />
          </div>

          {/* Mobile Progress Bar - now properly constrained */}
          <div className="md:hidden w-full mb-6">
            <div className="mb-4">
              <div className="text-sm font-medium text-purple-700 font-[Helvetica Neue]">
                Progress (100%)
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-purple-600 h-2.5 rounded-full"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="pt-6 md:pt-0">
            <div className="flex flex-col gap-1 mb-6">
              <h1 className="text-left font-helvetica font-medium text-[32px] leading-[40px] text-[#222222]">
                Self-Declaration
              </h1>
              <p className="font-helvetica font-normal text-[14px] text-[#646464]">
                Check the declaration form to create your new studio account.
              </p>
            </div>

            {/* Self Declaration Form */}
            <div className="w-full">
              <p className="mb-4 font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222]">
                We, [Studio Name], hereby declare that:
              </p>

              <ul className="list-disc pl-6 mb-4">
                <li>
                  <span className="font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222]">
                    Ownership & Rights
                  </span>
                  <p className="font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222]">
                    I am the original creator and/or have full legal rights to
                    distribute the content submitted to Senar.
                  </p>
                </li>

                <li>
                  <span className="font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222]">
                    Copyright Compliance
                  </span>
                  <p className="font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222]">
                    My submission does not contain copyrighted material (e.g.,
                    music, footage, graphics) unless I have obtained proper
                    licensing or permission.
                  </p>
                </li>

                <li>
                  <span className="font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222]">
                    Third-Party Agreements
                  </span>
                  <p className="font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222]">
                    Any actors, crew members, or collaborators involved in the
                    production have given consent for their work to be showcased
                    on Senar.
                  </p>
                </li>

                <li>
                  <span className="font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222]">
                    No Infringement or Legal Disputes
                  </span>
                  <p className="font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222]">
                    My content is not subject to any legal disputes or copyright
                    claims.
                  </p>
                </li>

                <li>
                  <span className="font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222]">
                    Adherence to Senar's Guidelines
                  </span>
                  <p className="font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222]">
                    I acknowledge and agree to Senar's content policies, ethical
                    guidelines, and quality standards.
                  </p>
                </li>

                <li>
                  <span className="font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222]">
                    Liability Agreement
                  </span>
                  <p className="font-helvetica font-normal text-[14px] leading-[1.4] tracking-normal text-[#222222]">
                    I accept full responsibility for any legal issues arising
                    from misrepresentation of ownership or content rights. Senar
                    is not liable for any legal disputes related to my
                    submission.
                  </p>
                </li>
              </ul>

              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="declaration-checkbox"
                  className="w-4 h-4 border-2 border-[#532E88]"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="declaration-checkbox"
                  className="ml-2 font-helvetica font-normal text-[14px] text-[#222222]"
                >
                  I agree to this self-declaration
                </label>
              </div>

              <button
                className={`w-full h-[54px] ${
                  isChecked
                    ? "bg-[#532E88]"
                    : "bg-[#532E88] opacity-50 cursor-not-allowed"
                } text-white rounded-[8px] font-semibold font-helvetica`}
                disabled={!isChecked}
              >
                Create account
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OnBoarding3;