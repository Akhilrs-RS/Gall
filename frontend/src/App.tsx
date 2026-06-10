import { useState, useEffect } from 'react'
import aboutImg from './assets/a1.jpg'
import aboutStoryImg from './assets/a2.png'
import industryImg from './assets/i1.png'
import contactImg from './assets/contact.png'
import worksImg from './assets/w1.png'

function App() {
  const [view, setView] = useState<'about' | 'works' | 'industry' | 'contact'>('about')
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
      if (hash === '#industry') {
        setView('industry')
      } else if (hash === '#works') {
        setView('works')
      } else if (hash === '#contact') {
        setView('contact')
        const override = (window as any).__contactPageOverride
        if (override === 1 || override === 2 || override === 3) {
          setContactScrollTarget(override)
          delete (window as any).__contactPageOverride
        } else {
          setContactScrollTarget(1)
        }
      } else {
        setView('about')
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
            <a href="/" className="font-outfit font-extrabold tracking-[0.18em] text-[22px] text-[#4ec2e0] hover:opacity-90 transition-opacity">
              GALLETRIX
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-10">
            <div className="relative group">
              <button className="flex items-center gap-1.5 text-[15px] font-medium text-slate-300 hover:text-white transition-colors duration-200 cursor-pointer">
                Services
                <svg className="w-3 h-3 text-slate-400 mt-0.5 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            <a 
              href="#about" 
              onClick={() => setView('about')}
              className={`text-[15px] font-medium transition-colors duration-200 ${
                view === 'about' ? 'text-white' : 'text-slate-300 hover:text-white'
              }`}
            >
              About
            </a>

            <div className="relative group">
              <a 
                href="#industry"
                onClick={() => setView('industry')}
                className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors duration-200 cursor-pointer ${
                  view === 'industry' ? 'text-white' : 'text-slate-300 hover:text-white'
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
                view === 'contact' ? 'text-white' : 'text-slate-300 hover:text-white'
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
                  <li><a href="#services" className="text-slate-400 text-[14px] hover:text-white transition-colors duration-200">Services</a></li>
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
