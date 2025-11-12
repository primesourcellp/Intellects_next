"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Compass,
  Palette,
  Cog,
  CheckCircle,
  Rocket,
  Users,
  Target,
  TrendingUp,
  Shield,
  Zap,
  MessageCircle,
  Award,
  Sparkles,
  ArrowRight,
  Globe,
  Lightbulb,
  Code,
  Layers,
  BarChart3,
  Clock,
} from "lucide-react";
 
const METHODOLOGY_IMAGES = {
  about: "/assets/methodology1.jpg",
  steps: [
    "/assets/methodology2.jpg",
    "/assets/methodology3.jpg",
    "/assets/methodology.jpg",
    "/assets/methodology5.jpg",
    "/assets/methodology6.jpg",
  ],
};

// Typing Animation Component
const TypingText = ({ text, delay = 0, speed = 50, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, started, speed]);

  return (
    <span className={`${className} inline-block`}>
      {displayedText}
    </span>
  );
};

export default function Methodology() {
  // Add smooth scroll behavior and optimize for mobile
  useEffect(() => {
    if (typeof document === "undefined") return;

    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    const previousOverflow = document.body.style.overflowY;

    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.webkitOverflowScrolling = "touch";
    document.body.style.overflowY = "auto";
    
    return () => {
      document.documentElement.style.scrollBehavior = previousScrollBehavior || "auto";
      document.body.style.overflowY = previousOverflow || "";
    };
  }, []);

  const floatingElements = useMemo(
    () =>
      Array.from({ length: 6 }).map((_, index) => {
        const positions = [
          { left: "12%", top: "24%", size: 80, rotate: 22 },
          { left: "68%", top: "18%", size: 96, rotate: -18 },
          { left: "82%", top: "62%", size: 72, rotate: 14 },
          { left: "26%", top: "72%", size: 60, rotate: -28 },
          { left: "44%", top: "18%", size: 54, rotate: 10 },
          { left: "56%", top: "78%", size: 66, rotate: -16 },
        ];

        const config = positions[index % positions.length];

        return {
          ...config,
          y: [0, index % 2 === 0 ? -60 : 60, 0],
          x: [0, index % 3 === 0 ? -40 : 40, 0],
          rotateSequence: [0, config.rotate, 0],
          duration: 12 + index,
        };
      }),
    []
  );

  // Scroll animation variants - Ultra smooth animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="bg-white overflow-hidden relative">
      {/* Animated Background Particles - Global */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 w-full max-w-full">
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
        <div className="absolute w-96 h-96 rounded-full blur-3xl -top-48 -left-48 animate-pulse" style={{ background: 'radial-gradient(circle, #4C1D9520, #1F293715)' }}></div>
        <div className="absolute w-96 h-96 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000" style={{ background: 'radial-gradient(circle, #4C1D9520, #1F293715)' }}></div>
      </div>

      {/* Hero Section - Enhanced */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-indigo-50 z-10">
        {/* Animated Gradient Background */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Decorative Elements */}
        {floatingElements.map((item, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: item.y,
              x: item.x,
              rotate: item.rotateSequence,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: item.duration, 
              repeat: Infinity, 
              delay: i * 0.5,
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="absolute opacity-10"
            style={{
              left: item.left,
              top: item.top,
              width: `${item.size}px`,
              height: `${item.size}px`,
            }}
          >
            <div 
              className="w-full h-full rounded-2xl"
              style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
            />
          </motion.div>
        ))}

        {/* Main Content */}
        <motion.div 
          className="relative z-10 text-center px-4 sm:px-6 md:px-12 max-w-7xl mx-auto pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-12 sm:pb-16 md:pb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 md:mb-8 leading-tight"
            style={{ color: '#000000' }}
          >
            <TypingText text="Our Development " delay={800} speed={60} />
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
              <TypingText text="& Methodology" delay={2200} speed={60} />
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10 md:mb-12"
          >
            Empowering Businesses Through Intelligence and Innovation
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 4, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mt-8 sm:mt-12 md:mt-16"
          >
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "50+", label: "Team Members" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 4.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/60 backdrop-blur-sm border border-purple-100 rounded-2xl p-6 shadow-lg"
              >
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-gray-500 font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-purple-600 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Us Section - Redesigned */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-white z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image with Overlay */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInLeft}
              className="relative group order-2 lg:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full min-h-[320px]">
                <Image
                  src={METHODOLOGY_IMAGES.about}
                  alt="About Intellects"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 80vw, 480px"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-transparent"></div>
              </div>
              
              {/* Floating Stats Card */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="absolute -bottom-6 -right-6 bg-white px-6 py-4 rounded-2xl shadow-2xl border border-purple-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-black bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      Award Winning
                    </div>
                    <div className="text-xs text-gray-600 font-medium">Excellence in Innovation</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInRight}
              className="space-y-6 order-1 lg:order-2"
            >
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeInLeft}
                className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold mb-4"
              >
                <Target className="w-4 h-4" />
                ABOUT US
              </motion.div>

              <motion.h2 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeInRight}
                className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight" 
                style={{ color: '#000000' }}
              >
                About{" "}
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
                  Intellects
                </motion.span>
              </motion.h2>

              <motion.p 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeInLeft}
                className="text-lg md:text-xl text-gray-700 leading-relaxed"
              >
                At Intellects, we bridge technology, creativity, and human insight to help organizations 
                grow smarter, faster, and stronger in a digital world. We believe that innovation begins with 
                intellect — the power to think differently, solve challenges, and create progress.
              </motion.p>

              <motion.p 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeInRight}
                className="text-lg md:text-xl text-gray-600 leading-relaxed"
              >
                At Intellects, we don&apos;t just provide consulting services; we deliver meaningful transformation. 
                Our mission is to make technology and talent work together to drive measurable business success.
              </motion.p>

              {/* Feature Points */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {[
                  { icon: Shield, text: "Secure Solutions" },
                  { icon: Zap, text: "Fast Delivery" },
                  { icon: Users, text: "Expert Team" },
                  { icon: TrendingUp, text: "Proven Results" },
                ].map((feature, i) => {
                  const isEven = i % 2 === 0;
                  return (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={isEven ? fadeInLeft : fadeInRight}
                    transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 bg-purple-50 rounded-xl p-4 border border-purple-100"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{feature.text}</span>
                  </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Development & Methodology Section - Enhanced */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-purple-50/30 to-white z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
              style={{ color: '#000000' }}
            >
              Our Development{" "}
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
                & Methodology
              </motion.span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInUp}
              className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-6 font-semibold"
              style={{ color: '#4C1D95' }}
            >
              Building with Purpose, Delivering with Precision
            </motion.p>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Our approach to development is rooted in agility, collaboration, and continuous 
              improvement. We understand that every client&apos;s journey is unique — that&apos;s why Intellects 
              tailors its methodology to fit your goals, timelines, and business model.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Methodology Timeline - Redesigned with Alternating Layout */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-white z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInDown}
              className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6 font-semibold"
            >
              <Sparkles className="w-4 h-4" />
              METHODOLOGY
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInDown}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
              style={{ color: '#000000' }}
            >
              Our Proven{" "}
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
                Methodology
              </motion.span>
            </motion.h2>
          </div>

          {/* Methodology Steps - Alternating Layout */}
          <div className="space-y-16 md:space-y-24">
            {[
              {
                number: "01",
                icon: Compass,
                title: "Discovery & Strategy",
                description: "We start with understanding — diving deep into your business, audience, and goals to build a solid strategic foundation.",
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-50 to-cyan-50",
                borderColor: "border-blue-200",
                image: METHODOLOGY_IMAGES.steps[0]
              },
              {
                number: "02",
                icon: Palette,
                title: "Planning & Design",
                description: "Our experts design intelligent systems and user-friendly interfaces that balance creativity with functionality.",
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-50 to-pink-50",
                borderColor: "border-purple-200",
                image: METHODOLOGY_IMAGES.steps[1]
              },
              {
                number: "03",
                icon: Cog,
                title: "Agile Development",
                description: "Using an agile framework, we develop in focused sprints, ensuring rapid progress, flexibility, and transparency throughout the process.",
                gradient: "from-indigo-500 to-purple-500",
                bgGradient: "from-indigo-50 to-purple-50",
                borderColor: "border-indigo-200",
                image: METHODOLOGY_IMAGES.steps[2]
              },
              {
                number: "04",
                icon: CheckCircle,
                title: "Testing & Quality Assurance",
                description: "Every product undergoes thorough testing to guarantee stability, security, and performance at every level.",
                gradient: "from-green-500 to-emerald-500",
                bgGradient: "from-green-50 to-emerald-50",
                borderColor: "border-green-200",
                image: METHODOLOGY_IMAGES.steps[3]
              },
              {
                number: "05",
                icon: Rocket,
                title: "Deployment & Support",
                description: "We ensure seamless deployment and provide long-term support so your solutions continue performing as your business scales.",
                gradient: "from-orange-500 to-red-500",
                bgGradient: "from-orange-50 to-red-50",
                borderColor: "border-orange-200",
                image: METHODOLOGY_IMAGES.steps[4]
              },
            ].map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  variants={isEven ? fadeInUp : fadeInDown}
                  transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Image Section - Alternates left/right */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={isEven ? fadeInLeft : fadeInRight}
                    className={`relative group ${!isEven ? "lg:col-start-2" : ""}`}
                  >
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl h-80 md:h-96 group/image">
                      {/* Image Background */}
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover transform group-hover/image:scale-110 transition-transform duration-700"
                        sizes="(max-width: 1024px) 90vw, 480px"
                      />

                      {/* Step Number */}
                      <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                        <span className="text-2xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Section - Alternates right/left */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={isEven ? fadeInRight : fadeInLeft}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className={`space-y-6 ${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} text-white shadow-lg`}
                      >
                        <step.icon className="w-8 h-8" />
                      </motion.div>
                      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                        Step {step.number}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-black" style={{ color: '#000000' }}>
                      {step.title}
                    </h3>

                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Progress Indicator */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      viewport={{ once: false }}
                      className={`h-2 bg-gradient-to-r ${step.gradient} rounded-full`}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why It Works Section - Enhanced */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-white via-purple-50/30 to-white z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInDown}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-4 py-2 rounded-full mb-6 font-semibold"
            >
              <Lightbulb className="w-4 h-4" />
              WHY IT WORKS
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
              style={{ color: '#000000' }}
            >
              Why It{" "}
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
                Works
              </motion.span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInDown}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto"
            >
              Our methodology succeeds because it&apos;s built on principles that ensure quality, speed, and client satisfaction.
            </motion.p>
          </div>

          {/* Success Principles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: MessageCircle,
                title: "Transparent Communication",
                description: "Clear, honest dialogue at every stage",
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50"
              },
              {
                icon: Zap,
                title: "Agile and Adaptable",
                description: "Flexible process that evolves with needs",
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-50 to-pink-50"
              },
              {
                icon: Award,
                title: "Quality-First Culture",
                description: "Excellence in every detail and deliverable",
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-50 to-emerald-50"
              },
              {
                icon: Users,
                title: "Partnership Mindset",
                description: "We&apos;re invested in your long-term success",
                color: "from-orange-500 to-red-500",
                bgColor: "from-orange-50 to-red-50"
              },
            ].map((principle, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                }}
                className="relative group bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-xl hover:shadow-2xl transition-all overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${principle.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${principle.color} text-white mb-6 shadow-lg`}
                  >
                    <principle.icon className="w-8 h-8" />
                  </motion.div>

                  <h3 className="text-xl md:text-2xl font-black mb-3" style={{ color: '#4C1D95' }}>
                    {principle.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {principle.description}
                  </p>

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "60px" }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: false }}
                    className={`h-1.5 bg-gradient-to-r ${principle.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Clients Section - Enhanced */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-white z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6 font-semibold"
            >
              <Globe className="w-4 h-4" />
              OUR CLIENTS
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
              style={{ color: '#000000' }}
            >
              Our Key{" "}
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
                Clients
              </motion.span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Over the years, Intellects has had the privilege of working with a diverse range of clients — 
              from emerging startups to established enterprises across industries like technology, 
              healthcare, retail, and finance.
            </motion.p>

            <motion.blockquote
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeInDown}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl md:text-3xl font-bold italic max-w-3xl mx-auto relative"
              style={{ color: '#4C1D95' }}
            >
              <span className="relative z-10">Trusted by forward-thinking brands who believe in innovation and excellence.</span>
            </motion.blockquote>
          </div>
        </div>
      </section>

      {/* Strategic Partnerships Section - Enhanced */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-gradient-to-b from-purple-50/50 via-white to-purple-50/30 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInDown}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-4 py-2 rounded-full mb-6 font-semibold"
          >
            <TrendingUp className="w-4 h-4" />
            PARTNERSHIPS
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInDown}
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{ color: '#000000' }}
          >
            Strategic{" "}
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
              Partnerships
            </motion.span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            Intellects partners with leading technology providers and platforms to ensure we deliver 
            world-class solutions. Our alliances help us access the best tools, frameworks, and 
            expertise — so our clients always stay ahead in an ever-evolving digital ecosystem.
          </motion.p>

          <motion.button
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInDown}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group px-10 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center gap-3 mx-auto"
          >
            <span>Clients & Partners</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </section>

      {/* Final CTA Section */}
      <motion.div
        className="px-6 md:px-12 max-w-5xl mx-auto py-16 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInUp}
        transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
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
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: false }}
              className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight"
            >
              Ready to Transform Your Business?
            </motion.h3>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: false }}
              className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
            >
              Let&apos;s create something extraordinary together. We&apos;re here to make it happen.
            </motion.p>

            {/* Action Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: false }}
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
