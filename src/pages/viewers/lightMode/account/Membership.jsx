import React from "react";
import {
  PlaneLanding as Plane,
  CreditCard,
  Gift,
  Clock,
  ChevronRight,
} from "lucide-react";

const Membership = () => {
  return (
    <div className="p-4 md:p-6 bg-white max-w-full">
      {/* Title only visible on medium and above screens */}
      <h2 className="text-xl font-medium mb-6 hidden md:block">Membership</h2>

      {/* Mobile title - only visible on small screens */}
      <h2 className="text-xl font-medium mb-4 md:hidden">Membership</h2>

      {/* Current Plan Card */}
      <div className="border rounded-lg p-4 mb-4">
        <div className="flex items-center mb-2">
          <Plane size={18} className="mr-2 text-gray-700" />
          <span className="font-medium">Basic Plan</span>
        </div>
        <p className="text-sm text-gray-600 mb-2">
          720p video resolution, ad-free watching and more.
        </p>
        <a href="#" className="text-sm text-purple-800 font-medium">
          Manage Subscription
        </a>
      </div>

      {/* Next Payment Card */}
      <div className="border rounded-lg mb-4">
        <div className="p-4 pb-2">
          <h3 className="font-medium mb-1">Next payment</h3>
          <p className="text-sm mb-1">3 March 2025</p>
          <p className="text-sm text-gray-600 mb-2">user1@axisb</p>
        </div>

        {/* Payment Options */}
        <div>
          <div className="flex items-center justify-between p-4 border-t cursor-pointer">
            <div className="flex items-center">
              <Plane size={18} className="mr-3 text-gray-500" />
              <span>Change Plan</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>

          <div className="flex items-center justify-between p-4 border-t cursor-pointer">
            <div className="flex items-center">
              <CreditCard size={18} className="mr-3 text-gray-500" />
              <span>Manage payment method</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>

          <div className="flex items-center justify-between p-4 border-t cursor-pointer">
            <div className="flex items-center">
              <Gift size={18} className="mr-3 text-gray-500" />
              <span>Redeem gift or promo code</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>

          <div className="flex items-center justify-between p-4 border-t cursor-pointer">
            <div className="flex items-center">
              <Clock size={18} className="mr-3 text-gray-500" />
              <span>View payment history</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
        </div>
      </div>

      {/* Cancel Membership Button */}
      <button className="w-full border border-[#532E88] rounded-lg p-4 text-center text-[#532E88] font-medium">
        Cancel Membership
      </button>
    </div>
  );
};

export default Membership;
