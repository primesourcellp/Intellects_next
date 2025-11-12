"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

// Footer Link Component with hover animation
const FooterLink = ({ href, children }) => (
    <motion.div
        whileHover={{ x: 6 }}
        transition={{ type: "spring", stiffness: 300 }}
    >
        <Link
            href={href}
            className="text-sm text-indigo-100 transition-colors hover:text-white"
        >
            {children}
        </Link>
    </motion.div>
);

export default function Footer() {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <motion.footer
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="relative border-t"
            style={{
                backgroundColor: '#2D0B5F',
                borderColor: '#3B0F7F'
            }}
        >
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, #4C1D95, #6D28D9, #4C1D95)' }} />

            <div className="mx-auto max-w-full px-6 md:px-12 lg:px-24 py-16 md:py-20">
                {/* Main Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">

                    {/* Company Info */}
                    <motion.div variants={fadeInUp} className="col-span-2 md:col-span-3 lg:col-span-2">
                        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                            <Link href="/" className="inline-block mb-6">
                                <Image
                                    src="/assets/logo.png"
                                    alt="Intellects Logo"
                                    width={160}
                                    height={64}
                                    priority
                                />
                            </Link>
                        </motion.div>
                        <p className="text-sm mb-6 leading-relaxed" style={{ color: '#E0E7FF' }}>
                            Driving innovation through expert software, marketing, and HR consulting services worldwide.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <FaEnvelope style={{ color: '#C4B5FD' }} />
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@intellectsllc.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-indigo-100 transition-colors hover:text-white"
                                >
                                    contact@intellectsllc.com
                                </a>
                                {/* <span className="text-sm" style={{ color: '#E0E7FF' }}>badhri@intellectsllc.com</span> */}
                            </div>
                            <div className="flex items-center gap-3">
                                <FaPhone style={{ color: '#C4B5FD' }} />
                                <a
                                    href="tel:+19196991281"
                                    className="text-sm text-indigo-100 transition-colors hover:text-white"
                                >
                                    +1 (919) 699-1281
                                </a>

                                {/* <span className="text-sm" style={{ color: '#E0E7FF' }}>+1(919)699-1281</span> */}
                            </div>
                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="mt-1" style={{ color: '#C4B5FD' }} />
                                <span className="text-sm" style={{ color: '#E0E7FF' }}>311 Melvin Jackson Drive, Cary NC 27519</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Company Links */}
                    <motion.div variants={fadeInUp} className="flex flex-col gap-3 mt-12 md:mt-6 lg:mt-10">
                        <h4 className="text-base font-bold mb-2" style={{ color: '#FFFFFF' }}>
                            Company
                        </h4>
                        <FooterLink href="/methodology">Methodology</FooterLink>
                        <FooterLink href="/career">Careers & Culture</FooterLink>
                        <FooterLink href="/testimonials">Testimonials</FooterLink>
                        <FooterLink href="/contact">Contact Us</FooterLink>
                    </motion.div>

                    {/* Software Development Links */}
                    <motion.div variants={fadeInUp} className="flex flex-col gap-3 mt-12 md:mt-6 lg:mt-10">
                        <h4 className="text-base font-bold mb-2" style={{ color: '#FFFFFF' }}>
                            Software Development
                        </h4>
                        <FooterLink href="/services/softwaredevelopment">Custom Software</FooterLink>
                        <FooterLink href="/services/mobileapplication">Mobile App</FooterLink>
                        <FooterLink href="/services/webapplication">Web Application</FooterLink>
                        <FooterLink href="/services/webdevelopment">Web Development</FooterLink>
                    </motion.div>

                    {/* Digital Marketing Links */}
                    <motion.div variants={fadeInUp} className="flex flex-col gap-3 mt-12 md:mt-6 lg:mt-10">
                        <h4 className="text-base font-bold mb-2" style={{ color: '#FFFFFF' }}>
                            Digital Marketing
                        </h4>
                        <FooterLink href="/services/seo">SEO</FooterLink>
                        <FooterLink href="/services/sem">SEM</FooterLink>
                        <FooterLink href="/services/smm">SMM</FooterLink>
                        <FooterLink href="/services/email-marketing">Email Marketing</FooterLink>
                        <FooterLink href="/services/content-writing">Content Writing</FooterLink>
                    </motion.div>

                    {/* HR Consulting Links */}
                    <motion.div variants={fadeInUp} className="flex flex-col gap-3 mt-12 md:mt-6 lg:mt-10">
                        <h4 className="text-base font-bold mb-2" style={{ color: '#FFFFFF' }}>
                            HR Consulting
                        </h4>
                        <FooterLink href="/services/global-recruitment">Global Recruiter</FooterLink>
                        <FooterLink href="/services/staffing">Staff Services</FooterLink>
                        <FooterLink href="/services/contract-staffing">Contract Staffing</FooterLink>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    variants={fadeInUp}
                    className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
                    style={{ borderColor: '#3B0F7F' }}
                >
                    {/* Left - Copyright */}
                    <p className="text-sm" style={{ color: '#E0E7FF' }}>
                        &copy; {new Date().getFullYear()} Intellects. All rights reserved.
                    </p>

                    {/* Center - Developed by */}
                    <p className="text-sm" style={{ color: '#E0E7FF' }}>
                        Developed by{' '}
                        <a
                            href="https://primesourcellp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-white transition-colors hover:text-indigo-200"
                        >
                            Primesourcellp
                        </a>
                    </p>

                    {/* Right - Terms & Privacy Policy */}
                    <div className="flex gap-6">
                        <span className="text-sm" style={{ color: '#E0E7FF' }}>
                            Privacy Policy
                        </span>
                        <span className="text-sm" style={{ color: '#E0E7FF' }}>
                            Terms of Service
                        </span>
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    );
}
