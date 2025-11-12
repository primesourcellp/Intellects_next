"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  FaChartLine, 
  FaSyncAlt, 
  FaPlus, 
  FaMinus,
  FaHashtag,
  FaHeart,
  FaUsers,
  FaArrowRight,
  FaRocket,
  FaBullseye,
  FaCalendarAlt,
  FaCog,
  FaLightbulb,
  FaPalette,
  FaChartBar,
  FaEye,
} from "react-icons/fa";
const SMM_IMAGES = {
  hero: "/assets/smm1.jpg",
  management: ["/assets/smm1.jpg", "/assets/smm2.jpg", "/assets/smm3.jpg"],
  creative: ["/assets/smm1.jpg", "/assets/smm2.jpg", "/assets/smm3.jpg"],
};


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

// FAQ Item Component with Toggle
const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden border-2 group"
      style={{ 
        borderColor: isOpen ? '#4C1D95' : '#E5E7EB',
        backgroundColor: '#FFFFFF'
      }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <div 
        className="p-6 flex items-start gap-4 transition-colors"
        style={{ backgroundColor: '#FFFFFF' }}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F3EFF9'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
      >
        {/* Icon */}
        <motion.div 
          className="text-3xl flex-shrink-0"
          animate={{ rotate: isOpen ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {faq.icon}
        </motion.div>

        {/* Question */}
        <div className="flex-1">
          <h4 className="font-bold text-lg text-gray-900 group-hover:text-purple-700 transition-colors">
            {faq.q}
          </h4>
        </div>

        {/* Toggle Button */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ 
            background: isOpen 
              ? 'linear-gradient(135deg, #4C1D95, #7C3AED)' 
              : '#F3F4F6'
          }}
        >
          {isOpen ? (
            <FaMinus className="text-white text-sm" />
          ) : (
            <FaPlus className="text-gray-600 text-sm" />
          )}
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 pl-20">
              <div 
                className="pt-4 border-t-2" 
                style={{ borderColor: '#E5E7EB' }}
              >
                <p className="text-gray-700 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function Smm() {
  return (
    <div className="min-h-screen text-gray-800" style={{ background: 'linear-gradient(to bottom right, #F9FAFB, #F3F4F6)' }}>
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full blur-3xl -top-48 -left-48 animate-pulse" style={{ background: 'radial-gradient(circle, #4C1D9520, #1F293715)' }}></div>
        <div className="absolute w-96 h-96 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000" style={{ background: 'radial-gradient(circle, #4C1D9520, #1F293715)' }}></div>
      </div>

      {/* Header Section - Recruiter Page Style */}
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
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight"
              style={{ color: '#000000' }}
            >
              <TypingText text="Social Media " />
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
                <TypingText text="Marketing" />
              </motion.span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold mb-6"
              style={{ color: '#4C1D95' }}
            >
              Building Stronger Brands Through Social Engagement
            </motion.h2>
        
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl leading-relaxed mb-8"
              style={{ color: '#374151' }}
            >
              At Intellects, we transform your social presence into a powerful growth engine. Our Social Media Marketing (SMM) strategies help your brand connect, engage, and grow across all major platforms — from Facebook and Instagram to LinkedIn and X (Twitter).
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
                src={SMM_IMAGES.hero} 
                alt="Social Media Marketing Animation" 
                fill
                className="object-cover rounded-2xl shadow-2xl"
                sizes="(max-width: 768px) 90vw, 480px"
                priority
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Strategic Social Media Management Section */}
      <motion.section 
        className="pt-20 pb-20 px-6 md:px-12 lg:px-24 relative z-10" 
        style={{ backgroundColor: '#FFFFFF' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="inline-block mb-6"
            >
              <span className="px-8 py-3 text-white text-sm font-bold rounded-full shadow-2xl" style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}>
                📱 STRATEGIC MANAGEMENT
              </span>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6" 
              style={{ color: '#000000' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
            >
              Strategic Social Media <span style={{ color: '#4C1D95' }}>Management</span>
            </motion.h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-2 font-semibold" style={{ color: '#4C1D95' }}>
              Engage. Inspire. Convert.
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
              A successful social media presence starts with a well-defined strategy. Our experts at Intellects plan, design, and execute content that aligns perfectly with your brand voice and business goals.
            </p>
          </div>

          {/* Management Services Grid */}
          <div className="mb-16">
            <motion.h3 
              className="text-2xl font-bold mb-8 text-center" 
              style={{ color: '#4C1D95' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
            >
              Our SMM management includes:
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <FaLightbulb className="w-6 h-6" />, title: "Social media strategy planning", color: "from-blue-500 to-cyan-500" },
                { icon: <FaCalendarAlt className="w-6 h-6" />, title: "Monthly content calendar & post scheduling", color: "from-purple-500 to-violet-500" },
                { icon: <FaUsers className="w-6 h-6" />, title: "Page management and audience engagement", color: "from-green-500 to-emerald-500" },
                { icon: <FaHashtag className="w-6 h-6" />, title: "Hashtag research and trend optimization", color: "from-orange-500 to-amber-500" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: false }}
                  className="group flex items-center gap-4 p-6 rounded-2xl border-2 border-gray-100 hover:border-violet-300 transition-all duration-300 hover:shadow-lg bg-white"
                >
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 bg-gradient-to-br ${item.color}`}>
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  <p className="text-gray-700 font-medium text-lg leading-relaxed flex-1">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-12 border-2 border-purple-100">
            <motion.h3 
              className="text-2xl font-bold mb-8 text-center" 
              style={{ color: '#4C1D95' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
            >
              Key Benefits:
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <FaEye className="w-6 h-6" />, title: "Consistent brand visibility" },
                { icon: <FaHeart className="w-6 h-6" />, title: "Stronger customer relationships" },
                { icon: <FaChartLine className="w-6 h-6" />, title: "Increased traffic and lead generation" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: false }}
                  className="flex items-center gap-3 p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center">
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <p className="text-gray-800 font-semibold">{item.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Targeted Advertising Campaigns Section */}
      <motion.section
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10"
        style={{ backgroundColor: '#F9FAFB' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="inline-block mb-6"
            >
              <span className="px-8 py-3 text-white text-sm font-bold rounded-full shadow-2xl" style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}>
                🎯 TARGETED ADVERTISING
              </span>
            </motion.div>

            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6" 
              style={{ color: '#000000' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
            >
              Targeted Advertising <span style={{ color: '#4C1D95' }}>Campaigns</span>
            </motion.h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-2 font-semibold" style={{ color: '#4C1D95' }}>
              Reach Your Ideal Audience with Precision
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
              We design and manage paid ad campaigns on platforms like Meta Ads (Facebook & Instagram), LinkedIn Ads, and YouTube to reach users who are most likely to convert.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { icon: <FaBullseye className="w-8 h-8" />, title: "Campaign setup and audience segmentation", color: "from-blue-500 to-cyan-500" },
              { icon: <FaPalette className="w-8 h-8" />, title: "Creative design and ad copywriting", color: "from-purple-500 to-violet-500" },
              { icon: <FaCog className="w-8 h-8" />, title: "A/B testing for performance improvement", color: "from-green-500 to-emerald-500" },
              { icon: <FaChartBar className="w-8 h-8" />, title: "Conversion tracking and reporting", color: "from-orange-500 to-amber-500" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-violet-300 transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
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

                <div className="relative z-10 p-8 flex flex-col items-center text-center">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
                    viewport={{ once: false }}
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${item.color}`}
                  >
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </motion.div>

                  <p className="text-gray-700 text-sm leading-relaxed font-medium">
                    {item.title}
                  </p>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 text-center shadow-2xl"
          >
            <p className="text-white text-xl font-bold">
              Result: Maximum reach with minimal ad spend waste.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Creative Content & Visual Storytelling Section */}
      <motion.section
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10"
        style={{ backgroundColor: '#FFFFFF' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="inline-block mb-6"
            >
              <span className="px-8 py-3 text-white text-sm font-bold rounded-full shadow-2xl" style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}>
                🎨 CREATIVE STORYTELLING
              </span>
            </motion.div>

            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6" 
              style={{ color: '#000000' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
            >
              Creative Content & <span style={{ color: '#4C1D95' }}>Visual Storytelling</span>
            </motion.h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-2 font-semibold" style={{ color: '#4C1D95' }}>
              Your Brand. Your Story. Perfectly Told.
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
              Our creative team crafts compelling visuals and copy that bring your brand&apos;s story to life. From static posts and carousels to videos and reels — we ensure every piece of content captures attention and builds trust.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: "Engaging post designs and reels", image: SMM_IMAGES.creative[0] },
                { title: "Platform-specific content strategies", image: SMM_IMAGES.creative[1] },
              { title: "Caption writing and storytelling tone", image: SMM_IMAGES.creative[2] },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-violet-300 transition-all relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Image at top */}
              <div className="relative h-48 overflow-hidden rounded-t-3xl">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 1024px) 90vw, 320px"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="p-6 text-center relative z-10">
                <h3 className="font-bold text-lg text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                  {item.title}
                </h3>
                <div className="h-1 w-12 rounded-full mx-auto bg-gradient-to-r from-purple-500 to-violet-600 group-hover:w-full transition-all duration-500"></div>
              </div>
              
              {/* Bottom shine effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-violet-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Performance Analytics & Reporting Section */}
      <motion.section
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10"
        style={{ backgroundColor: '#F9FAFB' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="inline-block mb-6"
            >
              <span className="px-8 py-3 text-white text-sm font-bold rounded-full shadow-2xl" style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}>
                📊 ANALYTICS & REPORTING
              </span>
            </motion.div>

            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6" 
              style={{ color: '#000000' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
            >
              Performance Analytics & <span style={{ color: '#4C1D95' }}>Reporting</span>
            </motion.h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-2 font-semibold" style={{ color: '#4C1D95' }}>
              Every Action Measured, Every Result Improved.
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
              We continuously track campaign performance, analyze user behavior, and refine strategies to ensure consistent growth.
            </p>
          </div>

          <div className="text-center mb-8">
            <p className="text-lg font-semibold" style={{ color: '#4C1D95' }}>We provide:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <FaChartBar className="w-6 h-6" />, title: "Monthly insights and performance reports", color: "from-blue-500 to-cyan-500" },
              { icon: <FaChartLine className="w-6 h-6" />, title: "Engagement and follower growth tracking", color: "from-purple-500 to-violet-500" },
              { icon: <FaLightbulb className="w-6 h-6" />, title: "Recommendations for improvement", color: "from-orange-500 to-amber-500" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: false }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(76, 29, 149, 0.2)',
                }}
                className="relative p-8 rounded-3xl shadow-lg border-2 border-gray-100 transition-all cursor-pointer group overflow-hidden"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${item.color}`}></div>
                
                <div className="relative z-10 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${item.color}`}>
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-purple-700 transition-colors" style={{ color: '#4C1D95' }}>
                    {item.title}
                  </h3>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Continuous Optimization & Support Section */}
      <motion.section
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10 overflow-hidden"
        style={{ backgroundColor: '#FFFFFF' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        {/* Background Decorations */}
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
                🔄 CONTINUOUS SUPPORT
              </span>
            </motion.div>

            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6" 
              style={{ color: '#000000' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
            >
              Continuous Optimization & <span style={{ color: '#4C1D95' }}>Support</span>
            </motion.h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-2 font-semibold" style={{ color: '#4C1D95' }}>
              Your Social Growth Partner — Every Step of the Way
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
              Social media is always evolving — and so are we. Intellects ensures your brand stays ahead of trends, algorithms, and competitors through continuous innovation and active community engagement.
            </p>
          </div>

          <div className="text-center mb-8">
            <p className="text-lg font-semibold" style={{ color: '#4C1D95' }}>Our support includes:</p>
          </div>

          {/* Split Design */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Gradient Panel */}
              <div className="relative h-full min-h-[400px] overflow-hidden bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600 p-12 flex items-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                  >
                    <FaRocket className="w-20 h-20 mb-6" />
                    <h3 className="text-3xl font-black mb-4">Always Evolving</h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      We keep your social media presence fresh, relevant, and engaging with continuous updates and trend adaptation.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Right Side - Feature List */}
              <div className="p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  {[
                    { icon: <FaSyncAlt className="w-6 h-6" />, title: "Regular content updates", color: "from-blue-500 to-cyan-500" },
                    { icon: <FaChartLine className="w-6 h-6" />, title: "Trend adaptation", color: "from-purple-500 to-violet-500" },
                    { icon: <FaUsers className="w-6 h-6" />, title: "24/7 monitoring and quick response strategy", color: "from-orange-500 to-amber-500" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: false }}
                      whileHover={{ x: 5 }}
                      className="group flex items-start gap-4 p-5 rounded-2xl border-2 border-gray-100 hover:border-violet-300 transition-all duration-300 hover:shadow-lg bg-gradient-to-br from-white to-gray-50"
                    >
                      <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 bg-gradient-to-br ${item.color}`}>
                        <div className="text-white">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-800 group-hover:text-purple-700 transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      <div className="flex-shrink-0 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        <FaArrowRight className="w-5 h-5" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10"
        style={{ backgroundColor: '#F9FAFB' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6" 
              style={{ color: '#000000' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
            >
              Frequently Asked <span style={{ color: '#4C1D95' }}>Questions</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {[
              {
                q: "Which social platforms do you manage?",
                a: "We handle Facebook, Instagram, LinkedIn, YouTube, and X (Twitter), among others.",
                icon: "📱"
              },
              {
                q: "Can I run both organic and paid campaigns together?",
                a: "Yes, we recommend combining organic growth with targeted paid campaigns for maximum impact.",
                icon: "🚀"
              },
              {
                q: "How often will you post on my social accounts?",
                a: "Posting frequency depends on your business goals, but we generally maintain 3–5 high-quality posts per week per platform.",
                icon: "📅"
              },
              {
                q: "How do you measure SMM success?",
                a: "We track KPIs like engagement rate, reach, follower growth, and conversions through detailed analytics reports.",
                icon: "📊"
              },
              {
                q: "Is SMM suitable for B2B businesses?",
                a: "Absolutely. Platforms like LinkedIn and YouTube work exceptionally well for B2B marketing, lead generation, and brand authority.",
                icon: "💼"
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                className={i === 4 ? "lg:col-span-2" : ""}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: false }}
              >
                <FAQItem faq={faq} index={i} />
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
              Ready to Amplify Your Social Media Presence?
            </motion.h3>

            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s create engaging content that connects with your audience and drives real results across all social platforms.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-10 py-4 bg-white font-bold rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 group text-purple-900"
              >
                Launch Your Campaign <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
