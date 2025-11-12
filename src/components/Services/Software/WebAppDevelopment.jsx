"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FaLaptopCode,
  FaServer,
  FaCloud,
  FaUsers,
  FaTasks,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaCogs,
  FaClipboardCheck,
  FaCheck,
} from "react-icons/fa";

const WEB_APP_IMAGES = {
  hero: "/assets/webapplication1.png",
  services: [
    "/assets/webapplication1.png",
    "/assets/webapplication.png",
    "/assets/webapplication6.png",
    "/assets/webapplication_4.jpg",
    "/assets/webapplication5.jpg",
  ],
  trusted: "/assets/image.jpg",
};

const SERVICES_OFFERED = [
  {
    title: "Custom Web Applications",
    desc: "Built from scratch to match your specific workflows.",
    image: WEB_APP_IMAGES.services[0],
  },
  {
    title: "Enterprise Portals",
    desc: "Streamlined access to data, analytics, and collaboration tools.",
    image: WEB_APP_IMAGES.services[1],
  },
  {
    title: "SaaS Applications",
    desc: "Scalable cloud-based software for modern business models.",
    image: WEB_APP_IMAGES.services[2],
  },
  {
    title: "Progressive Web Apps (PWA)",
    desc: "Fast, reliable, and installable web experiences.",
    image: WEB_APP_IMAGES.services[3],
  },
  {
    title: "E-commerce Web Apps",
    desc: "Secure platforms to drive online sales and engagement.",
    image: WEB_APP_IMAGES.services[4],
  },
];

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

