import React from 'react'
import marketingImg from '../assets/d23.png'

interface MarketingProps {
  navigateToContact: (page: 1 | 2 | 3) => void;
}

const Marketing: React.FC<MarketingProps> = ({ navigateToContact }) => {
  return (
    <>
      {/* Marketing Page 1: Hero */}
      <section id="marketing" className="w-full bg-[#07080a] pt-32 md:pt-40 pb-20 flex flex-col justify-center min-h-[calc(100vh-6rem)] lg:min-h-0">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="font-sans text-[14px] font-semibold tracking-widest text-[#539be2] uppercase mb-4">
              Galletrix Service
            </span>
            <h1 className="font-serif text-[48px] sm:text-[56px] md:text-[68px] font-medium leading-[1.12] text-white tracking-tight mb-8">
              Digital Marketing
            </h1>
            <p className="font-sans text-[20px] md:text-[22px] font-medium text-[#539be2] leading-snug mb-6 max-w-lg">
              Grow your brand online.
            </p>
            <p className="font-sans text-[16px] sm:text-[17px] leading-[1.7] text-slate-300 max-w-2xl">
              Galletrix designs digital marketing campaigns that help businesses reach their audience, build trust, and increase sales.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
            <div className="relative z-0 w-full max-w-md aspect-[4/3] lg:aspect-square overflow-hidden shadow-[0_0_80px_rgba(83,155,226,0.15)] ring-1 ring-[#539be2]/20">
              <img 
                src={marketingImg} 
                alt="Digital Marketing" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#021627]/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Page 2: Overview & Features */}
      <section className="w-full bg-[#07080a] py-24 md:py-32 lg:py-40 border-t border-slate-900/60 flex flex-col items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
            <div className="lg:col-span-4 flex flex-col">
              <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">Overview</span>
              <h2 className="font-serif text-[42px] sm:text-[48px] font-medium leading-[1.15] text-white tracking-tight">What We <span className="text-[#1b5ea3]">Deliver</span></h2>
            </div>
            <div className="lg:col-span-8 flex items-center">
              <p className="font-sans text-[16px] sm:text-[18px] leading-[1.8] text-slate-300">Digital marketing helps businesses reach wider audiences, improve brand awareness, generate leads, and grow through online platforms. With data-driven strategies and creative execution, organizations can build meaningful connections with their audience, maximize marketing ROI, and establish a commanding digital presence.</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center w-full mb-16">
            <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">Capabilities</span>
            <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight mb-20">Key Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
                </div>
                <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Social Media Marketing</h3>
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Strategic social media campaigns to build brand loyalty and engage your target audience.</p>
              </div>
              <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">SEO</h3>
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Search engine optimization to improve search rankings and drive organic traffic.</p>
              </div>
              <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                </div>
                <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Content Creation</h3>
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Compelling content creation and distribution strategies that attract and retain customers.</p>
              </div>
              <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                </div>
                <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Brand Presence</h3>
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Build a consistent brand identity and presence across all digital touchpoints.</p>
              </div>
              <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Lead Generation</h3>
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Targeted campaigns designed to capture qualified leads and convert them into customers.</p>
              </div>
              <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
                </div>
                <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Campaign Analytics</h3>
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Data-driven performance tracking and continuous optimization for paid and organic campaigns.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Page 3: Benefits & Process */}
      <section className="w-full bg-[#07080a] py-24 md:py-32 lg:py-40 border-t border-slate-900/60 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-between items-center animate-fade-in">
          <div className="flex flex-col items-center text-center mb-16 w-full">
            <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">Advantages</span>
            <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight mb-16">Business Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mb-36">
              {[
                "Better online visibility",
                "More customer reach",
                "Stronger brand identity",
                "Improved lead generation",
                "Measurable campaign results",
                "Business growth through digital channels"
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
                { step: 1, text: "Understand brand goals" },
                { step: 2, text: "Plan digital marketing strategy" },
                { step: 3, text: "Create campaign content" },
                { step: 4, text: "Launch and manage campaigns" },
                { step: 5, text: "Track results and optimize performance" }
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

      {/* Marketing Page 4: CTA */}
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

export default Marketing
