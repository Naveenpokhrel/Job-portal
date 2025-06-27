"use client";
import { useState } from "react";
import { Home, Briefcase, Users, Settings } from "lucide-react";
import Settingss from "./settings/page";
import AdminJobsPanel from "../components/jobs/page";
import Userss from "./users/page";
import Dash from "./dash/page";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dash />;
      case "jobs":
        return <AdminJobsPanel />;
      case "users":
        return <Userss />;
      case "settings":
        return <Settingss />;
      // default:
      //   return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex flex-col p-5 space-y-6">
        <h1 className="text-xl font-bold text-center">Admin Panel</h1>
        <nav className="space-y-4">
          <button
            className={`flex items-center gap-2 p-3 w-full rounded-lg ${
              activeTab === "dashboard" ? "bg-blue-600" : "hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("dashboard")}
          >
            <Home size={20} /> Dashboard
          </button>
          <button
            className={`flex items-center gap-2 p-3 w-full rounded-lg ${
              activeTab === "jobs" ? "bg-blue-600" : "hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("jobs")}
          >
            <Briefcase size={20} /> Jobs
          </button>
          <button
            className={`flex items-center gap-2 p-3 w-full rounded-lg ${
              activeTab === "users" ? "bg-blue-600" : "hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("users")}
          >
            <Users size={20} /> Users
          </button>
          <button
            className={`flex items-center gap-2 p-3 w-full rounded-lg ${
              activeTab === "settings" ? "bg-blue-600" : "hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("settings")}
          >
            <Settings size={20} /> Settings
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">{renderContent()}</div>
    </div>
  );
}
