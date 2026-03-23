"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center py-24 relative isolate">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 tracking-tight">
              Let&apos;s Build Something <span className="text-gradient hover:scale-105 inline-block transition-transform duration-300">Powerful</span><br/> Together 🚀
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-4">
              Have a project in mind, need a custom 3D asset, or want to integrate one of my automation APIs? Drop a message below.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-glass bg-[#111111] text-sm text-brand-purple shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-purple"></span>
              </span>
              I usually reply within 24 hours
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
            {isSuccess ? (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-brand-purple/10 border border-brand-purple/30 rounded-3xl p-12 text-center"
              >
                <div className="flex justify-center mb-6">
                  <CheckCircle size={64} className="text-brand-purple" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Transmission Received</h3>
                <p className="text-gray-400">Your message is securely in my inbox. I&apos;ll be in touch very soon.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 px-6 py-2 bg-glass border border-glass rounded-full text-white hover:bg-white/10 transition-colors"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-glass border border-glass p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-purple to-brand-blue opacity-50"></div>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-glass rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-purple/50 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-glass rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#0A0A0A] border border-glass rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-purple/50 focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your tech stack and requirements..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center py-4 px-8 border border-transparent text-base font-bold rounded-xl text-white bg-gradient-to-r from-brand-purple to-brand-blue shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending Payload..." : "Initiate Contact"}
                    {!isSubmitting && <Send className="ml-2 w-5 h-5" />}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
