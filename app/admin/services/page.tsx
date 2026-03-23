"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminServices() {
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({ title: '', price: '', description: '', status: 'Live', server_status: 'Online', users_count: 0 });

  // Mock data for UI
  const [services, setServices] = useState([
    {
      id: "1",
      title: "Real-time Sports API",
      price: "$29/mo",
      status: "Live",
      server_status: "Online",
      users_count: 124,
    },
    {
      id: "2",
      title: "Telegram Alert Bot",
      price: "Custom",
      status: "Live",
      server_status: "Maintenance",
      users_count: 45,
    }
  ]);

  const handleAddService = (e: React.FormEvent) => {
    e.preventDefault();
    const newService = {
      id: Date.now().toString(),
      title: formData.title || "Untitled Service",
      price: formData.price || "Free",
      status: formData.status,
      server_status: formData.server_status,
      users_count: Number(formData.users_count),
    };
    setServices([newService, ...services]);
    setIsAdding(false);
    setFormData({ title: '', price: '', description: '', status: 'Live', server_status: 'Online', users_count: 0 });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Services Management</h1>
          <p className="text-gray-400">Control active SaaS products, server statuses, and pricing variables.</p>
        </div>
        <button 
          onClick={() => setIsAdding(!isAdding)}
          className="bg-brand-blue hover:bg-brand-purple transition-colors text-white font-bold py-3 px-6 rounded-full flex items-center gap-2"
        >
          {isAdding ? "Cancel" : <><Plus size={20} /> Add Service</>}
        </button>
      </div>

      {isAdding && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="bg-[#111111] border border-glass rounded-2xl p-8 mb-8"
        >
          <h3 className="text-xl font-bold text-white mb-6">Deploy New Service</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleAddService}>
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Service Name</label>
              <input value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} type="text" className="w-full bg-[#0A0A0A] border border-glass rounded-xl px-4 py-3 text-white focus:border-brand-blue focus:outline-none" placeholder="e.g. Telegram Scraper" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Pricing / Tagline</label>
              <input value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} type="text" className="w-full bg-[#0A0A0A] border border-glass rounded-xl px-4 py-3 text-white focus:border-brand-blue focus:outline-none" placeholder="e.g. $49/mo or Free Trial" />
            </div>
            
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm text-gray-400">Description</label>
              <textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} rows={3} className="w-full bg-[#0A0A0A] border border-glass rounded-xl px-4 py-3 text-white focus:border-brand-blue focus:outline-none" placeholder="Value proposition..." />
            </div>

            <div className="space-y-2 divide-y divide-glass border border-glass rounded-xl p-4 md:col-span-2 bg-[#0A0A0A]">
              <div className="pb-4">
                <label className="text-sm font-semibold text-white mb-3 block">Service Controls</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Project Status</label>
                    <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})} className="w-full bg-[#111111] border border-glass rounded-lg px-3 py-2 text-white text-sm focus:border-brand-blue focus:outline-none appearance-none">
                      <option value="Live">🟢 Live</option>
                      <option value="Coming Soon">🟡 Coming Soon</option>
                      <option value="Developing">🔵 Under Development</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Server Status</label>
                    <select value={formData.server_status} onChange={e => setFormData({...formData, server_status: e.target.value})} className="w-full bg-[#111111] border border-glass rounded-lg px-3 py-2 text-white text-sm focus:border-brand-blue focus:outline-none appearance-none">
                      <option value="Online">🟢 Online</option>
                      <option value="Offline">🔴 Offline</option>
                      <option value="Maintenance">🟠 Maintenance</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-gray-500 mb-1 block">Active Users</label>
                    <input value={formData.users_count} onChange={e => setFormData({...formData, users_count: Number(e.target.value)})} type="number" className="w-full bg-[#111111] border border-glass rounded-lg px-3 py-2 text-white text-sm focus:border-brand-blue focus:outline-none" />
                  </div>

                </div>
              </div>
            </div>

            <div className="md:col-span-2 pt-2">
              <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors">
                Publish Service Data (Mock)
              </button>
            </div>
          </form>
        </motion.div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-[#0A0A0A] border border-glass rounded-2xl p-6 relative group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 text-gray-400 hover:text-white bg-white/5 rounded-lg transition-colors"><Edit2 size={16} /></button>
                <button className="p-2 text-gray-400 hover:text-red-400 bg-white/5 rounded-lg transition-colors"><Trash2 size={16} /></button>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-[#111111] border border-glass px-3 py-2 rounded-lg text-sm">
                <span className="text-gray-500 mr-2">Price:</span>
                <span className="text-white font-medium">{service.price}</span>
              </div>
              <div className="bg-[#111111] border border-glass px-3 py-2 rounded-lg text-sm">
                <span className="text-gray-500 mr-2">Users:</span>
                <span className="text-brand-purple font-bold">{service.users_count}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm pt-4 border-t border-glass">
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Launch:</span>
                <span className={`font-medium ${
                  service.status === 'Live' ? 'text-green-400' : 'text-yellow-400'
                }`}>
                   {service.status}
                </span>
              </div>
              <div className="w-px h-4 bg-glass"></div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">Server:</span>
                <span className={`font-medium flex items-center gap-1.5 ${
                  service.server_status === 'Online' ? 'text-green-400' : 
                  service.server_status === 'Offline' ? 'text-red-400' : 
                  'text-orange-400'
                }`}>
                   <span className={`w-2 h-2 rounded-full ${
                     service.server_status === 'Online' ? 'bg-green-400' : 
                     service.server_status === 'Offline' ? 'bg-red-400' : 
                     'bg-orange-400'
                   }`}></span>
                   {service.server_status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
