import React from 'react'
import worksImg from '../assets/work.png'

interface WorksProps {
  navigateToContact: (page: 1 | 2 | 3) => void;
}

const Works: React.FC<WorksProps> = ({ navigateToContact }) => {
  return (
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

export default Works
