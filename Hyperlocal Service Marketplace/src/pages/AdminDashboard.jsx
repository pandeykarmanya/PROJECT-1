import React from "react";
import {
  Users,
  DollarSign,
  Package,
  TrendingUp,
  CheckCircle,
  Clock,
  Star,
} from "lucide-react";

const StatCard = ({ title, value, icon: Icon, change }) => (
  <div className="bg-white p-5 rounded-xl shadow text-gray-800 flex flex-col justify-between">
    <div className="flex items-center justify-between mb-2">
      <h4 className="text-sm text-gray-500 font-medium">{title}</h4>
      <Icon className="w-4 h-4 text-gray-400" />
    </div>
    <div className="text-2xl font-bold">{value}</div>
    {change && (
      <p className="text-xs text-green-500 mt-1">+{change} from last month</p>
    )}
  </div>
);

const ActivityItem = ({ icon, text, time, status }) => (
  <div className="bg-gray-100 p-4 rounded-lg mb-3 text-gray-800">
    <div className="flex items-center text-sm">
      {icon}
      <span className="ml-2 flex-1">{text}</span>
      <span className={`ml-auto text-xs px-2 py-0.5 rounded-full ${
        status === "success"
          ? "bg-green-100 text-green-700"
          : "bg-gray-200 text-gray-600"
      }`}>
        {status}
      </span>
    </div>
    <p className="text-xs text-gray-400 mt-1">{time}</p>
  </div>
);

const ProviderItem = ({ rank, name, service, rating, jobs, earnings }) => (
  <div className="bg-gray-100 p-4 rounded-lg mb-3 text-gray-800">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
          {rank}
        </div>
        <div>
          <p className="font-semibold text-sm">{name}</p>
          <p className="text-xs text-gray-500">{service}</p>
        </div>
      </div>
      <div className="text-xs text-right">
        <div className="flex items-center gap-1 text-yellow-500">
          <Star className="w-4 h-4" /> {rating}
        </div>
        <p className="text-gray-500">{jobs} jobs • ₹{earnings}</p>
      </div>
    </div>
  </div>
);

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6 pt-25 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-700 p-6 rounded-xl text-white">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <p className="text-sm mt-1">Monitor and manage your service platform.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Users" value="12,543" icon={Users} change="8%" />
        <StatCard title="Monthly Revenue" value="₹45,230" icon={DollarSign} change="12%" />
        <StatCard title="Active Providers" value="1,247" icon={Package} change="5%" />
        <StatCard title="Platform Growth" value="23%" icon={TrendingUp} change="3%" />
      </div>

      {/* Activity and Providers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div>
          <h2 className="text-lg font-bold mb-4">Recent Activity</h2>
          <ActivityItem
            icon={<Users className="w-4 h-4 text-gray-400" />}
            text="New provider registered: John's Cleaning Services"
            time="5 minutes ago"
            status="pending"
          />
          <ActivityItem
            icon={<CheckCircle className="w-4 h-4 text-green-500" />}
            text="Booking #1234 completed successfully"
            time="1 hour ago"
            status="success"
          />
        </div>

        {/* Top Providers */}
        <div>
          <h2 className="text-lg font-bold mb-4">Top Performing Providers</h2>
          <ProviderItem
            rank={1}
            name="Alex's Home Services"
            service="House Cleaning"
            rating={4.9}
            jobs={156}
            earnings={12450}
          />
          <ProviderItem
            rank={2}
            name="TechFix Pro"
            service="AC Repair"
            rating={4.8}
            jobs={142}
            earnings={18200}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;