"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Activity, Zap, Bell, CheckCircle2, X } from "lucide-react";
import { useState, useEffect } from "react";

const servicesData = [
  {
    id: "sports-data",
    title: "Sports Data API",
    description: "Real-time sports telemetry API delivering instant fixtures, scores, and deep analytics.",
    icon: Activity,
    
    plans: [
      {
        name: "BASIC PLAN (Starter)",
        color: "text-green-400 bg-green-400/10 border-green-400/20",
        bulletColor: "text-green-400",
        tagline: "Perfect for small projects, personal apps, and testing environments.",
        features: ["Access to limited sports data (selected leagues)", "API access with basic endpoints", "Update frequency: Every 60 seconds", "Request limit: 1,000 requests/day", "Email support"],
        price: "₹49/month"
      },
      {
        name: "PRO PLAN (Most Popular)",
        color: "text-brand-blue bg-brand-blue/10 border-brand-blue/20",
        bulletColor: "text-brand-blue",
        tagline: "Best for growing apps, startups, and production use.",
        features: ["Access to multiple leagues and competitions", "Full API access (scores, fixtures, stats)", "Update frequency: Every 10–15 seconds", "Request limit: 10,000 requests/day", "Priority email support", "Webhook support for real-time updates"],
        price: "₹149/month"
      },
      {
        name: "ENTERPRISE PLAN (Advanced)",
        color: "text-brand-purple bg-brand-purple/10 border-brand-purple/20",
        bulletColor: "text-brand-purple",
        tagline: "Designed for high-scale platforms and businesses.",
        features: ["Full access to all sports data and endpoints", "Real-time updates (instant data feed)", "Unlimited API requests", "Dedicated server access / custom endpoints", "SLA uptime guarantee", "24/7 priority support", "Custom integrations available"],
        price: "Custom pricing"
      }
    ]
  },
  {
    id: "price-tracker",
    title: "Price Tracker Bot",
    description: "Automated alert engine monitoring e-commerce networks for instant price drop notifications.",
    icon: Bell,
    plans: [
      {
        name: "STANDARD PLAN",
        color: "text-brand-purple bg-brand-purple/10 border-brand-purple/20",
        bulletColor: "text-brand-purple",
        tagline: "Track prices smartly and never miss the right time to buy.",
        features: ["Track products from major e-commerce platforms (Amazon, Flipkart, etc.)", "Instant Telegram notifications when price drops", "Smart alerts based on your target price", "Price history visualization for better decisions", "AI-based suggestion: Buy now or wait for a better deal", "Multiple product tracking (up to 20 items)", "Real-time monitoring"],
        price: "₹49/month"
      }
    ]
  },
  {
    id: "zomato-rescue",
    title: "Zomato Food Rescue",
    description: "Infrastructure mapping surplus restaurant food to local shelters optimizing waste reduction.",
    icon: Zap,
    plans: [
      {
        name: "BASIC PLAN (Starter / Local Use)",
        color: "text-green-400 bg-green-400/10 border-green-400/20",
        bulletColor: "text-green-400",
        tagline: "Ideal for small restaurants, local vendors, and early-stage partners.",
        features: ["List surplus food items for rescue", "Basic dashboard to manage listings", "Manual approval and distribution flow", "Limited daily rescue listings", "Email support", "Helps reduce food waste at a local level"],
        price: "₹19/month"
      },
      {
        name: "PRO PLAN (Business / Scale)",
        color: "text-brand-purple bg-brand-purple/10 border-brand-purple/20",
        bulletColor: "text-brand-purple",
        tagline: "Designed for restaurants, cloud kitchens, and organizations managing higher food volume.",
        features: ["Unlimited food listings and rescue requests", "Automated matching with nearby users/NGOs", "Real-time notifications for pickups", "Advanced dashboard with analytics", "Priority support", "Multi-location support", "Maximize impact while optimizing food distribution"],
        price: "₹99/month"
      }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

import { Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof servicesData[0] | null>(null);

  useEffect(() => {
  if (selectedService) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [selectedService]);

  return (
    <section id="services" className="min-h-screen flex flex-col justify-center items-center py-24 relative isolate">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
              SaaS <span className="text-gradient">Ecosystem</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Production-ready APIs and automated infrastructure designed for scale, reliability, and speed.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {servicesData.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={service.id} 
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-purple to-brand-blue rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"></div>
                  <div className="relative h-full bg-[#0A0A0A] border border-glass rounded-3xl p-8 transition-all duration-300 hover:border-brand-purple/50 flex flex-col">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-purple/20 group-hover:border-brand-purple/40 transition-all duration-300">
                      <Icon className="w-7 h-7 text-white group-hover:text-brand-purple transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed max-w-sm mb-8">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                      <span className="px-3 py-1 text-xs font-medium bg-brand-purple/10 text-brand-purple border border-brand-purple/20 rounded-full">🟢 Live</span>
                      <span className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 border border-white/10 rounded-full">{service.plans.length} Plans</span>
                    </div>
                    <button 
                      onClick={() => setSelectedService(service)}
                      className="w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-brand-purple hover:text-white hover:scale-[1.02] transition-all flex justify-center items-center gap-2"
                    >
                      View Pricing
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Pricing Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-xl overflow-y-auto"
            onClick={() => setSelectedService(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0A0A0A] border border-glass w-full max-w-5xl rounded-3xl overflow-hidden relative shadow-[0_0_100px_rgba(139,92,246,0.15)] my-auto"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors z-20 text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-12 border-b border-glass relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-purple/10 to-transparent pointer-events-none"></div>
                <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-4 relative z-10">{selectedService.title}</h3>
                <p className="text-xl text-gray-400 max-w-2xl relative z-10">{selectedService.description}</p>
              </div>

              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-1 lg:grid-cols-auto-fit gap-6" style={{ gridTemplateColumns: `repeat(auto-fit, minmax(280px, 1fr))` }}>
                  {selectedService.plans.map((plan, idx) => (
                    <div key={idx} className="bg-[#111111] border border-glass rounded-2xl p-8 flex flex-col hover:border-brand-purple/30 transition-colors">
                      <div className={`text-xs font-bold px-3 py-1 rounded-full border inline-block mb-4 w-fit tracking-wider ${plan.color}`}>
                        {plan.name}
                      </div>
                      <div className="text-3xl font-extrabold text-white mb-4">{plan.price}</div>
                      <p className="text-sm text-gray-400 mb-8 pb-8 border-b border-glass">{plan.tagline}</p>
                      
                      <ul className="space-y-4 mb-8 flex-1">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                            <CheckCircle2 size={18} className={`shrink-0 mt-0.5 ${plan.bulletColor}`} />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <button className="w-full py-4 mt-auto rounded-xl bg-white/5 hover:bg-brand-purple border border-white/10 text-white font-bold transition-colors">
                        Select Plan
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
