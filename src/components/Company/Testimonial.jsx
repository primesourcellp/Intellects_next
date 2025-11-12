"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaStar, FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const CLIENT_IMAGES = ["/assets/gif1.gif", "/assets/gif2.gif", "/assets/gif3.gif"];
const TEAM_IMAGES = [
  { src: "/assets/gif5.gif", title: "Innovation Team" },
  { src: "/assets/gif5.gif", title: "Development Team" },
  { src: "/assets/gif4.gif", title: "Strategy Team" },
];
const HERO_IMAGE = "/assets/gif5.gif";

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

// Animated Section Wrapper
const AnimatedSection = ({ children, delay = 0, backgroundColor = '#FFFFFF' }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    viewport={{ once: false, amount: 0.2 }}
    style={{ backgroundColor }}
  >
    {children}
  </motion.div>
);

const ClientsTestimonials = () => {
  const clients = [
    {
      name: "TechNova Solutions",
      position: "CEO & Founder",
      feedback:
        "Intellects transformed our digital presence with cutting-edge solutions and unmatched professionalism. A true partner in innovation.",
      image: CLIENT_IMAGES[0],
      rating: 5,
    },
    {
      name: "GreenMart Retail",
      position: "Head of Digital Strategy",
      feedback:
        "Working with Intellects was a seamless experience. Their team understood our needs and delivered beyond expectations!",
      image: CLIENT_IMAGES[1],
      rating: 5,
    },
    {
      name: "EduBridge Learning",
      position: "Director of Technology",
      feedback:
        "Their technical expertise and creative approach helped us scale our online platform to reach thousands of students globally.",
      image: CLIENT_IMAGES[2],
      rating: 5,
    },
  ];

  const teamImages = TEAM_IMAGES;

  return (
    <div className="overflow-hidden" style={{ backgroundColor: '#FFFFFF', color: '#1F2937' }}>
      
      {/* HERO SECTION WITH BACKGROUND IMAGE */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
        {/* Background Image with Overlay */}
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src={HERO_IMAGE}
            alt="Testimonials"
            fill
            className="object-cover"
            priority
          />
          <div 
            className="absolute inset-0" 
            style={{ 
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
            }}
          />
        </motion.div>

        {/* Floating Shapes */}
        <motion.div
          animate={{ 
            y: [0, -25, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
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
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-10 md:right-32 opacity-20"
        >
          <div 
            className="w-16 h-16 rounded-full" 
            style={{ background: 'linear-gradient(135deg, #7C3AED, #F59E0B)' }}
          />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, -20, 0],
            x: [0, 15, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-1/4 opacity-20"
        >
          <div 
            className="w-14 h-14 rounded-lg transform -rotate-45" 
            style={{ background: 'linear-gradient(135deg, #F59E0B, #4C1D95)' }}
          />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 md:px-12 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            style={{ color: '#000000' }}
          >
            <TypingText text="Clients & " />
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
              <TypingText text="Testimonials" />
          </motion.span>
        </motion.h1>
          
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl max-w-4xl mx-auto font-light leading-relaxed"
          style={{ color: '#6B7280' }}
        >
          Our Clients, Our Pride.
        </motion.p>
        </div>
      </div>

      {/* INTRODUCTION SECTION */}
      <AnimatedSection backgroundColor="#F9FAFB">
        <div className="py-20 sm:py-24 px-6 md:px-16 lg:px-28 text-center">
      <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="inline-block mb-6"
      >
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4"
              style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
        >
              <FaHandshake className="text-4xl text-white" />
            </motion.div>
        </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold mb-6" 
            style={{ color: '#000000' }}
          >
            Built on Trust,{" "}
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
              Driven by Results
          </motion.span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto text-base sm:text-lg leading-relaxed" 
            style={{ color: '#6B7280' }}
          >
            At Intellects, every partnership is built on trust, innovation, and shared
            success. We don&apos;t just deliver projects — we build relationships that last.
            Our clients come from diverse industries — technology, retail, healthcare, 
            education, and finance — united by a commitment to growth through innovation.
          </motion.p>
        </div>
      </AnimatedSection>

      {/* TEAM PICTURES SECTION */}
      <AnimatedSection backgroundColor="#FFFFFF">
        <div className="py-20 sm:py-24 px-6 md:px-16 lg:px-28">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold mb-16 text-center" 
            style={{ color: '#000000' }}
          >
            Meet Our{" "}
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
              Expert Teams
          </motion.span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {teamImages.map((item, index) => (
          <motion.div
            key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 1024px) 90vw, 320px"
                  />
            <motion.div
                    className="absolute inset-0 flex items-end justify-center pb-8 transition-opacity duration-500"
              style={{ 
                      background: 'linear-gradient(to top, rgba(76, 29, 149, 0.9), transparent)',
              }}
            >
                    <p className="text-white text-xl font-bold">
                      {item.title}
              </p>
            </motion.div>
                </div>
          </motion.div>
        ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CLIENT TESTIMONIALS SECTION */}
      <AnimatedSection backgroundColor="#F9FAFB">
        <div className="py-20 sm:py-24 px-6 md:px-16 lg:px-28">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-center" 
            style={{ color: '#000000' }}
          >
            What Our{" "}
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
            Clients Say
          </motion.span>
        </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-lg max-w-3xl mx-auto mb-16"
            style={{ color: '#6B7280' }}
          >
            Don&apos;t just take our word for it — hear from the businesses we&apos;ve helped transform.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg border-2 relative overflow-hidden group"
              style={{ borderColor: '#E5E7EB' }}
              whileHover={{ 
                  y: -8,
                  scale: 1.02,
                borderColor: '#4C1D95',
                  boxShadow: '0 25px 50px rgba(76, 29, 149, 0.25)',
                  transition: { duration: 0.3 }
                }}
              >
                {/* Quote Icon */}
                <motion.div
                  className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 10 }}
                >
                  <FaQuoteLeft className="text-6xl" style={{ color: '#4C1D95' }} />
                </motion.div>

                <div className="flex flex-col items-center text-center relative z-10">
              <motion.div
                className="w-20 h-20 rounded-full border-4 mb-4 shadow-lg overflow-hidden relative"
                style={{ borderColor: '#4C1D95' }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 150 }}
                  >
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </motion.div>
                  
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(client.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>

                  <h3 className="text-xl font-bold mb-1" style={{ color: '#4C1D95' }}>
                    {client.name}
                  </h3>
                  <p className="text-sm mb-4 font-medium" style={{ color: '#6B7280' }}>
                    {client.position}
                  </p>
                  <p className="italic leading-relaxed text-base" style={{ color: '#6B7280' }}>
                    &ldquo;{client.feedback}&rdquo;
                  </p>

                  {/* Bottom accent line */}
                  <motion.div 
                    className="mt-6 mx-auto h-1 rounded-full bg-gradient-to-r from-purple-800 to-purple-600"
                    initial={{ width: 0 }}
                    whileInView={{ width: '60px' }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>
            </motion.div>
          ))}
        </div>
      </div>
      </AnimatedSection>

      {/* STATISTICS SECTION */}
      <AnimatedSection backgroundColor="#FFFFFF">
        <div className="py-20 sm:py-24 px-6 md:px-16 lg:px-28">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold mb-16 text-center" 
            style={{ color: '#000000' }}
          >
            By the{" "}
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
              Numbers
            </motion.span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "200+", label: "Happy Clients" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "50+", label: "Team Members" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg border-2"
                style={{ borderColor: '#E5E7EB' }}
                whileHover={{ 
                  y: -8,
                  borderColor: '#4C1D95',
                  boxShadow: '0 20px 40px rgba(76, 29, 149, 0.2)'
                }}
              >
                <motion.h3 
                  className="text-5xl font-bold mb-2"
                  style={{ color: '#4C1D95' }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-lg font-medium" style={{ color: '#6B7280' }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA SECTION */}
      <AnimatedSection backgroundColor="#F9FAFB">
        <div className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #4C1D95, #1F2937)' }}
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
              <motion.div
                className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </div>

            <div className="relative z-10">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
              >
                Ready to Join Our{" "}
                <motion.span
                  animate={{
                    textShadow: [
                      `0 0 20px rgba(255,255,255,0)`,
                      `0 0 30px rgba(255,255,255,0.5)`,
                      `0 0 20px rgba(255,255,255,0)`
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Success Stories?
                </motion.span>
              </motion.h3>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
              >
                Let&apos;s build something extraordinary together.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-purple-900 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all"
              >
                Start Your Project
              </motion.button>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ClientsTestimonials;
