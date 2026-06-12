import React from 'react'
import webImg from '../assets/w23.png'

interface WebProps {
  navigateToContact: (page: 1 | 2 | 3) => void;
}

const Web: React.FC<WebProps> = ({ navigateToContact }) => {
  return (
    <>
      {/* Web Page 1: Hero */}
      <section id="web" className="w-full relative lg:aspect-[3/2] bg-[#07080a] flex flex-col justify-between">
        {/* Desktop split layout */}
        <div className="absolute inset-0 hidden lg:grid lg:grid-cols-2">
          <div className="bg-[#07080a] w-full h-full"></div>
          <div className="bg-[#07080a] w-full h-full relative overflow-hidden flex items-center justify-center p-12">
            <div className="absolute inset-0 bg-[#07080a] mix-blend-overlay z-10"></div>
            <div className="relative z-0 w-full max-w-lg aspect-square rounded-[40px] overflow-hidden shadow-[0_0_80px_rgba(83,155,226,0.15)] ring-1 ring-[#539be2]/20 group">
              <img 
                src={webImg} 
                alt="Web Application Development" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#021627]/60 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 md:pt-32 flex flex-col items-start lg:w-1/2">
          <span className="font-sans text-[14px] font-semibold tracking-widest text-[#539be2] uppercase mb-4">
            Galletrix Service
          </span>
          <h1 className="font-serif text-[48px] sm:text-[56px] md:text-[68px] font-medium leading-[1.12] text-white tracking-tight mb-8">
            Web Application Development
          </h1>
          <p className="font-sans text-[20px] md:text-[22px] font-medium text-[#539be2] leading-snug mb-6 max-w-lg">
            Build scalable and secure web platforms.
          </p>
          <p className="font-sans text-[16px] sm:text-[17px] leading-[1.7] text-slate-300 max-w-md mb-12">
            Galletrix develops modern, secure, and high-performance web applications designed to support business operations, customer engagement, and digital growth.
          </p>
        </div>

        {/* Mobile Block Image */}
        <div className="w-full lg:hidden bg-[#07080a] py-12 px-6">
          <div className="w-full aspect-square rounded-[32px] overflow-hidden shadow-[0_0_60px_rgba(83,155,226,0.15)] ring-1 ring-[#539be2]/20 relative">
            <img 
              src={webImg} 
              alt="Web Application Development" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#021627]/60 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Web Page 2: Overview & Key Features */}
      <section id="web-page-2" className="w-full bg-[#07080a] py-24 md:py-32 lg:py-40 border-t border-slate-900/60 flex flex-col items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center animate-fade-in">
          
          {/* Upper Half: Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
            <div className="lg:col-span-4 flex flex-col">
              <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">
                Overview
              </span>
              <h2 className="font-serif text-[42px] sm:text-[48px] font-medium leading-[1.15] text-white tracking-tight">
                What We <span className="text-[#1b5ea3]">Deliver</span>
              </h2>
            </div>
            <div className="lg:col-span-8 flex items-center">
              <p className="font-sans text-[16px] sm:text-[18px] leading-[1.8] text-slate-300">
                Web applications help businesses create powerful digital platforms for operations, customers, employees, bookings, reports, and online services. With custom-built web solutions, organizations can streamline processes, deliver exceptional user experiences, and scale their digital infrastructure alongside business growth.
              </p>
            </div>
          </div>

          {/* Lower Half: Key Features Grid */}
          <div className="flex flex-col items-center text-center w-full mb-16">
            <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">
              Capabilities
            </span>
            <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight mb-20">
              Key Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {/* Card 1: Custom Web Applications */}
              <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </div>
                <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Custom Web Applications</h3>
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Tailored web platforms built to solve specific business challenges and support growth.</p>
              </div>
              {/* Card 2: Admin Dashboards */}
              <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                </div>
                <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Admin Dashboards</h3>
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Powerful admin panels to manage content, users, data, and business operations.</p>
              </div>
              {/* Card 3: Responsive Design */}
              <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Responsive Design</h3>
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Pixel-perfect interfaces that work flawlessly across desktop, tablet, and mobile devices.</p>
              </div>
              {/* Card 4: Secure Architecture */}
              <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Secure Architecture</h3>
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Enterprise-grade security with encrypted data, authentication, and access controls.</p>
              </div>
              {/* Card 5: API Integration */}
              <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                </div>
                <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">API Integration</h3>
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Seamless integration with third-party services, payment gateways, and business tools.</p>
              </div>
              {/* Card 6: Performance Optimization */}
              <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Performance Optimization</h3>
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Lightning-fast load times and smooth interactions through optimized code and architecture.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web Page 3: Business Benefits & Process */}
      <section id="web-page-3" className="w-full bg-[#07080a] py-24 md:py-32 lg:py-40 border-t border-slate-900/60 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-between items-center animate-fade-in">
          {/* Upper Half: Business Benefits */}
          <div className="flex flex-col items-center text-center mb-16 w-full">
            <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">
              Advantages
            </span>
            <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight mb-16">
              Business Benefits
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mb-36">
              {[
                "Strong digital presence",
                "Scalable business platform",
                "Secure user experience",
                "Smooth performance",
                "Better customer engagement",
                "Easy business management"
              ].map((benefit, i) => (
                <div key={i} className="border border-[#022e54]/80 bg-[#021627]/40 px-6 py-5 rounded-[18px] flex items-center gap-4 hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300">
                  <svg className="w-6 h-6 text-[#539be2] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" /></svg>
                  <span className="font-sans text-[16px] sm:text-[17px] font-medium text-slate-200">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lower Half: How We Work Timeline */}
          <div className="flex flex-col items-center text-center mb-24 w-full">
            <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">
              Process
            </span>
            <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight">
              How We Work
            </h2>
          </div>

          <div className="w-full relative max-w-5xl flex flex-col items-center">
            <div className="absolute top-[22px] left-[10%] right-[10%] h-[2px] bg-[#022e54]/60 z-0 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 w-full relative z-10">
              {[
                { step: 1, text: "Understand project requirements" },
                { step: 2, text: "Plan features and user flow" },
                { step: 3, text: "Design clean UI screens" },
                { step: 4, text: "Develop frontend and backend" },
                { step: 5, text: "Test, deploy, and maintain" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-6">
                  <div className="w-11 h-11 rounded-full border border-[#539be2]/60 bg-[#07080a] flex items-center justify-center text-[#539be2] font-semibold text-[16px] shadow-[0_0_15px_rgba(83,155,226,0.15)] select-none">
                    {item.step}
                  </div>
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

      {/* Web Page 4: Get In Touch */}
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
          <button onClick={() => navigateToContact(1)} className="bg-[#1b5ea3] hover:bg-blue-800 text-white px-9 py-4 rounded-full text-[15px] font-semibold flex items-center gap-2.5 transition-colors cursor-pointer shadow-md">
            Contact Us
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </section>
    </>
  )
}

export default Web
