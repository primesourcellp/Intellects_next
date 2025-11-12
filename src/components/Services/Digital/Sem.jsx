"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  FaChartLine,
  FaBullseye,
  FaRocket,
  FaCheck,
  FaArrowRight,
  FaPlus,
  FaMinus,
  FaLightbulb,
} from "react-icons/fa";
const SEM_IMAGES = {
  hero: "/assets/sem1.jpg",
  pillars: ["/assets/sem1.jpg", "/assets/sem2.jpg", "/assets/sem3.jpg"],
  campaignTypes: ["/assets/sem4.jpg", "/assets/sem5.jpg", "/assets/sem6.jpg", "/assets/sem2.jpg"],
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

// Flip Card Component
const SEMFlipCard = ({ item, index }) => {
  return (
    <motion.div
      className="relative w-full h-[240px] group"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
      viewport={{ once: false }}
      whileHover={{ y: -8, scale: 1.05 }}
    >
      <motion.div
        className="w-full h-full rounded-2xl shadow-lg border-2 p-6 flex flex-col justify-center items-center text-center transition-all duration-300 group-hover:shadow-2xl group-hover:border-violet-300"
        style={{
          backgroundColor: '#FFFFFF',
          borderColor: '#E5E7EB'
        }}
      >
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
        
        <div className="relative z-10">
          <motion.h3 
            className="text-lg font-bold mb-3 group-hover:text-purple-700 transition-colors duration-300" 
            style={{ color: '#4C1D95' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
            viewport={{ once: false }}
          >
            {item.title}
          </motion.h3>
          
          {/* Animated divider */}
          <motion.div 
            className="h-0.5 w-12 bg-gradient-to-r from-purple-500 to-violet-500 mx-auto mb-3 group-hover:w-full transition-all duration-500"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 48, opacity: 1 }}
            transition={{ duration: 0.7, delay: index * 0.2 + 0.4 }}
            viewport={{ once: false }}
          ></motion.div>
          
          <motion.p 
            className="text-sm leading-relaxed" 
            style={{ color: '#6B7280' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
            viewport={{ once: false }}
          >
            {item.description}
          </motion.p>
        </div>
        
        {/* Bottom shine effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-violet-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
      </motion.div>
    </motion.div>
  );
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

export default function Sem() {
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
              <TypingText text="Search Engine " />
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
              Reach the Right Audience Instantly with Smart Paid Campaigns
            </motion.h2>
        
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl leading-relaxed mb-8"
              style={{ color: '#374151' }}
            >
              Search Engine Marketing (SEM) is one of the fastest ways to get your business noticed online. At Intellects, we craft high-performing SEM campaigns that deliver qualified traffic, stronger conversions, and visible growth.
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
                src={SEM_IMAGES.hero} 
                alt="Search Engine Marketing Animation" 
                fill
                className="object-cover rounded-2xl shadow-2xl"
                sizes="(max-width: 768px) 90vw, 480px"
                priority
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Our SEM Process Section - Vertical Timeline */}
      <motion.section
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10 overflow-hidden"
        style={{ backgroundColor: '#FFFFFF' }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              opacity: [0.03, 0.08, 0.03]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 right-10 w-96 h-96 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, #4C1D95, transparent)' }}
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 1.3, 1],
              opacity: [0.03, 0.06, 0.03]
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, #7C3AED, transparent)' }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              viewport={{ once: false }}
              className="inline-block mb-6"
            >
              <motion.span 
                className="px-8 py-3 text-white text-sm font-bold rounded-full shadow-2xl inline-flex items-center gap-2" 
                style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: [
                    '0 10px 30px rgba(76, 29, 149, 0.3)',
                    '0 15px 40px rgba(124, 58, 237, 0.4)',
                    '0 10px 30px rgba(76, 29, 149, 0.3)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaRocket className="w-4 h-4" />
                OUR PROCESS
              </motion.span>
            </motion.div>

            <motion.h2 
              className="text-3xl md:text-5xl font-black mb-6" 
              style={{ color: '#000000' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
            >
              Our SEM Campaign{" "}
              <motion.span 
                style={{ 
                  color: '#4C1D95',
                  display: 'inline-block'
                }}
                animate={{ 
                  textShadow: [
                    `0 0 20px rgba(76, 29, 149, 0)`,
                    `0 0 30px rgba(76, 29, 149, 0.6)`,
                    `0 0 20px rgba(76, 29, 149, 0)`
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Process
              </motion.span>
            </motion.h2>

            <motion.p 
              className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium" 
              style={{ color: '#6B7280' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: false }}
            >
              Our step-by-step approach ensures{" "}
              <span className="font-bold" style={{ color: '#4C1D95' }}>maximum ROI</span>,{" "}
              <span className="font-bold" style={{ color: '#4C1D95' }}>targeted reach</span>, and{" "}
              <span className="font-bold" style={{ color: '#4C1D95' }}>measurable results</span>.
            </motion.p>
          </div>

          {/* Vertical Timeline Layout */}
          <div className="relative">
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

            {/* Process Steps */}
            <div className="space-y-12 md:space-y-16">
              {[
                {
                  step: "Keyword Research & Targeting",
                  desc: "In-depth keyword research and targeting strategy to reach your ideal customers."
                },
                {
                  step: "Campaign Setup",
                  desc: "Expert Google Ads and Bing Ads campaign setup with optimal settings."
                },
                {
                  step: "Smart Bid Management",
                  desc: "Strategic bid management to optimize your budget and maximize results."
                },
                {
                  step: "A/B Testing",
                  desc: "Continuous A/B testing for performance improvement and better conversions."
                },
                {
                  step: "Custom Ad Copywriting",
                  desc: "Persuasive ad copy that maximizes clicks and drives conversions."
                }
              ].map(({ step, desc }, i) => {
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
                      className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full items-center justify-center z-20 shadow-2xl"
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
                      <motion.span 
                        className="text-white font-black text-2xl"
                        animate={{
                          textShadow: [
                            '0 0 0px rgba(255,255,255,0)',
                            '0 0 20px rgba(255,255,255,1)',
                            '0 0 0px rgba(255,255,255,0)'
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                      >
                        {i + 1}
                      </motion.span>
                      
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
                    <div className={`flex flex-col md:flex-row items-center gap-8 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                      {/* Spacer for desktop */}
                      <div className="hidden md:block flex-1" />
                      
                      {/* Content Box */}
                      <motion.div 
                        className={`flex-1 relative group ${isLeft ? 'md:text-right' : 'md:text-left'}`}
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
                          className="relative p-8 rounded-3xl shadow-xl overflow-hidden"
                          style={{ 
                            background: 'linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)',
                            border: '2px solid transparent',
                            backgroundClip: 'padding-box'
                          }}
                          whileHover={{
                            boxShadow: '0 25px 50px -12px rgba(76, 29, 149, 0.25)',
                            borderColor: '#7C3AED'
                          }}
                        >
                          {/* Animated Background Gradient */}
                          <motion.div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            style={{
                              background: 'linear-gradient(135deg, rgba(76, 29, 149, 0.05), rgba(124, 58, 237, 0.05))'
                            }}
                          />

                          {/* Mobile Number Badge - Hidden on mobile only */}
                          <motion.div
                            className="hidden absolute -top-4 left-8 w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10"
                            style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            viewport={{ once: false }}
                          >
                            <span className="text-white font-black text-lg">{i + 1}</span>
                          </motion.div>

                          {/* Text Content */}
                          <div className="relative z-10">
                            <motion.h4 
                              className="text-2xl md:text-3xl font-black mb-4 text-gray-800 group-hover:text-purple-700 transition-colors"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 + 0.4, duration: 0.5 }}
                              viewport={{ once: false }}
                            >
                              {step}
                            </motion.h4>
                            
                            <motion.p 
                              className="text-gray-600 text-lg leading-relaxed"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 + 0.5, duration: 0.5 }}
                              viewport={{ once: false }}
                            >
                              {desc}
                            </motion.p>
                          </div>

                          {/* Decorative Corner Element */}
                          <div className={`absolute ${isLeft ? 'bottom-0 left-0' : 'bottom-0 right-0'} w-32 h-32 opacity-10`}>
                            <div 
                              className="w-full h-full rounded-full blur-2xl"
                              style={{ background: 'radial-gradient(circle, #7C3AED, transparent)' }}
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

          {/* Bottom Success Message */}
          <motion.div
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: false }}
          >
            <motion.div
              className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-50 via-indigo-50 to-purple-50 px-10 py-6 rounded-2xl shadow-lg border border-purple-100"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <FaCheck className="w-8 h-8 text-purple-600" />
              </motion.div>
              <div className="text-left">
                <p className="text-xl font-bold text-gray-800 mb-1">
                  Data-Driven, Results-Focused Campaigns
                </p>
                <p className="text-gray-600">
                  From research to optimization, we maximize every dollar spent
                </p>
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaChartLine className="w-8 h-8 text-purple-600" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Benefits Section */}
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
                ⚡ KEY ADVANTAGES
              </span>
            </motion.div>

            <motion.h3 
              className="text-4xl md:text-5xl font-bold mb-6" 
              style={{ color: '#4C1D95' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
            >
              Key{" "}
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
                Benefits
              </motion.span>
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Instant Visibility", 
              description: "Instant visibility on search engines.", 
              icon: "⚡"
            },
            { 
              title: "Measurable Performance", 
              description: "Measurable and trackable performance.", 
              icon: "📊"
            },
            { 
              title: "Enhanced ROI", 
              description: "Enhanced conversion rates and ROI.", 
              icon: "💰"
            },
          ].map((item, i) => (
              <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: false }}
              whileHover={{ 
                y: -8, 
                boxShadow: '0 20px 40px rgba(76, 29, 149, 0.2)',
                borderColor: '#4C1D95'
              }}
              className="p-8 rounded-2xl shadow-lg border-2 transition-all cursor-pointer group"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: '#E5E7EB'
              }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
                </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#4C1D95' }}>
                {item.title}
              </h3>
              <p className="leading-relaxed" style={{ color: '#6B7280' }}>
                {item.description}
              </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Data-Driven Marketing Strategy Section */}
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
              📊 DATA-DRIVEN APPROACH
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
            Data-Driven Marketing <span style={{ color: '#4C1D95' }}>Strategy</span>
          </motion.h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-2" style={{ color: '#6B7280' }}>
            Decisions Powered by Insights, Not Assumptions
          </p>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            We don&apos;t guess — we analyze. Every campaign at Intellects is backed by real-time data, user behavior tracking, and advanced analytics to ensure your ad budget is used effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "Conversion Tracking", 
                description: "Conversion tracking & performance monitoring.",
                icon: "🎯",
              
              },
              { 
                title: "Budget Optimization", 
                description: "Budget optimization.",
                icon: "💵",
            
              },
              { 
                title: "Deep Analytics", 
                description: "Deep analytics reports to measure success.",
                icon: "📈",
          
              },
            ].map((item, i) => (
              <SEMFlipCard key={i} item={item} index={i} />
            ))}
        </div>
        </div>
      </motion.section>

      {/* Precision Audience Targeting Section */}
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
              🎯 PRECISION TARGETING
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
            Precision Audience <span style={{ color: '#4C1D95' }}>Targeting</span>
          </motion.h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-2" style={{ color: '#6B7280' }}>
            Reaching the Right People at the Right Time
          </p>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            Our targeting strategies go beyond demographics. We segment your audience based on intent, interest, and behavior to ensure your ads reach potential customers who are ready to engage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: "Geo-Targeted Campaigns", desc: "Geo-targeted and device-based campaigns." },
              { title: "Retargeting Strategies", desc: "Interest-based and retargeting strategies." },
              { title: "Lead Generation", desc: "High-quality lead generation tactics." },
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
                  src={SEM_IMAGES.pillars[i]} 
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 1024px) 90vw, 360px"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="p-6 text-center relative z-10">
                <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                  {item.title}
                </h3>
                <div className="h-1 w-12 rounded-full mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:w-full transition-all duration-500"></div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
              
              {/* Bottom shine effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </motion.div>
            ))}
        </div>
        </div>
      </motion.section>

      {/* Creative Ad Development Section */}
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
              🎨 CREATIVE EXCELLENCE
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
            Creative Ad <span style={{ color: '#4C1D95' }}>Development</span>
          </motion.h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-2" style={{ color: '#6B7280' }}>
            Where Strategy Meets Design
          </p>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            Our creative team designs eye-catching visuals and persuasive ad copy that connect emotionally and logically with your audience. Every ad we craft speaks directly to customer needs while maintaining your brand&apos;s voice.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { title: "Engaging Visuals", desc: "Engaging visuals and clear CTAs." },
                { title: "Optimized Copy", desc: "Ad copy optimized for relevance and conversions." },
              { title: "Consistent Branding", desc: "Consistent branding across all platforms." },
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
                  src={SEM_IMAGES.campaignTypes[i]} 
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 1024px) 90vw, 360px"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="p-6 text-center relative z-10">
                <h3 className="font-bold text-xl text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                  {item.title}
                </h3>
                <div className="h-1 w-12 rounded-full mx-auto mb-4 bg-gradient-to-r from-purple-500 to-violet-600 group-hover:w-full transition-all duration-500"></div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
              
              {/* Bottom shine effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-violet-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </motion.div>
            ))}
        </div>
        </div>
      </motion.section>

      {/* Continuous Optimization & Growth Section - New Design */}
      <motion.section
        className="py-20 px-6 md:px-12 lg:px-24 relative z-10 overflow-hidden"
        style={{ backgroundColor: '#F9FAFB' }}
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
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="inline-block mb-6"
            >
              <span className="px-8 py-3 text-white text-sm font-bold rounded-full shadow-2xl" style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}>
                🔄 CONTINUOUS IMPROVEMENT
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
              Continuous Optimization & <span style={{ color: '#4C1D95' }}>Growth</span>
            </motion.h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-2" style={{ color: '#6B7280' }}>
              Your Campaign Never Stops Improving
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
              Digital marketing is a journey, not a one-time setup. We monitor and refine campaigns continuously to improve ROI, reduce ad waste, and strengthen performance over time.
            </p>
          </div>

          {/* Main Content - Split Design */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Image/Gradient with Stats */}
              <div className="relative h-full min-h-[500px] overflow-hidden bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600 p-12 flex items-center">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                  >
                    <FaChartLine className="w-20 h-20 mb-6" />
                    <h3 className="text-3xl font-black mb-4">Never Stop Growing</h3>
                    <p className="text-white/90 text-lg mb-8 leading-relaxed">
                      We analyze, optimize, and improve your campaigns every week to ensure maximum performance and ROI.
                    </p>
                  </motion.div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6 mt-8">
                    {[
                      { label: "Weekly Reports", value: "52+" },
                      { label: "Optimizations", value: "200+" },
                      { label: "A/B Tests", value: "100+" },
                      { label: "ROI Increase", value: "150%" }
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        viewport={{ once: false }}
                        className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
                      >
                        <div className="text-3xl font-black mb-1">{stat.value}</div>
                        <div className="text-sm text-white/80">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side - Feature Cards */}
              <div className="p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  {[
                    { 
                      title: "Performance Analysis", 
                      desc: "Weekly performance analysis with detailed insights and actionable recommendations.",
                      icon: <FaChartLine className="w-6 h-6" />,
                      color: "from-blue-500 to-cyan-500"
                    },
                    { 
                      title: "Competitor Benchmarking", 
                      desc: "Stay ahead with regular competitor analysis and market positioning strategies.",
                      icon: <FaBullseye className="w-6 h-6" />,
                      color: "from-purple-500 to-violet-500"
                    },
                    { 
                      title: "Strategy Reviews", 
                      desc: "Monthly strategy reviews and improvement plans to maximize campaign effectiveness.",
                      icon: <FaLightbulb className="w-6 h-6" />,
                      color: "from-orange-500 to-amber-500"
                    },
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
                        <h4 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-700 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.desc}
                        </p>
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
        style={{ backgroundColor: '#FFFFFF' }}
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
                q: "What makes SEM different from SEO?",
                a: "SEO focuses on organic growth, while SEM uses paid advertising for instant visibility on search engines.",
                icon: "🔍"
              },
              {
                q: "How soon will I see results from SEM?",
                a: "You can start seeing results within days of campaign launch, depending on your budget and targeting strategy.",
                icon: "⏱️"
              },
              {
                q: "Can Intellects manage multi-channel ad campaigns?",
                a: "Yes, we handle campaigns across Google Ads, Bing Ads, and display networks for maximum reach.",
                icon: "📢"
              },
              {
                q: "How do you ensure the best ROI?",
                a: "Through continuous optimization, keyword analysis, and performance tracking, we ensure every rupee spent delivers value.",
                icon: "💰"
              },
              {
                q: "Is SEM suitable for small and mid-sized businesses?",
                a: "Absolutely. Our flexible packages allow businesses of any size to leverage paid advertising effectively.",
                icon: "✅"
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
              Ready to Drive Instant Results with Smart SEM Campaigns?
            </motion.h3>

            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s create high-performing paid campaigns that deliver qualified traffic and measurable growth.
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
