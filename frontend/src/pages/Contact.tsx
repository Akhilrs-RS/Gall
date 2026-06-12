import React from 'react'
import contactImg from '../assets/contact.png'

interface ContactProps {
  navigateToContact: (page: 1 | 2 | 3) => void;
}

const Contact: React.FC<ContactProps> = () => {
  return (
    <>
      {/* Page 1: Contact Hero / Let's Build Together Section */}
      <section id="contact-page-1" className="w-full relative lg:aspect-[3/2] bg-[#07080a] flex flex-col justify-between lg:justify-center min-h-[calc(100vh-6rem)] lg:min-h-0">
        {/* Desktop Background Image */}
        <div className="absolute inset-0 hidden lg:block">
          <img 
            src={contactImg} 
            alt="Galletrix Contact and Support Desk" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 lg:pt-0 flex flex-col items-start">
          {/* Subtitle */}
          <span className="text-[15px] font-medium tracking-wide text-slate-400 mb-5">
            Contact Galletrix
          </span>

          {/* Heading */}
          <h1 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-bold leading-[1.12] text-white tracking-tight mb-8 max-w-4xl">
            Let's Build Together
          </h1>

          {/* Description */}
          <p className="font-sans text-[16px] sm:text-[18px] md:text-[19px] leading-[1.65] text-slate-400 max-w-3xl mb-14">
            Tell us about your business challenge. Our team will respond within 24 hours with a tailored assessment.
          </p>
        </div>

        {/* Mobile Block Image */}
        <div className="w-full lg:hidden my-6">
          <img 
            src={contactImg} 
            alt="Galletrix Contact and Support Desk" 
            className="w-full h-auto object-cover"
          />
        </div>

      </section>

      {/* Page 2: Send Message Form Section */}
      <section id="contact-page-2" className="w-full bg-[#07080a] pt-32 pb-24 border-t border-slate-900/60 min-h-[calc(100vh-6rem)] flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start w-full">
          
          {/* Left Side: Info and Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Ready Card */}
            <div className="border border-slate-800/80 bg-slate-950/20 p-8 rounded-2xl">
              <h2 className="font-serif text-[28px] md:text-[32px] font-medium leading-tight text-white mb-4">
                Ready to transform your business?
              </h2>
              <p className="text-slate-400 text-[15px] leading-relaxed mb-8">
                Whether you need a full ERP overhaul, a custom web application, or intelligent automation — we have the expertise to deliver.
              </p>
              <div className="flex items-center gap-2 text-[14px] font-semibold text-slate-300 hover:text-white cursor-pointer group">
                <span>Typical response: within 24 hours</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <div className="border border-slate-800/80 bg-slate-950/10 p-6 rounded-2xl flex items-center gap-5">
                <div className="w-12 h-12 rounded-full border border-slate-800/80 flex items-center justify-center bg-slate-950/50 shrink-0 text-slate-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] text-slate-400 font-medium mb-0.5">Email Us</span>
                  <a href="mailto:contact@galletrix.com" className="text-white text-[15px] font-semibold hover:underline">
                    contact@galletrix.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="border border-slate-800/80 bg-slate-950/10 p-6 rounded-2xl flex items-center gap-5">
                <div className="w-12 h-12 rounded-full border border-slate-800/80 flex items-center justify-center bg-slate-950/50 shrink-0 text-slate-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] text-slate-400 font-medium mb-0.5">Call Us</span>
                  <a href="tel:+1800GALLETRIX" className="text-white text-[15px] font-semibold hover:underline">
                    +1(800) GALLETRIX
                  </a>
                </div>
              </div>

              {/* Visit Card */}
              <div className="border border-slate-800/80 bg-slate-950/10 p-6 rounded-2xl flex items-center gap-5">
                <div className="w-12 h-12 rounded-full border border-slate-800/80 flex items-center justify-center bg-slate-950/50 shrink-0 text-slate-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[13px] text-slate-400 font-medium mb-0.5">Visit us</span>
                  <span className="text-white text-[15px] font-semibold">
                    Enterprise
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-serif text-[28px] md:text-[34px] font-medium text-white">
              Send US a Message
            </h2>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[14px] font-medium text-slate-300">Full Name *</label>
                  <input 
                    type="text" 
                    placeholder="John Smith" 
                    className="w-full bg-[#0a0c10] border border-slate-800 rounded-xl px-5 py-4 text-[15px] text-white placeholder-slate-600 focus:outline-none focus:border-[#0091ff] focus:ring-1 focus:ring-[#0091ff] transition-all" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[14px] font-medium text-slate-400">Company</label>
                  <input 
                    type="text" 
                    placeholder="Your Company" 
                    className="w-full bg-[#0a0c10] border border-slate-800 rounded-xl px-5 py-4 text-[15px] text-white placeholder-slate-600 focus:outline-none focus:border-[#0091ff] focus:ring-1 focus:ring-[#0091ff] transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[14px] font-medium text-slate-300">Email *</label>
                  <input 
                    type="email" 
                    placeholder="you@company.com" 
                    className="w-full bg-[#0a0c10] border border-slate-800 rounded-xl px-5 py-4 text-[15px] text-white placeholder-slate-600 focus:outline-none focus:border-[#0091ff] focus:ring-1 focus:ring-[#0091ff] transition-all" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[14px] font-medium text-slate-400">Phone</label>
                  <input 
                    type="tel" 
                    placeholder="+1(555)000-0000" 
                    className="w-full bg-[#0a0c10] border border-slate-800 rounded-xl px-5 py-4 text-[15px] text-white placeholder-slate-600 focus:outline-none focus:border-[#0091ff] focus:ring-1 focus:ring-[#0091ff] transition-all" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[14px] font-medium text-slate-400">Service of Interest</label>
                <div className="relative">
                  <select className="w-full bg-[#0a0c10] border border-slate-800 rounded-xl px-5 py-4 text-[15px] text-slate-300 focus:outline-none focus:border-[#0091ff] focus:ring-1 focus:ring-[#0091ff] transition-all appearance-none cursor-pointer">
                    <option value="">Select a service......</option>
                    <option value="erp">ERP Systems</option>
                    <option value="automation">Automation & AI</option>
                    <option value="web">Web & Mobile Development</option>
                    <option value="analytics">Analytics & Consulting</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-slate-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[14px] font-medium text-slate-300">Message*</label>
                <textarea 
                  rows={6} 
                  placeholder="Tell us about your projects, goals and challenges............." 
                  className="w-full bg-[#0a0c10] border border-slate-800 rounded-xl px-5 py-4 text-[15px] text-white placeholder-slate-600 focus:outline-none focus:border-[#0091ff] focus:ring-1 focus:ring-[#0091ff] transition-all resize-none" 
                  required 
                />
              </div>

              <button type="submit" className="w-full bg-white hover:bg-slate-100 text-slate-900 py-4.5 rounded-xl text-[16px] font-semibold flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] cursor-pointer shadow-lg">
                <span>Send Message</span>
                <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* Page 3: Get In Touch White Section */}
      <section id="contact-page-3" className="w-full bg-white text-slate-900 py-32 md:py-40 flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center animate-fade-in">
          <span className="text-[15px] font-semibold tracking-wide text-slate-500 mb-5 uppercase font-sans">
            Get In Touch
          </span>
          
          <h2 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-medium leading-[1.15] text-[#07080a] tracking-tight mb-6 max-w-3xl">
            Ready to transform <br />
            your business <br />
            <span className="text-[#1b5ea3] font-medium">digitally?</span>
          </h2>
          
          <p className="font-sans text-[16px] sm:text-[17px] leading-relaxed text-slate-500 max-w-2xl">
            Let us architect the digital infrastructure your business deserves.
          </p>
          
        </div>
      </section>
    </>
  )
}

export default Contact
