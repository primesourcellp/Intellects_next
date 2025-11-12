"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  FaEnvelope, 
  FaChartLine, 
  FaSyncAlt, 
  FaPlus, 
  FaMinus,
  FaCheckCircle,
  FaArrowRight,
  FaUsers,
  FaRocket,
  FaBell,
  FaChartBar,
  FaLightbulb,
  FaCog,
  FaPen,
  FaEye,
} from "react-icons/fa";
const EMAIL_IMAGES = {
  hero: "/assets/emailmarketing1.jpg",
  storytelling: ["/assets/emailmarketing1.jpg", "/assets/emailmarketing2.jpg", "/assets/emailmarketing3.jpg"],
  automations: [
    "/assets/emailmarketing4.jpg",
    "/assets/emailmarketing5.jpg",
    "/assets/emailmarketing6.jpg",
    "/assets/emailmarketing7.jpg",
  ],
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
          <h4 className="font-bold text-lg group-hover:text-purple-900 transition-colors" style={{ 
            background: 'linear-gradient(135deg, #000000, #4C1D95)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
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

export default function EmailMarketing() {
  const faqs = [
    {
      q: "What types of email campaigns do you manage?",
      a: "We handle newsletters, promotional emails, onboarding sequences, product launches, and re-engagement campaigns.",
      icon: "📧"
    },
    {
      q: "How often should I send marketing emails?",
      a: "It depends on your audience and goals, but we typically recommend 1–3 targeted emails per week.",
      icon: "📅"
    },
    {
      q: "Do you use automation tools?",
      a: "Yes. We work with tools like Mailchimp, HubSpot, ActiveCampaign, and others to automate and optimize your email marketing.",
      icon: "⚙️"
    },
    {
      q: "How do you ensure emails don&apos;t go to spam?",
      a: "We follow industry best practices — including verified sender domains, optimized subject lines, and proper HTML formatting.",
      icon: "🛡️"
    },
    {
      q: "Can you help design email templates?",
      a: "Absolutely. We design mobile-responsive templates that match your brand identity and marketing goals.",
      icon: "🎨"
    },
  ];

  return (
    <div className="min-h-screen text-gray-800 overflow-x-hidden w-full" style={{ background: 'linear-gradient(to bottom right, #F9FAFB, #F3F4F6)' }}>
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none w-full max-w-full">
        <div className="absolute w-96 h-96 rounded-full blur-3xl -top-48 -left-48 animate-pulse" style={{ background: 'radial-gradient(circle, #4C1D9520, #00000015)' }}></div>
        <div className="absolute w-96 h-96 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000" style={{ background: 'radial-gradient(circle, #00000020, #4C1D9515)' }}></div>
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
              <TypingText text="Email " />
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
              Connect, Nurture, and Convert with Precision Communication
            </motion.h2>
        
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl leading-relaxed mb-8"
              style={{ color: '#374151' }}
            >
              At Intellects, we turn emails into powerful marketing tools that drive engagement and sales. Our Email Marketing services are crafted to help you connect directly with your audience — delivering the right message, at the right time, to the right inbox.
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
                src={EMAIL_IMAGES.hero} 
                alt="Email Marketing Animation" 
                fill
                className="object-cover rounded-2xl shadow-2xl"
                sizes="(max-width: 768px) 90vw, 480px"
                priority
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Targeted Email Campaign Strategy Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 w-full overflow-x-hidden" 
        style={{ backgroundColor: '#FFFFFF' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="inline-block mb-6"
            >
              <span className="px-8 py-3 text-white text-sm font-bold rounded-full shadow-2xl" style={{ background: 'linear-gradient(135deg, #4C1D95, #000000)' }}>
                📧 STRATEGIC PLANNING
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
              Targeted Email Campaign <span style={{ color: '#4C1D95' }}>Strategy</span>
            </motion.h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-2 font-semibold" style={{ color: '#000000' }}>
              Plan, Personalize, and Perform
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
              Our email marketing begins with understanding your audience and objectives. We design strategic campaigns that deliver measurable results and align with your overall marketing goals.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-6xl mx-auto">
            {/* Vertical Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -ml-0.5">
              <motion.div
                className="w-full h-full"
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
                  step: "Audience Segmentation and Profiling",
                  desc: "We analyze and segment your audience to ensure targeted and personalized communication that resonates with each group."
                },
                {
                  step: "Campaign Goal Setting and Automation Setup",
                  desc: "Define clear objectives and implement automation workflows that trigger at the right moments for maximum impact."
                },
                {
                  step: "A/B Testing for Subject Lines and Content",
                  desc: "Continuously test and optimize your email elements to improve open rates, click-throughs, and overall engagement."
                },
                {
                  step: "Scheduling for Optimal Delivery Times",
                  desc: "Leverage data-driven insights to send emails when your audience is most likely to engage and convert."
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
                              className="text-2xl md:text-3xl font-black mb-4 group-hover:text-purple-900 transition-colors"
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

          {/* Key Benefits */}
          <div className="mt-24">
            <motion.h3 
              className="text-2xl font-bold mb-8 text-center" 
              style={{ 
                background: 'linear-gradient(135deg, #000000, #4C1D95)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
            >
              Key Benefits:
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  icon: <FaChartLine className="w-6 h-6" />, 
                  title: "Higher open and click-through rates",
                  color: "from-purple-600 to-purple-700" 
                },
                { 
                  icon: <FaRocket className="w-6 h-6" />, 
                  title: "Improved lead nurturing and conversions",
                  color: "from-purple-600 to-purple-700" 
                },
                { 
                  icon: <FaCheckCircle className="w-6 h-6" />, 
                  title: "Enhanced customer retention",
                  color: "from-purple-600 to-purple-700" 
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
                    scale: 1.02,
                    boxShadow: '0 20px 40px rgba(76, 29, 149, 0.2)',
                  }}
                  className="relative p-6 rounded-2xl shadow-lg border-2 border-gray-100 transition-all cursor-pointer group overflow-hidden bg-white"
                >
                  {/* Gradient glow effect */}
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${item.color}`}></div>
                  
                  <div className="relative z-10 flex items-center gap-4">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${item.color} text-white`}>
                      {item.icon}
                    </div>
                    
                    {/* Title */}
                    <h4 className="text-base font-bold group-hover:text-purple-700 transition-colors flex-1" style={{ color: '#000000' }}>
                      {item.title}
                    </h4>
                  </div>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Creative Email Design & Copywriting Section */}
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="inline-block mb-6"
            >
              <span className="px-8 py-3 text-white text-sm font-bold rounded-full shadow-2xl" style={{ background: 'linear-gradient(135deg, #4C1D95, #000000)' }}>
                🎨 CREATIVE DESIGN
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
              Creative Email <span style={{ color: '#4C1D95' }}>Design & Copywriting</span>
            </motion.h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-2 font-semibold" style={{ color: '#000000' }}>
              Emails That Look Good and Read Better
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
              Your audience&apos;s attention is precious — and we make every word and design element count. Our creative team ensures your emails are visually appealing, mobile-friendly, and aligned with your brand identity.
            </p>
          </div>

          <div className="mb-12">
            <motion.h3 
              className="text-2xl font-bold mb-8 text-center" 
              style={{ 
                background: 'linear-gradient(135deg, #000000, #4C1D95)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
            >
              We deliver:
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { title: "Eye-catching templates and responsive layouts", icon: <FaEye className="w-8 h-8" /> },
                { title: "Compelling subject lines and call-to-actions", icon: <FaPen className="w-8 h-8" /> },
                { title: "Personalized email sequences for better engagement", icon: <FaUsers className="w-8 h-8" /> },
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
                    src={EMAIL_IMAGES.storytelling[i]} 
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 1024px) 90vw, 360px"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  {/* Icon badge on image */}
                  <div className="absolute top-4 left-4 w-14 h-14 bg-gradient-to-br from-purple-500 to-black text-white rounded-xl flex items-center justify-center shadow-lg">
                    {item.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 text-center relative z-10">
                  <h3 className="font-bold text-lg mb-3 group-hover:text-purple-900 transition-colors" style={{ 
                    background: 'linear-gradient(135deg, #000000, #4C1D95)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    {item.title}
                  </h3>
                  <div className="h-1 w-12 rounded-full mx-auto bg-gradient-to-r from-purple-500 to-black group-hover:w-full transition-all duration-500"></div>
                </div>
                
                {/* Bottom shine effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Automation & Workflow Optimization Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 w-full overflow-x-hidden"
        style={{ backgroundColor: '#FFFFFF' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="inline-block mb-6"
            >
              <span className="px-8 py-3 text-white text-sm font-bold rounded-full shadow-2xl" style={{ background: 'linear-gradient(135deg, #4C1D95, #000000)' }}>
                ⚙️ AUTOMATION
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
              Automation & <span style={{ color: '#4C1D95' }}>Workflow Optimization</span>
            </motion.h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-2 font-semibold" style={{ color: '#000000' }}>
              Reach Your Audience Automatically — and Intelligently
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
              Automation is the backbone of effective email marketing. At Intellects, we set up automated workflows that trigger based on user actions, ensuring timely and relevant communication.
            </p>
          </div>

          <div className="mb-12">
            <motion.h3 
              className="text-2xl font-bold mb-8 text-center" 
              style={{ 
                background: 'linear-gradient(135deg, #000000, #4C1D95)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
            >
              Our automation covers:
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <FaBell className="w-8 h-8" />, title: "Welcome and onboarding sequences" },
                { icon: <FaSyncAlt className="w-8 h-8" />, title: "Abandoned cart reminders" },
                { icon: <FaRocket className="w-8 h-8" />, title: "Lead nurturing and follow-up emails" },
                { icon: <FaLightbulb className="w-8 h-8" />, title: "Re-engagement campaigns" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="group relative rounded-3xl shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-violet-300 transition-all overflow-hidden h-80"
                  initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: false }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Full Background Image */}
                  <div className="absolute inset-0">
                    <Image 
                      src={EMAIL_IMAGES.automations[i]} 
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 1024px) 90vw, 360px"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
                  </div>
                  
                  {/* Content Container */}
                  <div className="relative h-full flex flex-col justify-between p-6 z-10">
                    {/* Icon badge at top */}
                    <div className="flex justify-start">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-black text-white rounded-xl flex items-center justify-center shadow-lg">
                        {item.icon}
                      </div>
                    </div>
                    
                    {/* Title at bottom */}
                    <div className="text-center">
                      <h3 className="font-bold text-base text-white mb-3 group-hover:text-purple-200 transition-colors">
                        {item.title}
                      </h3>
                      <div className="h-1 w-12 rounded-full mx-auto bg-gradient-to-r from-purple-400 to-white group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </div>
                  
                  {/* Bottom shine effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Performance Tracking & Reporting Section */}
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="inline-block mb-6"
            >
              <span className="px-8 py-3 text-white text-sm font-bold rounded-full shadow-2xl" style={{ background: 'linear-gradient(135deg, #4C1D95, #000000)' }}>
                📊 ANALYTICS
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
              Performance <span style={{ color: '#4C1D95' }}>Tracking & Reporting</span>
            </motion.h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-2 font-semibold" style={{ color: '#000000' }}>
              Measure What Matters, Improve What Works
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
              We monitor campaign results in real-time to ensure maximum impact and ROI. Our reports provide clear insights into what&apos;s performing well and what needs improvement.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center" style={{ 
              background: 'linear-gradient(135deg, #000000, #4C1D95)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              We track:
            </h3>
            
            {/* Dashboard-style Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                { 
                  icon: <FaChartBar className="w-8 h-8" />, 
                  title: "Open and click rates",
                  desc: "Track engagement metrics to optimize email performance",
                  color: "from-purple-600 to-purple-700",
                  bgColor: "from-purple-50 to-purple-100"
                },
                { 
                  icon: <FaRocket className="w-8 h-8" />, 
                  title: "Conversion metrics",
                  desc: "Measure how emails drive actions and sales",
                  color: "from-purple-600 to-purple-700",
                  bgColor: "from-purple-100 to-purple-200"
                },
                { 
                  icon: <FaSyncAlt className="w-8 h-8" />, 
                  title: "Unsubscribe and bounce rates",
                  desc: "Monitor list health and deliverability",
                  color: "from-purple-600 to-purple-700",
                  bgColor: "from-indigo-50 to-indigo-100"
                },
                { 
                  icon: <FaChartLine className="w-8 h-8" />, 
                  title: "Campaign ROI reports",
                  desc: "Analyze return on investment for each campaign",
                  color: "from-purple-600 to-purple-700",
                  bgColor: "from-violet-50 to-violet-100"
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: false }}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: '0 20px 40px rgba(76, 29, 149, 0.15)',
                  }}
                  className="group relative rounded-2xl overflow-hidden shadow-lg border-2 border-transparent hover:border-purple-300 transition-all cursor-pointer"
                  style={{ background: 'white' }}
                >
                  {/* Horizontal Card Layout */}
                  <div className="flex items-center gap-6 p-6">
                    {/* Icon Section */}
                    <motion.div
                      className={`flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${item.color} text-white`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {item.icon}
                    </motion.div>

                    {/* Content Section */}
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2 group-hover:text-purple-900 transition-colors" style={{ 
                        background: 'linear-gradient(135deg, #000000, #4C1D95)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}>
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* Arrow Icon */}
                    <motion.div
                      className="flex-shrink-0 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FaArrowRight className="w-6 h-6" />
                    </motion.div>
                  </div>

                  {/* Gradient Background on Hover */}
                  <motion.div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${item.bgColor} -z-10`}
                  />

                  {/* Left Border Accent */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${item.color} transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Continuous Optimization & Support Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 overflow-hidden w-full overflow-x-hidden"
        style={{ backgroundColor: '#FFFFFF' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="inline-block mb-6"
            >
              <span className="px-8 py-3 text-white text-sm font-bold rounded-full shadow-2xl" style={{ background: 'linear-gradient(135deg, #4C1D95, #000000)' }}>
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
              Continuous <span style={{ color: '#4C1D95' }}>Optimization & Support</span>
            </motion.h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-2 font-semibold" style={{ color: '#000000' }}>
              Your Campaigns, Always Getting Smarter
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
              We don&apos;t just send emails — we build relationships. Our team continuously tests, refines, and evolves your campaigns for consistent improvement and better customer connection.
            </p>
          </div>

          <div className="text-center mb-8">
            <p className="text-lg font-semibold" style={{ 
              background: 'linear-gradient(135deg, #000000, #4C1D95)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Our support includes:</p>
          </div>

          {/* Split Design */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 w-full max-w-full">
            <div className="grid md:grid-cols-2 gap-0 w-full">
              {/* Left Side - Gradient Panel */}
              <div className="relative h-full min-h-[400px] overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 p-12 flex items-center">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                  >
                    <FaEnvelope className="w-20 h-20 mb-6" />
                    <h3 className="text-3xl font-black mb-4">Always Improving</h3>
                    <p className="text-white/90 text-lg leading-relaxed">
                      We continuously optimize your email campaigns to ensure maximum engagement and better customer relationships.
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Right Side - Feature List */}
              <div className="p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  {[
                    { icon: <FaChartLine className="w-6 h-6" />, title: "Regular performance reviews", color: "from-purple-600 to-purple-700" },
                    { icon: <FaCog className="w-6 h-6" />, title: "Content updates and automation tuning", color: "from-purple-600 to-purple-700" },
                    { icon: <FaLightbulb className="w-6 h-6" />, title: "Strategy consultation for future campaigns", color: "from-purple-600 to-purple-700" },
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
                      <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 bg-gradient-to-br ${item.color} text-white`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold group-hover:text-purple-900 transition-colors" style={{ 
                          background: 'linear-gradient(135deg, #000000, #4C1D95)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}>
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
        className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 w-full overflow-x-hidden"
        style={{ backgroundColor: '#F9FAFB' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <div className="max-w-6xl mx-auto w-full">
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
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className={i === faqs.length - 1 && faqs.length % 2 !== 0 ? "lg:col-span-2" : ""}
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
              Ready to Transform Your Email Marketing?
            </motion.h3>

            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s create powerful, personalized email campaigns that connect with your audience and drive measurable results.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-10 py-4 bg-white font-bold rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 group text-purple-900"
              >
                Start Your Campaign <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
