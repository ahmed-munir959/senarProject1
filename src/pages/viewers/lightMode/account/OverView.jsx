// Overview.jsx
import React from "react";
import {
  User,
  Camera,
  Pencil,
  PlaneLanding,
  CreditCard,
  Monitor,
  Lock,
  ShieldAlert,
  Globe,
  Shield,
  LogOut,
  ChevronRight,
} from "lucide-react";

const OverView = () => {
  return (
    <div className="p-4 md:p-6 bg-white max-w-full">
      <h2 className="text-xl font-medium mb-6">Account</h2>

      {/* User Profile */}
      <div className="flex items-start mb-8">
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
            <User size={30} className="text-purple-800" />
          </div>
          <div className="absolute bottom-0 right-0 bg-purple-800 rounded-full p-1">
            <Camera size={12} className="text-white" />
          </div>
        </div>

        <div className="ml-4 flex-1">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-medium">User Name</p>
              <p className="text-gray-500 text-sm">user001@gmail.com</p>
              <div className="mt-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded inline-block">
                Member since April 2024
              </div>
            </div>
            {/* Show just the icon on mobile, full button on larger screens */}
            <div className="md:hidden bg-gray-100 rounded-full p-2">
              <Pencil size={16} className="text-gray-600" />
            </div>
            <button className="hidden md:flex items-center border border-[#532E88] rounded px-3 py-1 text-sm w-fit">
              <Pencil size={14} className="mr-1" />
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Subscription */}
      <div className="border rounded-lg p-4 mb-6">
        <div className="flex items-center mb-2">
          <PlaneLanding size={18} className="mr-2" />
          <span className="font-medium">Basic Plan</span>
        </div>
        <p className="text-sm text-gray-500 mb-2">Next payment: 3 March 2025</p>
        <a href="#" className="text-sm text-purple-800">
          Manage Subscription
        </a>
      </div>

      {/* Account Settings */}
      <div className="border rounded-lg mb-6">
        <div className="p-4 flex items-center justify-between border-b cursor-pointer hover:bg-gray-50">
          <div className="flex items-center">
            <PlaneLanding size={18} className="mr-3 text-gray-500" />
            <span>Change Plan</span>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </div>

        <div className="p-4 flex items-center justify-between border-b cursor-pointer hover:bg-gray-50">
          <div className="flex items-center">
            <CreditCard size={18} className="mr-3 text-gray-500" />
            <span className="break-words">Manage payment method</span>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </div>

        <div className="p-4 flex items-center justify-between border-b cursor-pointer hover:bg-gray-50">
          <div className="flex items-center">
            <Monitor size={18} className="mr-3 text-gray-500" />
            <span>Manage access and devices</span>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </div>

        <div className="p-4 flex items-center justify-between border-b cursor-pointer hover:bg-gray-50">
          <div className="flex items-center">
            <Lock size={18} className="mr-3 text-gray-500" />
            <span>Update password</span>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </div>

        <div className="p-4 flex items-center justify-between border-b cursor-pointer hover:bg-gray-50">
          <div className="flex items-center">
            <ShieldAlert size={18} className="mr-3 text-gray-500" />
            <span>Adjust parental controls</span>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </div>

        <div className="p-4 flex items-center justify-between border-b cursor-pointer hover:bg-gray-50">
          <div className="flex items-center">
            <Globe size={18} className="mr-3 text-gray-500" />
            <span>Languages</span>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </div>

        <div className="p-4 flex items-center justify-between cursor-pointer hover:bg-gray-50">
          <div className="flex items-center">
            <Shield size={18} className="mr-3 text-gray-500" />
            <span>Privacy settings</span>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </div>
      </div>

      {/* Logout */}
      <div className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50">
        <div className="flex items-center">
          <LogOut size={18} className="mr-3 text-gray-500" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default OverView;
