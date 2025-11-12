"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const HERO_ASSET = "/assets/abt-img.gif";

const HOME_IMAGES = {
  about: "/assets/home_1.jpg",
  services: {
    softwareDevelopment: "/assets/home2.png",
    digitalMarketing: "/assets/home3.png",
    hrConsulting: "/assets/home4.jpg",
  },
  vision: "/assets/home5.png",
};

const SERVICES = [
  {
    title: "Software Development",
    icon: "💻",
    desc: "We build secure, scalable, and future-ready software that transforms ideas into powerful digital solutions. From web and mobile applications to enterprise systems, Intellects develops custom solutions tailored to your needs — ensuring seamless performance and real business impact.",
    image: HOME_IMAGES.services.softwareDevelopment,
    bgColor: "#E8E4F3",
    gradient: "linear-gradient(135deg, #4C1D95 0%)",
  },
  {
    title: "Digital Marketing",
    icon: "📈",
    desc: "Our marketing team at Intellects helps brands connect, convert, and grow through smart digital strategy. In the rapidly evolving digital landscape, standing out is crucial for success. Our digital marketing experts at Intellects create data-driven strategies that boost brand presence, engage your audience, and generate measurable results across all platforms — SEO, PPC, social media, and beyond.",
    image: HOME_IMAGES.services.digitalMarketing,
    bgColor: "#EDE9F7",
    gradient: "linear-gradient(135deg, #4C1D95 0%)",
  },
  {
    title: "HR Consulting",
    icon: "👥",
    desc: "People are the foundation of every great business. With Intellects, you gain strategic HR solutions that help you attract top talent, strengthen your workforce, and build a culture that drives performance and growth.",
    image: HOME_IMAGES.services.hrConsulting,
    bgColor: "#F3EEFA",
    gradient: "linear-gradient(135deg, #4C1D95 0%)",
  },
];

// Typing Animation Component
const TypingText = ({ text, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!started) return;
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, started]);

  return <span className={className}>{displayedText}</span>;
};

