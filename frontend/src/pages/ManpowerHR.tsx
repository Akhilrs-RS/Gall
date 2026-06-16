import React, { useState } from 'react'
import w1Img from '../assets/w1.png'

interface ManpowerHRProps {
  navigateToContact: (page: 1 | 2 | 3) => void;
}

const ManpowerHR: React.FC<ManpowerHRProps> = ({ navigateToContact }) => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  return (
    <>
      {/* Hero Section */}
      <section id="manpower-hr-hero" className="w-full bg-[#07080a] pt-32 md:pt-40 pb-20 flex flex-col justify-center min-h-[calc(100vh-6rem)] lg:min-h-0">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="font-sans text-[14px] font-semibold tracking-widest text-[#539be2] uppercase mb-4">
              Workforce management systems
            </span>
            <h1 className="font-serif text-[48px] sm:text-[56px] md:text-[68px] font-bold leading-[1.12] text-white tracking-tight mb-8">
              Manpower & HR
            </h1>
            <p className="font-sans text-[16px] sm:text-[18px] leading-[1.7] text-slate-300 max-w-2xl">
              Galletrix helps manpower and HR teams manage employees, attendance, payroll, compliance, and workforce operations through smart digital platforms.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div className="relative z-0 w-full max-w-md aspect-[4/3] lg:aspect-square overflow-hidden shadow-[0_0_80px_rgba(83,155,226,0.15)] ring-1 ring-[#539be2]/20">
              <img 
                src={w1Img} 
                alt="Manpower & HR Solutions" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#021627]/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Understanding the Landscape */}
      <section id="manpower-hr-landscape" className="w-full bg-[#07080a] py-24 md:py-32 border-t border-slate-900/60 flex flex-col items-center">
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
                Managing a growing workforce manually leads to data errors, delay in compliance tracking, and administrative bottlenecks. Organizations struggle to process accurate attendance records, track shift rotations across multiple locations, and process payroll without errors, while ensuring compliance with dynamic labor laws.
              </p>
            </div>

            {/* The Galletrix Response */}
            <div className="border border-slate-800/60 bg-slate-950/10 p-8 md:p-10 rounded-[28px]">
              <h3 className="font-sans text-[20px] font-semibold text-white tracking-tight mb-4 uppercase text-[#539be2]">
                The Galletrix Response
              </h3>
              <p className="font-sans text-[15px] md:text-[16px] leading-[1.7] text-slate-400">
                Galletrix delivers integrated workforce management systems that handle employee onboarding, record management, shift scheduling, and automated compliance reporting. Our systems scale with your organization, making employee management automated and simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What We Build */}
      <section id="manpower-hr-what-we-build" className="w-full bg-[#07080a] py-24 md:py-32 border-t border-slate-900/60 flex flex-col items-center">
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.386 11.386 0 0110.089 20c-2.213 0-4.3-.632-6.09-1.73v-.109m0 0c0-1.113.285-2.16.786-3.07M4 19.128v.109a11.386 11.386 0 004.912.87c2.213 0 4.3-.632 6.09-1.73v-.109m-11.002-1.73a4.125 4.125 0 017.533-2.493M15 19.128a9.38 9.38 0 01-2.625.372 9.337 9.337 0 01-4.121-.952 4.125 4.125 0 017.533-2.493M18.81 11.026a4.5 4.5 0 10-7.525-4.053m0 0a4.5 4.5 0 017.525 4.053M9 6a3 3 0 100 6 3 3 0 000-6z" />
                </svg>
              </div>
              <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">
                Employee Record Management
              </h3>
              <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">
                Centralized database to store, track, and update employee personal details, work contracts, and compliance records.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-slate-700/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>
              </div>
              <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">
                Shift Scheduling
              </h3>
              <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">
                Automated shift planning, shift rotation management, and calendar integrations with real-time updates.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-slate-700/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">
                Compliance & HR Reporting
              </h3>
              <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">
                Ensure compliance with labor standards and dynamic local regulations, with automatic audits and logs.
              </p>
            </div>

            {/* Card 4 */}
            <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-slate-700/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5h.007m-.007 3h.007m-.007 3h.007m-.007 3h.007m-.007 3h.007m0 0h16.5m-16.5 0h.007m-2.25-13.5h16.5c1.03 0 2.13.84 2.13 1.87v14.26c0 1.03-.84 2.13-1.87 2.13H3.75c-1.03 0-1.87-.84-1.87-1.87V4.5c0-1.03.84-1.87 1.87-1.87z" />
                </svg>
              </div>
              <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">
                Payroll Integration
              </h3>
              <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">
                Calculate wages, manage payouts, track employee tax filings, and integrate with financial systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Business Benefits */}
      <section id="manpower-hr-benefits" className="w-full bg-[#07080a] py-24 md:py-32 border-t border-slate-900/60 flex flex-col items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">
              Advantages
            </span>
            <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight">
              Business Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
            {[
              "Centralized employee data",
              "Compliance tracking",
              "Attendance accuracy",
              "Reduced admin overhead"
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
      <section id="manpower-hr-reality" className="w-full bg-[#07080a] py-24 md:py-32 border-t border-slate-900/60 flex flex-col items-center">
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
                  Employee onboarding system
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
                  Automate the collection of employee documents, background verification, compliance declarations, and account setups, reducing manual errors and onboarding time by over 70%.
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
                  Compliance automation engine
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
                  Continuously monitor and enforce compliance with labor laws, work hours, overtime tracking, and mandatory certifications, generating alerts for potential violations.
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

export default ManpowerHR
