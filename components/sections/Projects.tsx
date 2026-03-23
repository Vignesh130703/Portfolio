"use client";

import { motion, Variants } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { GitHubRepo } from "@/lib/github";

export default function Projects({ repos }: { repos: GitHubRepo[] }) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] } },
  };

  const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";

  const renderCard = (repo: GitHubRepo, isFeatured: boolean) => (
    <motion.div 
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      key={repo.id}
      className={`group flex flex-col h-full bg-[#0A0A0A] border ${isFeatured ? 'border-brand-purple/40 shadow-[0_0_20px_rgba(139,92,246,0.1)]' : 'border-glass'} rounded-2xl p-6 transition-all hover:border-brand-purple/70 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] relative overflow-hidden`}
    >
      {isFeatured && (
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/10 rounded-full blur-[40px] pointer-events-none"></div>
      )}
      <div className="flex justify-between items-start mb-4 relative z-10">
        <h3 className="text-xl font-bold text-white group-hover:text-brand-purple transition-colors truncate pr-4">
          {repo.name}
        </h3>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          <ExternalLink size={20} className="text-gray-500 hover:text-white transition-colors cursor-pointer" />
        </a>
      </div>
      
      <p className="text-gray-400 text-sm mb-6 line-clamp-3 min-h-[60px] relative z-10">
        {repo.description || loremIpsum}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6 relative z-10">
        <span className="px-2 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-md text-gray-300">Next.js</span>
        <span className="px-2 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-md text-gray-300">Node</span>
        <span className="px-2 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-md text-gray-300">API</span>
        {repo.language && (
          <span className="px-2 py-1 text-xs font-medium bg-brand-blue/10 border border-brand-blue/20 rounded-md text-brand-blue">{repo.language}</span>
        )}
      </div>

      <div className="mt-auto flex items-center justify-between pt-4 border-t border-glass relative z-10">
        <div className="flex items-center text-sm text-gray-500">
          <Star size={16} className="mr-1 text-yellow-500/70" />
          {repo.stargazers_count}
        </div>
        <div className="flex gap-3 text-sm">
          {(repo as any).homepage && (
            <a href={(repo as any).homepage} target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-purple font-medium transition-colors">
              Live Demo
            </a>
          )}
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-blue font-medium transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center items-center py-24 relative isolate">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              Live <span className="text-gradient">Telemetry</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Open-source projects, automation scripts, and SaaS architectures automatically pulled direct from my GitHub.
            </p>
          </motion.div>

          {repos.length === 0 ? (
            <motion.div variants={itemVariants} className="text-center text-gray-400 py-12">
              Unable to load repositories currently. Please check back later.
            </motion.div>
          ) : (
            <>
              <motion.h3 variants={itemVariants} className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="h-px w-8 bg-brand-purple"></span> Featured
              </motion.h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {repos.slice(0, 3).map((repo) => renderCard(repo, true))}
              </div>

              {repos.length > 3 && (
                <>
                  <motion.h3 variants={itemVariants} className="text-2xl font-bold text-gray-300 mb-8 flex items-center gap-3">
                    <span className="h-px w-8 bg-gray-500"></span> Others
                  </motion.h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {repos.slice(3).map((repo) => renderCard(repo, false))}
                  </div>
                </>
              )}
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
