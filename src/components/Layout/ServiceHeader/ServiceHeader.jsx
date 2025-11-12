"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Typing Animation Component
const TypingText = ({ text, className = "", delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (started && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 70);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, started]);

  return <span className={className}>{displayedText}</span>;
};

export default function ServiceHeader({ 
  title, 
  subtitle, 
  description, 
  image, 
  imageAlt = "Service Animation",
  badgeText = "OUR SERVICES",
  imagePriority = false
}) {
  return (
    <section
      className="relative py-20 md:py-32 px-6 md:px-12 lg:px-20 shadow-lg overflow-hidden"
      style={{ backgroundColor: '#F8F5FC', boxShadow: '0 10px 15px -3px rgba(30, 58, 138, 0.1), 0 4px 6px -2px rgba(30, 58, 138, 0.05)' }}
    >
      {/* Floating Icons */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 md:left-20 opacity-20"
      >
        <div 
          className="w-20 h-20 rounded-2xl transform rotate-12" 
          style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
        />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-40 right-10 md:right-32 opacity-20"
      >
        <div 
          className="w-16 h-16 rounded-full" 
          style={{ background: 'linear-gradient(135deg, #7C3AED, #F59E0B)' }}
        />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, -15, 0],
          x: [0, 10, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-20 opacity-20"
      >
        <div 
          className="w-12 h-12 rounded-lg transform -rotate-12" 
          style={{ background: 'linear-gradient(135deg, #F59E0B, #4C1D95)' }}
        />
      </motion.div>

      {/* Two Column Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-[1600px] mx-auto relative z-10 px-6 md:px-12 lg:px-20">
        
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="px-7 py-2 bg-gradient-to-r from-purple-500 to-teal-500 text-white text-sm font-bold rounded-full shadow-lg">
              {badgeText}
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ color: '#000000' }}
          >
            <TypingText text={title} />
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold mb-6"
            style={{ color: '#4C1D95' }}
          >
            {subtitle}
          </motion.h2>
      
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl leading-relaxed mb-8"
            style={{ color: '#374151' }}
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-xl mx-auto"
        >
          <div className="relative w-full h-full min-h-[280px]">
            <Image 
              src={image} 
              alt={imageAlt} 
              fill
              className="object-contain"
              sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 480px"
              priority={imagePriority}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}