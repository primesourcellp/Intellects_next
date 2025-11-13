"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FaGlobe,
  FaLaptopCode,
  FaStore,
  FaUsers,
  FaCogs,
  FaClipboardCheck,
  FaHandshake,
  FaQuestionCircle,
  FaPlus,
  FaMinus,
  FaArrowRight,
  FaCheck,
  FaWater,
  FaRocket,
} from "react-icons/fa";

const WEBSITE_IMAGES = {
  hero: "/assets/website1.jpg",
  services: [
    "/assets/website1.jpg",
    "/assets/website2.jpg",
    "/assets/website_3.png",
    "/assets/website4.png",
    "/assets/website5.png",
  ],
  trusted: "/assets/website1.jpg",
};

const WEBSITE_SERVICES = [
  {
    title: "Corporate & Business Websites",
    desc: "Build trust with sleek, professional designs.",
    image: WEBSITE_IMAGES.services[0],
  },
  {
    title: "E-commerce Platforms",
    desc: "Secure, scalable, and conversion-focused online stores.",
    image: WEBSITE_IMAGES.services[1],
  },
  {
    title: "CMS Development",
    desc: "Empower your team with easy content management.",
    image: WEBSITE_IMAGES.services[2],
  },
  {
    title: "Landing Pages",
    desc: "Optimize campaigns with high-impact designs.",
    image: WEBSITE_IMAGES.services[3],
  },
  {
    title: "Custom Web Portals",
    desc: "Designed to improve internal operations and user experience.",
    image: WEBSITE_IMAGES.services[4],
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

export default function WebsiteDevelopment() {
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
      className="min-h-screen text-gray-800 overflow-x-hidden w-full" 
      style={{ background: 'linear-gradient(to bottom right, #F9FAFB, #F3F4F6)', WebkitOverflowScrolling: 'touch' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none w-full max-w-full">
        <div className="absolute w-96 h-96 rounded-full blur-3xl -top-48 -left-48 animate-pulse" style={{ background: 'radial-gradient(circle, #4C1D9520, #1F293715)' }}></div>
        <div className="absolute w-96 h-96 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000" style={{ background: 'radial-gradient(circle, #4C1D9520, #1F293715)' }}></div>
      </div>

      {/* Header Section - Recruiter Page Style */}
      <section
        className="relative py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 shadow-lg overflow-hidden w-full max-w-full"
        style={{ backgroundColor: '#F8F5FC', boxShadow: '0 10px 15px -3px rgba(30, 58, 138, 0.1), 0 4px 6px -2px rgba(30, 58, 138, 0.05)' }}
      >
        {/* Floating Icons */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-4 sm:left-10 md:left-20 opacity-20 hidden sm:block"
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
          className="absolute top-40 right-4 sm:right-10 md:right-32 opacity-20 hidden sm:block"
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
          className="absolute bottom-20 right-4 sm:right-10 md:right-20 opacity-20 hidden sm:block"
        >
          <div 
            className="w-12 h-12 rounded-lg transform -rotate-12" 
            style={{ background: 'linear-gradient(135deg, #F59E0B, #4C1D95)' }}
          />
        </motion.div>

        {/* Two Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center max-w-[1600px] mx-auto relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 w-full">
          
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
              <TypingText text="Website " />
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
              Transform Your Online Presence with Modern Web Solutions
            </motion.h2>
        
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8"
              style={{ color: '#374151' }}
            >
              At Intellects, we design and develop modern, responsive, and business-driven websites that help brands make a lasting digital impression. Whether you need a corporate website, e-commerce platform, or a personal portfolio, we deliver technology that performs and design that inspires.
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
                src={WEBSITE_IMAGES.hero} 
                alt="Website Development Animation" 
                fill
                className="object-cover rounded-2xl shadow-2xl"
                sizes="(max-width: 768px) 90vw, 480px"
                priority
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Services Section */}
      <motion.section 
        className="pt-12 sm:pt-16 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 w-full overflow-x-hidden" 
        style={{ backgroundColor: '#FFFFFF' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="max-w-7xl mx-auto w-full">
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
              Our website development services are tailored to meet your business goals and engage your audience effectively.
            </p>
            <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-semibold px-4" style={{ color: '#4C1D95' }}>
              We offer:
            </p>
          </div>
          
          {WEBSITE_SERVICES.map((service, i) => (
            <motion.section
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="py-6 sm:py-8 border-b"
              style={{ borderColor: '#E5E7EB' }}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center w-full ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
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
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      width={768}
                      height={512}
                      className="w-full h-80 object-cover"
                      sizes="(max-width: 1024px) 90vw, 420px"
                      style={{ 
                        borderRadius: '1rem',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                      }}
                    />
                    {/* Decorative overlay */}
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
        </div>
      </motion.section>

      {/* Success Formula */}
      <motion.section
        className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 w-full overflow-x-hidden"
        style={{ backgroundColor: '#F9FAFB' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6" 
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
                  `0 0 20px ${'#4C1D95'}00`,
                  `0 0 20px ${'#4C1D95'}50`,
                  `0 0 20px ${'#4C1D95'}00`
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Success
            </motion.span>
          </motion.h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-4" style={{ color: '#6B7280' }}>
            We follow a proven formula that ensures quality and results for every client.
          </p>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed font-semibold" style={{ color: '#4C1D95' }}>
            Key pillars of our success:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "Understanding Your Goals", desc: "Every project begins with strategy and purpose." },
              { title: "Creative UI/UX Design", desc: "We design experiences that engage users." },
              { title: "Agile Development Approach", desc: "Fast delivery without compromising quality." },
              { title: "Continuous Testing", desc: "Ensuring flawless performance across devices." },
              { title: "Post-Launch Support", desc: "Your website stays optimized and updated." },
            ].map((pillar, i) => (
              <motion.div
                key={i}
              className="group p-5 sm:p-6 md:p-8 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-violet-300 transition-all text-center relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: false }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-2 sm:mb-3 group-hover:text-gray-900 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
              </motion.div>
            ))}
        </div>
        </div>
      </motion.section>

      {/* Your Trusted Partner Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 w-full overflow-x-hidden"
        style={{ backgroundColor: '#FFFFFF' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="max-w-7xl mx-auto w-full">
        {/* Centered Heading */}
        <div className="text-center mb-16">
          <motion.h3 
            className="text-3xl md:text-5xl font-bold mb-6" 
            style={{ color: '#000000' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            Your Trusted Custom Web Development{" "}
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
              Partner
            </motion.span>
          </motion.h3>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-8" style={{ color: '#6B7280' }}>
            Choosing Intellects means partnering with a team that prioritizes innovation, transparency, and long-term value.
          </p>
        </div>
        
        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl font-bold max-w-4xl mx-auto leading-relaxed" style={{ color: '#4C1D95' }}>
            We don&apos;t just build websites — we build digital foundations for your growth.
          </p>
        </motion.div>
        </div>
      </motion.section>

      {/* Why Businesses Choose Us Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 w-full overflow-x-hidden"
        style={{ backgroundColor: '#F9FAFB' }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="max-w-7xl mx-auto w-full">
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
              Choose Us
            </motion.span>
          </motion.h3>
        </div>

        {/* Content Grid */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 w-full max-w-full">
          <div className="grid md:grid-cols-2 gap-0 w-full">
            <div className="relative h-full min-h-[250px] md:min-h-[300px] overflow-hidden group">
              {/* Background Image */}
              <Image
                src={WEBSITE_IMAGES.trusted}
                alt="Trusted Partnership"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 90vw, 480px"
              />
              <div className="absolute inset-0 flex items-center justify-center p-8 z-10">
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                    className="mb-6"
                  >
                    <FaHandshake className="w-20 h-20 mx-auto" style={{ color: '#4C1D95' }} />
                  </motion.div>
                  <h4 className="text-3xl font-bold mb-2" style={{ color: '#4C1D95' }}>Trusted Partnership</h4>
                  <p className="text-base font-semibold" style={{ color: '#000000' }}>Building digital excellence together</p>
                </div>
              </div>
            </div>

            <div className="p-12 flex flex-col justify-center">

              <div className="space-y-4">
            {[
              "Deep industry experience with global clients.",
              "Dedicated in-house development and design teams.",
              "Scalable and flexible project models.",
              "On-time delivery and transparent communication.",
              "End-to-end solutions from design to deployment.",
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
                    <p className="text-gray-700 text-lg leading-relaxed flex-1 group-hover:text-gray-600 transition-colors">
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

      {/* Development Process - Vertical Timeline Design */}
      <motion.section
        className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 overflow-hidden w-full overflow-x-hidden"
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

        <div className="max-w-6xl mx-auto relative z-10 w-full px-4 sm:px-6">
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
                <FaCogs className="w-4 h-4" />
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
              Our Web Development{" "}
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
              Our step-by-step process ensures{" "}
              <span className="font-bold" style={{ color: '#4C1D95' }}>smooth collaboration</span>,{" "}
              <span className="font-bold" style={{ color: '#4C1D95' }}>quality</span>, and{" "}
              <span className="font-bold" style={{ color: '#4C1D95' }}>reliable results</span>.
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
            <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16 px-4 sm:px-0">
              {[
                {
                  step: "Discovery & Strategy",
                  desc: "Understanding your business objectives and target audience.",
                  icon: <FaClipboardCheck className="w-7 h-7" />
                },
                {
                  step: "Design & Prototyping",
                  desc: "Visualizing your website's flow and style.",
                  icon: <FaCogs className="w-7 h-7" />
                },
                {
                  step: "Development",
                  desc: "Coding with performance, scalability, and security in mind.",
                  icon: <FaLaptopCode className="w-7 h-7" />
                },
                {
                  step: "Testing & QA",
                  desc: "Ensuring seamless user experience and speed.",
                  icon: <FaCheck className="w-7 h-7" />
                },
                {
                  step: "Deployment & Maintenance",
                  desc: "Launching your site and providing ongoing support.",
                  icon: <FaRocket className="w-7 h-7" />
                }
              ].map(({ step, desc, icon }, i) => {
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
                      className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full items-center justify-center z-20 shadow-2xl text-white"
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
                      {icon}
                      
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
                          className="relative p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden w-full max-w-full"
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

                          {/* Mobile Icon Badge - Hidden on mobile only */}
                          <motion.div
                            className="hidden absolute -top-3 sm:-top-4 left-4 sm:left-6 md:left-8 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl z-10 text-white"
                            style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            viewport={{ once: false }}
                          >
                            <div className="text-sm sm:text-base md:text-lg">
                              {icon}
                            </div>
                          </motion.div>

                          {/* Text Content */}
                          <div className="relative z-10">
                            <motion.h4 
                              className="text-xl sm:text-2xl md:text-3xl font-black mb-3 sm:mb-4 text-gray-800 group-hover:text-purple-700 transition-colors"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 + 0.4, duration: 0.5 }}
                              viewport={{ once: false }}
                            >
                              {step}
                            </motion.h4>
                            
                            <motion.p 
                              className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed"
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
                  Seamless Journey, Outstanding Websites
                </p>
                <p className="text-gray-600">
                  From concept to launch, we&apos;re with you every step of the way
                </p>
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaRocket className="w-8 h-8 text-purple-600" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Hiring Models */}
      <motion.section
        className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 overflow-hidden w-full overflow-x-hidden"
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

        <div className="max-w-7xl mx-auto relative z-10 w-full">
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
            At Intellects, we offer flexible hiring models that adapt to your project scale, timeline, and budget — giving you the freedom to choose how you collaborate with us.
          </motion.p>
        </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Dedicated Team Model",
                subtitle: "Ideal for long-term projects that require consistent development effort and technical expertise.",
                icon: <FaUsers className="w-8 h-8" />,
                color: "from-cyan-500 to-blue-600",
                points: [
                  { text: "Full-Time Allocation", desc: "A team fully dedicated to your project goals." },
                  { text: "Seamless Collaboration", desc: "Works as an extension of your in-house team." },
                  { text: "Flexible Scaling", desc: "Add or remove team members as your project evolves." },
                  { text: "Long-Term Partnership", desc: "Ensures continuity, quality, and domain understanding." }
                ]
              },
              {
                number: "02",
                title: "Fixed-Price Model",
                subtitle: "Perfect for projects with clearly defined requirements and timelines.",
                icon: <FaClipboardCheck className="w-8 h-8" />,
                color: "from-purple-500 to-violet-600",
                points: [
                  { text: "Predefined Scope", desc: "Project plan, budget, and deadlines set in advance." },
                  { text: "Transparent Pricing", desc: "No hidden costs or unexpected changes." },
                  { text: "Milestone-Based Delivery", desc: "Payment tied to progress and deliverables." },
                  { text: "Predictable Results", desc: "Ensures efficiency and timely completion." }
                ]
              },
              {
                number: "03",
                title: "Hourly / Time & Material Model",
                subtitle: "Best suited for projects with evolving requirements or R&D-based initiatives.",
                icon: <FaCogs className="w-8 h-8" />,
                color: "from-orange-500 to-amber-600",
                points: [
                  { text: "Pay-as-You-Go", desc: "Only pay for actual hours worked." },
                  { text: "Complete Flexibility", desc: "Adjust scope, features, and priorities anytime." },
                  { text: "Real-Time Tracking", desc: "Transparent time and progress reporting." },
                  { text: "Rapid Iteration", desc: "Ideal for agile, continuously changing environments." }
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
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Number Badge */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300" style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}>
                <span className={`text-white font-black text-2xl bg-gradient-to-r ${model.color} bg-clip-text text-transparent`} style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {model.number}
                </span>
              </div>
              
              <div className="relative z-10 p-8">
                {/* Icon */}
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

                {/* Title */}
                <h3 className="font-black text-2xl mb-4 text-gray-800 group-hover:text-gray-900 transition-colors">
                  {model.title}
                </h3>
                
                {/* Subtitle */}
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {model.subtitle}
                </p>
                
                {/* Divider */}
                <div className={`h-1 w-16 rounded-full mb-6 bg-gradient-to-r ${model.color} group-hover:w-full transition-all duration-500`}></div>

                {/* Points */}
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
              
              {/* Bottom Shine Effect */}
              <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${model.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </motion.div>
            ))}
        </div>
        </div>
      </motion.section>

      {/* Technologies Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 overflow-hidden w-full overflow-x-hidden"
        style={{ backgroundColor: '#FFFFFF' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        {/* Decorative Background Elements */}
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

        <div className="max-w-7xl mx-auto relative z-10 w-full">
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
            Transforming Ideas Into Scalable{" "}
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
              Web Applications
            </motion.span>
          </motion.h2>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-2xl md:text-3xl font-bold mb-4" 
            style={{ color: '#4C1D95' }}
          >
            Technologies & Frameworks We Use
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: false }}
            className="text-lg max-w-3xl mx-auto leading-relaxed" 
            style={{ color: '#6B7280' }}
          >
            We build with the latest tools to ensure performance and scalability
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "Frontend", 
              tech: ["HTML5", "CSS3", "React.js", "Vue.js", "Angular"],
              icon: <FaLaptopCode className="w-8 h-8" />,
              color: "from-blue-500 to-cyan-500"
            },
            { 
              title: "Backend", 
              tech: ["Node.js", "Laravel", ".NET", "PHP"],
              icon: <FaCogs className="w-8 h-8" />,
              color: "from-purple-500 to-violet-500"
            },
            { 
              title: "CMS", 
              tech: ["WordPress", "Shopify", "Drupal"],
              icon: <FaGlobe className="w-8 h-8" />,
              color: "from-green-500 to-emerald-500"
            },
            { 
              title: "Database", 
              tech: ["MySQL", "MongoDB", "PostgreSQL"],
              icon: <FaCogs className="w-8 h-8" />,
              color: "from-orange-500 to-amber-500"
            },
            { 
              title: "Cloud & Hosting", 
              tech: ["AWS", "Azure", "Google Cloud"],
              icon: <FaWater className="w-8 h-8" />,
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
              {/* Animated Background Gradient */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'linear-gradient(135deg, #4C1D9510, #7C3AED10)' }}
              />

              {/* Corner Decoration */}
              <div className="absolute -top-2 -right-2 w-16 h-16 opacity-20">
                <div className={`w-full h-full rounded-full bg-gradient-to-br ${item.color}`}></div>
              </div>

              <div className="relative z-10 p-8">
                {/* Animated Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 + 0.2 }}
                  viewport={{ once: false }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${item.color}`}
                >
                  <div className="text-white">
                    {item.icon}
                  </div>
                </motion.div>

                {/* Title */}
                <h4 className="font-black text-2xl mb-4 text-gray-800 group-hover:text-gray-900 transition-colors">
                  {item.title}
                </h4>

                {/* Animated Divider */}
                <div className={`h-1 w-12 rounded-full mb-6 bg-gradient-to-r ${item.color} group-hover:w-full transition-all duration-500`}></div>

                {/* Tech List */}
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

              {/* Bottom Shine Effect */}
              <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </motion.div>
          ))}
        </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 w-full overflow-x-hidden"
        style={{ backgroundColor: '#F9FAFB' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6" 
            style={{ color: '#000000' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            Frequently Asked{" "}
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
              Questions
            </motion.span>
          </motion.h2>
        </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {[
              {
                q: "How long does it take to develop a website with Intellects?",
                a: "The timeline depends on the project&apos;s complexity and requirements. A basic business site may take 3–4 weeks, while advanced or e-commerce platforms may require 8–12 weeks for full development and testing.",
                icon: "⏱️"
              },
              {
                q: "Can Intellects redesign or upgrade my existing website?",
                a: "Absolutely! We specialize in website redesign and modernization, ensuring your current site is enhanced with better design, performance, and user experience without losing brand identity.",
                icon: "🎨"
              },
              {
                q: "What technologies does Intellects use for website development?",
                a: "We work with modern frameworks and CMS platforms such as React, Laravel, WordPress, Node.js, .NET, and Shopify to ensure your website is robust, scalable, and easy to manage.",
                icon: "💻"
              },
              {
                q: "Will my website be mobile-friendly and SEO-optimized?",
                a: "Yes. Every website we develop at Intellects is fully responsive, optimized for all devices, and built with SEO best practices to enhance visibility and ranking.",
                icon: "📱"
              },
              {
                q: "Do you provide maintenance and support after website launch?",
                a: "Yes, we offer post-launch maintenance, security updates, and technical support to ensure your website runs smoothly and stays updated with the latest technologies.",
                icon: "🔧"
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
        className="px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto py-16 relative z-10 w-full overflow-x-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-center shadow-2xl relative overflow-hidden w-full" style={{ background: 'linear-gradient(135deg, #4C1D95, #1F2937)' }}>
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
              Ready to Transform Your Online Presence?
            </motion.h3>

            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s create a stunning website that drives real results and grows your business.
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
