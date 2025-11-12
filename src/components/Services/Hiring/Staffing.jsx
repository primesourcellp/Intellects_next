"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUsers, 
  FaProjectDiagram, 
  FaIndustry, 
  FaClipboardCheck, 
  FaDollarSign, 
  FaPlus, 
  FaMinus, 
  FaRocket, 
  FaHandshake, 
  FaGavel,
  FaCheckCircle,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const STAFFING_IMAGES = {
  hero: "/assets/gif_2.gif",
  industries: "/assets/staffing1.jpg",
  management: "/assets/staffing2.jpg",
  cost: "/assets/staffing3.jpg",
  support: "/assets/staffing4.jpg",
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

export default function ContractStaffing() {
  const services = [
    "Short-term and long-term contract placements",
    "Project-based staffing",
    "Contract-to-hire recruitment",
    "Temporary replacement staffing"
  ];

  const benefits = [
    "Reduced recruitment and administrative costs",
    "Faster onboarding and deployment",
    "Access to specialized skills on demand"
  ];

  const industries = [
    "IT & Software Development",
    "Engineering & Construction",
    "Healthcare & Pharmaceuticals",
    "Finance, Sales & Operations",
    "Admin & Support Services"
  ];

  const staffingProcess = [
    "Candidate sourcing and screening",
    "Background verification and onboarding",
    "Payroll management and compliance",
    "Contract renewals and workforce tracking"
  ];

  const costEffectiveness = [
    "Transparent contract terms",
    "Regular performance feedback",
    "Optimized workforce utilization"
  ];

  const continuousSupport = [
    "Renewal and extension management",
    "Resource optimization consulting",
    "Compliance with local labor laws"
  ];

  const faqs = [
    {
      icon: FaBriefcase,
      q: "What is contract staffing?",
      a: "Contract staffing allows companies to hire professionals for specific projects or time periods without full-time employment commitments."
    },
    {
      icon: FaDollarSign,
      q: "What are the advantages of contract staffing?",
      a: "It provides flexibility, cost savings, and quick access to skilled professionals without long-term liabilities."
    },
    {
      icon: FaUsers,
      q: "Can contract staff be converted to permanent employees?",
      a: "Yes, we offer contract-to-hire solutions that allow clients to evaluate talent before offering permanent roles."
    },
    {
      icon: FaClipboardCheck,
      q: "Do you handle payroll and compliance?",
      a: "Absolutely. Intellects manages payroll, tax deductions, benefits, and all legal compliance on your behalf."
    },
    {
      icon: FaIndustry,
      q: "What industries do you provide contract staffing for?",
      a: "We provide contract staffing across IT, Engineering, Healthcare, Finance, and Administrative sectors."
    }
  ];

  const coreAspects = [
    {
      title: "Rapid Deployment",
      icon: FaRocket,
      description: "Get the right talent on your team fast to meet urgent project deadlines and immediate operational needs.",
      color: "text-red-500"
    },
    {
      title: "Zero Liability",
      icon: FaGavel,
      description: "Minimize long-term employment risk and administrative burdens, focusing purely on project success.",
      color: "text-gray-500"
    },
    {
      title: "Strategic Partnership",
      icon: FaHandshake,
      description: "We work as an extension of your HR team, providing consulting and continuous support beyond simple placement.",
      color: "text-green-500"
    }
  ];

  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const itemVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

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
              <TypingText text="Contract " />
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
                <TypingText text="Staffing" />
              </motion.span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold mb-6"
              style={{ color: '#4C1D95' }}
            >
              Flexible Workforce Solutions for a Dynamic Business Environment
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8"
              style={{ color: '#374151' }}
            >
              At Intellects, we understand that business needs change rapidly — and your workforce should adapt just as fast. Our Contract Staffing services provide companies with skilled professionals on a temporary, project-based, or contract-to-hire basis, helping you stay agile and efficient without long-term commitments.
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
                src={STAFFING_IMAGES.hero} 
                alt="Contract Staffing Animation" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 480px"
                priority
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Scalable and Flexible Workforce Solutions */}
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
                WORKFORCE SOLUTIONS
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-5" style={{ color: '#000000' }}>
              Scalable and Flexible{" "}
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
                Workforce Solutions
              </motion.span>
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold mb-6" style={{ color: '#4C1D95' }}>
              Hire Smart. Scale Fast. Stay Agile.
            </h3>

            <p className="text-lg leading-relaxed mb-8" style={{ color: '#374151' }}>
              Our contract staffing model is designed to help organizations respond quickly to changing market demands. We provide flexible hiring options that allow you to expand or reduce your workforce as needed — without the complexity of full-time employment.
            </p>
          </motion.div>

          {/* Right Points */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
            {services.map((item, idx) => (
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
          {benefits.map((item, idx) => (
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

      {/* Expertise Across Industries */}
      <motion.section
        className="py-20 relative z-10 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-20 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          {/* Left Content and Points - Image on mobile */}
          <motion.div
            className="lg:w-1/2 w-full flex justify-center lg:hidden"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative w-4/5 lg:w-3/4 h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={STAFFING_IMAGES.industries}
                alt="Industry Expertise"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 420px"
              />
            </div>
          </motion.div>

          {/* Content */}
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
                INDUSTRY EXPERTISE
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-5" style={{ color: '#000000' }}>
              Expertise Across{" "}
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
                Industries
              </motion.span>
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold mb-6" style={{ color: '#4C1D95' }}>
              Talent That Fits Your Industry Needs
            </h3>

            <p className="text-lg leading-relaxed mb-8" style={{ color: '#374151' }}>
              We connect businesses with contract professionals across multiple domains. Our experienced recruiters understand industry-specific challenges and find candidates who can add value from day one.
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

          {/* Right Image - Desktop only */}
          <motion.div
            className="lg:w-1/2 w-full hidden lg:flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative w-4/5 lg:w-3/4 h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={STAFFING_IMAGES.industries}
                alt="Industry Expertise"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 60vw, 520px"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* End-to-End Staffing Management */}
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
                src={STAFFING_IMAGES.management}
                alt="Staffing Management"
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
                STAFFING MANAGEMENT
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
                Staffing Management
              </motion.span>
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold mb-6" style={{ color: '#4C1D95' }}>
              From Hiring to Compliance — We Handle It All
            </h3>

            <p className="text-lg leading-relaxed mb-8" style={{ color: '#374151' }}>
              Our team manages the entire contract staffing lifecycle, ensuring a seamless experience for both clients and candidates.
            </p>

            <div className="space-y-6">
              {staffingProcess.map((item, idx) => (
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

      {/* Cost-Effective and Transparent Process */}
      <motion.section
        className="py-20 relative z-10 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row items-center gap-20 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
          {/* Mobile Image First */}
          <motion.div
            className="lg:w-1/2 w-full flex justify-center lg:hidden"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative w-4/5 lg:w-3/4 h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={STAFFING_IMAGES.cost}
                alt="Cost-Effective Process"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 420px"
              />
            </div>
          </motion.div>

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
              <span className="px-7 bg-gradient-to-r from-teal-500 to-purple-500 text-white text-sm py-2 font-bold rounded-full shadow-lg">
                COST-EFFECTIVE
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 mt-5" style={{ color: '#000000' }}>
              Cost-Effective and{" "}
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
                Transparent Process
              </motion.span>
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold mb-6" style={{ color: '#4C1D95' }}>
              Smart Staffing That Saves Time and Money
            </h3>

            <p className="text-lg leading-relaxed mb-8" style={{ color: '#374151' }}>
              We simplify workforce management by offering transparent pricing, easy reporting, and performance tracking. You get complete control and visibility while we handle the operational complexities.
            </p>

            <div className="space-y-6">
              {costEffectiveness.map((item, idx) => (
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

          {/* Right Image - Desktop Only */}
          <motion.div
            className="lg:w-1/2 w-full hidden lg:flex justify-center"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative w-4/5 lg:w-3/4 h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={STAFFING_IMAGES.cost}
                alt="Cost-Effective Process"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 60vw, 520px"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Continuous Support & Partnership */}
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
                src={STAFFING_IMAGES.support}
                alt="Continuous Support"
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
              <span className="px-7 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm py-2 font-bold rounded-full shadow-lg">
                CONTINUOUS SUPPORT
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
                Partnership
              </motion.span>
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold mb-6" style={{ color: '#4C1D95' }}>
              Building Long-Term Workforce Relationships
            </h3>

            <p className="text-lg leading-relaxed mb-8" style={{ color: '#374151' }}>
              At Intellects, we go beyond placements. Our team maintains regular communication to ensure ongoing satisfaction, compliance, and workforce stability.
            </p>

            <div className="space-y-6">
              {continuousSupport.map((item, idx) => (
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

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: '#000000' }}>
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
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
              Get answers to common questions about our contract staffing services.
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
              Ready to build a flexible workforce that scales with your business needs?
            </h3>

            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Scale your team dynamically with contract staffing solutions tailored to your business needs.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group px-10 py-4 bg-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 text-purple-900"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
