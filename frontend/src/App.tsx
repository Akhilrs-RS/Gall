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

function App() {
  const [view, setView] = useState<'about' | 'works' | 'industry' | 'contact' | 'services' | 'other'>('about')
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
            <div className="relative group">
              <a 
                href="#services"
                onClick={() => setView('services')}
                className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors duration-200 cursor-pointer ${
                  view === 'services' ? 'text-[#cc6f2a]' : 'text-slate-300 hover:text-white'
                }`}
              >
                Services
                <svg className={`w-3 h-3 mt-0.5 transition-colors ${view === 'services' ? 'text-[#cc6f2a]' : 'text-slate-400 group-hover:text-white'}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
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
                  <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] flex flex-col justify-start hover:border-slate-700/60 transition-all duration-300">
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
                  </div>

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
                  <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] flex flex-col justify-start hover:border-slate-700/60 transition-all duration-300">
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
                  </div>

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
