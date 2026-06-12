import React from 'react'
import erpImg from '../assets/erp.png'

interface ErpProps {
  navigateToContact: (page: 1 | 2 | 3) => void;
}

const Erp: React.FC<ErpProps> = ({ navigateToContact }) => {
  return (
    <>
      {/* ERP Solutions Page */}
      <section id="erp" className="w-full bg-[#07080a] min-h-[calc(100vh-6rem)] flex items-center pt-28 pb-20 md:pt-36 md:pb-28 animate-fade-in">
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
  )
}

export default Erp
