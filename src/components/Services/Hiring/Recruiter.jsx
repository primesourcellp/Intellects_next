"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaPlus, FaMinus, FaCheckCircle } from "react-icons/fa";

const RECRUITER_IMAGES = {
  hero: "/assets/gif_2.gif",
  expertise: "/assets/recruiter1.jpg",
  support: "/assets/recruiter2.jpg",
  dataDriven: "/assets/recruiter3.jpg",
  compliance: "/assets/recruiter4.jpg",
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

// FAQItem component
const FAQItem = ({ faq, index }) => {
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
                <p className="text-gray-800 leading-relaxed">
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


export default function GlobalRecruitments() {
  const strategyPoints = [
    "Global candidate sourcing and shortlisting",
    "Skill-based and behavioral screening",
    "Multi-level interview coordination",
    "Cultural and organizational fit assessment"
  ];

  const benefits = [
    "Access to global talent pools",
    "Reduced hiring time and costs",
    "Improved retention and performance"
  ];

  const industryExpertise = [
    "IT & Software Development",
    "Engineering & Manufacturing",
    "Healthcare & Life Sciences",
    "Finance, Sales & Marketing",
    "HR & Administration"
  ];

  const recruitmentProcess = [
    "Job description creation and optimization",
    "Candidate communication and interview scheduling",
    "Offer negotiation and documentation support",
    "Post-placement follow-up"
  ];

  const dataDriven = [
    "Candidate scoring and ranking systems",
    "Hiring funnel analysis",
    "Predictive analytics for talent retention"
  ];

  const continuousSupport = [
    "Workforce planning and scalability",
    "Global mobility and relocation assistance",
    "Compliance with labor and visa regulations"
  ];

  const faqs = [
    {
      q: "What regions do you recruit from?",
      a: "We source candidates globally, focusing on regions like Asia, Europe, the Middle East, and North America based on client requirements.",
      icon: "🌍"
    },
    {
      q: "Can you handle remote and hybrid roles?",
      a: "Yes, we recruit for onsite, remote, and hybrid positions across multiple industries.",
      icon: "💼"
    },
    {
      q: "How do you ensure quality in hiring?",
      a: "Through a structured screening process, skill validation, and thorough background checks before presenting candidates.",
      icon: "✅"
    },
    {
      q: "What industries do you specialize in?",
      a: "We have expertise across IT, Engineering, Healthcare, Finance, and Administrative roles.",
      icon: "🏢"
    },
    {
      q: "Do you assist with relocation or visa processing?",
      a: "Yes, we offer complete support for global mobility, including visa documentation and relocation assistance.",
      icon: "🚀"
    }
  ];

  const itemVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };
  
  const cardVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
  }


  return (
    <div className="min-h-screen text-gray-800" style={{ backgroundColor: '#F3EFF9' }}>
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full blur-3xl -top-48 -left-48 animate-pulse" style={{ background: 'radial-gradient(circle, #4C1D9520, #1F293715)' }}></div>
        <div className="absolute w-96 h-96 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000" style={{ background: 'radial-gradient(circle, #4C1D9520, #1F293715)' }}></div>
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
              <TypingText text="Global " />
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
                <TypingText text="Recruitments" />
              </motion.span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold mb-6"
              style={{ color: '#4C1D95' }}
            >
              Connecting Global Talent with the Right Opportunities
            </motion.h2>
        
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8"
              style={{ color: '#374151' }}
            >
              At Intellects, we bridge the gap between businesses and world-class talent. Our Global Recruitment services are designed to help organizations source, screen, and onboard skilled professionals from across the globe — ensuring the perfect fit for every role.
        </motion.p>
          </motion.div>

          {/* Right Column - GIF */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-full min-h-[320px]">
              <Image 
                src={RECRUITER_IMAGES.hero} 
                alt="Global Recruitment Animation" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 480px"
                priority
              />
            </div>
          </motion.div>

        </div>
      </section>

      <motion.section
        className="relative py-24 text-center overflow-hidden hidden"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.3
            }
          }
        }}
      >
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        <motion.button
            className="px-10 py-4 bg-white text-gray-600 font-bold rounded-full text-lg shadow-2xl hover:bg-purple-50 transition-colors animate-pulse hover:animate-none"
            style={{ boxShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(16, 185, 129, 0.3)' }}
          whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.3)" }}
          whileTap={{ scale: 0.95 }}
          variants={itemVariant}
        >
          Start Your Global Search
        </motion.button>
        </div>
      </motion.section>

      {/* Strategy Points */}
      <motion.section 
        className="py-20 relative z-10 overflow-hidden" 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          
          {/* Left Column - Content */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
              <span className="px-7 py-2 bg-gradient-to-r  from-purple-500 to-teal-500 text-white text-sm font-bold rounded-full shadow-lg">
                OUR APPROACH
            </span>
          </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-5" style={{ color: '#000000' }}>
              Strategic Talent{" "}
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
                Acquisition
            </motion.span>
          </h2>
            
            <p className="text-xl md:text-2xl font-semibold mb-4" style={{ color: '#4C1D95' }}>
              Finding the Right Talent, Not Just Any Talent
            </p>
            
            <p className="text-base md:text-lg leading-relaxed" style={{ color: '#374151' }}>
              We believe recruitment is more than just filling positions — it&apos;s about building teams that drive success. Our global recruitment strategy focuses on understanding your needs, company culture, and role requirements to find the most qualified professionals.
            </p>
          </motion.div>

          {/* Right Column - Points List */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
          {strategyPoints.map((item, idx) => (
            <motion.div
              key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 group"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1" style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}>
                  <FaCheckCircle className="text-white text-sm" />
                </div>
                <p className="text-lg font-medium text-gray-700 group-hover:text-purple-700 transition-colors leading-relaxed">{item}</p>
            </motion.div>
          ))}
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* Benefits */}
      <motion.section 
        className="py-20 relative z-10 overflow-hidden" 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold mb-8 text-center max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20"
          style={{ color: '#4C1D95' }}
        >
          Key Benefits:
        </motion.h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4 group"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1" style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}>
                <FaCheckCircle className="text-white text-sm" />
              </div>
              <p className="text-lg font-medium text-gray-700 group-hover:text-purple-700 transition-colors leading-relaxed">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Industry-Specific Recruitment Expertise */}
      <motion.section 
        className="py-20 relative z-10 overflow-hidden" 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-20 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          {/* Mobile - Image First */}
          <motion.div
            className="lg:w-1/2 w-full flex justify-center lg:hidden"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative w-4/5 lg:w-3/4 h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src={RECRUITER_IMAGES.expertise} 
                alt="Industry Expertise" 
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 420px"
              />
            </div>
          </motion.div>
          
          {/* Left Column - Content and Points */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="px-7  bg-gradient-to-r from-purple-500 to-teal-500 text-white text-sm py-2 font-bold rounded-full shadow-lg">
                INDUSTRY EXPERTISE
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-5" style={{ color: '#000000' }}>
              Industry-Specific{" "}
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
                Recruitment
            </motion.span>
          </h2>
            
            <p className="text-xl md:text-2xl font-semibold mb-4" style={{ color: '#4C1D95' }}>
              Specialized Hiring Across Diverse Sectors
            </p>
            
            <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: '#374151' }}>
              Our recruitment experts have extensive experience in multiple industries, allowing us to match the right professionals to the right roles.
            </p>

            {/* Industry Points */}
            <div className="space-y-4 mt-8">
              {industryExpertise.map((item, idx) => (
              <motion.div
                key={idx} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1" style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}>
                    <FaCheckCircle className="text-white text-sm" />
                  </div>
                  <p className="text-lg font-medium text-gray-700 group-hover:text-purple-700 transition-colors leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image - Desktop Only */}
          <motion.div
            className="lg:w-1/2 w-full hidden lg:flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative w-4/5 lg:w-3/4 h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src={RECRUITER_IMAGES.expertise} 
                alt="Industry Expertise" 
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 60vw, 520px"
              />
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* End-to-End Recruitment Support */}
      <motion.section 
        className="py-20 relative z-10 overflow-hidden" 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-20 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          
          {/* Left Column - Image */}
          <motion.div
            className="lg:w-1/2 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative w-4/5 lg:w-3/4 h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src={RECRUITER_IMAGES.support} 
                alt="End-to-End Recruitment Support" 
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 60vw, 520px"
              />
            </div>
          </motion.div>

          {/* Right Column - Content and Points */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="px-7 bg-gradient-to-r from-purple-500 to-teal-500 text-white text-sm py-2 font-bold rounded-full shadow-lg">
                FULL SUPPORT
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-5" style={{ color: '#000000' }}>
              End-to-End{" "}
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
                Recruitment Support
              </motion.span>
            </h2>
            
            <p className="text-xl md:text-2xl font-semibold mb-4" style={{ color: '#4C1D95' }}>
              From Candidate Search to Final Selection
            </p>
            
            <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: '#374151' }}>
              We manage the entire recruitment cycle, ensuring a smooth and transparent hiring process for both clients and candidates.
            </p>

            {/* Recruitment Process Points */}
            <div className="space-y-4 mt-8">
              {recruitmentProcess.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1" style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}>
                    <FaCheckCircle className="text-white text-sm" />
        </div>
                  <p className="text-lg font-medium text-gray-700 group-hover:text-purple-700 transition-colors leading-relaxed">{item}</p>
              </motion.div>
            ))}
        </div>
          </motion.div>

        </div>
      </motion.section>

      {/* Data-Driven Hiring Decisions */}
      <motion.section 
        className="py-20 relative z-10 overflow-hidden" 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-20 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          {/* Mobile - Image First */}
          <motion.div
            className="lg:w-1/2 w-full flex justify-center lg:hidden"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative w-4/5 lg:w-3/4 h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src={RECRUITER_IMAGES.dataDriven} 
                alt="Data-Driven Hiring" 
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 420px"
              />
            </div>
          </motion.div>
          
          {/* Left Column - Content and Points */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="px-7 bg-gradient-to-r from-teal-500 to-purple-500 text-white text-sm py-2 font-bold rounded-full shadow-lg">
                ANALYTICS POWERED
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-5" style={{ color: '#000000' }}>
              Data-Driven{" "}
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
                Hiring Decisions
            </motion.span>
          </h2>
            
            <p className="text-xl md:text-2xl font-semibold mb-4" style={{ color: '#4C1D95' }}>
              Recruitment Backed by Insights and Analytics
            </p>
            
            <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: '#374151' }}>
              We use advanced tools and analytics to improve hiring accuracy and efficiency. Every recruitment decision is supported by measurable data and performance tracking.
            </p>

            {/* Data-Driven Points */}
            <div className="space-y-4 mt-8">
              {dataDriven.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1" style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}>
                    <FaCheckCircle className="text-white text-sm" />
                  </div>
                  <p className="text-lg font-medium text-gray-700 group-hover:text-purple-700 transition-colors leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image - Desktop Only */}
          <motion.div
            className="lg:w-1/2 w-full hidden lg:flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative w-4/5 lg:w-3/4 h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src={RECRUITER_IMAGES.dataDriven} 
                alt="Data-Driven Hiring" 
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 60vw, 520px"
              />
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* Continuous Support & Global Compliance */}
      <motion.section 
        className="py-20 relative z-10 overflow-hidden" 
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-20 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          
          {/* Left Column - Image */}
          <motion.div
            className="lg:w-1/2 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative w-4/5 lg:w-3/4 h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image 
                src={RECRUITER_IMAGES.compliance} 
                alt="Continuous Support & Global Compliance" 
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 60vw, 520px"
              />
            </div>
          </motion.div>

          {/* Right Column - Content and Points */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="px-7 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm py-2 font-bold rounded-full shadow-lg">
                LONG-TERM PARTNERSHIP
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-5" style={{ color: '#000000' }}>
              Continuous Support &{" "}
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
                Global Compliance
              </motion.span>
            </h2>
            
            <p className="text-xl md:text-2xl font-semibold mb-4" style={{ color: '#4C1D95' }}>
              Your Long-Term Recruitment Partner
            </p>
            
            <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: '#374151' }}>
              Intellects stays committed beyond placement. We ensure compliance with international employment regulations and provide ongoing consultation to support your global workforce strategy.
            </p>

            {/* Continuous Support Points */}
            <div className="space-y-4 mt-8">
              {continuousSupport.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1" style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}>
                    <FaCheckCircle className="text-white text-sm" />
                  </div>
                  <p className="text-lg font-medium text-gray-700 group-hover:text-purple-700 transition-colors leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* FAQs */}
      <section className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden" style={{ backgroundColor: '#F3EFF9' }}>
        {/* Background Decoration */}
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #4C1D95, transparent)' }} />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #7C3AED, transparent)' }} />
        
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6" 
              style={{ color: '#000000' }}
            >
              Frequently Asked{" "}
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
                Questions
              </motion.span>
            </motion.h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
              Get answers to common questions about our global recruitment services.
            </p>
          </motion.div>

          {/* FAQ Items */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className={i === 4 ? "lg:col-span-2" : ""}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <FAQItem faq={faq} index={i} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <motion.div
        className="px-6 md:px-12 max-w-5xl mx-auto py-16 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="rounded-3xl p-10 md:p-12 text-center shadow-2xl relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #4C1D95, #1F2937)' }}>
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

          <div className="relative z-10">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight"
            >
              Ready to Transform Your Business?
            </motion.h3>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
            >
              Let&apos;s connect you with world-class talent to drive your business forward.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <Link
                href="/contact"
                className="group px-10 py-4 bg-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 text-purple-900"
              >
                Start Your Project
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
