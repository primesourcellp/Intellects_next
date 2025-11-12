"use client";

import { useState, useCallback, useEffect } from 'react';
import { Mail, MapPin, Phone, Clock, Globe, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

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

// --- Reusable Form Components ---
const InputField = ({ label, id, type = 'text', required = true, placeholder, value, onChange }) => (
    <div className="mb-6">
        <label htmlFor={id} className="block text-sm font-semibold mb-2" style={{ color: '#000000' }}>
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
            type={type}
            id={id}
            name={id}
            required={required}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-3 border-2 rounded-xl shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            style={{ borderColor: '#E5E7EB' }}
            onFocus={(e) => {
              e.target.style.borderColor = '#4C1D95';
              e.target.style.boxShadow = '0 0 0 3px rgba(76, 29, 149, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#E5E7EB';
              e.target.style.boxShadow = 'none';
            }}
        />
    </div>
);

const TextAreaField = ({ label, id, required = true, placeholder, value, onChange }) => (
    <div className="mb-6">
        <label htmlFor={id} className="block text-sm font-semibold mb-2" style={{ color: '#000000' }}>
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <textarea
            id={id}
            name={id}
            rows={5}
            required={required}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-3 border-2 rounded-xl shadow-sm transition-all duration-200 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
            style={{ borderColor: '#E5E7EB' }}
            onFocus={(e) => {
              e.target.style.borderColor = '#4C1D95';
              e.target.style.boxShadow = '0 0 0 3px rgba(76, 29, 149, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#E5E7EB';
              e.target.style.boxShadow = 'none';
            }}
        />
    </div>
);

// --- Contact Us Page Component ---
export default function ContactUsPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        // Placeholder for actual form submission logic (e.g., calling an API)
        console.log('Form Data Submitted:', formData);

        setTimeout(() => {
            setIsSubmitting(false);
            // Simulate success
            setMessage('Thank you for your inquiry! We will get back to you within 24 hours.');
            setFormData({ fullName: '', email: '', phone: '', company: '', message: '' });
        }, 2000);
    };

    const ContactDetailItem = ({ icon: Icon, title, content, href, target, rel }) => {
        const contentElement = href ? (
            <a
                href={href}
                target={target}
                rel={rel}
                className="text-base leading-relaxed transition-colors hover:text-purple-600"
                style={{ color: '#6B7280', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.color = '#4C1D95'}
                onMouseLeave={e => e.currentTarget.style.color = '#6B7280'}
            >
                {content}
            </a>
        ) : (
            <p className="text-base leading-relaxed" style={{ color: '#6B7280' }}>{content}</p>
        );

        return (
            <motion.div 
                className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 cursor-pointer group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ x: 5 }}
            >
                <motion.div
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Icon className="h-6 w-6 text-white" />
                </motion.div>
                <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-purple-800 transition-colors" style={{ color: '#000000' }}>
                      {title}
                    </h3>
                    {contentElement}
                </div>
            </motion.div>
        );
    };

    return (
        <div 
            className="relative w-full" 
            style={{ 
                backgroundImage: "url('/assets/home1.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                minHeight: '100vh',
                color: '#1F2937'
            }}
        >
            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
            
            {/* MAIN CONTACT CONTENT */}
            <div className="relative z-10 w-full">
            <AnimatedSection backgroundColor="transparent">
                <div className="py-20 sm:py-24 px-6 md:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto">
                        
                        {/* Introduction */}
                        <div className="text-center mb-16">
                            <motion.h2 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ duration: 0.7 }}
                                className="text-3xl md:text-5xl font-bold mb-6" 
                                style={{ color: '#000000' }}
                            >
                                We&apos;re Here to{" "}
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
                                    Help
                            </motion.span>
                            </motion.h2>
                            
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="max-w-3xl mx-auto text-lg leading-relaxed" 
                                style={{ color: '#6B7280' }}
                            >
                                Whether you have a project in mind, need consulting, or just want to say hello — 
                                our team is ready to assist you. Reach out and let&apos;s start building something amazing together.
                            </motion.p>
                        </div>

                        {/* Main Contact Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            
                            {/* Left Column: Contact Information */}
                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border-2"
                                style={{ borderColor: '#E5E7EB' }}
                            >
                                <h3 className="text-2xl font-bold mb-2" style={{ color: '#4C1D95' }}>
                                    Contact Information
                                </h3>
                                <p className="text-base mb-8 leading-relaxed" style={{ color: '#6B7280' }}>
                                    Multiple ways to reach us — choose what works best for you.
                                </p>

                                <div className="space-y-2">
                            <ContactDetailItem
                                icon={MapPin}
                                title="Head Office"
                                content="311 Melvin Jackson Drive, Cary NC 27519"
                            />
                            <ContactDetailItem
                                icon={Phone}
                                title="Phone"
                                content="+1 (919) 699-1281"
                                href="tel:+19196991281"
                            />
                            <ContactDetailItem
                                icon={Mail}
                                title="Email"
                                content="contact@intellectsllc.com"
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@intellectsllc.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            />
                            <ContactDetailItem
                                icon={Globe}
                                title="Website"
                                content="www.intellectsllc.com"
                            />
                            <ContactDetailItem
                                icon={Clock}
                                title="Business Hours"
                                content="Monday - Friday: 9:00 AM - 5:00 PM EST"
                            />
                        </div>

                                {/* Decorative Element */}
                                <motion.div 
                                    className="mt-8 p-6 rounded-xl"
                                    style={{ background: 'linear-gradient(135deg, rgba(76, 29, 149, 0.1), rgba(124, 58, 237, 0.05))' }}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <p className="text-sm font-semibold mb-2" style={{ color: '#4C1D95' }}>
                                        ⚡ Quick Response Guarantee
                                    </p>
                                    <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                                        We value your time. Expect a response within 24 hours on business days.
                                    </p>
                                </motion.div>
                    </motion.div>
                    
                    {/* Right Column: Send Us a Message Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                                className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl border-2"
                                style={{ borderColor: '#E5E7EB' }}
                            >
                                <h3 className="text-2xl font-bold mb-2" style={{ color: '#4C1D95' }}>
                                    Send Us a Message
                                </h3>
                                <p className="text-base mb-8 leading-relaxed" style={{ color: '#6B7280' }}>
                                    Fill out the form below and we&apos;ll get back to you shortly.
                        </p>

                        {message && (
                            <motion.div 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                        className="p-4 mb-6 rounded-xl font-medium flex items-start gap-3"
                                        style={{ 
                                          backgroundColor: message.includes('Thank you') ? '#D1FAE5' : '#FEE2E2',
                                          color: message.includes('Thank you') ? '#065F46' : '#991B1B'
                                        }}
                                    >
                                        {message.includes('Thank you') && <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />}
                                        <span>{message}</span>
                            </motion.div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <InputField
                                label="Full Name"
                                id="fullName"
                                name="fullName"
                                        placeholder="Enter your full name"
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                            <InputField
                                label="Email Address"
                                id="email"
                                name="email"
                                type="email"
                                        placeholder="Enter your email address"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <InputField
                                        label="Phone Number"
                                id="phone"
                                name="phone"
                                required={false}
                                        placeholder="Enter your phone number (optional)"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <InputField
                                label="Company Name"
                                id="company"
                                name="company"
                                required={false}
                                        placeholder="Enter your company name (optional)"
                                value={formData.company}
                                onChange={handleChange}
                            />
                            <TextAreaField
                                        label="Message"
                                id="message"
                                name="message"
                                        placeholder="Tell us about your project, inquiry, or how we can help you..."
                                value={formData.message}
                                onChange={handleChange}
                            />

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                        whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                        className="w-full flex justify-center items-center gap-3 px-8 py-4 border border-transparent text-lg font-bold rounded-full shadow-xl text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                        style={{ 
                                          background: isSubmitting ? '#9CA3AF' : 'linear-gradient(135deg, #4C1D95, #7C3AED)',
                                          boxShadow: isSubmitting ? 'none' : '0 10px 30px rgba(76, 29, 149, 0.3)'
                                        }}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                Send Message
                                            </>
                                        )}
                                    </motion.button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* MAP OR ADDITIONAL INFO SECTION */}
            <AnimatedSection backgroundColor="transparent">
                <div className="py-20 sm:py-24 px-6 md:px-12 lg:px-24">
                    <div className="max-w-7xl mx-auto text-center">
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ duration: 0.7 }}
                            className="text-3xl md:text-5xl font-bold mb-6" 
                            style={{ color: '#000000' }}
                        >
                            Visit Our{" "}
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
                                Office
                            </motion.span>
                        </motion.h2>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="max-w-3xl mx-auto text-lg leading-relaxed mb-12" 
                            style={{ color: '#6B7280' }}
                        >
                            We&apos;d love to meet you in person. Our office is located in the heart of the innovation district, 
                            easily accessible by public transportation and with ample parking.
                        </motion.p>

                        {/* Google Maps Embed */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="w-full h-96 rounded-2xl shadow-2xl overflow-hidden border-2 relative"
                            style={{ borderColor: '#E5E7EB' }}
                        >
                            <iframe
                                src="https://www.google.com/maps?q=311+Melvin+Jackson+Drive,+Cary+NC+27519&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Intellects Location - 311 Melvin Jackson Drive, Cary NC 27519"
                            ></iframe>
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                                <a
                                    href="https://maps.app.goo.gl/rrwPrLDszLYmjR346"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 shadow-lg font-medium"
                                    style={{ background: 'linear-gradient(135deg, #4C1D95, #7C3AED)' }}
                                >
                                    <MapPin className="w-5 h-5" />
                                    Get Directions
                                </a>
                            </div>
                    </motion.div>
                    </div>
                </div>
            </AnimatedSection>
            </div>
            </div>
    );
}
