import React from 'react'
import industryImg from '../assets/industry.png'

interface IndustryProps {
  navigateToContact: (page: 1 | 2 | 3) => void;
}

const Industry: React.FC<IndustryProps> = ({ navigateToContact }) => {
  return (
    <>
      {/* Industry Section with desktop background image overlay */}
      <section id="industry" className="w-full relative lg:aspect-[3/2] bg-[#07080a] flex flex-col justify-between lg:justify-center">
        {/* Desktop Background Image */}
        <div className="absolute inset-0 hidden lg:block">
          <img 
            src={industryImg} 
            alt="Galletrix Industry Domains Globe" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 lg:pt-0 flex flex-col items-start">
          {/* Subtitle */}
          <span className="text-[15px] font-medium tracking-wide text-slate-400 mb-5">
            Industries We Serve
          </span>

          {/* Heading */}
          <h1 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-bold leading-[1.12] text-white tracking-tight mb-8 max-w-4xl">
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
  )
}

export default Industry
