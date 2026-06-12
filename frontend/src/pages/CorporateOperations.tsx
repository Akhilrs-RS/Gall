import React, { useState } from 'react'
import z8Img from '../assets/z8.png'

interface CorporateOperationsProps {
  navigateToContact: (page: 1 | 2 | 3) => void;
}

const CorporateOperations: React.FC<CorporateOperationsProps> = ({ navigateToContact }) => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  return (
    <>
      {/* Hero Section */}
      <section id="corporate-operations-hero" className="w-full relative lg:aspect-[3/2] bg-[#07080a] flex flex-col justify-between">
        {/* Desktop split layout */}
        <div className="absolute inset-0 hidden lg:block">
          <div className="absolute inset-0 grid grid-cols-2">
            <div className="bg-[#07080a] w-full h-full"></div>
            <div className="bg-[#07080a] w-full h-full relative overflow-hidden flex items-center justify-center p-12">
              <div className="absolute inset-0 bg-[#07080a] mix-blend-overlay z-10"></div>
              <div className="relative z-0 w-full max-w-lg aspect-square rounded-[40px] overflow-hidden shadow-[0_0_80px_rgba(83,155,226,0.15)] ring-1 ring-[#539be2]/20 group">
                <img 
                  src={z8Img} 
                  alt="Corporate Operations Solutions" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#021627]/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 md:pt-32 flex flex-col items-start lg:w-1/2">
          <span className="font-sans text-[14px] font-semibold tracking-widest text-[#539be2] uppercase mb-4">
            Enterprise workflow systems
          </span>
          <h1 className="font-serif text-[48px] sm:text-[56px] md:text-[68px] font-bold leading-[1.12] text-white tracking-tight mb-8">
            Corporate Operations
          </h1>
          <p className="font-sans text-[16px] sm:text-[18px] leading-[1.7] text-slate-300 max-w-md mb-12">
            Galletrix creates enterprise systems that help organizations manage internal workflows, cross-department collaboration, operational operations, and process automation.
          </p>
          <button 
            onClick={() => navigateToContact(2)} 
            className="bg-[#cc6f2a] hover:bg-[#b86120] text-white px-8 py-3.5 rounded-full text-[15px] font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-lg shadow-amber-950/20"
          >
            Discuss Your Requirements
          </button>
        </div>

        {/* Mobile Block Image */}
        <div className="w-full lg:hidden bg-[#07080a] py-12 px-6">
          <div className="w-full aspect-square rounded-[32px] overflow-hidden shadow-[0_0_60px_rgba(83,155,226,0.15)] ring-1 ring-[#539be2]/20 relative">
            <img 
              src={z8Img} 
              alt="Corporate Operations Solutions" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#021627]/60 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Section 2: Understanding the Landscape */}
      <section id="corporate-operations-landscape" className="w-full bg-[#07080a] py-24 md:py-32 border-t border-slate-900/60 flex flex-col items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">
              Capabilities
            </span>
            <h2 className="font-serif text-[36px] md:text-[48px] font-bold text-white tracking-tight">
              Understanding the Landscape
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* The Challenge */}
            <div className="border border-slate-800/60 bg-slate-950/10 p-8 md:p-10 rounded-[28px]">
              <h3 className="font-sans text-[20px] font-semibold text-white tracking-tight mb-4 uppercase text-[#cc6f2a]">
                The Challenge
              </h3>
              <p className="font-sans text-[15px] md:text-[16px] leading-[1.7] text-slate-400">
                Large organisations struggle with disjointed workflows, siloed departments, and slow operational operations. It is difficult to track cross-department tasks, manage resources, and gather actionable business data.
              </p>
            </div>

            {/* The Galletrix Response */}
            <div className="border border-slate-800/60 bg-slate-950/10 p-8 md:p-10 rounded-[28px]">
              <h3 className="font-sans text-[20px] font-semibold text-white tracking-tight mb-4 uppercase text-[#539be2]">
                The Galletrix Response
              </h3>
              <p className="font-sans text-[15px] md:text-[16px] leading-[1.7] text-slate-400">
                Galletrix builds integrated enterprise platforms that connect departments, automate workflows, and provide management with real-time visibility into overall performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What We Build */}
      <section id="corporate-operations-what-we-build" className="w-full bg-[#07080a] py-24 md:py-32 border-t border-slate-900/60 flex flex-col items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="flex flex-col items-center text-center mb-20">
            <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">
              Solutions
            </span>
            <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight">
              What We Build
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Card 1 */}
            <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-slate-700/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">
                Corporate ERP
              </h3>
              <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">
                Custom ERP platforms built to manage human resources, logistics, finance, and operations in a unified dashboard.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-slate-700/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A1.24 1.24 0 0019 21l2-2a1.24 1.24 0 000-1.75l-5.83-5.83M11.42 15.17l2.83-2.83M11.42 15.17L3 6.75A1.24 1.24 0 013 5l2-2a1.24 1.24 0 011.75 0l8.42 8.42m-3.75 3.75l-2.83 2.83" />
                </svg>
              </div>
              <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">
                Internal Process Automation
              </h3>
              <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">
                Automate approval routing, notify key stakeholders, and eliminate bottlenecks in daily business operations.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-slate-700/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                </svg>
              </div>
              <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">
                Executive Dashboards
              </h3>
              <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">
                Track department KPIs, operational metrics, and employee productivity in a centralized control panel.
              </p>
            </div>

            {/* Card 4 */}
            <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-slate-700/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
              </div>
              <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">
                Cross-Department Workflows
              </h3>
              <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">
                Connect disjointed departmental software to pass data securely and trigger actions automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Business Impact */}
      <section id="corporate-operations-benefits" className="w-full bg-[#07080a] py-24 md:py-32 border-t border-slate-900/60 flex flex-col items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">
              Advantages
            </span>
            <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight">
              Business Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
            {[
              "Streamlined internal operations",
              "Better department collaboration",
              "Real-time status tracking",
              "Improved employee productivity"
            ].map((benefit, i) => (
              <div key={i} className="border border-slate-800/80 bg-slate-950/20 px-6 py-5 rounded-[18px] flex items-center gap-4 hover:border-slate-700/60 transition-all duration-300">
                <svg className="w-6 h-6 text-[#539be2] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                </svg>
                <span className="font-sans text-[16px] sm:text-[17px] font-medium text-slate-200">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Operational Reality */}
      <section id="corporate-operations-reality" className="w-full bg-[#07080a] py-24 md:py-32 border-t border-slate-900/60 flex flex-col items-center">
        <div className="max-w-4xl mx-auto px-6 w-full">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">
              Use Cases
            </span>
            <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight">
              Operational Reality
            </h2>
          </div>

          <div className="space-y-4 w-full">
            {/* Accordion 1 */}
            <div className="border border-slate-800/80 bg-slate-950/20 rounded-[20px] overflow-hidden">
              <button 
                onClick={() => toggleAccordion(0)}
                className="w-full px-8 py-6 flex justify-between items-center text-left focus:outline-none cursor-pointer"
              >
                <span className="font-sans text-[18px] md:text-[20px] font-semibold text-white">
                  Enterprise Workflow Tracker
                </span>
                <svg 
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${activeAccordion === 0 ? 'rotate-180 text-white' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeAccordion === 0 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8 text-slate-400 font-sans text-[15px] leading-relaxed border-t border-slate-900/40 pt-4">
                  Track active approval workflows, pending requests, and bottleneck departments in real-time, sending automatic reminders to key personnel.
                </div>
              </div>
            </div>

            {/* Accordion 2 */}
            <div className="border border-slate-800/80 bg-slate-950/20 rounded-[20px] overflow-hidden">
              <button 
                onClick={() => toggleAccordion(1)}
                className="w-full px-8 py-6 flex justify-between items-center text-left focus:outline-none cursor-pointer"
              >
                <span className="font-sans text-[18px] md:text-[20px] font-semibold text-white">
                  Executive Dashboard Control
                </span>
                <svg 
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${activeAccordion === 1 ? 'rotate-180 text-white' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeAccordion === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8 text-slate-400 font-sans text-[15px] leading-relaxed border-t border-slate-900/40 pt-4">
                  Provide management with aggregated performance graphs, historical trends, and prediction analytics for general corporate health.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Ready to transform */}
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
  )
}

export default CorporateOperations
