import React from 'react'
import uiuxImg from '../assets/u23.png'

interface UIUXProps {
  navigateToContact: (page: 1 | 2 | 3) => void;
}

const UIUX: React.FC<UIUXProps> = ({ navigateToContact }) => {
  return (
    <>
      {/* UIUX Page 1: Hero */}
      <section id="uiux" className="w-full relative lg:aspect-[3/2] bg-[#07080a] flex flex-col justify-between">
        <div className="absolute inset-0 hidden lg:grid lg:grid-cols-2">
          <div className="bg-[#07080a] w-full h-full"></div>
          <div className="bg-[#07080a] w-full h-full relative overflow-hidden flex items-center justify-center p-12">
            <div className="absolute inset-0 bg-[#07080a] mix-blend-overlay z-10"></div>
            <div className="relative z-0 w-full max-w-lg aspect-square rounded-[40px] overflow-hidden shadow-[0_0_80px_rgba(83,155,226,0.15)] ring-1 ring-[#539be2]/20 group">
              <img src={uiuxImg} alt="UI/UX Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#021627]/60 to-transparent"></div>
            </div>
          </div>
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-32 flex flex-col items-start lg:w-1/2">
          <span className="font-sans text-[14px] font-semibold tracking-widest text-[#539be2] uppercase mb-4">Galletrix Service</span>
          <h1 className="font-serif text-[48px] sm:text-[56px] md:text-[68px] font-medium leading-[1.12] text-white tracking-tight mb-8">UI/UX Design</h1>
          <p className="font-sans text-[20px] md:text-[22px] font-medium text-[#539be2] leading-snug mb-6 max-w-lg">Design better user experiences.</p>
          <p className="font-sans text-[16px] sm:text-[17px] leading-[1.7] text-slate-300 max-w-md mb-12">Galletrix designs clean, modern, and user-friendly digital experiences for websites, mobile apps, dashboards, and software platforms.</p>
        </div>
        <div className="w-full lg:hidden bg-[#07080a] py-12 px-6">
          <div className="w-full aspect-square rounded-[32px] overflow-hidden shadow-[0_0_60px_rgba(83,155,226,0.15)] ring-1 ring-[#539be2]/20 relative">
            <img src={uiuxImg} alt="UI/UX Design" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#021627]/60 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* UIUX Page 2: Overview & Features */}
      <section className="w-full bg-[#07080a] py-24 md:py-32 lg:py-40 border-t border-slate-900/60 flex flex-col items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
            <div className="lg:col-span-4 flex flex-col">
              <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">Overview</span>
              <h2 className="font-serif text-[42px] sm:text-[48px] font-medium leading-[1.15] text-white tracking-tight">What We <span className="text-[#1b5ea3]">Deliver</span></h2>
            </div>
            <div className="lg:col-span-8 flex items-center">
              <p className="font-sans text-[16px] sm:text-[18px] leading-[1.8] text-slate-300">UI/UX design improves how users interact with digital products by making interfaces simple, attractive, easy to use, and business-focused. Through research-driven design processes and iterative refinement, we create digital experiences that delight users, strengthen brand perception, and drive meaningful engagement.</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center w-full mb-16">
            <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">Capabilities</span>
            <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight mb-20">Key Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">User Research</h3>
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Deep user research and persona development to understand user behaviors, needs, and goals.</p>
              </div>
              <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
                </div>
                <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Wireframing</h3>
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Structural blueprints that map out user journeys, content placement, and core functionality.</p>
              </div>
              <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">UI Design</h3>
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Pixel-perfect interface designs with modern aesthetics, consistent design systems, and brand alignment.</p>
              </div>
              <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" /></svg>
                </div>
                <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Prototyping</h3>
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Interactive prototypes that simulate real user interactions and product flows before development.</p>
              </div>
              <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>
                <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Design Systems</h3>
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Scalable design libraries and component systems that ensure visual consistency across products.</p>
              </div>
              <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                </div>
                <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Usability Optimization</h3>
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Continuous usability testing and optimization to improve conversion rates and user satisfaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UIUX Page 3: Benefits & Process */}
      <section className="w-full bg-[#07080a] py-24 md:py-32 lg:py-40 border-t border-slate-900/60 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-between items-center animate-fade-in">
          <div className="flex flex-col items-center text-center mb-16 w-full">
            <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">Advantages</span>
            <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight mb-16">Business Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mb-36">
              {[
                "Better user experience",
                "Clean and modern interface",
                "Improved user engagement",
                "Easy navigation",
                "Higher product usability",
                "Stronger brand impression"
              ].map((benefit, i) => (
                <div key={i} className="border border-[#022e54]/80 bg-[#021627]/40 px-6 py-5 rounded-[18px] flex items-center gap-4 hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300">
                  <svg className="w-6 h-6 text-[#539be2] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" /></svg>
                  <span className="font-sans text-[16px] sm:text-[17px] font-medium text-slate-200">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center text-center mb-24 w-full">
            <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">Process</span>
            <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight">How We Work</h2>
          </div>
          <div className="w-full relative max-w-5xl flex flex-col items-center">
            <div className="absolute top-[22px] left-[10%] right-[10%] h-[2px] bg-[#022e54]/60 z-0 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 w-full relative z-10">
              {[
                { step: 1, text: "Understand users and business goals" },
                { step: 2, text: "Create user flows and wireframes" },
                { step: 3, text: "Design visual UI screens" },
                { step: 4, text: "Build interactive prototypes" },
                { step: 5, text: "Test, refine, and hand over to developers" }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-6">
                  <div className="w-11 h-11 rounded-full border border-[#539be2]/60 bg-[#07080a] flex items-center justify-center text-[#539be2] font-semibold text-[16px] shadow-[0_0_15px_rgba(83,155,226,0.15)] select-none">{item.step}</div>
                  <div className="w-full border border-[#022e54]/80 bg-[#021627]/40 px-4 py-4 rounded-[18px] min-h-[96px] flex items-center justify-center hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300">
                    <p className="font-sans text-[13px] sm:text-[14px] leading-relaxed font-medium text-slate-200">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UIUX Page 4: CTA */}
      <section className="w-full bg-white text-slate-900 py-24 md:py-32 flex flex-col items-center">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
          <span className="text-[15px] font-semibold tracking-wide text-slate-500 mb-5 uppercase font-sans">Get In Touch</span>
          <h2 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-medium leading-[1.15] text-slate-900 tracking-tight mb-6 max-w-3xl">Ready to transform <br/>your business <br/><span className="text-[#1b5ea3] font-medium">digitally?</span></h2>
          <p className="font-sans text-[16px] sm:text-[17px] leading-relaxed text-slate-500 max-w-2xl mb-10">Let us architect the digital infrastructure your business deserves.</p>
          <button onClick={() => navigateToContact(1)} className="bg-[#1b5ea3] hover:bg-blue-800 text-white px-9 py-4 rounded-full text-[15px] font-semibold flex items-center gap-2.5 transition-colors cursor-pointer shadow-md">
            Contact Us
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </button>
        </div>
      </section>
    </>
  )
}

export default UIUX
