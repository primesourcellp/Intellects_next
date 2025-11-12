import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Code,
  Server,
  Layers,
  Zap,
  Settings,
  ShieldCheck,
  Users,
  Workflow,
  Rocket,
  Cloud,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import sky8Image from "../../../assets/gif5.gif";
import customSoftwareImage from "../../../assets/custom2.png";
import customSoftwareImage2 from "../../../assets/custom3.png";
import customSoftwareImage3 from "../../../assets/custom4.png";
import customSoftwareImage4 from "../../../assets/custom5.jpg";
import customSoftwareImage5 from "../../../assets/custom6.jpg";


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

const CustomSoftwareDevelopment = () => {
  const services = [
    {
      title: "Business-Specific Applications",
      desc: "Software designed to meet your unique challenges.",
      icon: <Workflow className="w-12 h-12 text-white" />,
      img: customSoftwareImage,
      gradient: "from-purple-800 to-gray-900",
    },
    {
      title: "Enterprise-Level Systems",
      desc: "Integrated solutions that streamline processes across departments.",
      icon: <Layers className="w-12 h-12 text-white" />,
      img: customSoftwareImage2,
      gradient: "from-purple-800 to-gray-900",
    },
    {
      title: "Automation Platforms",
      desc: "Tools that reduce manual work and increase accuracy.",
      icon: <Zap className="w-12 h-12 text-white" />,
      img: customSoftwareImage3,
      gradient: "from-purple-800 to-gray-900",
    },
    {
      title: "Maintenance & Upgrades",
      desc: "Continuous improvements to keep your software running efficiently.",
      icon: <Settings className="w-12 h-12 text-white" />,
        img: customSoftwareImage4,
      gradient: "from-purple-800 to-gray-900",
    },
  ];

  const technologies = [
    { name: "Frontend", items: "React, Angular, Vue.js", icon: <Code /> },
    { name: "Backend", items: ".NET, Java, Python, Node.js", icon: <Server /> },
    { name: "Database", items: "MySQL, MongoDB, PostgreSQL", icon: <Server /> },
    { name: "Mobile", items: "Flutter, React Native, Swift", icon: <Rocket /> },
    { name: "Cloud", items: "AWS, Azure, Google Cloud", icon: <Cloud /> },
  ];

  const stacks = [
    { title: "MERN / MEAN Stack", desc: "For high-speed, scalable web apps" },
    { title: "LAMP Stack", desc: "For reliable and cost-effective systems" },
    {
      title: "Serverless & Microservices Architecture",
      desc: "For flexibility and modular growth",
    },
  ];

  const process = [
    {
      step: "Requirement Analysis",
      desc: "Understanding your goals and challenges.",
      icon: Users,
    },
    {
      step: "Design & Prototyping",
      desc: "Visualizing the structure and user experience.",
      icon: Workflow,
    },
    {
      step: "Development",
      desc: "Writing efficient, secure, and scalable code.",
      icon: Code,
    },
    {
      step: "Testing & QA",
      desc: "Ensuring performance and reliability.",
      icon: ShieldCheck,
    },
    {
      step: "Deployment & Support",
      desc: "Launching, maintaining, and evolving your solution.",
      icon: Rocket,
    },
  ];

  const clientsReasons = [
    "Agile and transparent development process",
    "Scalable architecture for future growth",
    "Clean, secure, and maintainable code",
    "Dedicated support from planning to deployment",
  ];

  return (
    <div className="min-h-screen text-gray-800 overflow-x-hidden w-full" style={{ background: 'linear-gradient(to bottom right, #F9FAFB, #F3F4F6)' }}>
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
              <TypingText text="Custom " />
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
                <TypingText text="Software Development" />
              </motion.span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold mb-6"
              style={{ color: '#4C1D95' }}
            >
              Building Tomorrow's Digital Solutions Today
            </motion.h2>
        
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl leading-relaxed mb-8"
              style={{ color: '#374151' }}
            >
              At Intellects, we transform your ideas into powerful, scalable software solutions. Our expert development team combines cutting-edge technologies with industry best practices to deliver custom software that drives business growth and innovation.
            </motion.p>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img 
              src={sky8Image} 
              alt="Software Development Animation" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </motion.div>

        </div>
      </section>

      {/* Services Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 w-full overflow-x-hidden" 
        style={{ backgroundColor: '#F9FAFB' }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6" 
              style={{ color: '#000000' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
            >
              Services We{" "}
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
                Offer
              </motion.span>
            </motion.h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-4" style={{ color: '#6B7280' }}>
              Our custom software development services help organizations simplify operations, enhance productivity, and deliver value through smart technology.
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed font-semibold" style={{ color: '#4C1D95' }}>
              We specialize in:
            </p>
          </div>
          
          {services.map((s, i) => (
            <motion.section
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="py-8 border-b"
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
                  <h4 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#4C1D95' }}>
                    {s.title}
                  </h4>
                  <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#6B7280' }}>
                    {s.desc}
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
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl max-h-96">
                    <img 
                      src={s.img} 
                      alt={s.title} 
                      className="w-full h-full object-cover"
                      style={{ 
                        borderRadius: '1rem',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                        maxHeight: '384px'
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
        </div>
      </motion.section>

      {/* Technologies Section */}
      <motion.section
        className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 w-full overflow-x-hidden"
        style={{ backgroundColor: '#FFFFFF' }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <motion.h3 
            className="text-3xl md:text-5xl font-bold mb-6" 
            style={{ color: '#000000' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            Technologies We{" "}
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
              Rely On
            </motion.span>
          </motion.h3>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#6B7280' }}>
            We rely on robust and proven technologies to ensure your software is future-ready and reliable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((t, i) => (
            <motion.div
              key={i}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl border-2 border-transparent hover:border-purple-200 transition-all duration-300 text-center relative overflow-hidden"
              whileHover={{ y: -8, scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-800/10 to-gray-900/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-gray-900 text-4xl mb-4 inline-flex p-4 bg-purple-50 rounded-xl group-hover:bg-purple-100 transition-colors">
                  {t.icon}
                </div>
                <h4 className="font-bold text-lg text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                  {t.name}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t.items}
                </p>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>
        </div>
      </motion.section>

      {/* Technology Stacks */}
      <motion.section
        className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 overflow-hidden w-full overflow-x-hidden"
        style={{ backgroundColor: '#F9FAFB' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, -40, 0],
              y: [0, 40, 0],
              opacity: [0.03, 0.08, 0.03]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, #4C1D9520, transparent)' }}
          />
          <motion.div
            animate={{
              x: [0, 40, 0],
              y: [0, -40, 0],
              opacity: [0.03, 0.06, 0.03]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, #7C3AED20, transparent)' }}
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
                🚀 MODERN TECHNOLOGY
              </span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
              className="text-3xl md:text-5xl font-black mb-6"
              style={{ color: '#000000' }}
            >
              Technology{" "}
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
                Stacks
              </motion.span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: false }}
              className="text-lg max-w-3xl mx-auto leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              Every business requires the right tech foundation. Intellects uses modern, adaptive stacks to ensure performance and longevity:
            </motion.p>
          </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stacks.map((stack, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2, ease: "easeOut" }}
              viewport={{ once: false }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl border-2 border-gray-100 hover:border-violet-300 transition-all duration-500 overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Number Badge */}
              <div className="relative z-10 p-8">
                {/* Title */}
                <motion.h4
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 + 0.4 }}
                  viewport={{ once: false }}
                  className="font-black text-xl mb-4 text-gray-800 group-hover:text-gray-900 transition-colors"
                >
                  {stack.title}
                </motion.h4>
                
                {/* Animated Divider */}
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: 64, opacity: 1 }}
                  transition={{ duration: 0.7, delay: i * 0.2 + 0.5 }}
                  viewport={{ once: false }}
                  className="h-1 w-16 rounded-full mb-6 bg-gradient-to-r from-purple-800 to-gray-900 group-hover:w-full transition-all duration-500"
                ></motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 + 0.6 }}
                  viewport={{ once: false }}
                  className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors"
                >
                  {stack.desc}
                </motion.p>
              </div>
              
              {/* Bottom Shine Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-800 to-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl"></div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false }}
          className="relative overflow-hidden bg-gradient-to-br from-purple-800 to-gray-900 p-12 rounded-3xl text-center shadow-2xl"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <p className="text-white text-xl font-bold leading-relaxed max-w-3xl mx-auto">
              We match technology with your business strategy to ensure seamless performance.
            </p>
          </div>
        </motion.div>
        </div>
      </motion.section>

      {/* Tailored Tech */}
      <motion.section
        className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 w-full overflow-x-hidden"
        style={{ backgroundColor: '#FFFFFF' }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6">
        <div className="bg-gradient-to-br from-purple-50 via-gray-50 to-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-purple-100 relative overflow-hidden w-full">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-800/20 to-gray-900/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-800/20 to-gray-900/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="px-6 py-2 text-white text-sm font-bold rounded-full shadow-lg" style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}>
                FLEXIBLE SOLUTIONS
              </span>
            </motion.div>
            
            <motion.h3 
              className="text-3xl md:text-5xl font-bold mb-8" 
              style={{ color: '#000000' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
            >
              Tailored Tech for All{" "}
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
                Business Types
              </motion.span>
            </motion.h3>
            
            <p className="max-w-4xl mx-auto text-gray-700 text-lg leading-relaxed">
              Whether you run a startup, SME, or enterprise, our custom-built software adapts to your specific needs. We design every feature to align with your operations, branding, and user expectations — ensuring your software feels like it was made just for you.
            </p>
          </div>
        </div>
        </div>
      </motion.section>

      {/* Why Clients Choose Intellects */}
      <motion.section
        className="py-20 px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 w-full overflow-x-hidden"
        style={{ backgroundColor: '#F9FAFB' }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto w-full">
        {/* Centered Heading */}
        <div className="text-center mb-12">
          <motion.h3 
            className="text-3xl md:text-5xl font-bold mb-6" 
            style={{ color: '#000000' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
          >
            Why Clients Choose{" "}
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
          </motion.h3>
        </div>

        {/* Content Grid */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 w-full max-w-full">
          <div className="grid md:grid-cols-2 gap-0 w-full">
            <div className="relative h-full min-h-[400px] overflow-hidden">
              <img
                src={customSoftwareImage5}
                alt="Why Clients Choose Intellects"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0" ></div>
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center text-black">
                  <Sparkles className="w-16 h-16 mx-auto mb-4" />
                  <h4 className="text-3xl font-bold">Trusted by Innovators</h4>
                </div>
              </div>
            </div>
            
            <div className="p-12 flex flex-col justify-center">
              <div className="space-y-5">
                {clientsReasons.map((reason, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform" style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}>
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed flex-1 group-hover:text-gray-900 transition-colors">
                      {reason}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </motion.section>

      {/* Software Development Process - Vertical Timeline Design */}
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
                <Workflow className="w-4 h-4" />
                OUR PROCESS
              </motion.span>
            </motion.div>

            <motion.h3 
              className="text-3xl md:text-5xl font-black mb-6" 
              style={{ color: '#000000' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false }}
            >
              Software Development{" "}
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
            </motion.h3>

            <motion.p 
              className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium" 
              style={{ color: '#6B7280' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: false }}
            >
              Our step-by-step approach ensures{" "}
              <span className="font-bold" style={{ color: '#4C1D95' }}>quality</span>,{" "}
              <span className="font-bold" style={{ color: '#4C1D95' }}>clarity</span>, and{" "}
              <span className="font-bold" style={{ color: '#4C1D95' }}>speed</span>.
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
              {process.map(({ step, desc }, i) => {
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

                          {/* Mobile Number Badge - Hidden on mobile, visible on desktop/tablet via center circle */}
                          <motion.div
                            className="hidden absolute -top-3 sm:-top-4 left-4 sm:left-6 md:left-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg z-10"
                            style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            viewport={{ once: false }}
                          >
                            <span className="text-white font-black text-sm sm:text-base md:text-lg">{i + 1}</span>
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
                <CheckCircle2 className="w-8 h-8 text-purple-600" />
              </motion.div>
              <div className="text-left">
                <p className="text-xl font-bold text-gray-800 mb-1">
                  Seamless Journey, Exceptional Results
                </p>
                <p className="text-gray-600">
                  From concept to deployment, we're with you every step of the way
                </p>
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Sparkles className="w-8 h-8 text-purple-600" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
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
              At Intellects, we don't offer templates — we engineer tailored software that grows with your business.
            </motion.h3>
            
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Ready to transform your business with custom software solutions?
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                className="px-10 py-4 bg-white font-bold rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
                style={{ color: '#4C1D95' }}
              >
                Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CustomSoftwareDevelopment;
