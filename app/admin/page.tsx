"use client";

import { motion } from "framer-motion";
import { Users, Database, LayoutTemplate, Activity } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { title: "Total Projects", value: "14", change: "+2 this month", icon: LayoutTemplate, color: "text-brand-purple", bg: "bg-brand-purple/10" },
    { title: "Active Services", value: "3", change: "All operational", icon: Database, color: "text-brand-blue", bg: "bg-brand-blue/10" },
    { title: "Total Users", value: "1.2k", change: "+15% from last week", icon: Users, color: "text-green-400", bg: "bg-green-400/10" },
    { title: "Server Health", value: "99.9%", change: "No outages", icon: Activity, color: "text-blue-400", bg: "bg-blue-400/10" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
      <p className="text-gray-400 mb-8">Welcome to your high-level system metrics and controls.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={stat.title}
              className="bg-[#0A0A0A] border border-glass p-6 rounded-2xl"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${stat.bg}`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-gray-400 text-sm font-medium">{stat.title}</p>
              <p className="text-gray-500 text-xs mt-4">{stat.change}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-[#0A0A0A] border border-glass rounded-2xl p-8">
          <h3 className="text-lg font-bold text-white mb-6">Recent Activity</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-brand-purple"></div>
              <div>
                <p className="text-sm text-gray-300">New lead from Contact Form</p>
                <p className="text-xs text-gray-500">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-brand-blue"></div>
              <div>
                <p className="text-sm text-gray-300">Updated "Price Tracker Bot" Service</p>
                <p className="text-xs text-gray-500">1 hour ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full text-green-400 bg-green-400"></div>
              <div>
                <p className="text-sm text-gray-300">Project "Sports API" deployed to Portfolio</p>
                <p className="text-xs text-gray-500">3 hours ago</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#0A0A0A] border border-glass rounded-2xl p-8 flex flex-col justify-center items-center text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue mb-6 flex items-center justify-center">
            <Database className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Connect Supabase</h3>
          <p className="text-gray-400 text-sm mb-6 max-w-sm">
            To view actual live traffic and mutate portfolio data, plug your Supabase credentials into `.env.local`.
          </p>
          <button className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">
            View Setup Guide
          </button>
        </div>
      </div>
    </div>
  );
}
