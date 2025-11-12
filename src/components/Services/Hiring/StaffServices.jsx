"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaUsers, 
  FaSearch, 
  FaDollarSign, 
  FaIndustry, 
  FaChartLine, 
  FaCheckCircle, 
  FaClipboardList, 
  FaLaptopCode, 
  FaPlus, 
  FaMinus, 
  FaUserCheck, 
  FaHandsHelping, 
  FaBusinessTime, 
  FaShieldAlt,
  FaUserTie, 
  FaSyncAlt, 
  FaChartBar, 
  FaGlobe,
  FaRocket,
  FaArrowRight,
  FaBriefcase,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const STAFFING_SERVICE_IMAGES = {
  hero: "/assets/gif_2.gif",
  industries: "/assets/s1.jpg",
  process: "/assets/s2.jpg",
  data: "/assets/s3.jpg",
  support: "/assets/s4.jpg",
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

// FAQ Item Component
const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      key={index}
      className="rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden border-2 group"
      style={{ borderColor: isOpen ? '#4C1D95' : '#E5E7EB', backgroundColor: '#FFFFFF' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div 
        className="p-6 flex items-start gap-4 transition-colors"
        style={{ backgroundColor: '#FFFFFF' }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F3EFF9'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Icon */}
        <motion.div 
          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: isOpen ? 'linear-gradient(135deg, #4C1D95, #7C3AED)' : 'linear-gradient(135deg, #E8E4F3, #F3EFF9)' }}
          animate={{ rotate: isOpen ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <faq.icon className={`text-xl ${isOpen ? 'text-white' : 'text-purple-600'}`} />
        </motion.div>

        {/* Question */}
        <h4 className="flex-1 font-bold text-lg" style={{ color: '#1F2937' }}>{faq.q}</h4>
        
        {/* Toggle Button */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: isOpen ? 'linear-gradient(135deg, #4C1D95, #7C3AED)' : '#F3F4F6' }}
        >
          {isOpen ? (
            <FaMinus className="text-white text-xs" />
          ) : (
            <FaPlus className="text-gray-600 text-xs" />
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
            className="px-6 pb-6 pl-20"
          >
            <p className="leading-relaxed" style={{ color: '#374151' }}>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function StaffingServices() {
  
  const flexibleHiring = [
    "Permanent staffing",
    "Contract and temporary staffing",
    "Project-based hiring",
    "Remote and offshore staffing",
    "Executive and leadership hiring"
  ];

  const keyBenefits = [
    "Access to pre-vetted global talent",
    "Faster recruitment turnaround",
    "Reduced hiring costs and risks"
  ];

  const industries = [
    "Information Technology & Software Development",
    "Engineering & Manufacturing",
    "Finance, Sales & Marketing",
    "Healthcare & Life Sciences",
    "HR & Administrative Services"
  ];

  const hiringProcessSteps = [
    "Requirement analysis and job profiling",
    "Candidate sourcing and screening",
    "Interview coordination and evaluation",
    "Background checks and onboarding support"
  ];
  
  const dataFocus = [
    "Predictive hiring insights",
    "Candidate performance metrics",
    "Continuous feedback and improvement"
  ];

  const ongoingSupport = [
    "Performance monitoring",
    "HR consulting and support",
    "Contract renewals and compliance management"
  ];

  const faqs = [
    {
      icon: FaUsers,
      q: "What types of staffing services do you offer?",
      a: "We provide permanent, contract, temporary, project-based, and offshore staffing solutions for businesses of all sizes."
    },
    {
      icon: FaCheckCircle,
      q: "How do you ensure candidate quality?",
      a: "Every candidate undergoes skill evaluation, background verification, and cultural fit assessments before shortlisting."
    },
    {
      icon: FaRocket,
      q: "Can you provide staffing for urgent or bulk requirements?",
      a: "Yes. Our global database and quick turnaround process allow us to meet both urgent and large-scale staffing needs."
    },
    {
      icon: FaBriefcase,
      q: "Do you handle employee onboarding and documentation?",
      a: "Yes, Intellects manages the onboarding process, including offer letters, documentation, and compliance checks."
    },
    {
      icon: FaIndustry,
      q: "What industries do you specialize in?",
      a: "We specialize in IT, Engineering, Healthcare, Finance, Sales, and Administrative staffing."
    }
  ];

  const itemVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  const cardVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, duration: 0.6 } }
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
              <TypingText text="Staffing " />
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
                <TypingText text="Services" />
              </motion.span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold mb-6"
              style={{ color: '#4C1D95' }}
            >
              Empowering Businesses with the Right People at the Right Time
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8"
              style={{ color: '#374151' }}
            >
              At Intellects, we believe great organizations are built by great people. Our Staffing Services are designed to help businesses find, hire, and retain top talent efficiently and effectively. Whether you need permanent employees, contract professionals, or project-based teams, we provide customized workforce solutions that align perfectly with your business goals.
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
                src={STAFFING_SERVICE_IMAGES.hero} 
                alt="Staffing Services Animation" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 480px"
                priority
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Comprehensive Staffing Solutions */}
      <motion.section
        className="py-20 relative z-10 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          {/* Left Content */}
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
              <span className="px-7 py-2 bg-gradient-to-r from-purple-500 to-teal-500 text-white text-sm font-bold rounded-full shadow-lg">
                STAFFING SOLUTIONS
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-5" style={{ color: '#000000' }}>
              Comprehensive{" "}
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
                Staffing Solutions
              </motion.span>
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold mb-6" style={{ color: '#4C1D95' }}>
              Flexible Hiring Options for Every Business Need
            </h3>

            <p className="text-lg leading-relaxed mb-8" style={{ color: '#374151' }}>
              We understand that every company has unique staffing requirements. Intellects offers a full range of staffing models to meet short-term, long-term, and project-specific needs.
            </p>
          </motion.div>

          {/* Right Points/Image */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {flexibleHiring.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-800 font-medium text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Benefits */}
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
          className="text-3xl md:text-4xl font-bold mb-12 text-center max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20"
          style={{ color: '#000000' }}
        >
          Key Benefits:
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          {keyBenefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <FaCheckCircle className="w-7 h-7 text-white" />
              </div>
              <p className="text-gray-700 font-semibold text-lg text-center group-hover:text-gray-600 transition-colors">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Industry-Focused Expertise */}
      <motion.section
        className="py-20 relative z-10 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col-reverse lg:flex-row items-center gap-20 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          {/* Left Content and Points */}
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
              Industry-Focused{" "}
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
                Expertise
              </motion.span>
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold mb-6" style={{ color: '#4C1D95' }}>
              Specialized Recruitment Across Multiple Sectors
            </h3>

            <p className="text-lg leading-relaxed mb-8" style={{ color: '#374151' }}>
              Our team of recruiters understands industry dynamics and job market trends, enabling us to find candidates who fit both the technical and cultural aspects of your organization.
            </p>

            <div className="space-y-6">
              {industries.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-800 font-medium text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="lg:w-1/2 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative w-4/5 lg:w-3/4 h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={STAFFING_SERVICE_IMAGES.industries}
                alt="Industry Expertise"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 60vw, 520px"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Streamlined Hiring Process */}
      <motion.section
        className="py-20 relative z-10 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-20 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          {/* Left Image */}
          <motion.div
            className="lg:w-1/2 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative w-4/5 lg:w-3/4 h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={STAFFING_SERVICE_IMAGES.process}
                alt="Hiring Process"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 60vw, 520px"
              />
            </div>
          </motion.div>

          {/* Right Content and Points */}
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
                STREAMLINED PROCESS
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-5" style={{ color: '#000000' }}>
              Streamlined{" "}
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
                Hiring Process
              </motion.span>
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold mb-6" style={{ color: '#4C1D95' }}>
              Efficiency from Start to Finish
            </h3>

            <p className="text-lg leading-relaxed mb-8" style={{ color: '#374151' }}>
              Our recruitment process is built on transparency, efficiency, and precision. We manage every stage — from candidate sourcing to onboarding — ensuring you get the best talent without the stress.
            </p>

            <div className="space-y-6">
              {hiringProcessSteps.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-800 font-medium text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Data-Driven Recruitment */}
      <motion.section
        className="py-20 relative z-10 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col-reverse lg:flex-row items-center gap-20 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          {/* Left Content and Points */}
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
              <span className="px-7 bg-gradient-to-r from-purple-500 to-teal-500 text-white text-sm py-2 font-bold rounded-full shadow-lg">
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
                Recruitment
              </motion.span>
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold mb-6" style={{ color: '#4C1D95' }}>
              Smart Hiring Backed by Analytics
            </h3>

            <p className="text-lg leading-relaxed mb-8" style={{ color: '#374151' }}>
              We combine technology and human expertise to enhance decision-making and hiring quality. Our data-driven approach helps reduce hiring time while improving talent retention.
            </p>

            <div className="space-y-6">
              {dataFocus.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-800 font-medium text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="lg:w-1/2 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative w-4/5 lg:w-3/4 h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={STAFFING_SERVICE_IMAGES.data}
                alt="Data-Driven Recruitment"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 60vw, 520px"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Ongoing Support & Workforce Management */}
      <motion.section
        className="py-20 relative z-10 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-20 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          {/* Left Image */}
          <motion.div
            className="lg:w-1/2 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative w-4/5 lg:w-3/4 h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={STAFFING_SERVICE_IMAGES.support}
                alt="Ongoing Support"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 60vw, 520px"
              />
            </div>
          </motion.div>

          {/* Right Content and Points */}
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
                CONTINUOUS SUPPORT
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-5" style={{ color: '#000000' }}>
              Ongoing Support &{" "}
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
                Workforce Management
              </motion.span>
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold mb-6" style={{ color: '#4C1D95' }}>
              Your Trusted Partner in Long-Term Staffing Success
            </h3>

            <p className="text-lg leading-relaxed mb-8" style={{ color: '#374151' }}>
              Our relationship doesn&apos;t end after placement. Intellects provides continuous post-hiring support to ensure your workforce remains efficient, compliant, and satisfied.
            </p>

            <div className="space-y-6">
              {ongoingSupport.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-800 font-medium text-lg">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* FAQs */}
      <motion.section
        className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden"
        style={{ backgroundColor: '#F3EFF9' }}
      >
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 rounded-full blur-3xl -top-48 -left-48 opacity-30" style={{ background: 'radial-gradient(circle, #4C1D95, transparent)' }}></div>
          <div className="absolute w-96 h-96 rounded-full blur-3xl -bottom-48 -right-48 opacity-30" style={{ background: 'radial-gradient(circle, #7C3AED, transparent)' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: '#1F2937' }}
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
              Get answers to common questions about our staffing services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {faqs.map((faq, idx) => (
              <div key={idx} className={idx === 4 ? "lg:col-span-2" : ""}>
                <FAQItem faq={faq} index={idx} />
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.div
        className="px-6 md:px-12 max-w-7xl mx-auto py-12 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <div className="rounded-3xl p-8 md:p-10 text-center shadow-2xl relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #4C1D95, #1F2937)' }}>
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
              Ready to build your dream team and transform your workforce strategy?
            </h3>

            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Partner with us to access top-tier talent and transform your workforce strategy.
            </p>

            <div className="flex items-center justify-center">
              <Link 
                href="/contact"
                className="group px-10 py-4 bg-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 text-purple-900"
              >
                Start Your Project
                <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