// FlipCard Component for Services Section
const FlipCard = ({ service, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: index * 0.2 }
    }
  };

  return (
    <motion.div
      variants={fadeInUp}
      className="relative w-full h-[320px] max-w-[350px] mx-auto"
      style={{ perspective: '1200px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Front Side - Image */}
        <div
          className="absolute w-full h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative w-full h-full" style={{ background: service.bgColor || '#F5F7FA' }}>
            {/* Background Image */}
            <div className="relative w-full h-full">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 350px"
                priority={index === 0}
              />
            </div>
            {/* Gradient Overlay */}
            <div
              className="absolute inset-0 opacity-30"
              style={{ background: service.gradient }}
            />
            {/* Title on Front */}
            <div
              className="absolute bottom-0 left-0 right-0 p-6 text-white"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.3))' }}
            >
              <h3 className="text-2xl font-semibold m-0 leading-tight">
                {service.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Back Side - Content */}
        <div
          className="absolute w-full h-full rounded-2xl bg-white border-2 shadow-2xl p-8 flex flex-col justify-center items-center text-center"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderColor: '#4C1D95',
            boxShadow: '0 10px 30px rgba(76, 29, 149, 0.25)'
          }}
        >
          <h3 className="text-2xl font-semibold mb-4 leading-tight" style={{ color: '#4C1D95' }}>
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed m-0">
            {service.desc}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Home() {

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 1.0, ease: "easeOut" } },
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

  return (
    <div className="overflow-x-hidden" style={{ backgroundColor: '#F3EFF9', color: '#1F2937' }}>
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

      {/* ========================================
        HERO SECTION - ENHANCED
      ======================================== */}
      <section
        className="relative py-20 md:py-32 px-6 md:px-12 lg:px-24 shadow-lg overflow-hidden"
        style={{ backgroundColor: '#F8F5FC', boxShadow: '0 10px 15px -3px rgba(30, 58, 138, 0.1), 0 4px 6px -2px rgba(30, 58, 138, 0.05)' }}
      >
        {/* Floating Icons */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 md:left-20 opacity-20 z-0"
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
          className="absolute top-40 right-10 md:right-32 opacity-20 z-0"
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
          className="absolute bottom-20 right-20 opacity-20 z-0"
        >
          <div 
            className="w-12 h-12 rounded-lg transform -rotate-12" 
            style={{ background: 'linear-gradient(135deg, #F59E0B, #4C1D95)' }}
          />
        </motion.div>

        {/* Two Column Layout */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
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
              <TypingText text="Turning Ambitious Ideas into " />
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
                <TypingText text="Real-World Impact" />
          </motion.span>
        </motion.h1>
        
        <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg md:text-xl font-light leading-relaxed mb-8" 
          style={{ color: '#6B7280' }}
        >
              Welcome to <span className="font-semibold" style={{ color: '#4C1D95' }}>Intellects</span>, where technology, creativity, and strategy come together to move your business forward.
        </motion.p>
        
        <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex gap-4"
        >
          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
              className="font-bold px-8 py-4 rounded-full shadow-xl transition inline-flex items-center gap-3"
              style={{ background: 'linear-gradient(135deg, #4C1D95 0%, #7C3AED 100%)', color: '#FFFFFF', boxShadow: '0 25px 50px -12px rgba(30, 58, 138, 0.25)' }}
            >
              <span>Schedule Your Free Consultation</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
              </motion.div>
          </motion.div>
        </motion.div>

          {/* Right Column - GIF */}
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Image 
              src={HERO_ASSET}
              alt="Header Animation"
              width={720}
              height={720}
              className="w-full h-auto"
              priority
            />
            </motion.div>

        </div>

      </section>

      {/* ========================================
        ABOUT SECTION 
      ======================================== */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={scaleIn}
        className="py-24 px-6 md:px-12 lg:px-24 border-b"
        style={{ backgroundColor: '#F8F5FC', borderColor: '#E5E7EB' }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#4C1D95' }}>
              About Intellects
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-4" style={{ color: '#6B7280' }}>
              Every successful company starts with a simple idea — and the right partner to make it happen.
            </p>
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#6B7280' }}>
              At Intellects, we&apos;re that partner.
            </p>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ maxHeight: '400px' }}>
              <div className="relative w-full h-full min-h-[280px]">
                <Image
                  src={HOME_IMAGES.about}
                  alt="About Intellects"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
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

      {/* ========================================
        SERVICES SECTION 
      ======================================== */}
      <section className="py-24 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#F8F5FC' }}>
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-center mb-6" style={{ color: '#000000' }}>
          Our{" "}
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
            Services
          </motion.span>
        </motion.h2>
        <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeIn} className="text-center max-w-3xl mx-auto mb-16 text-lg" style={{ color: '#6B7280' }}>
          At Intellects, every service is designed around one simple belief:
          when your technology, marketing, and people work together, growth becomes natural.
        </motion.p>
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="grid md:grid-cols-3 gap-10">
          {SERVICES.map((service, i) => (
            <FlipCard key={service.title} service={service} index={i} />
          ))}
        </motion.div>
      </section>

      {/* ========================================
        WHY CHOOSE SECTION
      ======================================== */}
      <section className="py-24 px-6 md:px-12 lg:px-24 border-t" style={{ backgroundColor: '#F3EFF9', borderColor: '#E5E7EB' }}>
        <motion.h2 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true }} 
          variants={fadeInUp} 
          className="text-3xl md:text-5xl font-bold text-center mb-6" 
          style={{ color: '#000000' }}
        >
          Why Choose{" "}
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
            Intellects
          </motion.span>
        </motion.h2>
        
            <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center text-lg max-w-3xl mx-auto mb-16"
          style={{ color: '#6B7280' }}
        >
          Choosing a consulting partner is about trust, clarity, and results. Here&apos;s what sets Intellects apart.
        </motion.p>

        <motion.div 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, amount: 0.2 }} 
          variants={container} 
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            {
              title: "All-in-One Expertise",
              description: "Technology, marketing, and HR under one roof.",
              icon: "🎯"
            },
            {
              title: "Tailored Solutions",
              description: "Every plan starts with your unique challenges.",
              icon: "✨"
            },
            {
              title: "Collaborative Approach",
              description: "We work with you, not around you.",
              icon: "🤝"
            },
            {
              title: "Transparent Communication",
              description: "Honest timelines and clear progress.",
              icon: "💬"
            },
            {
              title: "Long-Term Focus",
              description: "We&apos;re invested in your success, not just your launch.",
              icon: "🚀"
            },
            {
              title: "Proven Results",
              description: "Our clients see measurable improvements in efficiency, growth, and team morale.",
              icon: "📈"
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                boxShadow: '0 25px 50px rgba(76, 29, 149, 0.3)',
                borderColor: '#4C1D95'
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="p-8 rounded-2xl shadow-lg border-2 cursor-pointer group relative overflow-hidden"
              style={{
                backgroundColor: '#F8F5FC',
                borderColor: '#E5E7EB'
              }}
            >
              {/* Animated background gradient on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(135deg, #4C1D95 0%, #7C3AED 100%)'
                }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#7C3AED] transition-colors duration-300" style={{ color: '#4C1D95' }}>
                  {item.title}
                </h3>
                <p className="leading-relaxed" style={{ color: '#6B7280' }}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ========================================
        CAREERS SECTION 
      ======================================== */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={scaleIn}
        className="py-24 px-6 md:px-12 lg:px-24 border-t relative overflow-hidden"
        style={{ backgroundColor: '#F8F5FC', borderColor: '#E5E7EB' }}
      >
        {/* Background Decoration */}
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #4C1D95, transparent)' }} />
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, #7C3AED, transparent)' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{ color: '#000000' }}
            >
              Careers at{" "}
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
                Intellects
              </motion.span>
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold mb-6"
              style={{ color: '#4C1D95' }}
            >
              Grow Your Future with a Team That Values You
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto mb-12"
              style={{ color: '#6B7280' }}
            >
              At Intellects, we believe innovation starts with people who care about what they build. We&apos;re always searching for curious minds — developers, strategists, creatives, and consultants — who want to shape the future of IT consulting.
            </motion.p>
          </div>

          {/* Career Benefits Grid */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {[
              {
                title: "Professional Growth",
                description: "Continuous learning opportunities and career development programs",
                icon: "📈"
              },
              {
                title: "Innovative Projects",
                description: "Work on cutting-edge technology and challenging projects",
                icon: "🚀"
              },
              {
                title: "Collaborative Culture",
                description: "Join a team that values creativity, diversity, and collaboration",
                icon: "🤝"
              },
              {
                title: "Competitive Benefits",
                description: "Comprehensive benefits package and work-life balance",
                icon: "💼"
              },
              {
                title: "Impactful Work",
                description: "Make a real difference for clients and their businesses",
                icon: "✨"
              },
              {
                title: "Supportive Environment",
                description: "Mentorship, guidance, and support from experienced professionals",
                icon: "🌟"
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(76, 29, 149, 0.2)',
                  borderColor: '#4C1D95'
                }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-xl bg-white border-2 shadow-lg cursor-pointer group relative overflow-hidden"
                style={{
                  borderColor: '#E5E7EB'
                }}
              >
                {/* Hover gradient */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #4C1D95 0%, #7C3AED 100%)'
                  }}
                />
                
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-purple-700 transition-colors" style={{ color: '#4C1D95' }}>
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <Link
              href="/career"
              onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #4C1D95 0%, #7C3AED 100%)',
                color: '#FFFFFF',
                boxShadow: '0 25px 50px -12px rgba(76, 29, 149, 0.3)'
              }}
            >
              <span>Explore Open Positions</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* ========================================
        VISION SECTION 
      ======================================== */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={scaleIn}
        className="py-24 px-6 md:px-12 lg:px-24 border-t"
        style={{ backgroundColor: '#F3EFF9', borderColor: '#E5E7EB' }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ color: '#000000' }}>
              Your Vision, Our{" "}
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
                Engineering Expertise
              </motion.span>
        </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-4" style={{ color: '#6B7280' }}>
              At Intellects, we believe that every vision deserves intelligent engineering.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-4" style={{ color: '#6B7280' }}>
              Our team combines creativity with technical excellence to turn your ideas into scalable, high-performing solutions.
            </p>
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#6B7280' }}>
              Your vision is our blueprint — and innovation is our craft.
            </p>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ maxHeight: '400px' }}>
              <div className="relative w-full h-full min-h-[280px]">
                <Image 
                  src={HOME_IMAGES.vision}
                  alt="Vision and Engineering"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
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

      {/* ========================================
        FAQ SECTION (+ / - toggle)
      ======================================== */}
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
              Find answers to the most common questions about Intellects and our services.
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
            {[
              { 
                q: "What services does Intellects provide?", 
                a: "Intellects offers IT consulting services including Software Development, Digital Marketing, and HR Consulting — helping businesses grow smarter and perform better.",
                icon: "🎯"
              },
              { 
                q: "How does Intellects ensure quality in its projects?", 
                a: "Every project follows our agile development methodology, with continuous testing, clear communication, and client feedback loops to maintain the highest quality standards.",
                icon: "✅"
              },
              { 
                q: "Which industries does Intellects work with?", 
                a: "We work across technology, retail, healthcare, education, and finance industries — customizing every solution to fit each client&apos;s unique needs.",
                icon: "🏢"
              },
              { 
                q: "Why should I choose Intellects for my business?", 
                a: "We combine technical excellence, creative strategy, and transparent collaboration to deliver long-term results. At Intellects, we measure success by your satisfaction and growth.",
                icon: "⭐"
              },
              { 
                q: "How can I start working with Intellects?", 
                a: "Simply reach out to us through our contact form or email. Our consulting team will connect with you to understand your goals and craft a solution tailored to your business vision.",
                icon: "🚀"
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={i === 4 ? "lg:col-span-2" : ""}
                  initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <FAQItem faq={item} />
            </motion.div>
          ))}
        </motion.div>
        </div>
      </section>

      {/* ========================================
        CALL TO ACTION SECTION
      ======================================== */}
      <motion.div
        className="px-6 md:px-12 max-w-5xl mx-auto py-16 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="rounded-3xl p-10 md:p-12 text-center shadow-2xl relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #4C1D95, #1F2937)' }}>
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative z-10">
            {/* Main Heading */}
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight"
            >
              Ready to Transform Your Business?
            </motion.h3>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
            >
              Let&apos;s create something extraordinary together. We&apos;re here to make it happen.
            </motion.p>

            {/* Action Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <Link
                href="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                className="group px-10 py-4 bg-white font-bold text-lg rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                style={{ color: '#4C1D95' }}
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
