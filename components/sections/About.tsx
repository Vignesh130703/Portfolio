"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const rightVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const skills = [
    "Next.js / React",
    "Node.js / Express",
    "Tailwind CSS",
    "TypeScript",
    "Firebase / Supabase",
    "Web Scraping / Puppeteer",
    "RESTful APIs",
    "Framer Motion",
  ];

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center py-24 relative isolate">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-center md:text-left"
          >
            My <span className="text-gradient">Journey</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mt-12 max-w-7xl mx-auto">
            
            {/* Main Bio Bento Box */}
            <motion.div 
              variants={itemVariants} 
              className="md:col-span-8 bg-[#0A0A0A]/80 border border-white/5 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden group hover:border-brand-purple/30 transition-colors"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/5 blur-[80px] rounded-full pointer-events-none"></div>
              
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl">👨‍💻</span>
                Who I Am
              </h3>
              
              <div className="space-y-6 text-lg text-gray-400 leading-relaxed relative z-10">
                <p className="text-xl text-gray-200 font-medium">
                  I’m <span className="text-white font-bold">Vignesh</span>, a Computer Science graduate and freelance developer crafting seamless, high-performance digital solutions.
                </p>
                <p>
                  As an aspiring <strong className="text-brand-purple">DevOps Engineer</strong> and passionate <strong className="text-brand-blue">3D Designer</strong>, I bridge the gap between stunning visual aesthetics and incredibly resilient backend architectures.
                </p>
                <p>
                  Whether it's building automated data scrapers, modeling real-world 3D environments, or orchestrating cloud deployments, I bring ideas to life with precision and creativity.
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/5">
                <span className="px-4 py-2 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple font-medium text-xs tracking-wide">FREELANCE DEV</span>
                <span className="px-4 py-2 rounded-full bg-glass border border-glass text-gray-300 font-medium text-xs tracking-wide">3D DESIGN / MODELING</span>
                <span className="px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue font-medium text-xs tracking-wide">CLOUD & DEVOPS</span>
              </div>
            </motion.div>

            {/* 3D Visual/Avatar Bento Box */}
            <motion.div 
              variants={itemVariants} 
              className="md:col-span-4 bg-gradient-to-br from-[#111111] to-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8 aspect-square md:aspect-auto md:h-full relative overflow-hidden group hover:border-brand-blue/30 transition-all flex flex-col justify-center items-center text-center"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none"></div>
              
              <div className="w-32 h-32 mb-6 relative">
                <div className="absolute inset-0 bg-brand-blue/20 blur-xl rounded-full animate-pulse"></div>
                <div className="relative w-full h-full bg-[#1A1A1A] border border-white/10 rounded-full flex items-center justify-center shadow-2xl">
                  {/* Placeholder for actual 3D Avatar Image */}
                  <span className="text-gray-500 text-xs font-medium uppercase tracking-widest text-center px-4">Upload<br/>Avatar</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">Vignesh</h3>
              <p className="text-brand-blue text-sm tracking-widest uppercase font-semibold">Creator & Engineer</p>
            </motion.div>

            {/* Stat Row Bento Boxes */}
            <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: "Freelance", desc: "Successfully Delivered", color: "text-brand-purple" },
                { title: "3D Assets", desc: "Designed & Modeled", color: "text-brand-blue" },
                { title: "Automations", desc: "Built for Clients", color: "text-green-400" },
                { title: "Cloud Systems", desc: "Actively Orchestrating", color: "text-orange-400" }
              ].map((stat, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-[#0A0A0A]/80 border border-white/5 backdrop-blur-md p-6 rounded-3xl hover:bg-white/[0.02] transition-colors flex flex-col items-center text-center group"
                >
                  <div className={`mb-3 p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform ${stat.color}`}>
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">{stat.title}</h4>
                  <p className="text-gray-500 text-xs font-medium">{stat.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
