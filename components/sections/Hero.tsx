"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Terminal, Zap, Code } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section id="home" className="relative isolate min-h-screen flex flex-col justify-center items-center overflow-hidden pt-16">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center z-10 w-full"
      >
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-glass bg-glass text-sm text-gray-300">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-purple"></span>
            </span>
            Available for new opportunities
          </div>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-tight"
        >
          Hi, I&apos;m Vignesh.<br />
          I build <span className="text-gradient">digital solutions</span> &<br />
          <span className="text-gradient">3D experiences</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="mt-6 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed space-y-4">
          <p>
            Freelance developer and 3D designer with a background in Computer Science, building real-world solutions.
          </p>
          <p className="text-lg md:text-xl text-gray-500">
            Currently focused on scaling my skills as an aspiring DevOps engineer, working with cloud systems, automation, and modern deployment practices.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#services" 
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-purple rounded-full overflow-hidden transition-all hover:bg-brand-blue hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:shadow-[0_0_60px_rgba(59,130,246,0.4)] w-full sm:w-auto"
          >
            View My Services
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-glass border border-glass rounded-full hover:bg-white/10 transition-colors hover:scale-105 active:scale-95 w-full sm:w-auto"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div variants={containerVariants} className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <motion.div variants={itemVariants} className="bg-glass border border-glass p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Zap size={100} />
            </div>
            <Zap className="text-brand-purple mb-4 w-8 h-8 relative z-10" />
            <h3 className="text-xl font-bold text-white mb-2 relative z-10">High Performance</h3>
            <p className="text-gray-400 relative z-10">Optimized architectures designed for maximum throughput and minimal latency.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-glass border border-glass p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Terminal size={100} />
            </div>
            <Terminal className="text-brand-blue mb-4 w-8 h-8 relative z-10" />
            <h3 className="text-xl font-bold text-white mb-2 relative z-10">Automation First</h3>
            <p className="text-gray-400 relative z-10">Bots, scrapers, and workflow automation that remove manual bottlenecks entirely.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-glass border border-glass p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Code size={100} />
            </div>
            <Code className="text-white mb-4 w-8 h-8 relative z-10" />
            <h3 className="text-xl font-bold text-white mb-2 relative z-10">Modern Stack</h3>
            <p className="text-gray-400 relative z-10">Next.js, Tailwind, and scalable backends tailored to grow with your user base.</p>
          </motion.div>
        </motion.div>

      </motion.div>
    </section>
  );
}
