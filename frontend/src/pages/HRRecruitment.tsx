import React, { useState } from 'react'
import w2Img from '../assets/w2.png'

interface HRRecruitmentProps {
  navigateToContact: (page: 1 | 2 | 3) => void;
}

const HRRecruitment: React.FC<HRRecruitmentProps> = ({ navigateToContact }) => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  return (
    <>
      {/* Hero Section */}
      <section id="hr-recruitment-hero" className="w-full bg-[#07080a] pt-32 md:pt-40 pb-20 flex flex-col justify-center min-h-[calc(100vh-6rem)] lg:min-h-0">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="font-sans text-[14px] font-semibold tracking-widest text-[#539be2] uppercase mb-4">
              Advanced applicant tracking
            </span>
            <h1 className="font-serif text-[48px] sm:text-[56px] md:text-[68px] font-bold leading-[1.12] text-white tracking-tight mb-8">
              HR & Recruitment
            </h1>
            <p className="font-sans text-[16px] sm:text-[18px] leading-[1.7] text-slate-300 max-w-2xl">
              Galletrix builds recruitment platforms that help teams manage candidates, schedules, interviews, feedback and onboarding.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div className="relative z-0 w-full max-w-md aspect-[4/3] lg:aspect-square overflow-hidden shadow-[0_0_80px_rgba(83,155,226,0.15)] ring-1 ring-[#539be2]/20">
              <img 
                src={w2Img} 
                alt="HR & Recruitment Solutions" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#021627]/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Understanding the Landscape */}
      <section id="hr-recruitment-landscape" className="w-full bg-[#07080a] py-24 md:py-32 border-t border-slate-900/60 flex flex-col items-center">
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
                Recruiting talent at scale is challenging with manual processes, leading to delayed responses, disjointed communications, and missing records. Teams struggle to track candidate pipelines, schedule interviews across multiple calendars, and manage offer letters without errors.
              </p>
            </div>

            {/* The Galletrix Response */}
            <div className="border border-slate-800/60 bg-slate-950/10 p-8 md:p-10 rounded-[28px]">
              <h3 className="font-sans text-[20px] font-semibold text-white tracking-tight mb-4 uppercase text-[#539be2]">
                The Galletrix Response
              </h3>
              <p className="font-sans text-[15px] md:text-[16px] leading-[1.7] text-slate-400">
                Galletrix builds applicant tracking systems and recruitment platforms that automate pipeline management, candidate communications, scheduling, and onboarding. Our platforms help companies hire talent faster and scale team operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What We Build */}
      <section id="hr-recruitment-what-we-build" className="w-full bg-[#07080a] py-24 md:py-32 border-t border-slate-900/60 flex flex-col items-center">
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                </svg>
              </div>
              <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">
                Applicant Tracking
              </h3>
              <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">
                Centralized pipeline tracking from application to hire, with automated stage transitions and feedback tags.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-slate-700/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
              </div>
              <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">
                Interview Scheduling
              </h3>
              <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">
                Synchronized calendar booking, video meeting integration, automated notifications, and interviewer assignments.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-slate-700/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125v-3.75m16.5 0v3.75m-16.5-3.75v3.75" />
                </svg>
              </div>
              <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">
                Candidate Database
              </h3>
              <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">
                Talent pool index with resume parsing, tagging, smart search filters, and communication history.
              </p>
            </div>

            {/* Card 4 */}
            <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-slate-700/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">
                Offer Management
              </h3>
              <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">
                Automate offer generation, review processes, approval routing, and digital signature collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Business Impact */}
      <section id="hr-recruitment-benefits" className="w-full bg-[#07080a] py-24 md:py-32 border-t border-slate-900/60 flex flex-col items-center">
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
              "Faster time-to-hire",
              "Improved candidate experience",
              "Centralized talent pool",
              "Better recruitment analytics"
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
      <section id="hr-recruitment-reality" className="w-full bg-[#07080a] py-24 md:py-32 border-t border-slate-900/60 flex flex-col items-center">
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
                  Applicant tracking pipeline
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
                  Enable hiring managers and recruiters to filter resumes, move candidates across pipeline stages, add interviewer ratings, and keep communication histories in one place.
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
                  Interview coordination workflow
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
                  Integrate calendar availability across panels, automatically send candidate invites, provision virtual meeting links, and collect feedback immediately post-interview.
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

export default HRRecruitment