export default function WebAppDevelopment() {
  // Add smooth scroll behavior and optimize for mobile
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    // Add momentum scrolling for iOS
    const bodyStyle = document.body.style;
    if ('webkitOverflowScrolling' in bodyStyle) {
      bodyStyle.webkitOverflowScrolling = 'touch';
    }
    // Improve scroll performance
    bodyStyle.overflowY = 'auto';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <motion.div 
      className="overflow-x-hidden" 
      style={{ backgroundColor: '#F9FAFB', color: '#1F2937', WebkitOverflowScrolling: 'touch' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Luxury Elegant Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360],
            opacity: [0.06, 0.12, 0.06]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, #4C1D9520, #7C3AED15)' }}
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.08, 0.06, 0.08]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-0 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, #7C3AED18, #F59E0B12)' }}
        />
        <motion.div
          animate={{ 
            y: [0, -100, 0],
            opacity: [0.06, 0.15, 0.06]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/4 w-72 h-72 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, #F59E0B18, #4C1D9515)' }}
        />
      </div>

      {/* Header Section - Recruiter Page Style */}
      <section
        className="relative py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-20 shadow-lg overflow-hidden"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center max-w-[1600px] mx-auto relative z-10 px-4 sm:px-6 md:px-12 lg:px-20">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight"
              style={{ color: '#000000' }}
            >
              <TypingText text="Web Application " />
              <motion.span 
                style={{ color: '#4C1D95' }}
                animate={{ 
                  textShadow: [
                    `0 0 20px rgba(76, 29, 149, 0)`,
                    `0 0 20px rgba(76, 29, 149, 0.5)`,
                    `0 0 20px rgba(76, 29, 149, 0)`
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <TypingText text="Development" />
              </motion.span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold mb-6"
              style={{ color: '#4C1D95' }}
            >
              Transforming Ideas Into Scalable Web Applications
            </motion.h2>
        
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8"
              style={{ color: '#374151' }}
            >
              At Intellects, we build intelligent, high-performance web applications that simplify operations, enhance engagement, and accelerate business growth. Whether it&apos;s a custom enterprise solution or a SaaS platform, we create systems that empower your business to thrive.
            </motion.p>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-full min-h-[320px]">
              <Image 
                src={WEB_APP_IMAGES.hero} 
                alt="Web Application Development Animation" 
                fill
                className="object-cover rounded-2xl shadow-2xl"
                sizes="(max-width: 768px) 90vw, 480px"
                priority
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Services We Offer Section */}
      <motion.section 
        className="pt-12 sm:pt-16 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-12 lg:px-24 relative z-10" 
        style={{ backgroundColor: '#FFFFFF' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <motion.h3 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6" 
              style={{ color: '#4C1D95' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
            >
              Services We{" "}
              <motion.span 
                style={{ color: '#000000' }}
                animate={{ 
                  textShadow: [
                    `0 0 20px ${'#4C1D95'}00`,
                    `0 0 20px ${'#4C1D95'}50`,
                    `0 0 20px ${'#4C1D95'}00`
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Offer
              </motion.span>
            </motion.h3>
            <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-3 sm:mb-4 px-4" style={{ color: '#6B7280' }}>
              We deliver tailored web application development services designed to meet your business objectives efficiently.
            </p>
            <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-semibold px-4" style={{ color: '#4C1D95' }}>
              We offer:
            </p>
          </div>
          
          {SERVICES_OFFERED.map((service, i) => (
            <motion.section
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="py-6 sm:py-8 border-b"
              style={{ borderColor: '#E5E7EB' }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Text Column */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8 }}
                  className={i % 2 === 1 ? 'lg:col-start-2' : ''}
                >
                  <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 px-4 sm:px-0" style={{ color: '#4C1D95' }}>
                    {service.title}
                  </h4>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed px-4 sm:px-0" style={{ color: '#6B7280' }}>
                    {service.desc}
                  </p>
                </motion.div>

                {/* Image Column */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8 }}
                  className={`relative ${i % 2 === 1 ? 'lg:col-start-1' : ''}`}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl max-h-96">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 90vw, 420px"
                      style={{ 
                        borderRadius: '1rem',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        maxHeight: '384px'
                      }}
                    />
                    <div 
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: 'linear-gradient(135deg, rgba(76, 29, 149, 0.1) 0%, rgba(124, 58, 237, 0.1) 100%)',
                        pointerEvents: 'none'
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.section>
          ))}
          
          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
            className="text-center mt-12"
          >
            <p className="text-xl md:text-2xl font-bold max-w-4xl mx-auto leading-relaxed" style={{ color: '#4C1D95' }}>
              Every solution we develop is built for performance, usability, and long-term scalability.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Expertise Section */}
      <motion.section
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10 overflow-hidden"
        style={{ backgroundColor: '#F9FAFB' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        {/* Animated Wave Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 30%, #4C1D95 2px, transparent 2px), radial-gradient(circle at 60% 70%, #7C3AED 2px, transparent 2px), radial-gradient(circle at 80% 20%, #4C1D95 2px, transparent 2px)`,
              backgroundSize: '80px 80px'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="inline-block mb-6"
            >
              <span className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm font-bold rounded-full shadow-xl inline-flex items-center gap-2">
                🎯 CORE EXPERTISE
              </span>
            </motion.div>

            <motion.h2 
              className="text-3xl md:text-5xl font-black mb-6" 
              style={{ color: '#000000' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
            >
              Our Web App Development{" "}
              <motion.span 
                style={{ color: '#4C1D95' }}
                animate={{ 
                  textShadow: [
                    `0 0 20px rgba(76, 29, 149, 0)`,
                    `0 0 30px rgba(76, 29, 149, 0.6)`,
                    `0 0 20px rgba(76, 29, 149, 0)`
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Expertise
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-lg max-w-3xl mx-auto leading-relaxed mb-4" 
              style={{ color: '#6B7280' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: false }}
            >
              Our expertise lies in crafting secure, responsive, and data-driven web applications.
            </motion.p>
            
            <motion.p 
              className="text-xl max-w-3xl mx-auto leading-relaxed font-bold" 
              style={{ color: '#4C1D95' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: false }}
            >
              We focus on:
            </motion.p>
          </div>

          {/* Diagonal Flow Layout */}
          <div className="relative max-w-6xl mx-auto space-y-12">
            {[
              { title: "Seamless User Experience", desc: "Design consistency across all platforms.", icon: "🎨", position: "left", color: "from-purple-500 to-purple-600" },
              { title: "Robust Backend Systems", desc: "For reliability and speed.", icon: "⚙️", position: "right", color: "from-purple-600 to-purple-700" },
              { title: "API & Database Integration", desc: "Third-party tools and databases.", icon: "🔌", position: "left", color: "from-purple-700 to-indigo-600" },
              { title: "Cloud-Based Deployment", desc: "For flexibility and scalability.", icon: "☁️", position: "right", color: "from-indigo-600 to-purple-600" },
              { title: "Strong Cybersecurity", desc: "Protocols for data protection.", icon: "🔒", position: "center", color: "from-purple-500 to-indigo-700" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`relative flex items-center ${
                  item.position === 'left' ? 'justify-start' : 
                  item.position === 'right' ? 'justify-end' : 
                  'justify-center'
                }`}
                initial={{ opacity: 0, x: item.position === 'left' ? -100 : item.position === 'right' ? 100 : 0, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.15,
                  type: "spring",
                  stiffness: 80
                }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {/* Connecting Arrow (Desktop only) */}
                {i < 4 && (
                  <motion.div
                    className={`hidden lg:block absolute ${
                      item.position === 'left' ? 'left-1/2 top-full' : 
                      item.position === 'right' ? 'right-1/2 top-full' : 
                      'left-1/2 top-full -translate-x-1/2'
                    } w-0.5 h-12 z-0`}
                    style={{ background: 'linear-gradient(180deg, #4C1D95, #7C3AED)' }}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ delay: i * 0.15 + 0.6, duration: 0.5 }}
                    viewport={{ once: false }}
                  >
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 text-purple-500"
                      animate={{ y: [0, 15, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                    >
                      ↓
                    </motion.div>
                  </motion.div>
                )}

                <motion.div 
                  className={`group relative ${item.position === 'center' ? 'w-full max-w-3xl' : 'w-full max-w-xl'}`}
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Card Container */}
                  <div className="relative">
                    {/* Glowing Background */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`} />
                    
                    {/* Main Card */}
                    <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-gray-100 group-hover:border-purple-300 transition-all duration-300 overflow-hidden">
                      {/* Background Shimmer */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(135deg, rgba(76, 29, 149, 0.03), rgba(124, 58, 237, 0.03))`
                        }}
                      />

                      {/* Large Icon Badge */}
                      <motion.div
                        className="absolute -top-8 -right-8 w-24 h-24 rounded-full flex items-center justify-center shadow-2xl z-10"
                        style={{ background: `linear-gradient(135deg, #4C1D95, #7C3AED)` }}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          delay: i * 0.15 + 0.3, 
                          type: "spring",
                          stiffness: 200
                        }}
                        viewport={{ once: false }}
                        whileHover={{ rotate: 180, scale: 1.15 }}
                      >
                        <span className="text-4xl">{item.icon}</span>
                      </motion.div>

                      {/* Content */}
                      <div className="relative z-10">
                        <motion.h3 
                          className={`font-black text-2xl md:text-3xl text-gray-800 mb-4 group-hover:text-purple-700 transition-colors ${item.position === 'right' ? 'text-right' : item.position === 'center' ? 'text-center' : ''}`}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.15 + 0.4, duration: 0.5 }}
                          viewport={{ once: false }}
                        >
                          {item.title}
                        </motion.h3>
                        
                        {/* Animated Underline */}
                        <motion.div
                          className={`h-1.5 rounded-full mb-5 ${item.position === 'right' ? 'ml-auto' : item.position === 'center' ? 'mx-auto' : ''}`}
                          style={{ background: `linear-gradient(90deg, #4C1D95, #7C3AED)` }}
                          initial={{ width: 60 }}
                          whileInView={{ width: item.position === 'center' ? '40%' : '80%' }}
                          transition={{ delay: i * 0.15 + 0.5, duration: 0.7 }}
                          viewport={{ once: false }}
                        />
                        
                        <motion.p 
                          className={`text-gray-600 text-lg md:text-xl leading-relaxed ${item.position === 'right' ? 'text-right' : item.position === 'center' ? 'text-center' : ''}`}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.15 + 0.6, duration: 0.5 }}
                          viewport={{ once: false }}
                        >
                          {item.desc}
                        </motion.p>
                      </div>

                      {/* Decorative Corner Elements */}
                      <div className={`absolute ${item.position === 'right' ? 'bottom-0 left-0' : 'bottom-0 right-0'} w-32 h-32 bg-gradient-to-br from-purple-200/20 to-purple-300/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      
                      {/* Floating Particles */}
                      <motion.div
                        className="absolute top-6 left-6 w-2 h-2 rounded-full bg-purple-400"
                        animate={{
                          y: [-8, 8, -8],
                          x: [-4, 4, -4],
                          opacity: [0.4, 0.8, 0.4]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.2
                        }}
                      />
                      <motion.div
                        className="absolute bottom-6 right-6 w-2 h-2 rounded-full bg-purple-500"
                        animate={{
                          y: [8, -8, 8],
                          x: [4, -4, 4],
                          opacity: [0.4, 0.8, 0.4]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.2 + 0.5
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Formula for Success Section */}
      <motion.section
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10 overflow-hidden"
        style={{ backgroundColor: '#FFFFFF' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.02, 0.05, 0.02]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, #4C1D95, transparent)' }}
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 1.3, 1],
              opacity: [0.02, 0.04, 0.02]
            }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, #7C3AED, transparent)' }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="inline-block mb-6"
            >
              <span className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm font-bold rounded-full shadow-xl inline-flex items-center gap-2">
                ✨ SUCCESS FORMULA
              </span>
            </motion.div>

            <motion.h2 
              className="text-3xl md:text-5xl font-black mb-6" 
              style={{ color: '#000000' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
            >
              Our Formula for Web Development{" "}
              <motion.span 
                style={{ color: '#4C1D95' }}
                animate={{ 
                  textShadow: [
                    `0 0 20px rgba(76, 29, 149, 0)`,
                    `0 0 30px rgba(76, 29, 149, 0.6)`,
                    `0 0 20px rgba(76, 29, 149, 0)`
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Success
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-lg max-w-3xl mx-auto leading-relaxed mb-4" 
              style={{ color: '#6B7280' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: false }}
            >
              Our development approach is designed for precision and innovation.
            </motion.p>
            
            <motion.p 
              className="text-xl max-w-3xl mx-auto leading-relaxed font-bold" 
              style={{ color: '#4C1D95' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: false }}
            >
              We ensure success through:
            </motion.p>
          </div>

          {/* Flowing Diamond Pattern Layout */}
          <div className="relative max-w-6xl mx-auto">
            {/* Center Connection Hub */}
            <motion.div
              className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full items-center justify-center z-30"
              style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
              initial={{ scale: 0, rotate: 0 }}
              whileInView={{ scale: 1, rotate: 360 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
              viewport={{ once: false }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="text-white text-3xl font-black"
              >
                ⚡
              </motion.div>
              
              {/* Expanding Rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-purple-400"
                animate={{
                  scale: [1, 2, 2],
                  opacity: [0.8, 0, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-purple-500"
                animate={{
                  scale: [1, 2.5, 2.5],
                  opacity: [0.6, 0, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.5
                }}
              />
            </motion.div>

            {/* Items arranged in a flowing pattern */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              {[
                { title: "Deep Understanding", desc: "Analyzing business logic before writing a line of code.", color: "from-purple-500 to-purple-600", icon: "🧠" },
                { title: "Agile Methodology", desc: "Flexible, fast, and transparent development cycles.", color: "from-purple-600 to-purple-700", icon: "🚀" },
                { title: "Cross-Functional Teams", desc: "Designers, developers, and analysts working together.", color: "from-purple-700 to-purple-800", icon: "👥" },
                { title: "Continuous Optimization", desc: "Regular testing and performance tuning.", color: "from-purple-600 to-indigo-600", icon: "⚙️" },
                { title: "End-to-End Support", desc: "From planning to post-launch maintenance.", color: "from-purple-500 to-indigo-600", icon: "🛡️" },
              ].map((pillar, i) => (
                <motion.div
                  key={i}
                  className={`relative ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: i * 0.12,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  {/* Connecting Line to Center (Desktop only) */}
                  <motion.div
                    className="hidden lg:block absolute top-1/2 left-1/2 -z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.2 }}
                    transition={{ delay: i * 0.12 + 0.5, duration: 0.5 }}
                    viewport={{ once: false }}
                  >
                    <svg width="200" height="200" className="absolute -translate-x-1/2 -translate-y-1/2">
                      <motion.line
                        x1="100"
                        y1="100"
                        x2="0"
                        y2="0"
                        stroke="url(#lineGradient)"
                        strokeWidth="2"
                        strokeDasharray="5 5"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ delay: i * 0.12 + 0.6, duration: 0.8 }}
                        viewport={{ once: false }}
                      />
                      <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#4C1D95" />
                          <stop offset="100%" stopColor="#7C3AED" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>

                  <motion.div 
                    className="group relative h-full"
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Glowing Border Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${pillar.color} rounded-3xl opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500`} />
                    
                    {/* Content Card */}
                    <div className="relative h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 shadow-xl border-2 border-gray-100 group-hover:border-purple-300 transition-all duration-300 overflow-hidden">
                      {/* Background Shimmer */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(135deg, rgba(76, 29, 149, 0.05), rgba(124, 58, 237, 0.05))`
                        }}
                      />

                      {/* Icon Badge */}
                      <motion.div
                        className="absolute -top-6 -right-6 w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl z-10"
                        style={{ background: `linear-gradient(135deg, ${pillar.color.replace('from-', '#').replace(' to-', ', #').replace('-500', '').replace('-600', '')})` }}
                        initial={{ scale: 0, rotate: -90 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          delay: i * 0.12 + 0.3, 
                          type: "spring",
                          stiffness: 200
                        }}
                        viewport={{ once: false }}
                        whileHover={{ rotate: 180, scale: 1.15 }}
                      >
                        <span className="text-3xl">{pillar.icon}</span>
                      </motion.div>

                      {/* Content */}
                      <div className="relative z-10">
                        <motion.h3 
                          className="font-black text-lg sm:text-xl md:text-2xl text-gray-800 mb-3 sm:mb-4 group-hover:text-purple-700 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.12 + 0.4, duration: 0.5 }}
                          viewport={{ once: false }}
                        >
                          {pillar.title}
                        </motion.h3>
                        
                        {/* Animated Underline */}
                        <motion.div
                          className="h-1 rounded-full mb-4"
                          style={{ background: `linear-gradient(90deg, ${pillar.color.replace('from-', '#').replace(' to-', ', #').replace('-500', '').replace('-600', '')})` }}
                          initial={{ width: 40 }}
                          whileInView={{ width: '80%' }}
                          transition={{ delay: i * 0.12 + 0.5, duration: 0.6 }}
                          viewport={{ once: false }}
                        />
                        
                        <motion.p 
                          className="text-gray-600 text-base leading-relaxed"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.12 + 0.6, duration: 0.5 }}
                          viewport={{ once: false }}
                        >
                          {pillar.desc}
                        </motion.p>
                      </div>

                      {/* Decorative Corner Glow */}
                      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-purple-300/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Floating Particles */}
                      <motion.div
                        className="absolute top-4 right-4 w-2 h-2 rounded-full bg-purple-400"
                        animate={{
                          y: [-10, 10, -10],
                          opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.3
                        }}
                      />
                      <motion.div
                        className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-purple-500"
                        animate={{
                          y: [10, -10, 10],
                          opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.3 + 0.5
                        }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Your Trusted Partner Section */}
      <motion.section
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10"
        style={{ backgroundColor: '#F9FAFB' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h3 
            className="text-3xl md:text-5xl font-bold mb-6" 
            style={{ color: '#000000' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            Your Trusted Custom Web App Development{" "}
              <motion.span 
                style={{ color: '#4C1D95' }}
                animate={{ 
                  textShadow: [
                    `0 0 20px ${'#4C1D95'}00`,
                    `0 0 20px ${'#4C1D95'}50`,
                    `0 0 20px ${'#4C1D95'}00`
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
              Company
            </motion.span>
          </motion.h3>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-8" style={{ color: '#6B7280' }}>
            Intellects stands as a reliable technology partner delivering excellence and transparency in every project.
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl font-bold max-w-4xl mx-auto leading-relaxed" style={{ color: '#4C1D95' }}>
            We don&apos;t just develop web apps — we engineer business transformation.
          </p>
        </motion.div>
        </div>
      </motion.section>

      {/* Why Businesses Trust Us Section */}
      <motion.section
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10"
        style={{ backgroundColor: '#FFFFFF' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="max-w-7xl mx-auto">
        {/* Centered Heading */}
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl font-black max-w-3xl mx-auto leading-tight mb-6"
          >
            <span style={{ color: '#000000' }}>Why Businesses </span>
            <motion.span
              style={{ color: '#4C1D95' }}
              animate={{
                textShadow: [
                  `0 0 20px rgba(76, 29, 149, 0)`,
                  `0 0 20px rgba(76, 29, 149, 0.5)`,
                  `0 0 20px rgba(76, 29, 149, 0)`
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Trust Us
              </motion.span>
          </motion.h3>
        </div>

        {/* Content Grid */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-full min-h-[250px] sm:min-h-[280px] md:min-h-[300px] overflow-hidden group">
              {/* Background Image */}
              <Image
                src={WEB_APP_IMAGES.trusted}
                alt="Trusted Partnership"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 90vw, 480px"
              />
              <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8 z-10">
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 sm:mb-5 md:mb-6"
                  >
                    <FaRocket className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto" style={{ color: '#4C1D95' }} />
                  </motion.div>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2" style={{ color: '#4C1D95' }}>Trusted Partnership</h4>
                  <p className="text-sm sm:text-base font-semibold" style={{ color: '#000000' }}>Building digital excellence together</p>
                </div>
              </div>
          </div>

            <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-center">
              <div className="space-y-4">
            {[
              "Proven expertise across multiple industries.",
              "Transparent communication and project tracking.",
              "Scalable architecture tailored to your business size.",
              "On-time delivery with uncompromised quality.",
              "Long-term partnership and ongoing technical support.",
            ].map((point, i) => (
              <motion.div
                key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: false }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <FaCheck className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed flex-1 group-hover:text-gray-600 transition-colors">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </motion.section>

      {/* Development Process */}
      <motion.section
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 relative z-10 overflow-hidden"
        style={{ backgroundColor: '#F9FAFB' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              y: [0, -50, 0],
              opacity: [0.03, 0.08, 0.03]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, #4C1D9520, transparent)' }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="inline-block mb-4 sm:mb-5 md:mb-6"
          >
            <span className="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-white text-xs sm:text-sm font-bold rounded-full shadow-2xl" style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}>
              🚀 PROVEN METHODOLOGY
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-5 md:mb-6 px-4" 
            style={{ color: '#000000' }}
          >
            Our Web App Development{" "}
            <motion.span 
              style={{ color: '#4C1D95' }}
              animate={{ 
                textShadow: [
                  `0 0 20px rgba(76, 29, 149, 0)`,
                  `0 0 20px rgba(76, 29, 149, 0.5)`,
                  `0 0 20px rgba(76, 29, 149, 0)`
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Process
            </motion.span>
          </motion.h2>
          <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4" 
            style={{ color: '#6B7280' }}
          >
            Our structured approach ensures predictable results and efficient delivery.
          </motion.p>
                </div>

          {/* Vertical Timeline Layout */}
          <div className="relative max-w-5xl mx-auto">
            {/* Central Animated Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -ml-0.5">
              <motion.div
                className="h-full w-full rounded-full"
                style={{ 
                  background: 'linear-gradient(180deg, transparent 0%, #4C1D95 10%, #7C3AED 50%, #4C1D95 90%, transparent 100%)'
                }}
                initial={{ scaleY: 0, opacity: 0 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: false }}
              />
              
              {/* Animated Flowing Dots */}
              <motion.div
                className="absolute top-0 left-1/2 -ml-2 w-4 h-4 rounded-full"
                style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
                animate={{ 
                  y: ['0%', '100%'],
                  opacity: [0, 1, 1, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  repeatDelay: 0.5
                }}
              />
            </div>

            {/* Timeline Steps */}
            <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16 px-4 sm:px-0">
              {[
                { 
                  title: "Requirement Gathering", 
                  desc: "Understanding project goals and target users.",
                  icon: <FaTasks className="w-8 h-8" />,
                  color: "from-purple-600 to-purple-700"
                },
                { 
                  title: "Planning & Design", 
                  desc: "Defining workflows, UI, and user journeys.",
                  icon: <FaClipboardCheck className="w-8 h-8" />,
                  color: "from-indigo-600 to-indigo-700"
                },
                { 
                  title: "Development Phase", 
                  desc: "Coding scalable, secure, and feature-rich solutions.",
                  icon: <FaLaptopCode className="w-8 h-8" />,
                  color: "from-violet-600 to-violet-700"
                },
                { 
                  title: "Testing & QA", 
                  desc: "Ensuring smooth performance and error-free experience.",
                  icon: <FaCheckCircle className="w-8 h-8" />,
                  color: "from-purple-700 to-purple-800"
                },
                { 
                  title: "Deployment & Support", 
                  desc: "Launching successfully and offering continuous updates.",
                  icon: <FaRocket className="w-8 h-8" />,
                  color: "from-fuchsia-600 to-fuchsia-700"
                },
              ].map((step, i) => {
                const isLeft = i % 2 === 0;
                
                return (
                  <motion.div
                    key={i}
                    className="relative"
                    initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: i * 0.1,
                      type: "spring",
                      stiffness: 80
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    {/* Timeline Node - Center Circle */}
                    <motion.div
                      className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full items-center justify-center z-20 shadow-2xl text-white"
                      style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: i * 0.1 + 0.3,
                        type: "spring",
                        stiffness: 150
                      }}
                      viewport={{ once: false }}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                    >
                      {step.icon}
                      
                      {/* Pulse Rings */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-4 border-purple-300"
                        animate={{
                          scale: [1, 1.5, 1.5],
                          opacity: [0.6, 0, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut",
                          delay: i * 0.3
                        }}
                      />
                    </motion.div>

                    {/* Content Container */}
                    <div className={`flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                      {/* Spacer for desktop */}
                      <div className="hidden md:block flex-1" />
                      
                      {/* Content Box */}
                      <motion.div 
                        className={`flex-1 relative group w-full ${isLeft ? 'md:text-right' : 'md:text-left'}`}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Connection Line to Center */}
                        <motion.div
                          className={`hidden md:block absolute top-1/2 ${isLeft ? 'left-full' : 'right-full'} w-8 h-0.5`}
                          style={{ background: 'linear-gradient(90deg, #4C1D95, #7C3AED)' }}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ duration: 0.5, delay: i * 0.1 + 0.5 }}
                          viewport={{ once: false }}
                        >
                          <motion.div
                            className={`absolute top-1/2 ${isLeft ? 'right-0' : 'left-0'} w-3 h-3 -mt-1.5 rounded-full bg-purple-500`}
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [1, 0.5, 1]
                            }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                        </motion.div>

                        {/* Content Card */}
                        <motion.div
                          className="relative p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden bg-white border-2 border-gray-100"
                          whileHover={{
                            boxShadow: '0 25px 50px -12px rgba(76, 29, 149, 0.25)',
                            borderColor: '#4C1D95'
                          }}
                        >
                          {/* Animated Background Gradient */}
                          <motion.div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                              background: 'linear-gradient(135deg, rgba(76, 29, 149, 0.05), rgba(124, 58, 237, 0.03))'
                            }}
                          />

                          {/* Mobile Icon Badge - Hidden on mobile only */}
                          <motion.div
                            className={`hidden absolute -top-3 sm:-top-4 ${isLeft ? 'left-4 sm:left-6 md:left-8' : 'left-4 sm:left-6 md:left-8'} w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl z-10 text-white bg-gradient-to-br ${step.color}`}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            viewport={{ once: false }}
                          >
                            <div className="text-sm sm:text-base md:text-lg">
                              {step.icon}
                            </div>
                          </motion.div>

                          {/* Text Content */}
                          <div className="relative z-10">
                            <motion.h4 
                              className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 group-hover:text-purple-700 transition-colors"
                              style={{ 
                                background: 'linear-gradient(135deg, #000000, #4C1D95)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                              }}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 + 0.4, duration: 0.5 }}
                              viewport={{ once: false }}
                            >
                              {step.title}
                            </motion.h4>
                            
                            <motion.p 
                              className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 + 0.5, duration: 0.5 }}
                              viewport={{ once: false }}
                            >
                              {step.desc}
                            </motion.p>
                          </div>

                          {/* Bottom accent line */}
                          <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${step.color} group-hover:w-full transition-all duration-500 mt-4`}></div>

                          {/* Decorative Corner Element */}
                          <div className={`absolute ${isLeft ? 'bottom-0 left-0' : 'bottom-0 right-0'} w-32 h-32 opacity-10`}>
                            <div 
                              className={`w-full h-full rounded-full blur-2xl bg-gradient-to-br ${step.color}`}
                            />
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Hiring Models Section */}
      <motion.section
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10 overflow-hidden"
        style={{ backgroundColor: '#FFFFFF' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, #4C1D9530, #7C3AED20)' }}
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
              opacity: [0.08, 0.05, 0.08]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, #7C3AED30, #F59E0B20)' }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="inline-block mb-6"
          >
            <span className="px-8 py-3 text-white text-sm font-bold rounded-full shadow-2xl" style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}>
              ✨ FLEXIBLE COLLABORATION
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl font-black mb-6" 
            style={{ color: '#000000' }}
          >
            Our Custom Hiring{" "}
            <motion.span 
              style={{ color: '#4C1D95' }}
              animate={{ 
                textShadow: [
                  `0 0 20px rgba(76, 29, 149, 0)`,
                  `0 0 20px rgba(76, 29, 149, 0.5)`,
                  `0 0 20px rgba(76, 29, 149, 0)`
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Models
            </motion.span>
          </motion.h2>
          <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed" 
            style={{ color: '#6B7280' }}
          >
            We offer flexible hiring options that fit your business requirements.
          </motion.p>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                number: "01",
                title: "Dedicated Team Model",
                subtitle: "A skilled team focused exclusively on your project.",
                icon: <FaUsers className="w-8 h-8" />,
                color: "from-cyan-500 to-blue-600",
                points: [
                  { text: "Seamless Communication", desc: "Transparent workflow." },
                  { text: "Scalable Team Structure", desc: "For long-term projects." },
                  { text: "Continuous Innovation", desc: "Ideal for businesses." },
                ]
              },
              {
                number: "02",
                title: "Fixed-Price Model",
                subtitle: "Predetermined budget and scope for predictable outcomes.",
                icon: <FaClipboardCheck className="w-8 h-8" />,
                color: "from-purple-500 to-violet-600",
                points: [
                  { text: "Well-Defined Projects", desc: "Best for short-term projects." },
                  { text: "Milestone Payments", desc: "Based on completed milestones." },
                  { text: "Quality Assurance", desc: "Within agreed timelines." },
                ]
              },
              {
                number: "03",
                title: "Hourly / Time & Material Model",
                subtitle: "Pay only for actual hours worked.",
                icon: <FaCogs className="w-8 h-8" />,
                color: "from-orange-500 to-amber-600",
                points: [
                  { text: "Flexible Projects", desc: "Dynamic or evolving projects." },
                  { text: "Real-Time Tracking", desc: "Transparency in reporting." },
                  { text: "Iterative Development", desc: "Perfect for R&D projects." },
                ]
              },
            ].map((model, i) => (
              <motion.div
                key={i}
                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-violet-300 transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: i * 0.2, ease: "easeOut" }}
                viewport={{ once: false }}
                whileHover={{ y: -12, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300" style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}>
                <span className={`text-white font-black text-2xl bg-gradient-to-r ${model.color} bg-clip-text text-transparent`} style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {model.number}
                </span>
              </div>
              
              <div className="relative z-10 p-8">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 + 0.3 }}
                  viewport={{ once: false }}
                  className={`inline-flex p-4 rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 bg-gradient-to-r ${model.color}`}
                >
                  <div className="text-white">
                    {model.icon}
                  </div>
                </motion.div>

                <h3 className="font-black text-xl sm:text-2xl mb-3 sm:mb-4 text-gray-800 group-hover:text-gray-900 transition-colors">
                  {model.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  {model.subtitle}
                </p>
                
                <div className={`h-1 w-16 rounded-full mb-6 bg-gradient-to-r ${model.color} group-hover:w-full transition-all duration-500`}></div>

                <div className="space-y-4">
                  {model.points.map((point, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.2 + idx * 0.1 }}
                      viewport={{ once: false }}
                      className="flex items-start gap-3 group/item"
                    >
                      <div className={`flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center shadow-md group-hover/item:scale-110 transition-transform bg-gradient-to-r ${model.color}`}>
                        <FaCheck className="w-3 h-3 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800 text-sm mb-1">{point.text}</p>
                        <p className="text-gray-600 text-xs leading-relaxed">{point.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${model.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </motion.div>
            ))}
        </div>
        </div>
      </motion.section>

      {/* Technologies Section */}
      <motion.section
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10 overflow-hidden"
        style={{ backgroundColor: '#F9FAFB' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 w-64 h-64 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, #4C1D9520, transparent)' }}
          />
          <motion.div
            animate={{ 
              rotate: [360, 0],
              scale: [1.1, 1, 1.1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 left-10 w-64 h-64 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, #7C3AED20, transparent)' }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="inline-block mb-6"
          >
            <span className="px-8 py-3 text-white text-sm font-bold rounded-full shadow-2xl" style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}>
              💻 CUTTING-EDGE TECHNOLOGY
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl font-black mb-6" 
            style={{ color: '#000000' }}
          >
            Technologies & Frameworks We{" "}
            <motion.span 
              style={{ color: '#4C1D95' }}
              animate={{ 
                textShadow: [
                  `0 0 20px rgba(76, 29, 149, 0)`,
                  `0 0 20px rgba(76, 29, 149, 0.5)`,
                  `0 0 20px rgba(76, 29, 149, 0)`
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Use
            </motion.span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-lg max-w-3xl mx-auto leading-relaxed" 
            style={{ color: '#6B7280' }}
          >
            Our experts at Intellects rely on cutting-edge technologies to deliver powerful web applications.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: false }}
            className="text-lg max-w-3xl mx-auto leading-relaxed mt-4 font-semibold" 
            style={{ color: '#4C1D95' }}
          >
            We choose technologies that align with your business goals — ensuring efficiency, scalability, and innovation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {[
            { 
              title: "Frontend", 
              tech: ["React.js", "Angular", "Vue.js"],
              icon: <FaLaptopCode className="w-8 h-8" />,
              color: "from-blue-500 to-cyan-500"
            },
            { 
              title: "Backend", 
              tech: ["Node.js", ".NET", "Laravel", "Django"],
              icon: <FaCogs className="w-8 h-8" />,
              color: "from-purple-500 to-violet-500"
            },
            { 
              title: "Database", 
              tech: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
              icon: <FaServer className="w-8 h-8" />,
              color: "from-green-500 to-emerald-500"
            },
            { 
              title: "Cloud", 
              tech: ["AWS", "Azure", "Google Cloud"],
              icon: <FaCloud className="w-8 h-8" />,
              color: "from-orange-500 to-amber-500"
            },
            { 
              title: "Other Tools", 
              tech: ["Docker", "GitHub", "Jenkins", "REST & GraphQL APIs"],
              icon: <FaRocket className="w-8 h-8" />,
              color: "from-pink-500 to-rose-500"
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-violet-300 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              viewport={{ once: false }}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(135deg, #4C1D9510, #7C3AED10)' }}
              />

              <div className="absolute -top-2 -right-2 w-16 h-16 opacity-20">
                <div className={`w-full h-full rounded-full bg-gradient-to-br ${item.color}`}></div>
              </div>

              <div className="relative z-10 p-5 sm:p-6 md:p-8">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 + 0.2 }}
                  viewport={{ once: false }}
                  className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl mb-4 sm:mb-5 md:mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${item.color}`}
                >
                  <div className="text-white text-sm sm:text-base md:text-lg">
                    {item.icon}
                  </div>
                </motion.div>

                <h4 className="font-black text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-gray-800 group-hover:text-gray-900 transition-colors">
                  {item.title}
                </h4>

                <div className={`h-1 w-12 rounded-full mb-6 bg-gradient-to-r ${item.color} group-hover:w-full transition-all duration-500`}></div>

                <div className="space-y-2">
                  {item.tech.map((tech, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.15 + idx * 0.1 }}
                      viewport={{ once: false }}
                      className="flex items-center gap-2 group/tech"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} group-hover/tech:scale-150 transition-transform`}></div>
                      <span className="text-gray-700 text-sm group-hover/tech:text-gray-900 group-hover/tech:translate-x-1 transition-all">
                        {tech}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.div
        className="px-6 md:px-12 max-w-7xl mx-auto py-16 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="rounded-3xl p-10 md:p-12 text-center shadow-2xl relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #4C1D95, #1F2937)' }}>
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative z-10">
            <motion.h3 
              className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
            >
              Ready to Transform Your Business with Powerful Web Apps?
            </motion.h3>

            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s build something extraordinary together. Start your journey to digital excellence today.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-10 py-4 bg-white font-bold rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 group text-purple-900"
              >
                Start Your Project <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
