import React from "react";
import { Mail, Lock, Smartphone, ChevronRight } from "lucide-react";

const Security = () => {
  return (
    <div className="p-4 md:p-6 bg-white max-w-full">
      <h2 className="text-xl font-medium mb-6">Security</h2>

      {/* Email Row */}
      <div className="border-b py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Mail size={18} className="mr-3 text-gray-500" />
          <span>Email</span>
        </div>
        <div className="flex items-center text-gray-500">
          <span className="mr-2">user001@gmail.com</span>
          <ChevronRight size={20} className="text-gray-400" />
        </div>
      </div>

      {/* Password Row */}
      <div className="border-b py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Lock size={18} className="mr-3 text-gray-500" />
          <span>Password</span>
        </div>
        <ChevronRight size={20} className="text-gray-400" />
      </div>

      {/* Mobile Phone Row */}
      <div className="border-b py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Smartphone size={18} className="mr-3 text-gray-500" />
          <span>Mobile phone</span>
        </div>
        <div className="flex items-center text-gray-500">
          <span className="mr-2">+91 9876543210</span>
          <ChevronRight size={20} className="text-gray-400" />
        </div>
      </div>

      {/* Delete Account Button */}
      <div className="mt-6">
        <button className="w-full border border-[#532E88] rounded-lg p-3 text-center text-[#532E88] font-medium">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Security;
