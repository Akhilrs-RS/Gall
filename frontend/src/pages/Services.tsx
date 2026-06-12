import React from 'react'
import servicesImg from '../assets/Service.png'

interface ServicesProps {
  view: 'about' | 'works' | 'industry' | 'contact' | 'services' | 'erp' | 'automation' | 'web' | 'dashboard' | 'marketing' | 'uiux' | 'careers' | 'other';
  setView: React.Dispatch<React.SetStateAction<'about' | 'works' | 'industry' | 'contact' | 'services' | 'erp' | 'automation' | 'web' | 'dashboard' | 'marketing' | 'uiux' | 'careers' | 'other'>>;
  navigateToContact: (page: 1 | 2 | 3) => void;
}

const Services: React.FC<ServicesProps> = ({ setView, navigateToContact }) => {
  return (
    <>
      {/* Services Section with desktop background image overlay */}
      <section id="services" className="w-full relative lg:aspect-[3/2] bg-[#07080a] flex flex-col justify-between lg:justify-center min-h-[calc(100vh-6rem)] lg:min-h-0 animate-fade-in">
        {/* Desktop Background Image */}
        <div className="absolute inset-0 hidden lg:block">
          <img 
            src={servicesImg} 
            alt="Galletrix Services - Precision-Engineered Digital Solutions" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 lg:pt-0 flex flex-col items-start">
          {/* Subtitle */}
          <span className="text-[15px] font-medium tracking-wide text-slate-400 mb-5">
            Our Services
          </span>

          {/* Heading */}
          <h1 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-bold leading-[1.12] text-white tracking-tight mb-8 max-w-4xl">
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
      <section id="services-page-2" className="w-full bg-[#07080a] pt-16 pb-12 md:pt-24 md:pb-16 border-t border-slate-900/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full animate-fade-in">
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
      <section id="services-page-3" className="w-full bg-[#07080a] pt-12 pb-24 md:pt-16 md:pb-32 lg:pt-20 lg:pb-40 border-t border-slate-900/60">
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
  )
}

export default Services
