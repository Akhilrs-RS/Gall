import React from 'react'
import type { ViewState } from '../types'
import gGif from '../assets/g.gif'
import g1Img from '../assets/g1.png'
import g2Img from '../assets/g2.png'
import g3Img from '../assets/g3.png'
import maVid from '../assets/ma.mp4'
import g0Img from '../assets/g0.png'
import l3Img from '../assets/l3.png'

interface OtherProps {
  setView: (view: ViewState) => void;
  navigateToContact: (page: 1 | 2 | 3) => void;
}

const Other: React.FC<OtherProps> = ({ setView, navigateToContact }) => {
  return (
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
              src={l3Img} 
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

          {/* Orchestration Video */}
          <div className="w-full flex justify-center mt-6">
            <video 
              src={maVid} 
              autoPlay 
              loop 
              muted 
              playsInline 
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
  )
}

export default Other
