import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Star,
  Calendar,
  DollarSign,
  CheckCircle,
  ArrowUpRight,
  Plus,
} from "lucide-react";

const StatCard = ({ title, value, change, icon: Icon }) => (
  <div className="bg-white rounded-xl shadow p-5 w-full sm:w-[48%] md:w-[23%]">
    <div className="flex items-center justify-between mb-2">
      <p className="text-gray-500 text-sm font-medium">{title}</p>
      <Icon className="w-4 h-4 text-gray-400" />
    </div>
    <h3 className="text-2xl font-bold text-black">{value}</h3>
    {change && (
      <p className="text-green-600 text-xs flex items-center gap-1">
        <ArrowUpRight className="w-3 h-3" />
        {change} from last month
      </p>
    )}
  </div>
);

const ProviderDashboard = () => {
  const navigate = useNavigate();

  const handleCreateService = () => {
    navigate("/create-service");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 pt-25 space-y-6">
      {/* Welcome banner */}
      <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white p-6 rounded-xl shadow">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-1">Welcome back, Alex!</h2>
            <p className="text-sm">
              Here's what's happening with your services today.
            </p>
          </div>
          <button
            onClick={handleCreateService}
            className="bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Create Service
          </button>
        </div>
      </div>

      {/* Stats section */}
      <div className="flex flex-wrap justify-between gap-4">
        <StatCard
          title="Today's Bookings"
          value="3"
          change="+20%"
          icon={Calendar}
        />
        <StatCard
          title="This Month's Earnings"
          value="₹2,450"
          change="+15%"
          icon={DollarSign}
        />
        <StatCard title="Average Rating" value="4.8" icon={Star} />
        <StatCard
          title="Completion Rate"
          value="98%"
          change="+2%"
          icon={CheckCircle}
        />
      </div>

      {/* Lower Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Upcoming Bookings */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-gray-500" /> Upcoming Bookings
          </h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-semibold">
                Sarah Johnson{" "}
                <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full ml-2">
                  confirmed
                </span>
              </p>
              <p className="text-sm text-gray-500">House Cleaning</p>
              <p className="text-sm text-gray-500">10:00 AM · Downtown Area</p>
              <button className="mt-2 text-sm text-white bg-black px-3 py-1 rounded hover:bg-gray-800">
                View Details
              </button>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-semibold">
                Mike{" "}
                <span className="bg-gray-300 text-black text-xs px-2 py-0.5 rounded-full ml-2">
                  pending
                </span>
              </p>
              <p className="text-sm text-gray-500">AC Repair</p>
              <p className="text-sm text-gray-500">1:00 PM · Suburban Area</p>
              <button className="mt-2 text-sm text-white bg-black px-3 py-1 rounded hover:bg-gray-800">
                View Details
              </button>
            </div>
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-gray-500" /> Recent Reviews
          </h3>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-semibold">
                John Smith <span className="text-yellow-500 ml-2">★★★★★</span>
              </p>
              <p className="text-sm text-gray-600">
                "Excellent service! Very professional and thorough."
              </p>
              <p className="text-xs text-gray-400">
                House Cleaning · 2 days ago
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="font-semibold">
                Lisa Brown <span className="text-yellow-400 ml-2">★★★★☆</span>
              </p>
              <p className="text-sm text-gray-600">
                "Good work, arrived on time."
              </p>
              <p className="text-xs text-gray-400">Plumbing · 5 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;
