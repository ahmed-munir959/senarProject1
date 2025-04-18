import React from "react";
import bwIcon from "./icons/bwIcon.png";
import {
  Edit,
  ChevronRight,
  Monitor,
  Lock,
  Globe,
  Shield,
  LogOut,
  FileText,
} from "lucide-react";

const OverView = () => {
  return (
    <div className="p-4 md:p-6 bg-white max-w-full">
      {/* Account Header - Simplified on mobile */}
      <h2 className="text-xl font-medium mb-6">Account</h2>

      {/* User Profile */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
        {/* Mobile layout with edit icon on the right */}
        <div className="flex justify-between items-start w-full md:hidden">
          <div className="flex items-start">
            <div className="relative">
              <img
                src={bwIcon}
                alt="B&W Studio"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-purple-800 rounded-full p-1 flex items-center justify-center">
                <div className="text-white">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.76 22H17.24C20 22 22 20 22 17.24V10.76C22 8 20 6 17.24 6H6.76C4 6 2 8 2 10.76V17.24C2 20 4 22 6.76 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 16.5C13.6569 16.5 15 15.1569 15 13.5C15 11.8431 13.6569 10.5 12 10.5C10.3431 10.5 9 11.8431 9 13.5C9 15.1569 10.3431 16.5 12 16.5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.28 9.5L17.29 9.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 2L8 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 2L16 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="ml-4">
              <p className="font-medium text-lg">B&W Studio</p>
              <p className="text-gray-500 text-sm">b&wstudio@gmail.com</p>
              <div className="mt-1 text-xs bg-purple-100 text-purple-800 px-3 py-1 rounded-full inline-block">
                Member since April 2024
              </div>
            </div>
          </div>

          {/* Mobile edit button */}
          <button className="bg-white rounded-full p-3 border border-gray-200">
            <Edit size={18} className="text-gray-700" />
          </button>
        </div>

        {/* Desktop layout with profile and edit button properly positioned */}
        <div className="hidden md:flex md:items-start">
          <div className="relative">
            <img
              src={bwIcon}
              alt="B&W Studio"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 bg-purple-800 rounded-full p-1 flex items-center justify-center">
              <div className="text-white">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.76 22H17.24C20 22 22 20 22 17.24V10.76C22 8 20 6 17.24 6H6.76C4 6 2 8 2 10.76V17.24C2 20 4 22 6.76 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 16.5C13.6569 16.5 15 15.1569 15 13.5C15 11.8431 13.6569 10.5 12 10.5C10.3431 10.5 9 11.8431 9 13.5C9 15.1569 10.3431 16.5 12 16.5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.28 9.5L17.29 9.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 2L8 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 2L16 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="ml-4">
            <p className="font-medium text-lg">B&W Studio</p>
            <p className="text-gray-500 text-sm">b&wstudio@gmail.com</p>
            <div className="mt-1 text-xs bg-purple-100 text-purple-800 px-3 py-1 rounded-full inline-block">
              Member since April 2024
            </div>
          </div>
        </div>

        {/* Desktop edit button */}
        <button className="hidden md:flex items-center border border-[#532E88] rounded-lg px-3 py-2 text-sm text-[#532E88]">
          <Edit size={16} className="mr-2" />
          Edit Profile
        </button>
      </div>

      {/* Account Settings - List style adjusted for mobile */}
      <div className="mb-6">
        {/* Each menu item is simplified on mobile, removing the border */}
        <div className="py-4 flex items-center justify-between border-b cursor-pointer">
          <div className="flex items-center">
            <Monitor size={20} className="mr-3 text-gray-500" />
            <span>Manage access and devices</span>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </div>

        <div className="py-4 flex items-center justify-between border-b cursor-pointer">
          <div className="flex items-center">
            <FileText size={20} className="mr-3 text-gray-500" />
            <span>My Documents</span>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </div>

        <div className="py-4 flex items-center justify-between border-b cursor-pointer">
          <div className="flex items-center">
            <Lock size={20} className="mr-3 text-gray-500" />
            <span>Update password</span>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </div>

        <div className="py-4 flex items-center justify-between border-b cursor-pointer">
          <div className="flex items-center">
            <Globe size={20} className="mr-3 text-gray-500" />
            <span>Languages</span>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </div>

        <div className="py-4 flex items-center justify-between border-b cursor-pointer">
          <div className="flex items-center">
            <Shield size={20} className="mr-3 text-gray-500" />
            <span>Privacy settings</span>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </div>

        <div className="py-4 flex items-center justify-between border-b cursor-pointer">
          <div className="flex items-center">
            <FileText size={20} className="mr-3 text-gray-500" />
            <span>Terms and Conditions</span>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </div>
      </div>

      {/* Logout - Styled differently on mobile */}
      <div className="border rounded-lg p-4 cursor-pointer mt-8">
        <div className="flex items-center">
          <LogOut size={20} className="mr-3 text-gray-500" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default OverView;
