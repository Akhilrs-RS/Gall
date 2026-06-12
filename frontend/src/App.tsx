import { useState, useEffect } from 'react'
import aboutImg from './assets/about.png'
import aboutStoryImg from './assets/a2.png'
import industryImg from './assets/industry.png'
import contactImg from './assets/contact.png'
import worksImg from './assets/work.png'
import logoImg from './assets/logo.jpg'
import servicesImg from './assets/Service.png'
import gGif from './assets/g.gif'
import g1Img from './assets/g1.png'
import g2Img from './assets/g2.png'
import g3Img from './assets/g3.png'
import g5Gif from './assets/g5.gif'
import g0Img from './assets/g0.png'
import erpImg from './assets/erp.png'
import careersImg from './assets/c9.png'
import automationImg from './assets/a23.png'
import webImg from './assets/w23.png'
import dashboardImg from './assets/d23.png'
import marketingImg from './assets/d24.png'
import uiuxImg from './assets/u23.png'

function App() {
  const [view, setView] = useState<'about' | 'works' | 'industry' | 'contact' | 'services' | 'erp' | 'automation' | 'web' | 'dashboard' | 'marketing' | 'uiux' | 'careers' | 'other'>('about')
  const [contactScrollTarget, setContactScrollTarget] = useState<1 | 2 | 3 | null>(null)

  const navigateToContact = (page: 1 | 2 | 3) => {
    (window as any).__contactPageOverride = page
    setView('contact')
    setContactScrollTarget(page)
    window.location.hash = '#contact'
  }

  const scrollToContactPage = (page: 1 | 2 | 3) => {
    const element = document.getElementById(`contact-page-${page}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash.startsWith('#industry')) {
        setView('industry')
      } else if (hash.startsWith('#services')) {
        setView('services')
      } else if (hash.startsWith('#erp')) {
        setView('erp')
      } else if (hash.startsWith('#works')) {
        setView('works')
      } else if (hash.startsWith('#contact')) {
        setView('contact')
        const override = (window as any).__contactPageOverride
        if (override === 1 || override === 2 || override === 3) {
          setContactScrollTarget(override)
          delete (window as any).__contactPageOverride
        } else {
          const match = hash.match(/#contact-page-(\d+)/)
          if (match) {
            setContactScrollTarget(parseInt(match[1]) as 1 | 2 | 3)
          } else {
            setContactScrollTarget(1)
          }
        }
      } else if (hash.startsWith('#about') || hash === '' || hash === '#') {
        setView('about')
      } else if (hash.startsWith('#careers')) {
        setView('careers')
      } else if (hash.startsWith('#automation')) {
        setView('automation')
      } else if (hash.startsWith('#web')) {
        setView('web')
      } else if (hash.startsWith('#dashboard')) {
        setView('dashboard')
      } else if (hash.startsWith('#marketing')) {
        setView('marketing')
      } else if (hash.startsWith('#uiux')) {
        setView('uiux')
      } else {
        setView('other')
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (view === 'contact' && contactScrollTarget !== null) {
      const timer = setTimeout(() => {
        scrollToContactPage(contactScrollTarget)
        setContactScrollTarget(null)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [view, contactScrollTarget])

  return (
    <div className="min-h-screen bg-[#07080a] text-slate-100 font-sans flex flex-col justify-between overflow-x-hidden select-none">
      {/* Header / Navigation Bar */}
      <header className="w-full bg-[#07080a]/90 backdrop-blur-md border-b border-slate-900 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <a href="#logo" onClick={() => setView('other')} className="hover:opacity-90 transition-opacity flex items-center">
              <img 
                src={logoImg} 
                alt="GALLETRIX" 
                className="h-10 md:h-12 w-auto object-contain rounded-md"
              />
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-10">
            <div className="group">
              <a 
                href="#services"
                onClick={() => setView('services')}
                className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors duration-200 cursor-pointer ${
                  view === 'services' || view === 'erp' ? 'text-[#cc6f2a]' : 'text-slate-300 hover:text-white'
                }`}
              >
                Services
                <svg className={`w-3 h-3 mt-0.5 transition-colors ${view === 'services' || view === 'erp' ? 'text-[#cc6f2a]' : 'text-slate-400 group-hover:text-white'}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>

              {/* Services Dropdown Overlay */}
              <div className="absolute top-full left-0 right-0 w-full bg-[#07080a] border-b border-slate-900 shadow-2xl py-16 z-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-16">
                  {/* ERP Solutions */}
                  <a 
                    href="#erp" 
                    onClick={() => {
                      setView('erp')
                    }} 
                    className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                  >
                    <div className="mt-1 flex-shrink-0 text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7c0-1.657 3.582-3 8-3s8 1.343 8 3M4 7c0 1.657 3.582 3 8 3s8-1.343 8-3M4 7v10c0 1.657 3.582 3 8 3s8-1.343 8-3V7M4 12c0 1.657 3.582 3 8 3s8-1.343 8-3" />
                      </svg>
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-sans text-[17px] font-semibold text-white leading-tight">
                        ERP Solutions
                      </span>
                      <span className="font-sans text-[13px] font-medium text-slate-400 mt-1.5 leading-normal">
                        Manage business operations
                      </span>
                    </div>
                  </a>

                  {/* Business Automation */}
                  <a 
                    href="#automation" 
                    onClick={() => {
                      setView('automation')
                    }} 
                    className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                  >
                    <div className="mt-1 flex-shrink-0 text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v4M12 10H5v4M12 10h7v4M12 10v4M10 2h4v4h-4zM3 14h4v4H3zM10 14h4v4h-4zM17 14h4v4h-4z" />
                      </svg>
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-sans text-[17px] font-semibold text-white leading-tight">
                        Business Automation
                      </span>
                      <span className="font-sans text-[13px] font-medium text-slate-400 mt-1.5 leading-normal">
                        Automate daily workflows
                      </span>
                    </div>
                  </a>

                  {/* Web Application Development */}
                  <a 
                    href="#web" 
                    onClick={() => {
                      setView('web')
                    }} 
                    className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                  >
                    <div className="mt-1 flex-shrink-0 text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                      </svg>
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-sans text-[17px] font-semibold text-white leading-tight">
                        Web Application Development
                      </span>
                      <span className="font-sans text-[13px] font-medium text-slate-400 mt-1.5 leading-normal">
                        Automate daily workflows
                      </span>
                    </div>
                  </a>

                  {/* Dashboard & Analytics */}
                  <a 
                    href="#dashboard" 
                    onClick={() => {
                      setView('dashboard')
                    }} 
                    className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                  >
                    <div className="mt-1 flex-shrink-0 text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 20V10M12 20V4M6 20v-6" />
                      </svg>
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-sans text-[17px] font-semibold text-white leading-tight">
                        Dashboard & Analytics
                      </span>
                      <span className="font-sans text-[13px] font-medium text-slate-400 mt-1.5 leading-normal">
                        Turn data into insights
                      </span>
                    </div>
                  </a>

                  {/* Digital Marketing */}
                  <a 
                    href="#marketing" 
                    onClick={() => {
                      setView('marketing')
                    }} 
                    className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                  >
                    <div className="mt-1 flex-shrink-0 text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                      </svg>
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-sans text-[17px] font-semibold text-white leading-tight">
                        Digital Marketing
                      </span>
                      <span className="font-sans text-[13px] font-medium text-slate-400 mt-1.5 leading-normal">
                        Grow your online presence
                      </span>
                    </div>
                  </a>

                  {/* UI/UX Design */}
                  <a 
                    href="#uiux" 
                    onClick={() => {
                      setView('uiux')
                    }} 
                    className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                  >
                    <div className="mt-1 flex-shrink-0 text-white">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-sans text-[17px] font-semibold text-white leading-tight">
                        UI/UX Design
                      </span>
                      <span className="font-sans text-[13px] font-medium text-slate-400 mt-1.5 leading-normal">
                        Design better user experiences
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            
            <a 
              href="#about" 
              onClick={() => setView('about')}
              className={`text-[15px] font-medium transition-colors duration-200 ${
                view === 'about' ? 'text-[#cc6f2a]' : 'text-slate-300 hover:text-white'
              }`}
            >
              About
            </a>

            <div className="relative group">
              <a 
                href="#industry"
                onClick={() => setView('industry')}
                className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors duration-200 cursor-pointer ${
                  view === 'industry' ? 'text-[#cc6f2a]' : 'text-slate-300 hover:text-white'
                }`}
              >
                Industry
                <svg className="w-3 h-3 text-slate-400 mt-0.5 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            <a 
              href="#works" 
              onClick={() => setView('works')}
              className={`text-[15px] font-medium transition-colors duration-200 ${
                view === 'works' ? 'text-[#cc6f2a]' : 'text-slate-300 hover:text-white'
              }`}
            >
              Works
            </a>

            <a 
              href="#careers" 
              onClick={() => setView('careers')}
              className={`text-[15px] font-medium transition-colors duration-200 ${
                view === 'careers' ? 'text-[#cc6f2a]' : 'text-slate-300 hover:text-white'
              }`}
            >
              Careers
            </a>

            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault()
                navigateToContact(1)
              }}
              className={`text-[15px] font-medium transition-colors duration-200 ${
                view === 'contact' ? 'text-[#cc6f2a]' : 'text-slate-300 hover:text-white'
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Call to Action Button */}
          <div className="flex items-center">
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                navigateToContact(2)
              }}
              className="bg-[#cc6f2a] hover:bg-[#b86120] text-white px-8 py-3.5 rounded-full text-[15px] font-semibold tracking-wide transition-all duration-300 shadow-lg shadow-amber-950/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer inline-block text-center"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="w-full flex flex-col items-center">
        {view === 'about' && (
          <>
            {/* About Section with desktop background image overlay */}
            <section id="about" className="w-full relative lg:aspect-[3/2] bg-[#07080a] flex flex-col justify-between">
              {/* Desktop Background Image */}
              <div className="absolute inset-0 hidden lg:block">
                <img 
                  src={aboutImg} 
                  alt="Galletrix Office and Brand Identity" 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Text Content */}
              <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 flex flex-col items-start">
                {/* Subtitle */}
                <span className="text-[15px] font-medium tracking-wide text-slate-400 mb-5">
                  About Galletrix
                </span>

                {/* Heading */}
                <h1 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-medium leading-[1.12] text-white tracking-tight mb-8 max-w-4xl">
                  Building Intelligent Digital Solutions
                </h1>

                {/* Description */}
                <p className="font-sans text-[16px] sm:text-[18px] md:text-[19px] leading-[1.65] text-slate-400 max-w-3xl mb-14">
                  Galletrix helps businesses simplify operations through ERP, CRM, web, mobile, and automation solutions designed for productivity, scalability, and growth.
                </p>
              </div>

              {/* Mobile Block Image */}
              <div className="w-full lg:hidden">
                <img 
                  src={aboutImg} 
                  alt="Galletrix Office and Brand Identity" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </section>

            {/* Our Story Section */}
            <section id="about-story" className="w-full bg-[#07080a] py-24 md:py-32 lg:py-40 flex flex-col items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                {/* Left Column: Image */}
                <div className="lg:col-span-6 w-full">
                  <img 
                    src={aboutStoryImg} 
                    alt="Our Story - Built to simplify, engineered to scale" 
                    className="w-full h-auto object-cover rounded-[28px] shadow-2xl"
                  />
                </div>

                {/* Right Column: Text Content */}
                <div className="lg:col-span-6 flex flex-col items-start lg:pl-6">
                  <span className="font-sans text-[15px] font-medium tracking-wide text-slate-400 mb-5">
                    Our Story
                  </span>
                  
                  <h2 className="font-serif text-[38px] sm:text-[48px] md:text-[56px] font-medium leading-[1.15] text-white tracking-tight mb-8">
                    Built to simplify,<br />engineered to scale.
                  </h2>

                  <div className="flex flex-col gap-6 text-slate-400 font-sans text-[15px] sm:text-[16px] leading-[1.7] max-w-xl">
                    <p>
                      Galletrix was founded by a team of enterprise software engineers who saw a recurring problem: businesses were spending millions on technology that was too complex, too rigid, or simply the wrong fit.
                    </p>
                    <p>
                      We built Galletrix to be different. Every solution we design starts with deep understanding of the business problem — not the technology trend. We believe the best software disappears into the workflow, empowering people without demanding their attention.
                    </p>
                    <p>
                      Today, we serve enterprises across multiple industries, delivering ERP platforms, automation engines, and intelligent dashboards that drive measurable business outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Why Clients Choose Us Section */}
            <section id="about-why-us" className="w-full bg-[#07080a] pb-24 md:pb-32 lg:pb-40 pt-12 md:pt-16 flex flex-col items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                {/* Section Header */}
                <div className="flex flex-col items-start mb-12 md:mb-16">
                  <span className="font-sans text-[15px] font-medium tracking-wide text-slate-400 mb-5">
                    Why Clients Choose Us
                  </span>
                  <h2 className="font-serif text-[38px] sm:text-[48px] md:text-[56px] font-medium leading-[1.15] text-white tracking-tight">
                    Trust Built Through Results
                  </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {/* Card 1: Proven Track Record */}
                  <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] flex flex-col justify-start hover:border-slate-700/60 transition-all duration-300">
                    <h3 className="font-serif text-[20px] md:text-[22px] font-medium text-white tracking-tight mb-5">
                      Proven Track Record
                    </h3>
                    <p className="font-sans text-[14px] sm:text-[15px] leading-[1.65] text-slate-400">
                      Over 120 delivered projects across diverse industries — on time, within scope, and exceeding expectations.
                    </p>
                  </div>

                  {/* Card 2: Enterprise Security */}
                  <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] flex flex-col justify-start hover:border-slate-700/60 transition-all duration-300">
                    <h3 className="font-serif text-[20px] md:text-[22px] font-medium text-white tracking-tight mb-5">
                      Enterprise Security
                    </h3>
                    <p className="font-sans text-[14px] sm:text-[15px] leading-[1.65] text-slate-400">
                      ISO-aligned security practices, encrypted data pipelines, and compliance-ready architectures built into every solution.
                    </p>
                  </div>

                  {/* Card 3: Long-term Partnership */}
                  <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] flex flex-col justify-start hover:border-slate-700/60 transition-all duration-300">
                    <h3 className="font-serif text-[20px] md:text-[22px] font-medium text-white tracking-tight mb-5">
                      Long-term Partnership
                    </h3>
                    <p className="font-sans text-[14px] sm:text-[15px] leading-[1.65] text-slate-400">
                      We do not disappear after launch. Our team remains engaged through every iteration, upgrade, and scale-up phase.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section - Get In Touch */}
            <section className="w-full bg-white text-slate-900 py-24 md:py-32 flex flex-col items-center">
              <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
                <span className="text-[15px] font-semibold tracking-wide text-slate-500 mb-5 uppercase font-sans">
                  Get In Touch
                </span>
                
                <h2 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-medium leading-[1.15] text-slate-900 tracking-tight mb-6 max-w-3xl">
                  Ready to transform <br />
                  your business <br />
                  <span className="text-[#1b5ea3] font-medium">digitally?</span>
                </h2>
                
                <p className="font-sans text-[16px] sm:text-[17px] leading-relaxed text-slate-500 max-w-2xl mb-10">
                  Let us architect the digital infrastructure your business deserves.
                </p>
                
                <button 
                  onClick={() => navigateToContact(2)}
                  className="bg-black hover:bg-slate-900 text-white px-9 py-4 rounded-full text-[15px] font-semibold flex items-center gap-2.5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md"
                >
                  Let's Talk
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </section>
          </>
        )}

        {view === 'works' && (
          <>
            {/* Works Section with desktop background image overlay */}
            <section id="works" className="w-full relative lg:aspect-[3/2] bg-[#07080a] flex flex-col justify-between">
              {/* Desktop Background Image */}
              <div className="absolute inset-0 hidden lg:block">
                <img 
                  src={worksImg} 
                  alt="Galletrix Projects Portfolio Mockups" 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Text Content */}
              <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 flex flex-col items-start">
                {/* Subtitle */}
                <span className="text-[15px] font-medium tracking-wide text-slate-400 mb-5">
                  Our Work
                </span>

                {/* Heading */}
                <h1 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-medium leading-[1.12] text-white tracking-tight mb-8 max-w-4xl">
                  Projects That Define Excellence
                </h1>

                {/* Description */}
                <p className="font-sans text-[16px] sm:text-[18px] md:text-[19px] leading-[1.65] text-slate-400 max-w-3xl mb-14">
                  A selection of enterprise solutions we have built, deployed, and continue to evolve for clients across industries.
                </p>
              </div>

              {/* Mobile Block Image */}
              <div className="w-full lg:hidden">
                <img 
                  src={worksImg} 
                  alt="Galletrix Projects Portfolio Mockups" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </section>

            {/* Works Page 2: Case Studies Grid */}
            <section id="works-page-2" className="w-full bg-[#07080a] py-24 md:py-32">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                  
                  {/* Card 1: ERP System */}
                  <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[28px] flex flex-col justify-between hover:border-slate-700/60 transition-all duration-300">
                    <div>
                      {/* Tag / Pill */}
                      <span className="px-4 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default inline-block w-fit mb-6 uppercase">
                        ERP System
                      </span>
                      {/* Title */}
                      <h3 className="font-serif text-[22px] md:text-[24px] font-medium text-white tracking-tight mb-4">
                        Enterprise Resource Planning Platform
                      </h3>
                      {/* Description */}
                      <p className="font-sans text-[14px] sm:text-[15px] leading-[1.65] text-slate-400 mb-6">
                        A fully integrated ERP platform built for a 500-person manufacturing company. Covers procurement, finance, HR, inventory, and production scheduling in a unified dashboard interface.
                      </p>
                      {/* Divider */}
                      <div className="border-t border-slate-800/60 my-6"></div>
                      {/* Metrics */}
                      <div className="font-sans text-[14px] sm:text-[15px] text-slate-400 space-y-2 mb-8">
                        <div>80% reduction in manyuval data entry</div>
                        <div>6-week implementation timeline</div>
                        <div>500+ active daily users</div>
                      </div>
                    </div>
                    {/* Link */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToContact(2);
                      }}
                      className="flex items-center gap-2.5 text-[12px] font-bold tracking-widest text-slate-400 hover:text-white transition-colors duration-200 uppercase group cursor-pointer text-left mt-auto"
                    >
                      <span>View Case Study</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>

                  {/* Card 2: Business Automation */}
                  <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[28px] flex flex-col justify-between hover:border-slate-700/60 transition-all duration-300">
                    <div>
                      {/* Tag / Pill */}
                      <span className="px-4 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default inline-block w-fit mb-6 uppercase">
                        Business Automation
                      </span>
                      {/* Title */}
                      <h3 className="font-serif text-[22px] md:text-[24px] font-medium text-white tracking-tight mb-4">
                        HR Onboarding & Payroll Automation Suite
                      </h3>
                      {/* Description */}
                      <p className="font-sans text-[14px] sm:text-[15px] leading-[1.65] text-slate-400 mb-6">
                        Automated end-to-end onboarding workflow for a manpower agency managing 3,000+ contractors. Document collection, contract signing, payroll processing — all automated.
                      </p>
                      {/* Divider */}
                      <div className="border-t border-slate-800/60 my-6"></div>
                      {/* Metrics */}
                      <div className="font-sans text-[14px] sm:text-[15px] text-slate-400 space-y-2 mb-8">
                        <div>82% reduction in onboarding time</div>
                        <div>3,000+ employees managed</div>
                        <div>Zero manual payroll errors</div>
                      </div>
                    </div>
                    {/* Link */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToContact(2);
                      }}
                      className="flex items-center gap-2.5 text-[12px] font-bold tracking-widest text-slate-400 hover:text-white transition-colors duration-200 uppercase group cursor-pointer text-left mt-auto"
                    >
                      <span>View Case Study</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>

                  {/* Card 3: Dashboard & Analytics */}
                  <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[28px] flex flex-col justify-between hover:border-slate-700/60 transition-all duration-300">
                    <div>
                      {/* Tag / Pill */}
                      <span className="px-4 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default inline-block w-fit mb-6 uppercase">
                        Dashboard & Analytics
                      </span>
                      {/* Title */}
                      <h3 className="font-serif text-[22px] md:text-[24px] font-medium text-white tracking-tight mb-4">
                        Logistics Command Dashboard
                      </h3>
                      {/* Description */}
                      <p className="font-sans text-[14px] sm:text-[15px] leading-[1.65] text-slate-400 mb-6">
                        A real-time operations dashboard for a regional logistics company with 200+ vehicles. Live GPS tracking, driver performance analytics, route efficiency scoring
                      </p>
                      {/* Divider */}
                      <div className="border-t border-slate-800/60 my-6"></div>
                      {/* Metrics */}
                      <div className="font-sans text-[14px] sm:text-[15px] text-slate-400 space-y-2 mb-8">
                        <div>200+ vehicles tracked live</div>
                        <div>34% fuel cost reduction</div>
                        <div>Executive-level real-time visibility</div>
                      </div>
                    </div>
                    {/* Link */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToContact(2);
                      }}
                      className="flex items-center gap-2.5 text-[12px] font-bold tracking-widest text-slate-400 hover:text-white transition-colors duration-200 uppercase group cursor-pointer text-left mt-auto"
                    >
                      <span>View Case Study</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>

                  {/* Card 4: Web Application */}
                  <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[28px] flex flex-col justify-between hover:border-slate-700/60 transition-all duration-300">
                    <div>
                      {/* Tag / Pill */}
                      <span className="px-4 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default inline-block w-fit mb-6 uppercase">
                        Web Application
                      </span>
                      {/* Title */}
                      <h3 className="font-serif text-[22px] md:text-[24px] font-medium text-white tracking-tight mb-4">
                        Healthcare Patient Management Portal
                      </h3>
                      {/* Description */}
                      <p className="font-sans text-[14px] sm:text-[15px] leading-[1.65] text-slate-400 mb-6">
                        A secure, HIPAA-aligned patient management web application covering appointment booking, medical records, billing integration, and doctor-patient communication.
                      </p>
                      {/* Divider */}
                      <div className="border-t border-slate-800/60 my-6"></div>
                      {/* Metrics */}
                      <div className="font-sans text-[14px] sm:text-[15px] text-slate-400 space-y-2 mb-8">
                        <div>15 clinics unified on one platform</div>
                        <div>40% reduction in admin workload</div>
                        <div>Patient satisfaction up by 28%</div>
                      </div>
                    </div>
                    {/* Link */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToContact(2);
                      }}
                      className="flex items-center gap-2.5 text-[12px] font-bold tracking-widest text-slate-400 hover:text-white transition-colors duration-200 uppercase group cursor-pointer text-left mt-auto"
                    >
                      <span>View Case Study</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>

                  {/* Card 5: Recruitment Pipeline Automation */}
                  <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[28px] flex flex-col justify-between hover:border-slate-700/60 transition-all duration-300">
                    <div>
                      {/* Tag / Pill */}
                      <span className="px-4 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default inline-block w-fit mb-6 uppercase">
                        Recruitment Pipeline Automation
                      </span>
                      {/* Title */}
                      <h3 className="font-serif text-[22px] md:text-[24px] font-medium text-white tracking-tight mb-4">
                        Recruitment Pipeline Automation
                      </h3>
                      {/* Description */}
                      <p className="font-sans text-[14px] sm:text-[15px] leading-[1.65] text-slate-400 mb-6">
                        A visual workflow engine automating the full recruitment cycle — from job posting, CV screening, interview scheduling, to offer issuance and onboarding initiation.
                      </p>
                      {/* Divider */}
                      <div className="border-t border-slate-800/60 my-6"></div>
                      {/* Metrics */}
                      <div className="font-sans text-[14px] sm:text-[15px] text-slate-400 space-y-2 mb-8">
                        <div>Time-to-hire reduced by 60%</div>
                        <div>10,000+ candidates processed</div>
                        <div>Fully automated screening</div>
                      </div>
                    </div>
                    {/* Link */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToContact(2);
                      }}
                      className="flex items-center gap-2.5 text-[12px] font-bold tracking-widest text-slate-400 hover:text-white transition-colors duration-200 uppercase group cursor-pointer text-left mt-auto"
                    >
                      <span>View Case Study</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>

                  {/* Card 6: Digital Transformation */}
                  <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[28px] flex flex-col justify-between hover:border-slate-700/60 transition-all duration-300">
                    <div>
                      {/* Tag / Pill */}
                      <span className="px-4 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default inline-block w-fit mb-6 uppercase">
                        Digital Transformation
                      </span>
                      {/* Title */}
                      <h3 className="font-serif text-[22px] md:text-[24px] font-medium text-white tracking-tight mb-4">
                        Corporate Operations Modernization
                      </h3>
                      {/* Description */}
                      <p className="font-sans text-[14px] sm:text-[15px] leading-[1.65] text-slate-400 mb-6">
                        Complete digital transformation of a legacy paper-based operation into a cloud-first enterprise platform covering compliance, approvals, reporting, and cross-department workflows.
                      </p>
                      {/* Divider */}
                      <div className="border-t border-slate-800/60 my-6"></div>
                      {/* Metrics */}
                      <div className="font-sans text-[14px] sm:text-[15px] text-slate-400 space-y-2 mb-8">
                        <div>Legacy systems eliminated</div>
                        <div>12 departments integrated</div>
                        <div>Executive-level real-time visibility</div>
                      </div>
                    </div>
                    {/* Link */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToContact(2);
                      }}
                      className="flex items-center gap-2.5 text-[12px] font-bold tracking-widest text-slate-400 hover:text-white transition-colors duration-200 uppercase group cursor-pointer text-left mt-auto"
                    >
                      <span>View Case Study</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>

                </div>
              </div>
            </section>

            {/* CTA Section - Get In Touch */}
            <section className="w-full bg-white text-slate-900 py-24 md:py-32 flex flex-col items-center">
              <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
                <span className="text-[15px] font-semibold tracking-wide text-slate-500 mb-5 uppercase font-sans">
                  Get In Touch
                </span>
                
                <h2 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-medium leading-[1.15] text-[#07080a] tracking-tight mb-6 max-w-3xl">
                  Ready to transform <br />
                  your business <br />
                  <span className="text-[#1b5ea3] font-medium">digitally?</span>
                </h2>
                
                <p className="font-sans text-[16px] sm:text-[17px] leading-relaxed text-slate-500 max-w-2xl mb-10">
                  Let us architect the digital infrastructure your business deserves.
                </p>
                
                <button 
                  onClick={() => navigateToContact(2)}
                  className="bg-black hover:bg-slate-900 text-white px-9 py-4 rounded-full text-[15px] font-semibold flex items-center gap-2.5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md"
                >
                  Let's Talk
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </section>
          </>
        )}

        {view === 'industry' && (
          <>
            {/* Industry Section with desktop background image overlay */}
            <section id="industry" className="w-full relative lg:aspect-[3/2] bg-[#07080a] flex flex-col justify-between">
              {/* Desktop Background Image */}
              <div className="absolute inset-0 hidden lg:block">
                <img 
                  src={industryImg} 
                  alt="Galletrix Industry Domains Globe" 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Text Content */}
              <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 flex flex-col items-start">
                {/* Subtitle */}
                <span className="text-[15px] font-medium tracking-wide text-slate-400 mb-5">
                  Industries We Serve
                </span>

                {/* Heading */}
                <h1 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-medium leading-[1.12] text-white tracking-tight mb-8 max-w-4xl">
                  Domain Expertise Across Sectors
                </h1>

                {/* Description */}
                <p className="font-sans text-[16px] sm:text-[18px] md:text-[19px] leading-[1.65] text-slate-400 max-w-3xl mb-14">
                  Galletrix delivers industry-specific digital solutions built on deep sector knowledge and enterprise-grade technology.
                </p>
              </div>

              {/* Mobile Block Image */}
              <div className="w-full lg:hidden">
                <img 
                  src={industryImg} 
                  alt="Galletrix Industry Domains Globe" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </section>

            {/* Industry Page 2: Sector Cards Grid */}
            <section id="industry-page-2" className="w-full bg-[#07080a] py-24 md:py-32 border-t border-slate-900/60">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                  
                  {/* Card 1: Manpower & HR */}
                  <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[28px] flex flex-col justify-between hover:border-slate-700/60 transition-all duration-300">
                    <div>
                      {/* Card Header: Icon & Title */}
                      <div className="flex items-center gap-5 mb-6 md:mb-8">
                        <div className="w-14 h-14 rounded-2xl border border-slate-800/80 bg-slate-950/20 flex items-center justify-center shrink-0">
                          <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                        </div>
                        <h2 className="font-serif text-[22px] md:text-[24px] font-medium text-white tracking-tight">
                          Manpower & HR
                        </h2>
                      </div>
                      
                      {/* Description */}
                      <p className="font-sans text-[15px] md:text-[16px] leading-[1.65] text-slate-400 mb-8 md:mb-10">
                        Streamlined workforce management, staffing operations, and human resource platforms tailored for manpower companies handling large employee volumes.
                      </p>
                      
                      {/* Tags / Pills */}
                      <div className="flex flex-wrap gap-2.5 mb-8 md:mb-10">
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          EMPLOYEE LIFECYCLE MANAGEMENT
                        </span>
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          PAYROLL AUTOMATION
                        </span>
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          Attendance & Shift Tracking
                        </span>
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          Compliance Reporting
                        </span>
                      </div>
                    </div>
                    
                    {/* Discuss Link */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToContact(2);
                      }}
                      className="flex items-center gap-2.5 text-[11px] md:text-[12px] font-bold tracking-widest text-slate-400 hover:text-white transition-colors duration-200 uppercase group cursor-pointer text-left mt-auto"
                    >
                      <span>Discuss Your Requirements</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>

                  {/* Card 2: HR & Recruitment */}
                  <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[28px] flex flex-col justify-between hover:border-slate-700/60 transition-all duration-300">
                    <div>
                      {/* Card Header: Icon & Title */}
                      <div className="flex items-center gap-5 mb-6 md:mb-8">
                        <div className="w-14 h-14 rounded-2xl border border-slate-800/80 bg-slate-950/20 flex items-center justify-center shrink-0">
                          <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                        </div>
                        <h2 className="font-serif text-[22px] md:text-[24px] font-medium text-white tracking-tight">
                          HR & Recruitment
                        </h2>
                      </div>
                      
                      {/* Description */}
                      <p className="font-sans text-[15px] md:text-[16px] leading-[1.65] text-slate-400 mb-8 md:mb-10">
                        End-to-end recruitment platforms, applicant tracking systems, and HR portals that accelerate talent acquisition and retention.
                      </p>
                      
                      {/* Tags / Pills */}
                      <div className="flex flex-wrap gap-2.5 mb-8 md:mb-10">
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          Applicant Tracking
                        </span>
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          Interview Scheduling
                        </span>
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          Candidate Pipelines
                        </span>
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          Offer Management
                        </span>
                      </div>
                    </div>
                    
                    {/* Discuss Link */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToContact(2);
                      }}
                      className="flex items-center gap-2.5 text-[11px] md:text-[12px] font-bold tracking-widest text-slate-400 hover:text-white transition-colors duration-200 uppercase group cursor-pointer text-left mt-auto"
                    >
                      <span>Discuss Your Requirements</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>

                  {/* Card 3: Logistics & Supply Chain */}
                  <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[28px] flex flex-col justify-between hover:border-slate-700/60 transition-all duration-300">
                    <div>
                      {/* Card Header: Icon & Title */}
                      <div className="flex items-center gap-5 mb-6 md:mb-8">
                        <div className="w-14 h-14 rounded-2xl border border-slate-800/80 bg-slate-950/20 flex items-center justify-center shrink-0">
                          <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                        </div>
                        <h2 className="font-serif text-[22px] md:text-[24px] font-medium text-white tracking-tight">
                          Logistics & Supply Chain
                        </h2>
                      </div>
                      
                      {/* Description */}
                      <p className="font-sans text-[15px] md:text-[16px] leading-[1.65] text-slate-400 mb-8 md:mb-10">
                        Real-time fleet management, warehouse operations, delivery tracking, and supply chain visibility for logistics businesses.
                      </p>
                      
                      {/* Tags / Pills */}
                      <div className="flex flex-wrap gap-2.5 mb-8 md:mb-10">
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          Fleet Tracking
                        </span>
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          Route Optimization
                        </span>
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          Warehouse Management
                        </span>
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          Delivery Portals
                        </span>
                      </div>
                    </div>
                    
                    {/* Discuss Link */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToContact(2);
                      }}
                      className="flex items-center gap-2.5 text-[11px] md:text-[12px] font-bold tracking-widest text-slate-400 hover:text-white transition-colors duration-200 uppercase group cursor-pointer text-left mt-auto"
                    >
                      <span>Discuss Your Requirements</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>

                  {/* Card 4: Healthcare */}
                  <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[28px] flex flex-col justify-between hover:border-slate-700/60 transition-all duration-300">
                    <div>
                      {/* Card Header: Icon & Title */}
                      <div className="flex items-center gap-5 mb-6 md:mb-8">
                        <div className="w-14 h-14 rounded-2xl border border-slate-800/80 bg-slate-950/20 flex items-center justify-center shrink-0">
                          <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                        </div>
                        <h2 className="font-serif text-[22px] md:text-[24px] font-medium text-white tracking-tight">
                          Healthcare
                        </h2>
                      </div>
                      
                      {/* Description */}
                      <p className="font-sans text-[15px] md:text-[16px] leading-[1.65] text-slate-400 mb-8 md:mb-10">
                        Digital health management platforms, patient record systems, and clinic operations software designed for modern healthcare providers.
                      </p>
                      
                      {/* Tags / Pills */}
                      <div className="flex flex-wrap gap-2.5 mb-8 md:mb-10">
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          Patient Management
                        </span>
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          Appointment Scheduling
                        </span>
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          Medical Records
                        </span>
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          Billing & Claims
                        </span>
                      </div>
                    </div>
                    
                    {/* Discuss Link */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToContact(2);
                      }}
                      className="flex items-center gap-2.5 text-[11px] md:text-[12px] font-bold tracking-widest text-slate-400 hover:text-white transition-colors duration-200 uppercase group cursor-pointer text-left mt-auto"
                    >
                      <span>Discuss Your Requirements</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>


                  
                  {/* Card 1: Education */}
                  <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[28px] flex flex-col justify-between hover:border-slate-700/60 transition-all duration-300">
                    <div>
                      {/* Card Header: Icon & Title */}
                      <div className="flex items-center gap-5 mb-6 md:mb-8">
                        <div className="w-14 h-14 rounded-2xl border border-slate-800/80 bg-slate-950/20 flex items-center justify-center shrink-0">
                          <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                        </div>
                        <h2 className="font-serif text-[22px] md:text-[24px] font-medium text-white tracking-tight">
                          Education
                        </h2>
                      </div>
                      
                      {/* Description */}
                      <p className="font-sans text-[15px] md:text-[16px] leading-[1.65] text-slate-400 mb-8 md:mb-10">
                        Learning management systems, student information portals, and administrative platforms for educational institutions of all sizes.
                      </p>
                      
                      {/* Tags / Pills */}
                      <div className="flex flex-wrap gap-2.5 mb-8 md:mb-10">
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          Student Information
                        </span>
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          LMS Integration
                        </span>
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          Fee Management
                        </span>
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          Attendance & Grades
                        </span>
                      </div>
                    </div>
                    
                    {/* Discuss Link */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToContact(2);
                      }}
                      className="flex items-center gap-2.5 text-[11px] md:text-[12px] font-bold tracking-widest text-slate-400 hover:text-white transition-colors duration-200 uppercase group cursor-pointer text-left mt-auto"
                    >
                      <span>Discuss Your Requirements</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>

                  {/* Card 2: Retail */}
                  <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[28px] flex flex-col justify-between hover:border-slate-700/60 transition-all duration-300">
                    <div>
                      {/* Card Header: Icon & Title */}
                      <div className="flex items-center gap-5 mb-6 md:mb-8">
                        <div className="w-14 h-14 rounded-2xl border border-slate-800/80 bg-slate-950/20 flex items-center justify-center shrink-0">
                          <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                        </div>
                        <h2 className="font-serif text-[22px] md:text-[24px] font-medium text-white tracking-tight">
                          Retail
                        </h2>
                      </div>
                      
                      {/* Description */}
                      <p className="font-sans text-[15px] md:text-[16px] leading-[1.65] text-slate-400 mb-8 md:mb-10">
                        Omnichannel retail management, inventory control, POS integrations, and customer loyalty platforms for modern retail businesses
                      </p>
                      
                      {/* Tags / Pills */}
                      <div className="flex flex-wrap gap-2.5 mb-8 md:mb-10">
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          Inventory Management
                        </span>
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          POS Integration
                        </span>
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          Customer Loyalty
                        </span>
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          Sales Analytics
                        </span>
                      </div>
                    </div>
                    
                    {/* Discuss Link */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToContact(2);
                      }}
                      className="flex items-center gap-2.5 text-[11px] md:text-[12px] font-bold tracking-widest text-slate-400 hover:text-white transition-colors duration-200 uppercase group cursor-pointer text-left mt-auto"
                    >
                      <span>Discuss Your Requirements</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>

                  {/* Card 3: Finance */}
                  <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[28px] flex flex-col justify-between hover:border-slate-700/60 transition-all duration-300">
                    <div>
                      {/* Card Header: Icon & Title */}
                      <div className="flex items-center gap-5 mb-6 md:mb-8">
                        <div className="w-14 h-14 rounded-2xl border border-slate-800/80 bg-slate-950/20 flex items-center justify-center shrink-0">
                          <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                        </div>
                        <h2 className="font-serif text-[22px] md:text-[24px] font-medium text-white tracking-tight">
                          Finance
                        </h2>
                      </div>
                      
                      {/* Description */}
                      <p className="font-sans text-[15px] md:text-[16px] leading-[1.65] text-slate-400 mb-8 md:mb-10">
                        Secure financial management platforms, accounting automation, compliance tools, and reporting dashboards for finance-driven organizations.
                      </p>
                      
                      {/* Tags / Pills */}
                      <div className="flex flex-wrap gap-2.5 mb-8 md:mb-10">
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          Accounting Automation
                        </span>
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          Compliance Tools
                        </span>
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          Financial Reporting
                        </span>
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          Audit Trails
                        </span>
                      </div>
                    </div>
                    
                    {/* Discuss Link */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToContact(2);
                      }}
                      className="flex items-center gap-2.5 text-[11px] md:text-[12px] font-bold tracking-widest text-slate-400 hover:text-white transition-colors duration-200 uppercase group cursor-pointer text-left mt-auto"
                    >
                      <span>Discuss Your Requirements</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>

                  {/* Card 4: Corporate Operations */}
                  <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[28px] flex flex-col justify-between hover:border-slate-700/60 transition-all duration-300">
                    <div>
                      {/* Card Header: Icon & Title */}
                      <div className="flex items-center gap-5 mb-6 md:mb-8">
                        <div className="w-14 h-14 rounded-2xl border border-slate-800/80 bg-slate-950/20 flex items-center justify-center shrink-0">
                          <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                        </div>
                        <h2 className="font-serif text-[22px] md:text-[24px] font-medium text-white tracking-tight">
                          Corporate Operations
                        </h2>
                      </div>
                      
                      {/* Description */}
                      <p className="font-sans text-[15px] md:text-[16px] leading-[1.65] text-slate-400 mb-8 md:mb-10">
                        Comprehensive corporate ERP systems, internal process automation, and enterprise dashboards for large-scale organizational management.
                      </p>
                      
                      {/* Tags / Pills */}
                      <div className="flex flex-wrap gap-2.5 mb-8 md:mb-10">
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          Corporate ERP
                        </span>
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          Internal Process Automation
                        </span>
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          Executive Dashboards
                        </span>
                        <span className="px-4.5 py-2 rounded-full border border-slate-800/50 text-[11px] font-medium tracking-wider text-slate-400 bg-slate-950/10 hover:border-slate-700/80 hover:text-white transition-all cursor-default">
                          Cross-Department Workflows
                        </span>
                      </div>
                    </div>
                    
                    {/* Discuss Link */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        navigateToContact(2);
                      }}
                      className="flex items-center gap-2.5 text-[11px] md:text-[12px] font-bold tracking-widest text-slate-400 hover:text-white transition-colors duration-200 uppercase group cursor-pointer text-left mt-auto"
                    >
                      <span>Discuss Your Requirements</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>

                </div>
              </div>
            </section>

            {/* Industry Page 4: Get In Touch CTA Section */}
            <section id="industry-page-4" className="w-full bg-white text-slate-900 py-24 md:py-32 flex flex-col items-center">
              <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
                <span className="text-[15px] font-semibold tracking-wide text-slate-500 mb-5 uppercase font-sans">
                  Get In Touch
                </span>
                
                <h2 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-medium leading-[1.15] text-[#07080a] tracking-tight mb-6 max-w-3xl">
                  Ready to transform <br />
                  your business <br />
                  <span className="text-[#1b5ea3] font-medium">digitally?</span>
                </h2>
                
                <p className="font-sans text-[16px] sm:text-[17px] leading-relaxed text-slate-500 max-w-2xl mb-10">
                  Let us architect the digital infrastructure your business deserves.
                </p>
                
                <button 
                  onClick={() => navigateToContact(2)}
                  className="bg-black hover:bg-slate-900 text-white px-9 py-4 rounded-full text-[15px] font-semibold flex items-center gap-2.5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md"
                >
                  Let's Talk
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </section>
          </>
        )}

        {view === 'contact' && (
          <>
            {/* Page 1: Contact Hero / Let's Build Together Section */}
            <section id="contact-page-1" className="w-full relative lg:aspect-[3/2] bg-[#07080a] flex flex-col justify-between min-h-[calc(100vh-6rem)] lg:min-h-0">
              {/* Desktop Background Image */}
              <div className="absolute inset-0 hidden lg:block">
                <img 
                  src={contactImg} 
                  alt="Galletrix Contact and Support Desk" 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Text Content */}
              <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 flex flex-col items-start">
                {/* Subtitle */}
                <span className="text-[15px] font-medium tracking-wide text-slate-400 mb-5">
                  Contact Galletrix
                </span>

                {/* Heading */}
                <h1 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-medium leading-[1.12] text-white tracking-tight mb-8 max-w-4xl">
                  Let's Build Together
                </h1>

                {/* Description */}
                <p className="font-sans text-[16px] sm:text-[18px] md:text-[19px] leading-[1.65] text-slate-400 max-w-3xl mb-14">
                  Tell us about your business challenge. Our team will respond within 24 hours with a tailored assessment.
                </p>
              </div>

              {/* Mobile Block Image */}
              <div className="w-full lg:hidden my-6">
                <img 
                  src={contactImg} 
                  alt="Galletrix Contact and Support Desk" 
                  className="w-full h-auto object-cover"
                />
              </div>

            </section>

            {/* Page 2: Send Message Form Section */}
            <section id="contact-page-2" className="w-full bg-[#07080a] pt-32 pb-24 border-t border-slate-900/60 min-h-[calc(100vh-6rem)] flex items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start w-full">
                
                {/* Left Side: Info and Cards */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Ready Card */}
                  <div className="border border-slate-800/80 bg-slate-950/20 p-8 rounded-2xl">
                    <h2 className="font-serif text-[28px] md:text-[32px] font-medium leading-tight text-white mb-4">
                      Ready to transform your business?
                    </h2>
                    <p className="text-slate-400 text-[15px] leading-relaxed mb-8">
                      Whether you need a full ERP overhaul, a custom web application, or intelligent automation — we have the expertise to deliver.
                    </p>
                    <div className="flex items-center gap-2 text-[14px] font-semibold text-slate-300 hover:text-white cursor-pointer group">
                      <span>Typical response: within 24 hours</span>
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Info Cards */}
                  <div className="space-y-4">
                    {/* Email Card */}
                    <div className="border border-slate-800/80 bg-slate-950/10 p-6 rounded-2xl flex items-center gap-5">
                      <div className="w-12 h-12 rounded-full border border-slate-800/80 flex items-center justify-center bg-slate-950/50 shrink-0 text-slate-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px] text-slate-400 font-medium mb-0.5">Email Us</span>
                        <a href="mailto:contact@galletrix.com" className="text-white text-[15px] font-semibold hover:underline">
                          contact@galletrix.com
                        </a>
                      </div>
                    </div>

                    {/* Phone Card */}
                    <div className="border border-slate-800/80 bg-slate-950/10 p-6 rounded-2xl flex items-center gap-5">
                      <div className="w-12 h-12 rounded-full border border-slate-800/80 flex items-center justify-center bg-slate-950/50 shrink-0 text-slate-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px] text-slate-400 font-medium mb-0.5">Call Us</span>
                        <a href="tel:+1800GALLETRIX" className="text-white text-[15px] font-semibold hover:underline">
                          +1(800) GALLETRIX
                        </a>
                      </div>
                    </div>

                    {/* Visit Card */}
                    <div className="border border-slate-800/80 bg-slate-950/10 p-6 rounded-2xl flex items-center gap-5">
                      <div className="w-12 h-12 rounded-full border border-slate-800/80 flex items-center justify-center bg-slate-950/50 shrink-0 text-slate-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px] text-slate-400 font-medium mb-0.5">Visit us</span>
                        <span className="text-white text-[15px] font-semibold">
                          Enterprise
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Message Form */}
                <div className="lg:col-span-7 space-y-8">
                  <h2 className="font-serif text-[28px] md:text-[34px] font-medium text-white">
                    Send US a Message
                  </h2>
                  <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-[14px] font-medium text-slate-300">Full Name *</label>
                        <input 
                          type="text" 
                          placeholder="John Smith" 
                          className="w-full bg-[#0a0c10] border border-slate-800 rounded-xl px-5 py-4 text-[15px] text-white placeholder-slate-600 focus:outline-none focus:border-[#0091ff] focus:ring-1 focus:ring-[#0091ff] transition-all" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-[14px] font-medium text-slate-400">Company</label>
                        <input 
                          type="text" 
                          placeholder="Your Company" 
                          className="w-full bg-[#0a0c10] border border-slate-800 rounded-xl px-5 py-4 text-[15px] text-white placeholder-slate-600 focus:outline-none focus:border-[#0091ff] focus:ring-1 focus:ring-[#0091ff] transition-all" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-[14px] font-medium text-slate-300">Email *</label>
                        <input 
                          type="email" 
                          placeholder="you@company.com" 
                          className="w-full bg-[#0a0c10] border border-slate-800 rounded-xl px-5 py-4 text-[15px] text-white placeholder-slate-600 focus:outline-none focus:border-[#0091ff] focus:ring-1 focus:ring-[#0091ff] transition-all" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-[14px] font-medium text-slate-400">Phone</label>
                        <input 
                          type="tel" 
                          placeholder="+1(555)000-0000" 
                          className="w-full bg-[#0a0c10] border border-slate-800 rounded-xl px-5 py-4 text-[15px] text-white placeholder-slate-600 focus:outline-none focus:border-[#0091ff] focus:ring-1 focus:ring-[#0091ff] transition-all" 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[14px] font-medium text-slate-400">Service of Interest</label>
                      <div className="relative">
                        <select className="w-full bg-[#0a0c10] border border-slate-800 rounded-xl px-5 py-4 text-[15px] text-slate-300 focus:outline-none focus:border-[#0091ff] focus:ring-1 focus:ring-[#0091ff] transition-all appearance-none cursor-pointer">
                          <option value="">Select a service......</option>
                          <option value="erp">ERP Systems</option>
                          <option value="automation">Automation & AI</option>
                          <option value="web">Web & Mobile Development</option>
                          <option value="analytics">Analytics & Consulting</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-slate-500">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[14px] font-medium text-slate-300">Message*</label>
                      <textarea 
                        rows={6} 
                        placeholder="Tell us about your projects, goals and challenges............." 
                        className="w-full bg-[#0a0c10] border border-slate-800 rounded-xl px-5 py-4 text-[15px] text-white placeholder-slate-600 focus:outline-none focus:border-[#0091ff] focus:ring-1 focus:ring-[#0091ff] transition-all resize-none" 
                        required 
                      />
                    </div>

                    <button type="submit" className="w-full bg-white hover:bg-slate-100 text-slate-900 py-4.5 rounded-xl text-[16px] font-semibold flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] cursor-pointer shadow-lg">
                      <span>Send Message</span>
                      <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>

                  </form>
                </div>

              </div>
            </section>

            {/* Page 3: Get In Touch White Section */}
            <section id="contact-page-3" className="w-full bg-white text-slate-900 py-32 md:py-40 flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] border-t border-slate-200">
              <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center animate-fade-in">
                <span className="text-[15px] font-semibold tracking-wide text-slate-500 mb-5 uppercase font-sans">
                  Get In Touch
                </span>
                
                <h2 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-medium leading-[1.15] text-[#07080a] tracking-tight mb-6 max-w-3xl">
                  Ready to transform <br />
                  your business <br />
                  <span className="text-[#1b5ea3] font-medium">digitally?</span>
                </h2>
                
                <p className="font-sans text-[16px] sm:text-[17px] leading-relaxed text-slate-500 max-w-2xl">
                  Let us architect the digital infrastructure your business deserves.
                </p>
                
              </div>
            </section>
          </>
        )}

        {view === 'services' && (
          <>
            {/* Services Section with desktop background image overlay */}
            <section id="services" className="w-full relative lg:aspect-[3/2] bg-[#07080a] flex flex-col justify-between min-h-[calc(100vh-6rem)] lg:min-h-0 animate-fade-in">
              {/* Desktop Background Image */}
              <div className="absolute inset-0 hidden lg:block">
                <img 
                  src={servicesImg} 
                  alt="Galletrix Services - Precision-Engineered Digital Solutions" 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Text Content */}
              <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 flex flex-col items-start">
                {/* Subtitle */}
                <span className="text-[15px] font-medium tracking-wide text-slate-400 mb-5">
                  Our Services
                </span>

                {/* Heading */}
                <h1 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-medium leading-[1.12] text-white tracking-tight mb-8 max-w-4xl">
                  Precision-Engineered Digital Solutions
                </h1>

                {/* Description */}
                <p className="font-sans text-[16px] sm:text-[18px] md:text-[19px] leading-[1.65] text-slate-400 max-w-3xl mb-14">
                  Every service we offer is built on deep enterprise expertise, modern technology, and a commitment to results that matter.
                </p>
              </div>

              {/* Mobile Block Image */}
              <div className="w-full lg:hidden my-6">
                <img 
                  src={servicesImg} 
                  alt="Galletrix Services - Precision-Engineered Digital Solutions" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </section>

            {/* Page 2: Services Cards Grid Section */}
            <section id="services-page-2" className="w-full bg-[#07080a] py-24 md:py-32 border-t border-slate-900/60 min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-between h-full animate-fade-in">
                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {/* Card 1: ERP Solutions */}
                  <a 
                    href="#erp"
                    onClick={() => setView('erp')}
                    className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] flex flex-col justify-start hover:border-slate-700/60 hover:scale-[1.01] transition-all duration-300 text-left cursor-pointer"
                  >
                    <div className="text-slate-300 mb-6">
                      <svg className="w-6 h-6 text-slate-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7c0-1.657 3.582-3 8-3s8 1.343 8 3M4 7c0 1.657 3.582 3 8 3s8-1.343 8-3M4 7v10c0 1.657 3.582 3 8 3s8-1.343 8-3V7M4 12c0 1.657 3.582 3 8 3s8-1.343 8-3" />
                      </svg>
                    </div>
                    <h3 className="font-sans text-[20px] md:text-[22px] font-semibold text-white tracking-tight mb-4">
                      ERP Solutions
                    </h3>
                    <p className="font-sans text-[14px] sm:text-[15px] leading-[1.65] text-slate-400">
                      Unified enterprise resource planning systems that integrate every facet of your operations into a single, intelligent platform.
                    </p>
                  </a>

                  {/* Card 2: Business Automation */}
                  <a href="#automation" onClick={() => setView('automation')} className="block border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] hover:border-[#539be2]/50 hover:bg-[#021627]/60 transition-all duration-300 group cursor-pointer">
                    <div className="text-slate-300 mb-6 group-hover:text-[#539be2] transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v4M12 10H5v4M12 10h7v4M12 10v4M10 2h4v4h-4zM3 14h4v4H3zM10 14h4v4h-4zM17 14h4v4h-4z" />
                      </svg>
                    </div>
                    <h3 className="font-sans text-[20px] md:text-[22px] font-semibold text-white tracking-tight mb-4">
                      Business Automation
                    </h3>
                    <p className="font-sans text-[14px] sm:text-[15px] leading-[1.65] text-slate-400">
                      Eliminate manual processes with intelligent automation that adapts to your workflows and scales with your growth.
                    </p>
                  </a>

                  {/* Card 3: Web Application Development */}
                  <a href="#web" onClick={() => setView('web')} className="block border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] hover:border-[#539be2]/50 hover:bg-[#021627]/60 transition-all duration-300 group cursor-pointer">
                    <div className="text-slate-300 mb-6 group-hover:text-[#539be2] transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                      </svg>
                    </div>
                    <h3 className="font-sans text-[20px] md:text-[22px] font-semibold text-white tracking-tight mb-4">
                      Web Application Development
                    </h3>
                    <p className="font-sans text-[14px] sm:text-[15px] leading-[1.65] text-slate-400">
                      Custom-built, high-performance web applications designed for scalability, security, and exceptional user experience.
                    </p>
                  </a>

                  {/* Card 4: Dashboard & Analytics */}
                  <a href="#dashboard" onClick={() => setView('dashboard')} className="block border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] hover:border-[#539be2]/50 hover:bg-[#021627]/60 transition-all duration-300 group cursor-pointer">
                    <div className="text-slate-300 mb-6 group-hover:text-[#539be2] transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 20V10M12 20V4M6 20v-6" />
                      </svg>
                    </div>
                    <h3 className="font-sans text-[20px] md:text-[22px] font-semibold text-white tracking-tight mb-4">
                      Dashboard & Analytics
                    </h3>
                    <p className="font-sans text-[14px] sm:text-[15px] leading-[1.65] text-slate-400">
                      Real-time data visualization and business intelligence tools that transform raw data into actionable insights.
                    </p>
                  </a>

                  {/* Card 5: Digital Marketing */}
                  <a href="#marketing" onClick={() => setView('marketing')} className="block border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] hover:border-[#539be2]/50 hover:bg-[#021627]/60 transition-all duration-300 group cursor-pointer">
                    <div className="text-slate-300 mb-6 group-hover:text-[#539be2] transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h3l3-9 4 18 3-12h5" />
                      </svg>
                    </div>
                    <h3 className="font-sans text-[20px] md:text-[22px] font-semibold text-white tracking-tight mb-4">
                      Digital Marketing
                    </h3>
                    <p className="font-sans text-[14px] sm:text-[15px] leading-[1.65] text-slate-400">
                      Data-driven digital marketing campaigns to grow your brand, reach audiences, and maximize online visibility.
                    </p>
                  </a>

                  {/* Card 6: UI/UX Design */}
                  <a href="#uiux" onClick={() => setView('uiux')} className="block border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] hover:border-[#539be2]/50 hover:bg-[#021627]/60 transition-all duration-300 group cursor-pointer">
                    <div className="text-slate-300 mb-6 group-hover:text-[#539be2] transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7c0-1.657 3.582-3 8-3s8 1.343 8 3M4 7c0 1.657 3.582 3 8 3s8-1.343 8-3M4 7v10c0 1.657 3.582 3 8 3s8-1.343 8-3V7M4 12c0 1.657 3.582 3 8 3s8-1.343 8-3" />
                      </svg>
                    </div>
                    <h3 className="font-sans text-[20px] md:text-[22px] font-semibold text-white tracking-tight mb-4">
                      UI/UX Design
                    </h3>
                    <p className="font-sans text-[14px] sm:text-[15px] leading-[1.65] text-slate-400">
                      Clean, modern, and user-friendly digital experiences optimized for seamless interaction and engagement.
                    </p>
                  </a>
                </div>
              </div>
            </section>

            {/* Page 3: How We Work Section */}
            <section id="services-page-3" className="w-full bg-[#07080a] py-24 md:py-32 lg:py-40 border-t border-slate-900/60 min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-start animate-fade-in">
                {/* Subtitle */}
                <span className="font-sans text-[15px] font-medium tracking-wide text-slate-400 mb-5">
                  Our Approach
                </span>
                
                {/* Heading */}
                <h2 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-medium leading-[1.12] text-white tracking-tight mb-24">
                  How We Work
                </h2>

                {/* 4-Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 w-full">
                  {/* Column 1 */}
                  <div className="flex flex-col items-center text-center space-y-4">
                    <h3 className="font-sans text-[18px] sm:text-[20px] font-semibold text-white tracking-wide">
                      Discovery
                    </h3>
                    <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400 max-w-[240px]">
                      Deep-dive analysis of your operations, pain points, and objectives.
                    </p>
                  </div>

                  {/* Column 2 */}
                  <div className="flex flex-col items-center text-center space-y-4">
                    <h3 className="font-sans text-[18px] sm:text-[20px] font-semibold text-white tracking-wide">
                      Architecture
                    </h3>
                    <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400 max-w-[240px]">
                      Designing the technical blueprint that solves your specific challenges.
                    </p>
                  </div>

                  {/* Column 3 */}
                  <div className="flex flex-col items-center text-center space-y-4">
                    <h3 className="font-sans text-[18px] sm:text-[20px] font-semibold text-white tracking-wide">
                      Deploy & Scale
                    </h3>
                    <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400 max-w-[240px]">
                      Seamless deployment with ongoing optimization and support.
                    </p>
                  </div>

                  {/* Column 4 */}
                  <div className="flex flex-col items-center text-center space-y-4">
                    <h3 className="font-sans text-[18px] sm:text-[20px] font-semibold text-white tracking-wide">
                      Build
                    </h3>
                    <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400 max-w-[240px]">
                      Precision engineering with continuous feedback loops and iteration..
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section - Get In Touch */}
            <section className="w-full bg-white text-slate-900 py-24 md:py-32 flex flex-col items-center">
              <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
                <span className="text-[15px] font-semibold tracking-wide text-slate-500 mb-5 uppercase font-sans">
                  Get In Touch
                </span>
                
                <h2 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-medium leading-[1.15] text-slate-900 tracking-tight mb-6 max-w-3xl">
                  Ready to transform <br />
                  your business <br />
                  <span className="text-[#1b5ea3] font-medium">digitally?</span>
                </h2>
                
                <p className="font-sans text-[16px] sm:text-[17px] leading-relaxed text-slate-500 max-w-2xl mb-10">
                  Let us architect the digital infrastructure your business deserves.
                </p>
                
                <button 
                  onClick={() => navigateToContact(2)}
                  className="bg-black hover:bg-slate-900 text-white px-9 py-4 rounded-full text-[15px] font-semibold flex items-center gap-2.5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md"
                >
                  Let's Talk
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </section>
          </>
        )}

        {view === 'erp' && (
          <>
            {/* ERP Solutions Page */}
            <section id="erp" className="w-full bg-[#07080a] min-h-[calc(100vh-6rem)] flex items-center py-20 md:py-28 animate-fade-in">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Left Column: Text */}
                <div className="lg:col-span-7 flex flex-col items-start text-left">
                  <span className="font-sans text-[15px] sm:text-[16px] font-semibold text-slate-400 tracking-wide mb-6">
                    Galletrix Service
                  </span>
                  
                  <h1 className="font-serif text-[44px] sm:text-[56px] md:text-[72px] font-semibold leading-[1.1] text-white tracking-tight mb-8">
                    ERP Solutions
                  </h1>
                  
                  <h2 className="font-sans text-[18px] sm:text-[21px] md:text-[23px] font-semibold text-[#539be2] mb-6 leading-snug">
                    Manage every business operation in one place
                  </h2>
                  
                  <p className="font-sans text-[15px] sm:text-[17px] leading-[1.75] text-slate-400 max-w-xl">
                    Galletrix builds intelligent ERP systems that help businesses manage employees, departments, workflows, reports, approvals, and business operations from one powerful platform.
                  </p>
                </div>

                {/* Right Column: Image with Glow */}
                <div className="lg:col-span-5 flex justify-center w-full">
                  <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden border border-slate-900 shadow-[0_0_60px_rgba(59,130,246,0.3)] hover:scale-[1.01] transition-all duration-300">
                    <img 
                      src={erpImg} 
                      alt="Galletrix ERP Solutions - Intelligent Connected Systems" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Page 2: ERP Overview & Capabilities */}
            <section id="erp-page-2" className="w-full bg-gradient-to-b from-[#000000] to-[#021627] py-24 md:py-32 lg:py-40 border-t border-slate-900/60 min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col animate-fade-in">
                {/* Top Grid: Overview */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full mb-32 items-start">
                  <div className="flex flex-col items-start text-left">
                    <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">
                      Overview
                    </span>
                    <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight">
                      What We <span className="text-[#539be2] font-semibold">Deliver</span>
                    </h2>
                  </div>
                  <div className="text-left">
                    <p className="font-sans text-[16px] sm:text-[17px] leading-[1.8] text-slate-300 max-w-2xl">
                      ERP solutions help businesses centralize operations, reduce manual tracking, improve team coordination, and manage business processes more efficiently. By unifying all departments and workflows into a single intelligent platform, organizations gain complete visibility into their operations, enabling faster responses, better resource allocation, and a foundation for sustainable growth.
                    </p>
                  </div>
                </div>

                {/* Bottom Center Header */}
                <div className="flex flex-col items-center text-center mb-20">
                  <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">
                    Capabilities
                  </span>
                  <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight">
                    Key Features
                  </h2>
                </div>

                {/* Grid of 6 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
                  {/* Card 1: Employee Management */}
                  <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                    <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a6 6 0 00-10.8 0M12 10a4 4 0 100-8 4 4 0 000 8z" />
                      </svg>
                    </div>
                    <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">
                      Employee Management
                    </h3>
                    <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">
                      Manage employee profiles, roles, assignments, and performance tracking from a centralized system.
                    </p>
                  </div>

                  {/* Card 2: Department Management */}
                  <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                    <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">
                      Department Management
                    </h3>
                    <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">
                      Organize departments, teams, and hierarchies with clear structure and reporting lines.
                    </p>
                  </div>

                  {/* Card 3: Payroll & Attendance */}
                  <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                    <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.22.029a3.075 3.075 0 002.456-1.047 3.072 3.072 0 00-.724-4.226l-.08-.057a3.075 3.075 0 01-1.047-2.456 3.072 3.072 0 014.226.724l.057.08m-3 12.905l.321-.016A3.073 3.073 0 0015 15.031a3.071 3.071 0 00-.759-4.214l-.067-.048a3.075 3.075 0 01-1.048-2.456 3.072 3.072 0 014.214.759l.048.067" />
                      </svg>
                    </div>
                    <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">
                      Payroll & Attendance
                    </h3>
                    <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">
                      Automate payroll calculations, track attendance, leaves, and generate salary reports effortlessly.
                    </p>
                  </div>

                  {/* Card 4: Workflow Tracking */}
                  <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                    <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.64a3 3 0 110-5.28 3 3 0 010 5.28zM6 10.64a3 3 0 110-5.28 3 3 0 010 5.28zM18 6.64a3 3 0 110-5.28 3 3 0 010 5.28z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 7.5l7-3.5m-7 5l7 3.5" />
                      </svg>
                    </div>
                    <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">
                      Workflow Tracking
                    </h3>
                    <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">
                      Monitor tasks, approvals, and project workflows in real-time with visual tracking dashboards.
                    </p>
                  </div>

                  {/* Card 5: Role-Based Access */}
                  <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                    <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    </div>
                    <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">
                      Role-Based Access
                    </h3>
                    <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">
                      Control data visibility and system access with granular role-based permission management.
                    </p>
                  </div>

                  {/* Card 6: Reports & Analytics */}
                  <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                    <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                    </div>
                    <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">
                      Reports & Analytics
                    </h3>
                    <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">
                      Generate detailed business reports and analytics to drive informed decision-making.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Page 3: ERP Advantages & Process */}
            <section id="erp-page-3" className="w-full bg-[#010c17] py-24 md:py-32 lg:py-40 border-t border-slate-900/60 min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-between items-center animate-fade-in">
                {/* Upper Half: Business Benefits */}
                <div className="flex flex-col items-center text-center mb-16">
                  <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">
                    Advantages
                  </span>
                  <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight">
                    Business Benefits
                  </h2>
                </div>

                {/* Grid for the 6 items */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mb-36">
                  {[
                    "Centralized business operations",
                    "Better team coordination",
                    "Reduced manual work",
                    "Faster decision-making",
                    "Improved productivity",
                    "Scalable system for business growth"
                  ].map((benefit, i) => (
                    <div 
                      key={i} 
                      className="border border-[#022e54]/80 bg-[#021627]/40 px-6 py-5 rounded-[18px] flex items-center gap-4 hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300"
                    >
                      {/* Checkmark outline SVG */}
                      <svg className="w-6 h-6 text-[#539be2] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                      </svg>
                      <span className="font-sans text-[16px] sm:text-[17px] font-medium text-slate-200">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Lower Half: How We Work Process Timeline */}
                <div className="flex flex-col items-center text-center mb-24">
                  <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">
                    Process
                  </span>
                  <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight">
                    How We Work
                  </h2>
                </div>

                {/* Timeline Flow Container */}
                <div className="w-full relative max-w-5xl flex flex-col items-center">
                  {/* Connection Line */}
                  <div className="absolute top-[22px] left-[10%] right-[10%] h-[2px] bg-[#022e54]/60 z-0 hidden md:block" />

                  {/* 5-Step timeline columns */}
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 w-full relative z-10">
                    {[
                      { step: 1, text: "Understand business workflow" },
                      { step: 2, text: "Plan ERP modules" },
                      { step: 3, text: "Design user-friendly dashboards" },
                      { step: 4, text: "Develop and integrate system" },
                      { step: 5, text: "Test, launch, and optimize" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center space-y-6">
                        {/* Step Number Circle Indicator */}
                        <div className="w-11 h-11 rounded-full border border-[#539be2]/60 bg-[#010c17] flex items-center justify-center text-[#539be2] font-semibold text-[16px] shadow-[0_0_15px_rgba(83,155,226,0.15)] select-none">
                          {item.step}
                        </div>

                        {/* Text Pill Box */}
                        <div className="w-full border border-[#022e54]/80 bg-[#021627]/40 px-4 py-4 rounded-[18px] min-h-[96px] flex items-center justify-center hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300">
                          <p className="font-sans text-[13px] sm:text-[14px] leading-relaxed font-medium text-slate-200">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section - Get In Touch */}
            <section className="w-full bg-white text-slate-900 py-24 md:py-32 flex flex-col items-center">
              <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
                <span className="text-[15px] font-semibold tracking-wide text-slate-500 mb-5 uppercase font-sans">
                  Get In Touch
                </span>
                
                <h2 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-medium leading-[1.15] text-slate-900 tracking-tight mb-6 max-w-3xl">
                  Ready to transform <br />
                  your business <br />
                  <span className="text-[#1b5ea3] font-medium">digitally?</span>
                </h2>
                
                <p className="font-sans text-[16px] sm:text-[17px] leading-relaxed text-slate-500 max-w-2xl mb-10">
                  Let us architect the digital infrastructure your business deserves.
                </p>
                
                <button 
                  onClick={() => navigateToContact(2)}
                  className="bg-black hover:bg-slate-900 text-white px-9 py-4 rounded-full text-[15px] font-semibold flex items-center gap-2.5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md"
                >
                  Let's Talk
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </section>
          </>
        )}

        {view === 'automation' && (
          <>
            {/* Automation Page 1: Hero */}
            <section id="automation" className="w-full relative lg:aspect-[3/2] bg-[#07080a] flex flex-col justify-between">
              {/* Desktop split layout */}
              <div className="absolute inset-0 hidden lg:grid lg:grid-cols-2">
                <div className="bg-[#07080a] w-full h-full"></div>
                <div className="bg-[#07080a] w-full h-full relative overflow-hidden flex items-center justify-center p-12">
                  <div className="absolute inset-0 bg-[#07080a] mix-blend-overlay z-10"></div>
                  <div className="relative z-0 w-full max-w-lg aspect-square rounded-[40px] overflow-hidden shadow-[0_0_80px_rgba(83,155,226,0.15)] ring-1 ring-[#539be2]/20 group">
                    <img 
                      src={automationImg} 
                      alt="Business Automation" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#021627]/60 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-32 flex flex-col items-start lg:w-1/2">
                <span className="font-sans text-[14px] font-semibold tracking-widest text-[#539be2] uppercase mb-4">
                  Galletrix Service
                </span>
                <h1 className="font-serif text-[48px] sm:text-[56px] md:text-[68px] font-medium leading-[1.12] text-white tracking-tight mb-8">
                  Business Automation
                </h1>
                <p className="font-sans text-[20px] md:text-[22px] font-medium text-[#539be2] leading-snug mb-6 max-w-lg">
                  Automate workflows and save time.
                </p>
                <p className="font-sans text-[16px] sm:text-[17px] leading-[1.7] text-slate-300 max-w-md mb-12">
                  Galletrix helps businesses reduce repetitive manual tasks through smart automation systems that improve speed, accuracy, and productivity.
                </p>
              </div>

              {/* Mobile Block Image */}
              <div className="w-full lg:hidden bg-[#07080a] py-12 px-6">
                <div className="w-full aspect-square rounded-[32px] overflow-hidden shadow-[0_0_60px_rgba(83,155,226,0.15)] ring-1 ring-[#539be2]/20 relative">
                  <img 
                    src={automationImg} 
                    alt="Business Automation" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#021627]/60 to-transparent"></div>
                </div>
              </div>
            </section>

            {/* Automation Page 2: Overview & Key Features */}
            <section id="automation-page-2" className="w-full bg-[#07080a] py-24 md:py-32 lg:py-40 border-t border-slate-900/60 flex flex-col items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center animate-fade-in">
                
                {/* Upper Half: Overview */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
                  <div className="lg:col-span-4 flex flex-col">
                    <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">
                      Overview
                    </span>
                    <h2 className="font-serif text-[42px] sm:text-[48px] font-medium leading-[1.15] text-white tracking-tight">
                      What We <span className="text-[#1b5ea3]">Deliver</span>
                    </h2>
                  </div>
                  <div className="lg:col-span-8 flex items-center">
                    <p className="font-sans text-[16px] sm:text-[18px] leading-[1.8] text-slate-300">
                      Business automation helps companies simplify daily operations, reduce human errors, automate approvals, trigger notifications, and improve workflow efficiency. By replacing manual processes with intelligent automation, teams can focus on high-value work while systems handle routine tasks with precision and reliability.
                    </p>
                  </div>
                </div>

                {/* Lower Half: Key Features Grid */}
                <div className="flex flex-col items-center text-center w-full mb-16">
                  <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">
                    Capabilities
                  </span>
                  <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight mb-20">
                    Key Features
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {/* Card 1: Workflow Automation */}
                    <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>
                      </div>
                      <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Workflow Automation</h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Automate complex business workflows with intelligent triggers, conditions, and actions.</p>
                    </div>
                    {/* Card 2: Task Automation */}
                    <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Task Automation</h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Eliminate repetitive manual tasks and let smart systems handle routine operations.</p>
                    </div>
                    {/* Card 3: Approval Flows */}
                    <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                      </div>
                      <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Approval Flows</h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Streamline multi-level approval processes with automated routing and notifications.</p>
                    </div>
                    {/* Card 4: Smart Notifications */}
                    <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Smart Notifications</h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Trigger automated alerts and notifications based on business events and deadlines.</p>
                    </div>
                    {/* Card 5: Process Tracking */}
                    <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </div>
                      <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Process Tracking</h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Monitor automated processes in real-time with detailed logs and performance metrics.</p>
                    </div>
                    {/* Card 6: Automated Reports */}
                    <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                      </div>
                      <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Automated Reports</h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Generate and distribute business reports automatically on schedule or by trigger.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Automation Page 3: Business Benefits & Process */}
            <section id="automation-page-3" className="w-full bg-[#07080a] py-24 md:py-32 lg:py-40 border-t border-slate-900/60 min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-between items-center animate-fade-in">
                {/* Upper Half: Business Benefits */}
                <div className="flex flex-col items-center text-center mb-16 w-full">
                  <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">
                    Advantages
                  </span>
                  <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight mb-16">
                    Business Benefits
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mb-36">
                    {[
                      "Less manual work",
                      "Faster approvals",
                      "Reduced errors",
                      "Improved productivity",
                      "Better process visibility",
                      "More efficient team operations"
                    ].map((benefit, i) => (
                      <div key={i} className="border border-[#022e54]/80 bg-[#021627]/40 px-6 py-5 rounded-[18px] flex items-center gap-4 hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300">
                        <svg className="w-6 h-6 text-[#539be2] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" /></svg>
                        <span className="font-sans text-[16px] sm:text-[17px] font-medium text-slate-200">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lower Half: How We Work Timeline */}
                <div className="flex flex-col items-center text-center mb-24 w-full">
                  <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">
                    Process
                  </span>
                  <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight">
                    How We Work
                  </h2>
                </div>

                <div className="w-full relative max-w-5xl flex flex-col items-center">
                  <div className="absolute top-[22px] left-[10%] right-[10%] h-[2px] bg-[#022e54]/60 z-0 hidden md:block" />
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 w-full relative z-10">
                    {[
                      { step: 1, text: "Identify repetitive tasks" },
                      { step: 2, text: "Map business workflows" },
                      { step: 3, text: "Create automation logic" },
                      { step: 4, text: "Build and integrate automation system" },
                      { step: 5, text: "Monitor and improve performance" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center space-y-6">
                        <div className="w-11 h-11 rounded-full border border-[#539be2]/60 bg-[#07080a] flex items-center justify-center text-[#539be2] font-semibold text-[16px] shadow-[0_0_15px_rgba(83,155,226,0.15)] select-none">
                          {item.step}
                        </div>
                        <div className="w-full border border-[#022e54]/80 bg-[#021627]/40 px-4 py-4 rounded-[18px] min-h-[96px] flex items-center justify-center hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300">
                          <p className="font-sans text-[13px] sm:text-[14px] leading-relaxed font-medium text-slate-200">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Automation Page 4: Get In Touch */}
            <section className="w-full bg-white text-slate-900 py-24 md:py-32 flex flex-col items-center">
              <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
                <span className="text-[15px] font-semibold tracking-wide text-slate-500 mb-5 uppercase font-sans">
                  Get In Touch
                </span>
                <h2 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-medium leading-[1.15] text-slate-900 tracking-tight mb-6 max-w-3xl">
                  Ready to transform <br />
                  your business <br />
                  <span className="text-[#1b5ea3] font-medium">digitally?</span>
                </h2>
                <p className="font-sans text-[16px] sm:text-[17px] leading-relaxed text-slate-500 max-w-2xl mb-10">
                  Let us architect the digital infrastructure your business deserves.
                </p>
                <button onClick={() => navigateToContact(1)} className="bg-[#1b5ea3] hover:bg-blue-800 text-white px-9 py-4 rounded-full text-[15px] font-semibold flex items-center gap-2.5 transition-colors cursor-pointer shadow-md">
                  Contact Us
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </section>
          </>
        )}

        {view === 'web' && (
          <>
            {/* Web Page 1: Hero */}
            <section id="web" className="w-full relative lg:aspect-[3/2] bg-[#07080a] flex flex-col justify-between">
              {/* Desktop split layout */}
              <div className="absolute inset-0 hidden lg:grid lg:grid-cols-2">
                <div className="bg-[#07080a] w-full h-full"></div>
                <div className="bg-[#07080a] w-full h-full relative overflow-hidden flex items-center justify-center p-12">
                  <div className="absolute inset-0 bg-[#07080a] mix-blend-overlay z-10"></div>
                  <div className="relative z-0 w-full max-w-lg aspect-square rounded-[40px] overflow-hidden shadow-[0_0_80px_rgba(83,155,226,0.15)] ring-1 ring-[#539be2]/20 group">
                    <img 
                      src={webImg} 
                      alt="Web Application Development" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#021627]/60 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-32 flex flex-col items-start lg:w-1/2">
                <span className="font-sans text-[14px] font-semibold tracking-widest text-[#539be2] uppercase mb-4">
                  Galletrix Service
                </span>
                <h1 className="font-serif text-[48px] sm:text-[56px] md:text-[68px] font-medium leading-[1.12] text-white tracking-tight mb-8">
                  Web Application Development
                </h1>
                <p className="font-sans text-[20px] md:text-[22px] font-medium text-[#539be2] leading-snug mb-6 max-w-lg">
                  Build scalable and secure web platforms.
                </p>
                <p className="font-sans text-[16px] sm:text-[17px] leading-[1.7] text-slate-300 max-w-md mb-12">
                  Galletrix develops modern, secure, and high-performance web applications designed to support business operations, customer engagement, and digital growth.
                </p>
              </div>

              {/* Mobile Block Image */}
              <div className="w-full lg:hidden bg-[#07080a] py-12 px-6">
                <div className="w-full aspect-square rounded-[32px] overflow-hidden shadow-[0_0_60px_rgba(83,155,226,0.15)] ring-1 ring-[#539be2]/20 relative">
                  <img 
                    src={webImg} 
                    alt="Web Application Development" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#021627]/60 to-transparent"></div>
                </div>
              </div>
            </section>

            {/* Web Page 2: Overview & Key Features */}
            <section id="web-page-2" className="w-full bg-[#07080a] py-24 md:py-32 lg:py-40 border-t border-slate-900/60 flex flex-col items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center animate-fade-in">
                
                {/* Upper Half: Overview */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
                  <div className="lg:col-span-4 flex flex-col">
                    <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">
                      Overview
                    </span>
                    <h2 className="font-serif text-[42px] sm:text-[48px] font-medium leading-[1.15] text-white tracking-tight">
                      What We <span className="text-[#1b5ea3]">Deliver</span>
                    </h2>
                  </div>
                  <div className="lg:col-span-8 flex items-center">
                    <p className="font-sans text-[16px] sm:text-[18px] leading-[1.8] text-slate-300">
                      Web applications help businesses create powerful digital platforms for operations, customers, employees, bookings, reports, and online services. With custom-built web solutions, organizations can streamline processes, deliver exceptional user experiences, and scale their digital infrastructure alongside business growth.
                    </p>
                  </div>
                </div>

                {/* Lower Half: Key Features Grid */}
                <div className="flex flex-col items-center text-center w-full mb-16">
                  <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">
                    Capabilities
                  </span>
                  <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight mb-20">
                    Key Features
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {/* Card 1: Custom Web Applications */}
                    <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                      </div>
                      <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Custom Web Applications</h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Tailored web platforms built to solve specific business challenges and support growth.</p>
                    </div>
                    {/* Card 2: Admin Dashboards */}
                    <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                      </div>
                      <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Admin Dashboards</h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Powerful admin panels to manage content, users, data, and business operations.</p>
                    </div>
                    {/* Card 3: Responsive Design */}
                    <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                      </div>
                      <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Responsive Design</h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Pixel-perfect interfaces that work flawlessly across desktop, tablet, and mobile devices.</p>
                    </div>
                    {/* Card 4: Secure Architecture */}
                    <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      </div>
                      <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Secure Architecture</h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Enterprise-grade security with encrypted data, authentication, and access controls.</p>
                    </div>
                    {/* Card 5: API Integration */}
                    <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                      </div>
                      <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">API Integration</h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Seamless integration with third-party services, payment gateways, and business tools.</p>
                    </div>
                    {/* Card 6: Performance Optimization */}
                    <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </div>
                      <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Performance Optimization</h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Lightning-fast load times and smooth interactions through optimized code and architecture.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Web Page 3: Business Benefits & Process */}
            <section id="web-page-3" className="w-full bg-[#07080a] py-24 md:py-32 lg:py-40 border-t border-slate-900/60 min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-between items-center animate-fade-in">
                {/* Upper Half: Business Benefits */}
                <div className="flex flex-col items-center text-center mb-16 w-full">
                  <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">
                    Advantages
                  </span>
                  <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight mb-16">
                    Business Benefits
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mb-36">
                    {[
                      "Strong digital presence",
                      "Scalable business platform",
                      "Secure user experience",
                      "Smooth performance",
                      "Better customer engagement",
                      "Easy business management"
                    ].map((benefit, i) => (
                      <div key={i} className="border border-[#022e54]/80 bg-[#021627]/40 px-6 py-5 rounded-[18px] flex items-center gap-4 hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300">
                        <svg className="w-6 h-6 text-[#539be2] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" /></svg>
                        <span className="font-sans text-[16px] sm:text-[17px] font-medium text-slate-200">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lower Half: How We Work Timeline */}
                <div className="flex flex-col items-center text-center mb-24 w-full">
                  <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">
                    Process
                  </span>
                  <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight">
                    How We Work
                  </h2>
                </div>

                <div className="w-full relative max-w-5xl flex flex-col items-center">
                  <div className="absolute top-[22px] left-[10%] right-[10%] h-[2px] bg-[#022e54]/60 z-0 hidden md:block" />
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 w-full relative z-10">
                    {[
                      { step: 1, text: "Understand project requirements" },
                      { step: 2, text: "Plan features and user flow" },
                      { step: 3, text: "Design clean UI screens" },
                      { step: 4, text: "Develop frontend and backend" },
                      { step: 5, text: "Test, deploy, and maintain" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center space-y-6">
                        <div className="w-11 h-11 rounded-full border border-[#539be2]/60 bg-[#07080a] flex items-center justify-center text-[#539be2] font-semibold text-[16px] shadow-[0_0_15px_rgba(83,155,226,0.15)] select-none">
                          {item.step}
                        </div>
                        <div className="w-full border border-[#022e54]/80 bg-[#021627]/40 px-4 py-4 rounded-[18px] min-h-[96px] flex items-center justify-center hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300">
                          <p className="font-sans text-[13px] sm:text-[14px] leading-relaxed font-medium text-slate-200">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Web Page 4: Get In Touch */}
            <section className="w-full bg-white text-slate-900 py-24 md:py-32 flex flex-col items-center">
              <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
                <span className="text-[15px] font-semibold tracking-wide text-slate-500 mb-5 uppercase font-sans">
                  Get In Touch
                </span>
                <h2 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-medium leading-[1.15] text-slate-900 tracking-tight mb-6 max-w-3xl">
                  Ready to transform <br />
                  your business <br />
                  <span className="text-[#1b5ea3] font-medium">digitally?</span>
                </h2>
                <p className="font-sans text-[16px] sm:text-[17px] leading-relaxed text-slate-500 max-w-2xl mb-10">
                  Let us architect the digital infrastructure your business deserves.
                </p>
                <button onClick={() => navigateToContact(1)} className="bg-[#1b5ea3] hover:bg-blue-800 text-white px-9 py-4 rounded-full text-[15px] font-semibold flex items-center gap-2.5 transition-colors cursor-pointer shadow-md">
                  Contact Us
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </section>
          </>
        )}

        {view === 'dashboard' && (
          <>
            {/* Dashboard Page 1: Hero */}
            <section id="dashboard" className="w-full relative lg:aspect-[3/2] bg-[#07080a] flex flex-col justify-between">
              <div className="absolute inset-0 hidden lg:grid lg:grid-cols-2">
                <div className="bg-[#07080a] w-full h-full"></div>
                <div className="bg-[#07080a] w-full h-full relative overflow-hidden flex items-center justify-center p-12">
                  <div className="absolute inset-0 bg-[#07080a] mix-blend-overlay z-10"></div>
                  <div className="relative z-0 w-full max-w-lg aspect-square rounded-[40px] overflow-hidden shadow-[0_0_80px_rgba(83,155,226,0.15)] ring-1 ring-[#539be2]/20 group">
                    <img src={dashboardImg} alt="Dashboard & Analytics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#021627]/60 to-transparent"></div>
                  </div>
                </div>
              </div>
              <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-32 flex flex-col items-start lg:w-1/2">
                <span className="font-sans text-[14px] font-semibold tracking-widest text-[#539be2] uppercase mb-4">Galletrix Service</span>
                <h1 className="font-serif text-[48px] sm:text-[56px] md:text-[68px] font-medium leading-[1.12] text-white tracking-tight mb-8">Dashboard & Analytics</h1>
                <p className="font-sans text-[20px] md:text-[22px] font-medium text-[#539be2] leading-snug mb-6 max-w-lg">Turn data into clear insights.</p>
                <p className="font-sans text-[16px] sm:text-[17px] leading-[1.7] text-slate-300 max-w-md mb-12">Galletrix creates real-time data visualization systems that help businesses monitor performance, track operations, and make smarter decisions.</p>
              </div>
              <div className="w-full lg:hidden bg-[#07080a] py-12 px-6">
                <div className="w-full aspect-square rounded-[32px] overflow-hidden shadow-[0_0_60px_rgba(83,155,226,0.15)] ring-1 ring-[#539be2]/20 relative">
                  <img src={dashboardImg} alt="Dashboard & Analytics" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#021627]/60 to-transparent"></div>
                </div>
              </div>
            </section>

            {/* Dashboard Page 2: Overview & Features */}
            <section className="w-full bg-[#07080a] py-24 md:py-32 lg:py-40 border-t border-slate-900/60 flex flex-col items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
                  <div className="lg:col-span-4 flex flex-col">
                    <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">Overview</span>
                    <h2 className="font-serif text-[42px] sm:text-[48px] font-medium leading-[1.15] text-white tracking-tight">What We <span className="text-[#1b5ea3]">Deliver</span></h2>
                  </div>
                  <div className="lg:col-span-8 flex items-center">
                    <p className="font-sans text-[16px] sm:text-[18px] leading-[1.8] text-slate-300">Dashboards help businesses understand their data clearly, track important metrics, monitor performance, and make decisions based on real-time insights. With custom analytics solutions, organizations can explore data trends, identify growth opportunities, and maintain complete visibility across all operations.</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center w-full mb-16">
                  <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">Capabilities</span>
                  <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight mb-20">Key Features</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {/* Feature 1 */}
                    <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                      </div>
                      <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Real-time Dashboards</h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Live dashboards that update in real-time to show current metrics and performance.</p>
                    </div>
                    {/* Feature 2 */}
                    <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">KPI Tracking</h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Track key performance indicators across teams and goals to measure success.</p>
                    </div>
                    {/* Feature 3 */}
                    <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
                      </div>
                      <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Data Visualization</h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Turn complex data into easy-to-understand charts, graphs, and visual representations.</p>
                    </div>
                    {/* Feature 4 */}
                    <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                      </div>
                      <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Custom Reports</h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Automated report generation with customizable parameters for different stakeholders.</p>
                    </div>
                    {/* Feature 5 */}
                    <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Performance Metrics</h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Detailed insights into system usage, team productivity, and operational efficiency.</p>
                    </div>
                    {/* Feature 6 */}
                    <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                      </div>
                      <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Centralized Hub</h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Pull data from multiple sources into one unified dashboard for a complete overview.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Dashboard Page 3: Benefits & Process */}
            <section className="w-full bg-[#07080a] py-24 md:py-32 lg:py-40 border-t border-slate-900/60 min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-between items-center animate-fade-in">
                <div className="flex flex-col items-center text-center mb-16 w-full">
                  <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">Advantages</span>
                  <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight mb-16">Business Benefits</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mb-36">
                    {[
                      "Clear performance visibility",
                      "Better decision making",
                      "Real-time performance tracking",
                      "Better reporting",
                      "Easy data understanding",
                      "Improved business planning"
                    ].map((benefit, i) => (
                      <div key={i} className="border border-[#022e54]/80 bg-[#021627]/40 px-6 py-5 rounded-[18px] flex items-center gap-4 hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300">
                        <svg className="w-6 h-6 text-[#539be2] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" /></svg>
                        <span className="font-sans text-[16px] sm:text-[17px] font-medium text-slate-200">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-center text-center mb-24 w-full">
                  <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">Process</span>
                  <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight">How We Work</h2>
                </div>
                <div className="w-full relative max-w-5xl flex flex-col items-center">
                  <div className="absolute top-[22px] left-[10%] right-[10%] h-[2px] bg-[#022e54]/60 z-0 hidden md:block" />
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 w-full relative z-10">
                    {[
                      { step: 1, text: "Identify key metrics" },
                      { step: 2, text: "Connect data sources" },
                      { step: 3, text: "Design dashboard layout" },
                      { step: 4, text: "Build charts and reporting system" },
                      { step: 5, text: "Test insights and improve tracking" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center space-y-6">
                        <div className="w-11 h-11 rounded-full border border-[#539be2]/60 bg-[#07080a] flex items-center justify-center text-[#539be2] font-semibold text-[16px] shadow-[0_0_15px_rgba(83,155,226,0.15)] select-none">{item.step}</div>
                        <div className="w-full border border-[#022e54]/80 bg-[#021627]/40 px-4 py-4 rounded-[18px] min-h-[96px] flex items-center justify-center hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300">
                          <p className="font-sans text-[13px] sm:text-[14px] leading-relaxed font-medium text-slate-200">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Dashboard Page 4: CTA */}
            <section className="w-full bg-white text-slate-900 py-24 md:py-32 flex flex-col items-center">
              <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
                <span className="text-[15px] font-semibold tracking-wide text-slate-500 mb-5 uppercase font-sans">Get In Touch</span>
                <h2 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-medium leading-[1.15] text-slate-900 tracking-tight mb-6 max-w-3xl">Ready to transform <br/>your business <br/><span className="text-[#1b5ea3] font-medium">digitally?</span></h2>
                <p className="font-sans text-[16px] sm:text-[17px] leading-relaxed text-slate-500 max-w-2xl mb-10">Let us architect the digital infrastructure your business deserves.</p>
                <button onClick={() => navigateToContact(1)} className="bg-[#1b5ea3] hover:bg-blue-800 text-white px-9 py-4 rounded-full text-[15px] font-semibold flex items-center gap-2.5 transition-colors cursor-pointer shadow-md">
                  Contact Us
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </section>
          </>
        )}

        {view === 'marketing' && (
          <>
            {/* Marketing Page 1: Hero */}
            <section id="marketing" className="w-full relative lg:aspect-[3/2] bg-[#07080a] flex flex-col justify-between">
              <div className="absolute inset-0 hidden lg:grid lg:grid-cols-2">
                <div className="bg-[#07080a] w-full h-full"></div>
                <div className="bg-[#07080a] w-full h-full relative overflow-hidden flex items-center justify-center p-12">
                  <div className="absolute inset-0 bg-[#07080a] mix-blend-overlay z-10"></div>
                  <div className="relative z-0 w-full max-w-lg aspect-square rounded-[40px] overflow-hidden shadow-[0_0_80px_rgba(83,155,226,0.15)] ring-1 ring-[#539be2]/20 group">
                    <img src={marketingImg} alt="Digital Marketing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#021627]/60 to-transparent"></div>
                  </div>
                </div>
              </div>
              <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-32 flex flex-col items-start lg:w-1/2">
                <span className="font-sans text-[14px] font-semibold tracking-widest text-[#539be2] uppercase mb-4">Galletrix Service</span>
                <h1 className="font-serif text-[48px] sm:text-[56px] md:text-[68px] font-medium leading-[1.12] text-white tracking-tight mb-8">Digital Marketing</h1>
                <p className="font-sans text-[20px] md:text-[22px] font-medium text-[#539be2] leading-snug mb-6 max-w-lg">Grow your brand online.</p>
                <p className="font-sans text-[16px] sm:text-[17px] leading-[1.7] text-slate-300 max-w-md mb-12">Galletrix helps businesses improve online visibility, attract the right audience, and build stronger brand presence through strategic digital marketing.</p>
              </div>
              <div className="w-full lg:hidden bg-[#07080a] py-12 px-6">
                <div className="w-full aspect-square rounded-[32px] overflow-hidden shadow-[0_0_60px_rgba(83,155,226,0.15)] ring-1 ring-[#539be2]/20 relative">
                  <img src={marketingImg} alt="Digital Marketing" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#021627]/60 to-transparent"></div>
                </div>
              </div>
            </section>

            {/* Marketing Page 2: Overview & Features */}
            <section className="w-full bg-[#07080a] py-24 md:py-32 lg:py-40 border-t border-slate-900/60 flex flex-col items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
                  <div className="lg:col-span-4 flex flex-col">
                    <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">Overview</span>
                    <h2 className="font-serif text-[42px] sm:text-[48px] font-medium leading-[1.15] text-white tracking-tight">What We <span className="text-[#1b5ea3]">Deliver</span></h2>
                  </div>
                  <div className="lg:col-span-8 flex items-center">
                    <p className="font-sans text-[16px] sm:text-[18px] leading-[1.8] text-slate-300">Digital marketing helps businesses reach wider audiences, improve brand awareness, generate leads, and grow through online platforms. With data-driven strategies and creative execution, organizations can build meaningful connections with their audience, maximize marketing ROI, and establish a commanding digital presence.</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center w-full mb-16">
                  <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">Capabilities</span>
                  <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight mb-20">Key Features</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
                      </div>
                      <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Social Media Marketing</h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Strategic social media campaigns to build brand loyalty and engage your target audience.</p>
                    </div>
                    <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                      </div>
                      <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">SEO</h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Search engine optimization to improve search rankings and drive organic traffic.</p>
                    </div>
                    <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                      </div>
                      <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Content Creation</h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Compelling content creation and distribution strategies that attract and retain customers.</p>
                    </div>
                    <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                      </div>
                      <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Brand Presence</h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Build a consistent brand identity and presence across all digital touchpoints.</p>
                    </div>
                    <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                      </div>
                      <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Lead Generation</h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Targeted campaigns designed to capture qualified leads and convert them into customers.</p>
                    </div>
                    <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
                      </div>
                      <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Campaign Analytics</h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Data-driven performance tracking and continuous optimization for paid and organic campaigns.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Marketing Page 3: Benefits & Process */}
            <section className="w-full bg-[#07080a] py-24 md:py-32 lg:py-40 border-t border-slate-900/60 min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-between items-center animate-fade-in">
                <div className="flex flex-col items-center text-center mb-16 w-full">
                  <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">Advantages</span>
                  <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight mb-16">Business Benefits</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mb-36">
                    {[
                      "Better online visibility",
                      "More customer reach",
                      "Stronger brand identity",
                      "Improved lead generation",
                      "Measurable campaign results",
                      "Business growth through digital channels"
                    ].map((benefit, i) => (
                      <div key={i} className="border border-[#022e54]/80 bg-[#021627]/40 px-6 py-5 rounded-[18px] flex items-center gap-4 hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300">
                        <svg className="w-6 h-6 text-[#539be2] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" /></svg>
                        <span className="font-sans text-[16px] sm:text-[17px] font-medium text-slate-200">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-center text-center mb-24 w-full">
                  <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">Process</span>
                  <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight">How We Work</h2>
                </div>
                <div className="w-full relative max-w-5xl flex flex-col items-center">
                  <div className="absolute top-[22px] left-[10%] right-[10%] h-[2px] bg-[#022e54]/60 z-0 hidden md:block" />
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 w-full relative z-10">
                    {[
                      { step: 1, text: "Understand brand goals" },
                      { step: 2, text: "Plan digital marketing strategy" },
                      { step: 3, text: "Create campaign content" },
                      { step: 4, text: "Launch and manage campaigns" },
                      { step: 5, text: "Track results and optimize performance" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center space-y-6">
                        <div className="w-11 h-11 rounded-full border border-[#539be2]/60 bg-[#07080a] flex items-center justify-center text-[#539be2] font-semibold text-[16px] shadow-[0_0_15px_rgba(83,155,226,0.15)] select-none">{item.step}</div>
                        <div className="w-full border border-[#022e54]/80 bg-[#021627]/40 px-4 py-4 rounded-[18px] min-h-[96px] flex items-center justify-center hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300">
                          <p className="font-sans text-[13px] sm:text-[14px] leading-relaxed font-medium text-slate-200">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Marketing Page 4: CTA */}
            <section className="w-full bg-white text-slate-900 py-24 md:py-32 flex flex-col items-center">
              <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
                <span className="text-[15px] font-semibold tracking-wide text-slate-500 mb-5 uppercase font-sans">Get In Touch</span>
                <h2 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-medium leading-[1.15] text-slate-900 tracking-tight mb-6 max-w-3xl">Ready to transform <br/>your business <br/><span className="text-[#1b5ea3] font-medium">digitally?</span></h2>
                <p className="font-sans text-[16px] sm:text-[17px] leading-relaxed text-slate-500 max-w-2xl mb-10">Let us architect the digital infrastructure your business deserves.</p>
                <button onClick={() => navigateToContact(1)} className="bg-[#1b5ea3] hover:bg-blue-800 text-white px-9 py-4 rounded-full text-[15px] font-semibold flex items-center gap-2.5 transition-colors cursor-pointer shadow-md">
                  Contact Us
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </section>
          </>
        )}

        {view === 'uiux' && (
          <>
            {/* UIUX Page 1: Hero */}
            <section id="uiux" className="w-full relative lg:aspect-[3/2] bg-[#07080a] flex flex-col justify-between">
              <div className="absolute inset-0 hidden lg:grid lg:grid-cols-2">
                <div className="bg-[#07080a] w-full h-full"></div>
                <div className="bg-[#07080a] w-full h-full relative overflow-hidden flex items-center justify-center p-12">
                  <div className="absolute inset-0 bg-[#07080a] mix-blend-overlay z-10"></div>
                  <div className="relative z-0 w-full max-w-lg aspect-square rounded-[40px] overflow-hidden shadow-[0_0_80px_rgba(83,155,226,0.15)] ring-1 ring-[#539be2]/20 group">
                    <img src={uiuxImg} alt="UI/UX Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#021627]/60 to-transparent"></div>
                  </div>
                </div>
              </div>
              <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-32 flex flex-col items-start lg:w-1/2">
                <span className="font-sans text-[14px] font-semibold tracking-widest text-[#539be2] uppercase mb-4">Galletrix Service</span>
                <h1 className="font-serif text-[48px] sm:text-[56px] md:text-[68px] font-medium leading-[1.12] text-white tracking-tight mb-8">UI/UX Design</h1>
                <p className="font-sans text-[20px] md:text-[22px] font-medium text-[#539be2] leading-snug mb-6 max-w-lg">Design better user experiences.</p>
                <p className="font-sans text-[16px] sm:text-[17px] leading-[1.7] text-slate-300 max-w-md mb-12">Galletrix designs clean, modern, and user-friendly digital experiences for websites, mobile apps, dashboards, and software platforms.</p>
              </div>
              <div className="w-full lg:hidden bg-[#07080a] py-12 px-6">
                <div className="w-full aspect-square rounded-[32px] overflow-hidden shadow-[0_0_60px_rgba(83,155,226,0.15)] ring-1 ring-[#539be2]/20 relative">
                  <img src={uiuxImg} alt="UI/UX Design" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#021627]/60 to-transparent"></div>
                </div>
              </div>
            </section>

            {/* UIUX Page 2: Overview & Features */}
            <section className="w-full bg-[#07080a] py-24 md:py-32 lg:py-40 border-t border-slate-900/60 flex flex-col items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
                  <div className="lg:col-span-4 flex flex-col">
                    <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">Overview</span>
                    <h2 className="font-serif text-[42px] sm:text-[48px] font-medium leading-[1.15] text-white tracking-tight">What We <span className="text-[#1b5ea3]">Deliver</span></h2>
                  </div>
                  <div className="lg:col-span-8 flex items-center">
                    <p className="font-sans text-[16px] sm:text-[18px] leading-[1.8] text-slate-300">UI/UX design improves how users interact with digital products by making interfaces simple, attractive, easy to use, and business-focused. Through research-driven design processes and iterative refinement, we create digital experiences that delight users, strengthen brand perception, and drive meaningful engagement.</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center w-full mb-16">
                  <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">Capabilities</span>
                  <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight mb-20">Key Features</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                      </div>
                      <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">User Research</h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Deep user research and persona development to understand user behaviors, needs, and goals.</p>
                    </div>
                    <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
                      </div>
                      <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Wireframing</h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Structural blueprints that map out user journeys, content placement, and core functionality.</p>
                    </div>
                    <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      </div>
                      <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">UI Design</h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Pixel-perfect interface designs with modern aesthetics, consistent design systems, and brand alignment.</p>
                    </div>
                    <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
                      </div>
                      <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Prototyping</h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Interactive prototypes that simulate real user interactions and product flows before development.</p>
                    </div>
                    <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                      </div>
                      <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Design Systems</h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Scalable design libraries and component systems that ensure visual consistency across products.</p>
                    </div>
                    <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                      <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                      </div>
                      <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Usability Optimization</h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Continuous usability testing and optimization to improve conversion rates and user satisfaction.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* UIUX Page 3: Benefits & Process */}
            <section className="w-full bg-[#07080a] py-24 md:py-32 lg:py-40 border-t border-slate-900/60 min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-between items-center animate-fade-in">
                <div className="flex flex-col items-center text-center mb-16 w-full">
                  <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">Advantages</span>
                  <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight mb-16">Business Benefits</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mb-36">
                    {[
                      "Better user experience",
                      "Clean and modern interface",
                      "Improved user engagement",
                      "Easy navigation",
                      "Higher product usability",
                      "Stronger brand impression"
                    ].map((benefit, i) => (
                      <div key={i} className="border border-[#022e54]/80 bg-[#021627]/40 px-6 py-5 rounded-[18px] flex items-center gap-4 hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300">
                        <svg className="w-6 h-6 text-[#539be2] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" /></svg>
                        <span className="font-sans text-[16px] sm:text-[17px] font-medium text-slate-200">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-center text-center mb-24 w-full">
                  <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">Process</span>
                  <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight">How We Work</h2>
                </div>
                <div className="w-full relative max-w-5xl flex flex-col items-center">
                  <div className="absolute top-[22px] left-[10%] right-[10%] h-[2px] bg-[#022e54]/60 z-0 hidden md:block" />
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 w-full relative z-10">
                    {[
                      { step: 1, text: "Understand users and business goals" },
                      { step: 2, text: "Create user flows and wireframes" },
                      { step: 3, text: "Design visual UI screens" },
                      { step: 4, text: "Build interactive prototypes" },
                      { step: 5, text: "Test, refine, and hand over to developers" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center space-y-6">
                        <div className="w-11 h-11 rounded-full border border-[#539be2]/60 bg-[#07080a] flex items-center justify-center text-[#539be2] font-semibold text-[16px] shadow-[0_0_15px_rgba(83,155,226,0.15)] select-none">{item.step}</div>
                        <div className="w-full border border-[#022e54]/80 bg-[#021627]/40 px-4 py-4 rounded-[18px] min-h-[96px] flex items-center justify-center hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300">
                          <p className="font-sans text-[13px] sm:text-[14px] leading-relaxed font-medium text-slate-200">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* UIUX Page 4: CTA */}
            <section className="w-full bg-white text-slate-900 py-24 md:py-32 flex flex-col items-center">
              <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
                <span className="text-[15px] font-semibold tracking-wide text-slate-500 mb-5 uppercase font-sans">Get In Touch</span>
                <h2 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-medium leading-[1.15] text-slate-900 tracking-tight mb-6 max-w-3xl">Ready to transform <br/>your business <br/><span className="text-[#1b5ea3] font-medium">digitally?</span></h2>
                <p className="font-sans text-[16px] sm:text-[17px] leading-relaxed text-slate-500 max-w-2xl mb-10">Let us architect the digital infrastructure your business deserves.</p>
                <button onClick={() => navigateToContact(1)} className="bg-[#1b5ea3] hover:bg-blue-800 text-white px-9 py-4 rounded-full text-[15px] font-semibold flex items-center gap-2.5 transition-colors cursor-pointer shadow-md">
                  Contact Us
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </section>
          </>
        )}

        {view === 'careers' && (
          <>
            {/* Careers Section with desktop background image overlay */}
            <section id="careers" className="w-full relative lg:aspect-[3/2] bg-[#07080a] flex flex-col justify-between">
              {/* Desktop Background Image */}
              <div className="absolute inset-0 hidden lg:block">
                <img 
                  src={careersImg} 
                  alt="Galletrix Careers" 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Text Content */}
              <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 flex flex-col items-start">
                {/* Subtitle */}
                <span className="text-[15px] font-medium tracking-wide text-slate-400 mb-5">
                  Careers at Galletrix
                </span>

                {/* Heading */}
                <h1 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-medium leading-[1.12] text-white tracking-tight mb-8 max-w-4xl">
                  Join Our Team
                </h1>

                {/* Description */}
                <p className="font-sans text-[16px] sm:text-[18px] md:text-[19px] leading-[1.65] text-slate-400 max-w-3xl mb-14">
                  We are looking for passionate individuals to help us build intelligent digital solutions. Explore our open positions and find where you fit in.
                </p>
              </div>

              {/* Mobile Block Image */}
              <div className="w-full lg:hidden">
                <img 
                  src={careersImg} 
                  alt="Galletrix Careers" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </section>

            {/* Careers Page 2: Why Work With Us Section */}
            <section id="careers-page-2" className="w-full bg-[#07080a] py-24 md:py-32 lg:py-40 border-t border-slate-900/60 min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center">
                
                {/* Subtitle & Heading */}
                <div className="w-full text-left mb-20 animate-fade-in">
                  <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase block">
                    Benefits
                  </span>
                  <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight">
                    Why Work With Us
                  </h2>
                </div>

                {/* 4-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 w-full animate-fade-in">
                  {/* Item 1 */}
                  <div className="flex flex-col text-left">
                    <h3 className="font-sans text-[18px] sm:text-[20px] font-semibold text-white tracking-tight mb-4">Real World Projects</h3>
                    <p className="font-sans text-[15px] leading-relaxed text-slate-400">
                      Work on impactful products, from enterprise CRM to internal dashboards.
                    </p>
                  </div>
                  {/* Item 2 */}
                  <div className="flex flex-col text-left">
                    <h3 className="font-sans text-[18px] sm:text-[20px] font-semibold text-white tracking-tight mb-4">Learning Culture</h3>
                    <p className="font-sans text-[15px] leading-relaxed text-slate-400">
                      Improve your skills through mentorship, workshops, and courses.
                    </p>
                  </div>
                  {/* Item 3 */}
                  <div className="flex flex-col text-left">
                    <h3 className="font-sans text-[18px] sm:text-[20px] font-semibold text-white tracking-tight mb-4">Creative Environment</h3>
                    <p className="font-sans text-[15px] leading-relaxed text-slate-400">
                      Bring ideas to life through design, development, and innovation without limits.
                    </p>
                  </div>
                  {/* Item 4 */}
                  <div className="flex flex-col text-left">
                    <h3 className="font-sans text-[18px] sm:text-[20px] font-semibold text-white tracking-tight mb-4">Growth Opportunities</h3>
                    <p className="font-sans text-[15px] leading-relaxed text-slate-400">
                      Build your career with projects that challenge, stretch, and develop your expertise.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Careers Page 3: Life at Galletrix */}
            <section id="careers-page-3" className="w-full bg-[#07080a] py-24 md:py-32 lg:py-40 border-t border-slate-900/60 min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 animate-fade-in">
                {/* Left Column */}
                <div className="flex flex-col justify-center">
                  <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">
                    Culture
                  </span>
                  <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight mb-8">
                    Life at Galletrix
                  </h2>
                  <p className="font-sans text-[18px] sm:text-[19px] leading-[1.6] text-white font-medium mb-6 max-w-lg">
                    Collaboration, creativity, and continuous learning.
                  </p>
                  <p className="font-sans text-[15px] leading-relaxed text-slate-400 max-w-lg">
                    We believe in building meaningful digital products through teamwork, problem-solving, and continuous improvement. Our team works together to create solutions that are simple, scalable, and business focused.
                  </p>
                </div>

                {/* Right Column: Pill Cards */}
                <div className="flex flex-col justify-center gap-6">
                  {/* Card 1 */}
                  <div className="border border-[#022e54]/80 bg-[#021627]/40 p-6 rounded-[24px] flex items-center gap-6 hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300">
                    <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                      </svg>
                    </div>
                    <span className="font-sans text-[17px] sm:text-[18px] font-semibold text-white tracking-tight">Collaborative Team</span>
                  </div>
                  {/* Card 2 */}
                  <div className="border border-[#022e54]/80 bg-[#021627]/40 p-6 rounded-[24px] flex items-center gap-6 hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300">
                    <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <span className="font-sans text-[17px] sm:text-[18px] font-semibold text-white tracking-tight">Modern Work Culture</span>
                  </div>
                  {/* Card 3 */}
                  <div className="border border-[#022e54]/80 bg-[#021627]/40 p-6 rounded-[24px] flex items-center gap-6 hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300">
                    <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="font-sans text-[17px] sm:text-[18px] font-semibold text-white tracking-tight">Innovation Focused Mindset</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Careers Page 4: Hiring Process Timeline */}
            <section id="careers-page-4" className="w-full bg-[#07080a] py-24 md:py-32 lg:py-40 border-t border-slate-900/60 min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-between items-center animate-fade-in">
                {/* Upper Half: Timeline Heading */}
                <div className="flex flex-col items-center text-center mb-24">
                  <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">
                    Hiring Process
                  </span>
                  <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight">
                    What We Look For
                  </h2>
                </div>

                {/* Timeline Flow Container */}
                <div className="w-full relative max-w-5xl flex flex-col items-center mb-36">
                  {/* Connection Line */}
                  <div className="absolute top-[22px] left-[12.5%] right-[12.5%] h-[2px] bg-[#022e54]/60 z-0 hidden md:block" />

                  {/* 4-Step timeline columns */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 w-full relative z-10">
                    {[
                      { step: 1, title: "Apply Online", text: "Submit your resume and portfolio through our online application form." },
                      { step: 2, title: "Initial Review", text: "Our team reviews your skills, experience, and fit for the role." },
                      { step: 3, title: "Interview", text: "We connect with you to understand your goals, skills, and personality." },
                      { step: 4, title: "Join the Team", text: "Start working on exciting products and projects with impact." }
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center space-y-6">
                        {/* Step Number Circle Indicator */}
                        <div className="w-11 h-11 rounded-full border border-[#539be2]/60 bg-[#07080a] flex items-center justify-center text-[#539be2] font-semibold text-[16px] shadow-[0_0_15px_rgba(83,155,226,0.15)] select-none">
                          {item.step}
                        </div>

                        {/* Text Pill Box */}
                        <div className="w-full border border-[#022e54]/80 bg-[#021627]/40 px-5 py-6 rounded-[18px] min-h-[140px] flex flex-col items-center justify-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300">
                          <h4 className="font-sans text-[16px] sm:text-[17px] font-semibold text-white tracking-tight mb-2">
                            {item.title}
                          </h4>
                          <p className="font-sans text-[13px] sm:text-[14px] leading-relaxed font-medium text-slate-300">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lower Half: What We Value Grid */}
                <div className="flex flex-col items-center text-center mb-16 w-full">
                  <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">
                    What We Value
                  </span>
                  <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight mb-16">
                    What We Look For
                  </h2>

                  {/* Grid for the 6 items */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mb-24">
                    {[
                      "Problem-solving Mindset",
                      "Willingness to Learn",
                      "Team Collaboration",
                      "Creative Thinking",
                      "Attention to Detail",
                      "Interest in Technology"
                    ].map((value, i) => (
                      <div 
                        key={i} 
                        className="border border-[#022e54]/80 bg-[#021627]/40 px-6 py-5 rounded-[18px] flex items-center gap-4 hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300"
                      >
                        {/* Checkmark outline SVG */}
                        <svg className="w-6 h-6 text-[#539be2] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                        </svg>
                        <span className="font-sans text-[16px] sm:text-[17px] font-medium text-slate-200">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Apply Now Button */}
                  <button 
                    onClick={() => navigateToContact(2)}
                    className="bg-[#e2942b] hover:bg-[#cc6f2a] text-white px-16 py-4 rounded-full text-[15px] font-semibold flex items-center justify-center transition-colors cursor-pointer shadow-lg w-full max-w-sm"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </section>

            {/* CTA Section - Get In Touch */}
            <section className="w-full bg-white text-slate-900 py-24 md:py-32 flex flex-col items-center">
              <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
                <span className="text-[15px] font-semibold tracking-wide text-slate-500 mb-5 uppercase font-sans">
                  Get In Touch
                </span>
                
                <h2 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-medium leading-[1.15] text-slate-900 tracking-tight mb-6 max-w-3xl">
                  Ready to transform <br />
                  your career <br />
                  <span className="text-[#1b5ea3] font-medium">with us?</span>
                </h2>
                
                <p className="font-sans text-[16px] sm:text-[17px] leading-relaxed text-slate-500 max-w-2xl mb-10">
                  Let us help you build a rewarding career at Galletrix.
                </p>
                
                <button 
                  onClick={() => navigateToContact(1)}
                  className="bg-[#1b5ea3] hover:bg-blue-800 text-white px-9 py-4 rounded-full text-[15px] font-semibold flex items-center gap-2.5 transition-colors cursor-pointer shadow-md"
                >
                  Contact Us
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </section>
          </>
        )}

        {view === 'other' && (
          <>
            {/* Other Pages Section displaying g.gif at the top */}
            <section id="other-page" className="w-full relative lg:aspect-[3/2] bg-[#07080a] flex flex-col justify-between min-h-[calc(100vh-6rem)] lg:min-h-0 animate-fade-in">
              {/* Desktop Background GIF */}
              <div className="absolute inset-0 hidden lg:block">
                <img 
                  src={gGif} 
                  alt="Galletrix Logo Animation" 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Mobile Block GIF */}
              <div className="w-full lg:hidden my-6">
                <img 
                  src={gGif} 
                  alt="Galletrix Logo Animation" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </section>

            {/* Page 2: Who We Are Section */}
            <section id="other-page-2" className="w-full bg-[#07080a] py-24 md:py-32 lg:py-40 border-t border-slate-900/60 min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-start animate-fade-in">
                {/* Heading */}
                <h2 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-medium leading-[1.12] text-white tracking-tight mb-6">
                  WHO WE ARE
                </h2>

                {/* Progress Status Bar */}
                <div className="w-full max-w-7xl h-[3px] bg-slate-800 mb-12 flex rounded-full overflow-hidden">
                  <div className="w-[45%] h-full bg-[#cc6f2a]" />
                </div>

                {/* Description Paragraph */}
                <p className="font-sans text-[16px] sm:text-[18px] md:text-[20px] leading-[1.7] text-slate-300 max-w-6xl mb-20">
                  Galletrix is built with a vision to transform business operations through intelligent digital solutions. We help companies automate workflows, improve productivity, and grow with reliable ERP, CRM, web, mobile, and automation systems.
                </p>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center w-full">
                  {/* Left Side: Why Choose Us & Pills */}
                  <div className="lg:col-span-6 flex flex-col items-start w-full">
                    <h3 className="font-sans text-[22px] md:text-[26px] font-semibold text-white tracking-tight mb-8">
                      Why Choose Us ?
                    </h3>

                    <div className="w-full space-y-4 max-w-md">
                      {[
                        "Smart Business Solutions",
                        "Scalable ERP & CRM Systems",
                        "Clean Web & App Experiences",
                        "Reliable Digital Support"
                      ].map((text, idx) => (
                        <div 
                          key={idx} 
                          className="border border-slate-800/80 bg-slate-950/20 px-6 py-4.5 rounded-xl text-[16px] font-medium text-slate-300 transition-all duration-300 hover:border-slate-700/60 hover:text-white"
                        >
                          {text}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side: Image g1.png */}
                  <div className="lg:col-span-6 flex justify-center w-full">
                    <img 
                      src={g1Img} 
                      alt="Why Choose Galletrix - Innovation in Hand" 
                      className="w-full max-w-lg h-auto object-cover rounded-[28px] shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Page 3: Real Business Problems Section */}
            <section id="other-page-3" className="w-full bg-[#07080a] py-24 md:py-32 lg:py-40 border-t border-slate-900/60 min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-start animate-fade-in">
                {/* Heading */}
                <h2 className="font-serif text-[36px] sm:text-[46px] md:text-[56px] font-medium leading-[1.15] text-white tracking-tight mb-6">
                  Built to solve real business problems
                </h2>

                {/* Progress Status Bar */}
                <div className="w-full max-w-7xl h-[3px] bg-slate-800 mb-12 flex rounded-full overflow-hidden">
                  <div className="w-[65%] h-full bg-[#cc6f2a]" />
                </div>

                {/* Description Paragraph */}
                <p className="font-sans text-[16px] sm:text-[18px] md:text-[20px] leading-[1.7] text-slate-300 max-w-6xl mb-16">
                  As a growing technology startup, Galletrix focuses on building practical digital solutions that help businesses manage operations, automate workflows, and improve productivity. Our work reflects the systems we design, the problems we solve, and the value we aim to create for modern businesses.
                </p>

                {/* Laptop Mockup Image */}
                <div className="w-full flex justify-center mt-6">
                  <img 
                    src={g2Img} 
                    alt="Galletrix Dashboard Solution Mockup" 
                    className="w-full h-auto object-cover rounded-[24px] md:rounded-[32px] shadow-2xl border border-slate-800/60"
                  />
                </div>
              </div>
            </section>

            {/* Page 4: Intelligent Tools Section */}
            <section id="other-page-4" className="w-full bg-[#07080a] py-24 md:py-32 lg:py-40 border-t border-slate-900/60 min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-start animate-fade-in">
                {/* Heading */}
                <h2 className="font-serif text-[36px] sm:text-[46px] md:text-[56px] font-medium leading-[1.15] text-white tracking-tight mb-6">
                  Intelligent tools, engineered for scale
                </h2>

                {/* Progress Status Bar */}
                <div className="w-full max-w-7xl h-[3px] bg-slate-800 mb-12 flex rounded-full overflow-hidden">
                  <div className="w-[85%] h-full bg-[#cc6f2a]" />
                </div>

                {/* Description Paragraph */}
                <p className="font-sans text-[16px] sm:text-[18px] md:text-[20px] leading-[1.7] text-slate-300 max-w-6xl mb-16">
                  We architect modern digital platforms that empower teams to collaborate, track workflows, and manage complex assets with absolute precision. Every interface is designed to maximize operational efficiency and accelerate business value.
                </p>

                {/* Laptop Mockup Image */}
                <div className="w-full flex justify-center mt-6">
                  <img 
                    src={g3Img} 
                    alt="Galletrix Workflow Asset Solution Mockup" 
                    className="w-full h-auto object-cover rounded-[24px] md:rounded-[32px] shadow-2xl border border-slate-800/60"
                  />
                </div>
              </div>
            </section>

            {/* Page 5: System Orchestration Section */}
            <section id="other-page-5" className="w-full bg-[#07080a] py-24 md:py-32 lg:py-40 border-t border-slate-900/60 min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-start animate-fade-in">
                {/* Heading */}
                <h2 className="font-serif text-[36px] sm:text-[46px] md:text-[56px] font-medium leading-[1.15] text-white tracking-tight mb-6">
                  Connecting systems, automating workflows
                </h2>

                {/* Progress Status Bar */}
                <div className="w-full max-w-7xl h-[3px] bg-slate-800 mb-12 flex rounded-full overflow-hidden">
                  <div className="w-[100%] h-full bg-[#cc6f2a]" />
                </div>

                {/* Description Paragraph */}
                <p className="font-sans text-[16px] sm:text-[18px] md:text-[20px] leading-[1.7] text-slate-300 max-w-6xl mb-16">
                  Our platforms integrate data streams, orchestrate background tasks, and trigger intelligent actions automatically. We ensure your software stack operates in perfect harmony, removing friction and reducing manual effort.
                </p>

                {/* Orchestration GIF */}
                <div className="w-full flex justify-center mt-6">
                  <img 
                    src={g5Gif} 
                    alt="Galletrix System Orchestration Animation" 
                    className="w-full h-auto object-cover rounded-[24px] md:rounded-[32px] shadow-2xl border border-slate-800/60"
                  />
                </div>
              </div>
            </section>

            {/* Page 6: Enterprise Solutions Card Grid Section */}
            <section id="other-page-6" className="w-full relative bg-[#07080a] py-24 md:py-32 border-t border-slate-900/60 min-h-screen flex items-center overflow-hidden">
              {/* Blurred background solutions image overlay */}
              <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none select-none">
                <img 
                  src={g2Img} 
                  alt="" 
                  className="w-full h-full object-cover filter blur-[4px]"
                />
              </div>

              <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-start animate-fade-in">
                {/* Subtitle */}
                <span className="font-sans text-[15px] font-medium tracking-wide text-slate-400 mb-5">
                  What We Do
                </span>
                
                {/* Heading */}
                <h2 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-medium leading-[1.12] text-white tracking-tight mb-20">
                  Enterprise Solutions, Engineered
                </h2>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
                  {/* Card 1: ERP Solutions */}
                  <a 
                    href="#erp"
                    onClick={() => setView('erp')}
                    className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] flex flex-col justify-start hover:border-slate-700/60 hover:scale-[1.01] transition-all duration-300 text-left cursor-pointer"
                  >
                    <div className="text-slate-300 mb-6">
                      <svg className="w-6 h-6 text-slate-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7c0-1.657 3.582-3 8-3s8 1.343 8 3M4 7c0 1.657 3.582 3 8 3s8-1.343 8-3M4 7v10c0 1.657 3.582 3 8 3s8-1.343 8-3V7M4 12c0 1.657 3.582 3 8 3s8-1.343 8-3" />
                      </svg>
                    </div>
                    <h3 className="font-sans text-[20px] md:text-[22px] font-semibold text-white tracking-tight mb-4">
                      ERP Solutions
                    </h3>
                    <p className="font-sans text-[14px] sm:text-[15px] leading-[1.65] text-slate-400">
                      Unified enterprise resource planning systems that integrate every facet of your operations into a single, intelligent platform.
                    </p>
                  </a>

                  {/* Card 2: Business Automation */}
                  <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] flex flex-col justify-start hover:border-slate-700/60 transition-all duration-300">
                    <div className="text-slate-300 mb-6">
                      <svg className="w-6 h-6 text-slate-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v4M12 10H5v4M12 10h7v4M12 10v4M10 2h4v4h-4zM3 14h4v4H3zM10 14h4v4h-4zM17 14h4v4h-4z" />
                      </svg>
                    </div>
                    <h3 className="font-sans text-[20px] md:text-[22px] font-semibold text-white tracking-tight mb-4">
                      Business Automation
                    </h3>
                    <p className="font-sans text-[14px] sm:text-[15px] leading-[1.65] text-slate-400">
                      Eliminate manual processes with intelligent automation that adapts to your workflows and scales with your growth.
                    </p>
                  </div>

                  {/* Card 3: Web Application Development */}
                  <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] flex flex-col justify-start hover:border-slate-700/60 transition-all duration-300">
                    <div className="text-slate-300 mb-6">
                      <svg className="w-6 h-6 text-slate-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                      </svg>
                    </div>
                    <h3 className="font-sans text-[20px] md:text-[22px] font-semibold text-white tracking-tight mb-4">
                      Web Application Development
                    </h3>
                    <p className="font-sans text-[14px] sm:text-[15px] leading-[1.65] text-slate-400">
                      Custom-built, high-performance web applications designed for scalability, security, and exceptional user experience.
                    </p>
                  </div>

                  {/* Card 4: Dashboard & Analytics */}
                  <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] flex flex-col justify-start hover:border-slate-700/60 transition-all duration-300">
                    <div className="text-slate-300 mb-6">
                      <svg className="w-6 h-6 text-slate-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 20V10M12 20V4M6 20v-6" />
                      </svg>
                    </div>
                    <h3 className="font-sans text-[20px] md:text-[22px] font-semibold text-white tracking-tight mb-4">
                      Dashboard & Analytics
                    </h3>
                    <p className="font-sans text-[14px] sm:text-[15px] leading-[1.65] text-slate-400">
                      Real-time data visualization and business intelligence tools that transform raw data into actionable insights.
                    </p>
                  </div>

                  {/* Card 5: Digital Marketing */}
                  <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] flex flex-col justify-start hover:border-slate-700/60 transition-all duration-300">
                    <div className="text-slate-300 mb-6">
                      <svg className="w-6 h-6 text-slate-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h3l3-9 4 18 3-12h5" />
                      </svg>
                    </div>
                    <h3 className="font-sans text-[20px] md:text-[22px] font-semibold text-white tracking-tight mb-4">
                      Digital Marketing
                    </h3>
                    <p className="font-sans text-[14px] sm:text-[15px] leading-[1.65] text-slate-400">
                      Streamline complex business processes with visual workflow builders and automated task orchestration.
                    </p>
                  </div>

                  {/* Card 6: UIUX Design */}
                  <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] flex flex-col justify-start hover:border-slate-700/60 transition-all duration-300">
                    <div className="text-slate-300 mb-6">
                      <svg className="w-6 h-6 text-slate-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7c0-1.657 3.582-3 8-3s8 1.343 8 3M4 7c0 1.657 3.582 3 8 3s8-1.343 8-3M4 7v10c0 1.657 3.582 3 8 3s8-1.343 8-3V7M4 12c0 1.657 3.582 3 8 3s8-1.343 8-3" />
                      </svg>
                    </div>
                    <h3 className="font-sans text-[20px] md:text-[22px] font-semibold text-white tracking-tight mb-4">
                      UIUX Design
                    </h3>
                    <p className="font-sans text-[14px] sm:text-[15px] leading-[1.65] text-slate-400">
                      End-to-end digital transformation strategies that modernize legacy systems and unlock new business potential.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Page 7: Snapshots & Partner Section */}
            <section id="other-page-7" className="w-full bg-[#07080a] py-24 md:py-32 lg:py-40 border-t border-slate-900/60 min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch animate-fade-in">
                
                {/* Left Side: White Snapshots Card */}
                <div className="bg-white text-[#07080a] rounded-[32px] p-8 md:p-12 flex flex-col items-center justify-center shadow-2xl relative overflow-hidden">
                  <span className="font-serif text-[24px] md:text-[28px] text-slate-500 mb-2">
                    A snapshot of
                  </span>
                  <h2 className="font-serif text-[32px] md:text-[38px] font-bold text-[#07080a] mb-16 text-center">
                    What We deliver
                  </h2>

                  {/* 2x2 Grid with dividers */}
                  <div className="grid grid-cols-2 gap-x-10 gap-y-12 w-full relative">
                    {/* Horizontal Divider */}
                    <div className="absolute left-0 right-0 top-[50%] h-[1px] bg-slate-200" />
                    {/* Vertical Divider */}
                    <div className="absolute top-0 bottom-0 left-[50%] w-[1px] bg-slate-200" />
                    {/* Intersection Diamond */}
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-2.5 h-2.5 rotate-45 bg-slate-300 border border-white" />

                    {/* Sector 1: ERP & CRM */}
                    <div className="flex flex-col items-center text-center space-y-2 relative z-10 py-2">
                      <svg className="w-6 h-6 text-slate-700 mb-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7c0-1.657 3.582-3 8-3s8 1.343 8 3M4 7c0 1.657 3.582 3 8 3s8-1.343 8-3M4 7v10c0 1.657 3.582 3 8 3s8-1.343 8-3V7M4 12c0 1.657 3.582 3 8 3s8-1.343 8-3" />
                      </svg>
                      <h3 className="font-serif text-[18px] md:text-[20px] font-semibold text-[#07080a]">
                        ERP & CRM
                      </h3>
                      <p className="font-sans text-[13px] md:text-[14px] font-medium text-slate-500">
                        Business Systems
                      </p>
                    </div>

                    {/* Sector 2: Web & Mobile */}
                    <div className="flex flex-col items-center text-center space-y-2 relative z-10 py-2">
                      <svg className="w-6 h-6 text-slate-700 mb-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01" />
                      </svg>
                      <h3 className="font-serif text-[18px] md:text-[20px] font-semibold text-[#07080a]">
                        Web & Mobile
                      </h3>
                      <p className="font-sans text-[13px] md:text-[14px] font-medium text-slate-500">
                        Digital Products
                      </p>
                    </div>

                    {/* Sector 3: Automation */}
                    <div className="flex flex-col items-center text-center space-y-2 relative z-10 py-2">
                      <svg className="w-6 h-6 text-slate-700 mb-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <h3 className="font-serif text-[18px] md:text-[20px] font-semibold text-[#07080a]">
                        Automation
                      </h3>
                      <p className="font-sans text-[13px] md:text-[14px] font-medium text-slate-500">
                        Workflow Efficiency
                      </p>
                    </div>

                    {/* Sector 4: Analytics */}
                    <div className="flex flex-col items-center text-center space-y-2 relative z-10 py-2">
                      <svg className="w-6 h-6 text-slate-700 mb-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 20V10M12 20V4M6 20v-6" />
                      </svg>
                      <h3 className="font-serif text-[18px] md:text-[20px] font-semibold text-[#07080a]">
                        Analytics
                      </h3>
                      <p className="font-sans text-[13px] md:text-[14px] font-medium text-slate-500">
                        Actionable insights
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Side: Dark Card with g0.png Background */}
                <div className="relative rounded-[32px] overflow-hidden p-8 md:p-12 flex flex-col justify-between shadow-2xl text-white min-h-[500px] lg:min-h-0">
                  {/* Background Image g0.png */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={g0Img} 
                      alt="" 
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-blue-950/20 mix-blend-multiply" />
                  </div>

                  {/* Content (Title, Description, CTA Buttons) */}
                  <div className="relative z-10 flex flex-col justify-between h-full space-y-8">
                    <div className="space-y-6">
                      <h2 className="font-serif text-[32px] md:text-[38px] lg:text-[42px] font-medium leading-[1.2] text-white tracking-tight">
                        Looking for a trusted technology partner ? Let's build smarter syystems together.
                      </h2>
                      <p className="font-sans text-[15px] md:text-[16px] leading-[1.65] text-slate-200/90 max-w-lg">
                        Galletrix delivers ERP, CRM, Website, mobile app, and automation solutions that help businesses simplify operations and grow with confidence.
                      </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4 pt-4">
                      {/* Arrow Circular Button */}
                      <button 
                        onClick={() => navigateToContact(1)}
                        className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-slate-900 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                        aria-label="Contact Galletrix"
                      >
                        <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>

                      {/* Book a Demo Button */}
                      <button 
                        onClick={() => navigateToContact(2)}
                        className="bg-white text-slate-900 font-semibold px-8 py-4 rounded-2xl shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                      >
                        Book a Demo
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* Page 8: Selected Work Projects Section */}
            <section id="other-page-8" className="w-full bg-[#07080a] py-24 md:py-32 border-t border-slate-900/60 min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-start animate-fade-in">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between w-full mb-20">
                  <div className="space-y-4">
                    <span className="font-sans text-[15px] font-medium tracking-wide text-slate-400">
                      Selected Work
                    </span>
                    <h2 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-medium leading-[1.12] text-white tracking-tight">
                      Projects That Define Us
                    </h2>
                  </div>

                  <a 
                    href="#works" 
                    onClick={() => setView('works')}
                    className="flex items-center gap-2 text-[15px] font-semibold text-slate-300 hover:text-white transition-colors duration-200 mt-4 sm:mt-0 cursor-pointer group"
                  >
                    <span>View All Work</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1 duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
                  {/* Card 1: Enterprise ERP Platform */}
                  <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] flex flex-col justify-between hover:border-slate-700/60 transition-all duration-300 min-h-[340px]">
                    <div className="space-y-6">
                      <span className="text-[12px] font-bold uppercase tracking-widest text-[#cc6f2a]">
                        ERP
                      </span>
                      <h3 className="font-serif text-[24px] font-medium text-white tracking-tight leading-snug">
                        Enterprise ERP Platform
                      </h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-[1.65] text-slate-400">
                        End to end resource planning solution for a 500-person manufacturing company.
                      </p>
                    </div>
                    <div className="pt-8">
                      <a 
                        href="#works" 
                        onClick={() => setView('works')}
                        className="flex items-center gap-2 text-[14px] font-bold text-slate-300 hover:text-white cursor-pointer group/link"
                      >
                        <span>View Case Study</span>
                        <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1 duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Card 2: HR Automation Suite */}
                  <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] flex flex-col justify-between hover:border-slate-700/60 transition-all duration-300 min-h-[340px]">
                    <div className="space-y-6">
                      <span className="text-[12px] font-bold uppercase tracking-widest text-[#cc6f2a]">
                        AUTOMATION
                      </span>
                      <h3 className="font-serif text-[24px] font-medium text-white tracking-tight leading-snug">
                        HR Automation Suite
                      </h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-[1.65] text-slate-400">
                        End to end resource planning solution for a 500-person manufacturing company.
                      </p>
                    </div>
                    <div className="pt-8">
                      <a 
                        href="#works" 
                        onClick={() => setView('works')}
                        className="flex items-center gap-2 text-[14px] font-bold text-slate-300 hover:text-white cursor-pointer group/link"
                      >
                        <span>View Case Study</span>
                        <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1 duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Card 3: HR Automation Suite */}
                  <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] flex flex-col justify-between hover:border-slate-700/60 transition-all duration-300 min-h-[340px]">
                    <div className="space-y-6">
                      <span className="text-[12px] font-bold uppercase tracking-widest text-[#cc6f2a]">
                        AUTOMATION
                      </span>
                      <h3 className="font-serif text-[24px] font-medium text-white tracking-tight leading-snug">
                        HR Automation Suite
                      </h3>
                      <p className="font-sans text-[14px] sm:text-[15px] leading-[1.65] text-slate-400">
                        End to end resource planning solution for a 500-person manufacturing company.
                      </p>
                    </div>
                    <div className="pt-8">
                      <a 
                        href="#works" 
                        onClick={() => setView('works')}
                        className="flex items-center gap-2 text-[14px] font-bold text-slate-300 hover:text-white cursor-pointer group/link"
                      >
                        <span>View Case Study</span>
                        <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1 duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Page 9: Testimonials Section */}
            <section id="other-page-9" className="w-full bg-[#07080a] py-24 md:py-32 border-t border-slate-900/60 min-h-screen flex items-center">
              <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-start animate-fade-in">
                {/* Header Row */}
                <div className="flex flex-col items-start space-y-4 mb-16">
                  <span className="font-sans text-[15px] font-semibold tracking-wide text-white">
                    Testimonials
                  </span>
                  <h2 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-medium leading-[1.12] text-white tracking-tight">
                    What Our Clients Say
                  </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
                  {[...Array(3)].map((_, idx) => (
                    <div key={idx} className="bg-white text-slate-800 p-8 md:p-10 rounded-[28px] shadow-2xl flex flex-col justify-between min-h-[340px] hover:scale-[1.01] transition-all duration-300 relative">
                      <div className="space-y-6">
                        {/* Top Row: Stars and Quote Mark */}
                        <div className="flex justify-between items-center">
                          {/* 5 Stars */}
                          <div className="flex items-center gap-1 text-[#e2942b]">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>

                          {/* Quote SVG */}
                          <svg className="w-12 h-12 text-[#e0f7fc] fill-current" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.987z" />
                          </svg>
                        </div>

                        {/* Testimonial text */}
                        <p className="font-sans text-[15px] sm:text-[16px] leading-[1.65] text-slate-700">
                          “Galletrix’s Billing Solutions completely transformed our revenue cycle. We’ve seen a 30% reduction in late payments thanks to their automation.”
                        </p>
                      </div>

                      {/* Bottom Profile Row */}
                      <div className="flex items-center gap-4 mt-6">
                        {/* Avatar circular badge */}
                        <div className="w-12 h-12 rounded-full bg-[#7a1a1c] flex items-center justify-center text-white font-bold text-[15px] shadow-sm select-none">
                          SJ
                        </div>

                        {/* Name & Title */}
                        <div className="flex flex-col">
                          <span className="text-[16px] font-semibold text-[#07080a]">
                            Ganesh
                          </span>
                          <span className="text-[13px] font-medium text-slate-400">
                            Novel Interiors
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section - Get In Touch */}
            <section className="w-full bg-white text-slate-900 py-24 md:py-32 flex flex-col items-center">
              <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
                <span className="text-[15px] font-semibold tracking-wide text-slate-500 mb-5 uppercase font-sans">
                  Get In Touch
                </span>
                
                <h2 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-medium leading-[1.15] text-slate-900 tracking-tight mb-6 max-w-3xl">
                  Ready to transform <br />
                  your business <br />
                  <span className="text-[#1b5ea3] font-medium">digitally?</span>
                </h2>
                
                <p className="font-sans text-[16px] sm:text-[17px] leading-relaxed text-slate-500 max-w-2xl mb-10">
                  Let us architect the digital infrastructure your business deserves.
                </p>
                
                <button 
                  onClick={() => navigateToContact(2)}
                  className="bg-black hover:bg-slate-900 text-white px-9 py-4 rounded-full text-[15px] font-semibold flex items-center gap-2.5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md"
                >
                  Let's Talk
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </section>
          </>
        )}
      </main>

      {/* High-Fidelity Footer */}
      <footer className="w-full bg-[#07080a] border-t border-[#0091ff] pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
            {/* Brand and Description Column */}
            <div className="col-span-12 md:col-span-6 space-y-6">
              <span className="font-serif font-bold text-[22px] tracking-wide text-white block">
                GALLETRIX
              </span>
              <p className="text-slate-400 text-[15px] leading-relaxed max-w-sm">
                Architects of digital order. Building intelligent enterprise solutions for the modern era.
              </p>
              
              {/* Social Icons */}
              <div className="flex items-center space-x-6 pt-2">
                <a href="#instagram" className="text-slate-400 hover:text-white transition-colors duration-200" aria-label="Instagram">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#whatsapp" className="text-slate-400 hover:text-white transition-colors duration-200" aria-label="WhatsApp">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </a>
                <a href="#facebook" className="text-slate-400 hover:text-white transition-colors duration-200" aria-label="Facebook">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Links Columns */}
            <div className="col-span-12 md:col-span-6 grid grid-cols-3 gap-6 md:gap-8">
              {/* SOLUTIONS */}
              <div className="space-y-5">
                <h3 className="text-white text-[13px] font-bold tracking-wider uppercase">
                  SOLUTIONS
                </h3>
                <ul className="space-y-3.5">
                  <li><a href="#erp" className="text-slate-400 text-[14px] hover:text-white transition-colors duration-200">ERP Systems</a></li>
                  <li><a href="#automation" className="text-slate-400 text-[14px] hover:text-white transition-colors duration-200">Automation</a></li>
                  <li><a href="#web-development" className="text-slate-400 text-[14px] hover:text-white transition-colors duration-200">Web Development</a></li>
                  <li><a href="#analytics" className="text-slate-400 text-[14px] hover:text-white transition-colors duration-200">Analytics</a></li>
                </ul>
              </div>

              {/* Company */}
              <div className="space-y-5">
                <h3 className="text-white text-[13px] font-bold tracking-wider">
                  Company
                </h3>
                <ul className="space-y-3.5">
                  <li><a href="#about" onClick={() => setView('about')} className="text-slate-400 text-[14px] hover:text-white transition-colors duration-200">About Us</a></li>
                  <li><a href="#works" onClick={() => setView('works')} className="text-slate-400 text-[14px] hover:text-white transition-colors duration-200">Our Work</a></li>
                  <li><a href="#industry" onClick={() => setView('industry')} className="text-slate-400 text-[14px] hover:text-white transition-colors duration-200">Industries</a></li>
                  <li><a href="#contact" onClick={(e) => { e.preventDefault(); navigateToContact(1); }} className="text-slate-400 text-[14px] hover:text-white transition-colors duration-200">Contact</a></li>
                </ul>
              </div>

              {/* RESOURCES */}
              <div className="space-y-5">
                <h3 className="text-white text-[13px] font-bold tracking-wider uppercase">
                  RESOURCES
                </h3>
                <ul className="space-y-3.5">
                  <li><a href="#case-studies" className="text-slate-400 text-[14px] hover:text-white transition-colors duration-200">Case Studies</a></li>
                  <li><a href="#services" onClick={() => setView('services')} className="text-slate-400 text-[14px] hover:text-white transition-colors duration-200">Services</a></li>
                  <li><a href="#privacy-policy" className="text-slate-400 text-[14px] hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                  <li><a href="#support" className="text-slate-400 text-[14px] hover:text-white transition-colors duration-200">Support</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright Line */}
          <div className="mt-16 md:mt-24 pt-6 border-t border-slate-900/50 flex justify-start">
            <span className="text-slate-500 text-[11px] font-medium tracking-[0.1em] uppercase">
              @ {new Date().getFullYear()} GALLETRIX . ALL RIGHTS RESERVED
            </span>
          </div>

        </div>
      </footer>
    </div>
  )
}

export default App
