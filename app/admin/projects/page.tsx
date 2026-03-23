"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function AdminProjects() {
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({ title: '', status: 'Live', description: '', github_url: '', live_url: '', tech_stack: '' });

  // Mock data for UI until Supabase is hooked up
  const [projects, setProjects] = useState([
    {
      id: "1",
      title: "Sports Data API",
      status: "Live",
      tech_stack: ["Next.js", "Node", "Redis"],
    },
    {
      id: "2",
      title: "Automated Price Tracker",
      status: "Developing",
      tech_stack: ["Python", "Supabase"],
    }
  ]);

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    const newProject = {
      id: Date.now().toString(),
      title: formData.title || "Untitled Project",
      status: formData.status,
      tech_stack: formData.tech_stack ? formData.tech_stack.split(',').map(s => s.trim()) : ["No Stack"],
    };
    setProjects([newProject, ...projects]);
    setIsAdding(false);
    setFormData({ title: '', status: 'Live', description: '', github_url: '', live_url: '', tech_stack: '' });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Projects Management</h1>
          <p className="text-gray-400">Add, edit, and control your portfolio projects database.</p>
        </div>
        <button 
          onClick={() => setIsAdding(!isAdding)}
          className="bg-brand-purple hover:bg-brand-blue transition-colors text-white font-bold py-3 px-6 rounded-full flex items-center gap-2"
        >
          {isAdding ? "Cancel" : <><Plus size={20} /> Add Project</>}
        </button>
      </div>

      {isAdding && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="bg-[#111111] border border-glass rounded-2xl p-8 mb-8"
        >
          <h3 className="text-xl font-bold text-white mb-6">Create New Project</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleAddProject}>
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Project Title</label>
              <input value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} type="text" className="w-full bg-[#0A0A0A] border border-glass rounded-xl px-4 py-3 text-white focus:border-brand-purple focus:outline-none" placeholder="e.g. 3D WebGL Renderer" required />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Current Status</label>
              <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})} className="w-full bg-[#0A0A0A] border border-glass rounded-xl px-4 py-3 text-white focus:border-brand-purple focus:outline-none appearance-none">
                <option value="Live">🟢 Live</option>
                <option value="Coming Soon">🟡 Coming Soon</option>
                <option value="Developing">🔵 Under Development</option>
              </select>
            </div>
            
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm text-gray-400">Description</label>
              <textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} rows={4} className="w-full bg-[#0A0A0A] border border-glass rounded-xl px-4 py-3 text-white focus:border-brand-purple focus:outline-none" placeholder="Describe the problem this project solves..." />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400">GitHub URL</label>
              <input value={formData.github_url} onChange={e => setFormData({...formData, github_url: e.target.value})} type="url" className="w-full bg-[#0A0A0A] border border-glass rounded-xl px-4 py-3 text-white focus:border-brand-purple focus:outline-none" placeholder="https://github.com/..." />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Live URL</label>
              <input value={formData.live_url} onChange={e => setFormData({...formData, live_url: e.target.value})} type="url" className="w-full bg-[#0A0A0A] border border-glass rounded-xl px-4 py-3 text-white focus:border-brand-purple focus:outline-none" placeholder="https://..." />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm text-gray-400">Tech Stack (Comma Separated)</label>
              <input value={formData.tech_stack} onChange={e => setFormData({...formData, tech_stack: e.target.value})} type="text" className="w-full bg-[#0A0A0A] border border-glass rounded-xl px-4 py-3 text-white focus:border-brand-purple focus:outline-none" placeholder="Next.js, Tailwind, Node.js" />
            </div>

            <div className="md:col-span-2 pt-4">
              <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors">
                Save Project (Mock UI)
              </button>
            </div>
          </form>
        </motion.div>
      )}

      <div className="bg-[#0A0A0A] border border-glass rounded-2xl overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-glass bg-[#111111]">
              <th className="p-4 text-sm font-semibold text-gray-400">Project Name</th>
              <th className="p-4 text-sm font-semibold text-gray-400">Status</th>
              <th className="p-4 text-sm font-semibold text-gray-400 hidden md:table-cell">Tech Stack</th>
              <th className="p-4 text-sm font-semibold text-gray-400 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b border-glass/50 hover:bg-white/5 transition-colors">
                <td className="p-4 font-medium text-white">{project.title}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 text-xs font-medium border rounded-full ${
                    project.status === 'Live' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 
                    project.status === 'Developing' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 
                    'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                  }`}>
                    {project.status === 'Live' && '🟢 '}
                    {project.status === 'Developing' && '🔵 '}
                    {project.status}
                  </span>
                </td>
                <td className="p-4 hidden md:table-cell text-sm text-gray-400">{project.tech_stack.join(", ")}</td>
                <td className="p-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 text-gray-400 hover:text-white bg-white/5 rounded-lg transition-colors"><Edit2 size={16} /></button>
                    <button className="p-2 text-gray-400 hover:text-red-400 bg-white/5 rounded-lg transition-colors"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
