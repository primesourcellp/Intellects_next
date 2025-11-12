"use client";

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, Building2, Briefcase, Code, BarChart3, Users, Mail } from 'lucide-react'
import Image from 'next/image'

const LOGO_SRC = '/assets/logo2.png';

export default function Navbar() {
  // Mobile main menus
  const [open, setOpen] = useState(false)
  const [openMobileCompany, setOpenMobileCompany] = useState(false)
  const [openMobileServices, setOpenMobileServices] = useState(false)

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      // Prevent background scrolling
      document.body.style.overflow = 'hidden'
    } else {
      // Restore scrolling when menu is closed
      document.body.style.overflow = ''
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Mobile submenus
  // const [openMobileResources, setOpenMobileResources] = useState(false)
  const [openSoftware, setOpenSoftware] = useState(false)
  const [openDigital, setOpenDigital] = useState(false)
  const [openHR, setOpenHR] = useState(false)
  const pathname = usePathname()

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }

  const closeAllMobileMenus = () => {
    setOpen(false)
    setOpenMobileCompany(false)
    setOpenMobileServices(false)
    setOpenSoftware(false)
    setOpenDigital(false)
    setOpenHR(false)
  }

  const isPathActive = (href, exact = false) => {
    if (!pathname) return false
    if (href === '/') {
      return pathname === '/'
    }
    if (exact) {
      return pathname === href
    }
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  const desktopLink = (href, label, exact = false) => {
    const active = isPathActive(href, exact || href === '/')
    const baseClass =
      "relative px-3 py-2 text-base font-semibold transition-all duration-200 hover:text-purple-600 hover:bg-purple-50 after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:bg-purple-600 after:transition-all after:duration-300 after:content-[''] rounded-md"
    const className = `${baseClass} ${
      active
        ? 'text-purple-600 bg-purple-50 after:w-full'
        : 'text-slate-700 after:w-0 hover:after:w-full'
    }`

    return (
      <Link key={href} href={href} onClick={scrollToTop} className={className}>
        {label}
      </Link>
    )
  }

  const dropdownItem = (href, label, exact = true) => {
    const active = isPathActive(href, exact)
    const baseClass =
      "relative block rounded-lg pl-5 pr-4 py-3 text-sm font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-100 hover:to-indigo-100 hover:text-purple-700 hover:translate-x-2 hover:shadow-md before:absolute before:left-0 before:top-0 before:w-1 before:bg-gradient-to-b before:from-purple-600 before:to-indigo-600 before:transition-all before:duration-300 before:content-[''] before:rounded-l-lg"
    const className = `${baseClass} ${
      active
        ? 'text-purple-700 bg-gradient-to-r from-purple-100 to-indigo-100 shadow-md before:h-full'
        : 'text-slate-700 before:h-0 hover:before:h-full'
    }`

    const handleClick = () => {
      closeAllMobileMenus()
      scrollToTop()
    }

    return (
      <Link key={href} href={href} onClick={handleClick} className={className}>
        {label}
      </Link>
    )
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur shadow-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link 
          href="/" 
          onClick={scrollToTop}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <Image
            src={LOGO_SRC}
            alt="Intellects Logo"
            width={160}
            height={64}
            className="h-45 sm:h-30 md:h-16 lg:h-64 w-auto"
            priority
          />
          {/* <span className="text-2xl font-bold text-slate-900">Intellects</span> */}
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {desktopLink('/', 'Home')}

          {/* Desktop Company dropdown */}
          <div className="group relative">
            <button className="relative flex items-center gap-1.5 px-3 py-2 text-base font-semibold text-slate-700 transition-all duration-200 hover:text-purple-600 hover:bg-purple-50 after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-purple-600 after:transition-all after:duration-300 after:content-[''] group-hover:after:w-full rounded-md">
              Company
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="invisible absolute left-0 top-full mt-2 w-max min-w-[20rem] rounded-lg border border-slate-200 bg-white p-5 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="flex flex-col">
                <span className="mb-3 block text-sm font-bold text-slate-900 uppercase tracking-wide">Company</span>
                <div className="flex flex-col gap-1">
                  {dropdownItem('/methodology', 'Our Development & Methodology')}
                  {dropdownItem('/career', 'Career & Company Culture')}
                  {/* {dropdownItem('/contact', 'Contact Us')} */}
                </div>
                {/* <div>
                  <span className="mb-2 block text-sm font-semibold text-slate-900">Resources</span>
                  <div className="flex flex-col">
                    {dropdownItem('/testimonials', 'Client & Testimonials')}
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Desktop Services dropdown */}
          <div className="group relative">
            <button className="relative flex items-center gap-1.5 px-3 py-2 text-base font-semibold text-slate-700 transition-all duration-200 hover:text-purple-600 hover:bg-purple-50 after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-purple-600 after:transition-all after:duration-300 after:content-[''] group-hover:after:w-full rounded-md">
              Services
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="invisible absolute right-0 top-full w-[44rem] rounded-lg border border-slate-200 bg-white p-5 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <span className="mb-3 block text-sm font-bold text-slate-900 uppercase tracking-wide">Software Development</span>
                  <div className="flex flex-col gap-1">
                    {dropdownItem('/services/softwaredevelopment', 'Custom Software Development')}
                    {dropdownItem('/services/mobileapplication', 'Mobile App Development')}
                    {dropdownItem('/services/webapplication', 'Web Application')}
                    {dropdownItem('/services/webdevelopment', 'Web Development')}
                  </div>
                </div>
                <div>
                  <span className="mb-3 block text-sm font-bold text-slate-900 uppercase tracking-wide">Digital Marketing</span>
                  <div className="flex flex-col gap-1">
                    {dropdownItem('/services/seo', 'SEO')}
                    {dropdownItem('/services/sem', 'SEM')}
                    {dropdownItem('/services/smm', 'SMM')}
                    {dropdownItem('/services/email-marketing', 'Email Marketing')}
                    {dropdownItem('/services/content-writing', 'Content Writing')}
                  </div>
                </div>
                <div>
                  <span className="mb-3 block text-sm font-bold text-slate-900 uppercase tracking-wide">HR Consulting</span>
                  <div className="flex flex-col gap-1">
                    {dropdownItem('/services/global-recruitment', 'Global Recruiter')}
                    {dropdownItem('/services/staffing', 'Staff Services')}
                    {dropdownItem('/services/contract-staffing', 'Contract Staffing')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {desktopLink('/contact', 'Contact Us')}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 md:hidden"
          onClick={() => setOpen(v => !v)}
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M6.225 4.811a1 1 0 0 1 1.414 0L12 9.172l4.361-4.361a1 1 0 1 1 1.414 1.414L13.414 10.586l4.361 4.361a1 1 0 0 1-1.414 1.414L12 12l-4.361 4.361a1 1 0 0 1-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 0 1 0-1.414Z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'calc(100vh - 80px)', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t-2 border-purple-200 bg-gradient-to-br from-purple-50 via-white to-indigo-50 overflow-y-auto shadow-2xl"
          >
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 flex flex-col gap-3 min-h-full">
              <motion.div
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {(() => {
                  const isActive = isPathActive('/', true)
                  const className = `relative flex w-full items-center justify-between rounded-xl px-5 py-4 text-base font-bold transition-all duration-300 shadow-lg ${
                    isActive 
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-purple-500/50' 
                      : 'bg-white text-slate-800 hover:bg-gradient-to-r hover:from-purple-100 hover:to-indigo-100 hover:text-purple-700 hover:shadow-xl hover:shadow-purple-300/50'
                  }`

                  return (
                    <Link
                      href="/"
                      onClick={() => {
                        closeAllMobileMenus()
                        scrollToTop()
                      }}
                      className={className}
                    >
                      <span className="flex items-center gap-2">
                        <Home className={`w-5 h-5 ${isActive ? 'text-white' : 'text-purple-600'}`} />
                        Home
                      </span>
                    </Link>
                  )
                })()}
              </motion.div>

              {/* Mobile Company */}
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => setOpenMobileCompany(v => !v)}
                className={`relative flex w-full items-center justify-between rounded-xl px-5 py-4 text-base font-bold text-slate-800 transition-all duration-300 shadow-lg ${
                  openMobileCompany 
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-purple-500/50' 
                    : 'bg-white hover:bg-gradient-to-r hover:from-purple-100 hover:to-indigo-100 hover:text-purple-700 hover:shadow-xl hover:shadow-purple-300/50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Building2 className={`w-5 h-5 ${openMobileCompany ? 'text-white' : 'text-purple-600'}`} />
                  Company
                </span>
                <motion.span
                  animate={{ rotate: openMobileCompany ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl font-black"
                >
                  {openMobileCompany ? '×' : '+'}
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {openMobileCompany && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, x: -20 }}
                    animate={{ height: 'auto', opacity: 1, x: 0 }}
                    exit={{ height: 0, opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="ml-6 mt-2 flex flex-col gap-2 overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm p-2 shadow-lg"
                  >
                    {dropdownItem('/methodology', 'Our Development & Methodology')}
                    {dropdownItem('/career', 'Career & Company Culture')}
                    {/* {dropdownItem('/contact', 'Contact Us')} */}

                    {/* Resources */}
                    {/* <button
                      onClick={() => setOpenMobileResources(v => !v)}
                      className="flex w-full items-center justify-between rounded px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 mt-1"
                    >
                      Resources
                      <span>{openMobileResources ? '-' : '+'}</span>
                    </button>
                    <AnimatePresence>
                      {openMobileResources && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="ml-4 flex flex-col gap-1 overflow-hidden"
                        >
                          {dropdownItem('/testimonials', 'Client & Testimonials')}
                        </motion.div>
                      )}
                    </AnimatePresence> */}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Mobile Services */}
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => setOpenMobileServices(v => !v)}
                className={`relative flex w-full items-center justify-between rounded-xl px-5 py-4 text-base font-bold text-slate-800 transition-all duration-300 shadow-lg ${
                  openMobileServices 
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-purple-500/50' 
                    : 'bg-white hover:bg-gradient-to-r hover:from-purple-100 hover:to-indigo-100 hover:text-purple-700 hover:shadow-xl hover:shadow-purple-300/50'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Briefcase className={`w-5 h-5 ${openMobileServices ? 'text-white' : 'text-purple-600'}`} />
                  Services
                </span>
                <motion.span
                  animate={{ rotate: openMobileServices ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl font-black"
                >
                  {openMobileServices ? '×' : '+'}
                </motion.span>
              </motion.button>
              <AnimatePresence>
                {openMobileServices && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, x: -20 }}
                    animate={{ height: 'auto', opacity: 1, x: 0 }}
                    exit={{ height: 0, opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="ml-6 mt-2 flex flex-col gap-2 overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm p-2 shadow-lg"
                  >
                    {/* Software */}
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setOpenSoftware(v => !v)}
                      className={`relative flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-bold text-slate-800 transition-all duration-300 ${
                        openSoftware 
                          ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md shadow-purple-400/50' 
                          : 'bg-purple-50 hover:bg-gradient-to-r hover:from-purple-100 hover:to-indigo-100 hover:text-purple-700 hover:shadow-md'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Code className={`w-4 h-4 ${openSoftware ? 'text-white' : 'text-purple-600'}`} />
                        Software Development
                      </span>
                      <motion.span
                        animate={{ rotate: openSoftware ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-lg font-black"
                      >
                        {openSoftware ? '×' : '+'}
                      </motion.span>
                    </motion.button>
                    <AnimatePresence>
                      {openSoftware && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, x: -15 }}
                          animate={{ height: 'auto', opacity: 1, x: 0 }}
                          exit={{ height: 0, opacity: 0, x: -15 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="ml-6 mt-2 flex flex-col gap-2 overflow-hidden rounded-lg bg-white/60 p-2"
                        >
                          {dropdownItem('/services/softwaredevelopment', 'Custom Software Development')}
                          {dropdownItem('/services/mobileapplication', 'Mobile App Development')}
                          {dropdownItem('/services/webapplication', 'Web Application')}
                          {dropdownItem('/services/webdevelopment', 'Web Development')}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Digital */}
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setOpenDigital(v => !v)}
                      className={`relative flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-bold text-slate-800 transition-all duration-300 ${
                        openDigital 
                          ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md shadow-purple-400/50' 
                          : 'bg-purple-50 hover:bg-gradient-to-r hover:from-purple-100 hover:to-indigo-100 hover:text-purple-700 hover:shadow-md'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <BarChart3 className={`w-4 h-4 ${openDigital ? 'text-white' : 'text-purple-600'}`} />
                        Digital Marketing
                      </span>
                      <motion.span
                        animate={{ rotate: openDigital ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-lg font-black"
                      >
                        {openDigital ? '×' : '+'}
                      </motion.span>
                    </motion.button>
                    <AnimatePresence>
                      {openDigital && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, x: -15 }}
                          animate={{ height: 'auto', opacity: 1, x: 0 }}
                          exit={{ height: 0, opacity: 0, x: -15 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="ml-6 mt-2 flex flex-col gap-2 overflow-hidden rounded-lg bg-white/60 p-2"
                        >
                          {dropdownItem('/services/seo', 'SEO')}
                          {dropdownItem('/services/sem', 'SEM')}
                          {dropdownItem('/services/smm', 'SMM')}
                          {dropdownItem('/services/email-marketing', 'Email Marketing')}
                          {dropdownItem('/services/content-writing', 'Content Writing')}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* HR */}
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setOpenHR(v => !v)}
                      className={`relative flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-bold text-slate-800 transition-all duration-300 ${
                        openHR 
                          ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md shadow-purple-400/50' 
                          : 'bg-purple-50 hover:bg-gradient-to-r hover:from-purple-100 hover:to-indigo-100 hover:text-purple-700 hover:shadow-md'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Users className={`w-4 h-4 ${openHR ? 'text-white' : 'text-purple-600'}`} />
                        HR Consulting
                      </span>
                      <motion.span
                        animate={{ rotate: openHR ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-lg font-black"
                      >
                        {openHR ? '×' : '+'}
                      </motion.span>
                    </motion.button>
                    <AnimatePresence>
                      {openHR && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, x: -15 }}
                          animate={{ height: 'auto', opacity: 1, x: 0 }}
                          exit={{ height: 0, opacity: 0, x: -15 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="ml-6 mt-2 flex flex-col gap-2 overflow-hidden rounded-lg bg-white/60 p-2"
                        >
                          {dropdownItem('/services/global-recruitment', 'Global Recruiter')}
                          {dropdownItem('/services/staffing', 'Staff Services')}
                          {dropdownItem('/services/contract-staffing', 'Contract Staffing')}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.div
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {(() => {
                  const isActive = isPathActive('/contact', true)
                  const className = `relative flex w-full items-center justify-between rounded-xl px-5 py-4 text-base font-bold transition-all duration-300 shadow-lg ${
                    isActive 
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-purple-500/50' 
                      : 'bg-white text-slate-800 hover:bg-gradient-to-r hover:from-purple-100 hover:to-indigo-100 hover:text-purple-700 hover:shadow-xl hover:shadow-purple-300/50'
                  }`

                  return (
                    <Link
                      href="/contact"
                      onClick={() => {
                        closeAllMobileMenus()
                        scrollToTop()
                      }}
                      className={className}
                    >
                      <span className="flex items-center gap-2">
                        <Mail className={`w-5 h-5 ${isActive ? 'text-white' : 'text-purple-600'}`} />
                        Contact
                      </span>
                    </Link>
                  )
                })()}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
