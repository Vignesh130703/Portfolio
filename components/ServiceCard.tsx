"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  badge?: string;
  description: string;
  features: string[];
  pricing?: string;
  ctaText: string;
  ctaLink: string;
  highlight?: boolean;
}

export default function ServiceCard({
  title,
  badge,
  description,
  features,
  pricing,
  ctaText,
  ctaLink,
  highlight = false,
}: ServiceCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`relative rounded-3xl p-[1px] ${
        highlight 
          ? "bg-gradient-to-b from-brand-purple to-brand-blue" 
          : "bg-glass-border"
      }`}
    >
      <div className="h-full bg-brand-dark/95 backdrop-blur-3xl rounded-[calc(1.5rem-1px)] p-8 flex flex-col">
        {badge && (
          <div className="absolute -top-3 right-6 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            {badge}
          </div>
        )}
        
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm mb-6 flex-grow">{description}</p>
        
        {pricing && (
          <div className="mb-6 pb-6 border-b border-glass">
            <div className="text-sm text-gray-400 uppercase tracking-widest font-semibold mb-2">Pricing Available:</div>
            <div className="font-mono text-brand-purple font-bold">
              {pricing}
            </div>
          </div>
        )}

        <ul className="space-y-3 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm text-gray-300">
              <Check size={18} className="text-green-400 mr-2 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <a 
            href={ctaLink}
            className={`flex items-center justify-center w-full py-3 px-6 rounded-full font-semibold transition-all ${
              highlight 
                ? "bg-brand-purple text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:bg-brand-blue" 
                : "bg-white/5 text-white border border-glass hover:bg-white/10"
            }`}
          >
            {ctaText}
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
