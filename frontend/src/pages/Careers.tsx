import React from 'react'
import careersImg from '../assets/c9.png'

interface CareersProps {
  navigateToContact: (page: 1 | 2 | 3) => void;
}

const Careers: React.FC<CareersProps> = ({ navigateToContact }) => {
  return (
    <>
      {/* Careers Section with desktop background image overlay */}
      <section id="careers" className="w-full relative lg:aspect-[3/2] bg-[#07080a] flex flex-col justify-between lg:justify-center">
        {/* Desktop Background Image */}
        <div className="absolute inset-0 hidden lg:block">
          <img 
            src={careersImg} 
            alt="Galletrix Careers" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 lg:pt-0 flex flex-col items-start">
          {/* Subtitle */}
          <span className="text-[15px] font-medium tracking-wide text-slate-400 mb-5">
            Careers at Galletrix
          </span>

          {/* Heading */}
          <h1 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-bold leading-[1.12] text-white tracking-tight mb-8 max-w-4xl">
            Join Our Team
          </h1>

          {/* Description */}
          <p className="font-sans text-[16px] sm:text-[18px] md:text-[19px] leading-[1.65] text-slate-400 max-w-3xl mb-14">
            We are looking for passionate individuals to help us build intelligent digital solutions. Explore our open positions and find where you fit in.
          </p>
        </div>

        {/* Mobile Block Image */}
        <div className="w-full lg:hidden">
          <img 
            src={careersImg} 
            alt="Galletrix Careers" 
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Careers Page 2: Why Work With Us Section */}
      <section id="careers-page-2" className="w-full bg-[#07080a] py-16 md:py-24 border-t border-slate-900/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center">
          
          {/* Subtitle & Heading */}
          <div className="w-full text-left mb-20 animate-fade-in">
            <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase block">
              Benefits
            </span>
            <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight">
              Why Work With Us
            </h2>
          </div>

          {/* 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 w-full animate-fade-in">
            {/* Item 1 */}
            <div className="flex flex-col text-left">
              <h3 className="font-sans text-[18px] sm:text-[20px] font-semibold text-white tracking-tight mb-4">Real World Projects</h3>
              <p className="font-sans text-[15px] leading-relaxed text-slate-400">
                Work on impactful products, from enterprise CRM to internal dashboards.
              </p>
            </div>
            {/* Item 2 */}
            <div className="flex flex-col text-left">
              <h3 className="font-sans text-[18px] sm:text-[20px] font-semibold text-white tracking-tight mb-4">Learning Culture</h3>
              <p className="font-sans text-[15px] leading-relaxed text-slate-400">
                Improve your skills through mentorship, workshops, and courses.
              </p>
            </div>
            {/* Item 3 */}
            <div className="flex flex-col text-left">
              <h3 className="font-sans text-[18px] sm:text-[20px] font-semibold text-white tracking-tight mb-4">Creative Environment</h3>
              <p className="font-sans text-[15px] leading-relaxed text-slate-400">
                Bring ideas to life through design, development, and innovation without limits.
              </p>
            </div>
            {/* Item 4 */}
            <div className="flex flex-col text-left">
              <h3 className="font-sans text-[18px] sm:text-[20px] font-semibold text-white tracking-tight mb-4">Growth Opportunities</h3>
              <p className="font-sans text-[15px] leading-relaxed text-slate-400">
                Build your career with projects that challenge, stretch, and develop your expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Page 3: Life at Galletrix */}
      <section id="careers-page-3" className="w-full bg-[#07080a] py-16 md:py-24 border-t border-slate-900/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 animate-fade-in">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">
              Culture
            </span>
            <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight mb-8">
              Life at Galletrix
            </h2>
            <p className="font-sans text-[18px] sm:text-[19px] leading-[1.6] text-white font-medium mb-6 max-w-lg">
              Collaboration, creativity, and continuous learning.
            </p>
            <p className="font-sans text-[15px] leading-relaxed text-slate-400 max-w-lg">
              We believe in building meaningful digital products through teamwork, problem-solving, and continuous improvement. Our team works together to create solutions that are simple, scalable, and business focused.
            </p>
          </div>

          {/* Right Column: Pill Cards */}
          <div className="flex flex-col justify-center gap-6">
            {/* Card 1 */}
            <div className="border border-[#022e54]/80 bg-[#021627]/40 p-6 rounded-[24px] flex items-center gap-6 hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <span className="font-sans text-[17px] sm:text-[18px] font-semibold text-white tracking-tight">Collaborative Team</span>
            </div>
            {/* Card 2 */}
            <div className="border border-[#022e54]/80 bg-[#021627]/40 p-6 rounded-[24px] flex items-center gap-6 hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="font-sans text-[17px] sm:text-[18px] font-semibold text-white tracking-tight">Modern Work Culture</span>
            </div>
            {/* Card 3 */}
            <div className="border border-[#022e54]/80 bg-[#021627]/40 p-6 rounded-[24px] flex items-center gap-6 hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-sans text-[17px] sm:text-[18px] font-semibold text-white tracking-tight">Innovation Focused Mindset</span>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Page 4: Hiring Process Timeline */}
      <section id="careers-page-4" className="w-full bg-[#07080a] py-16 md:py-24 border-t border-slate-900/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-between items-center animate-fade-in">
          {/* Upper Half: Timeline Heading */}
          <div className="flex flex-col items-center text-center mb-24">
            <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">
              Hiring Process
            </span>
            <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight">
              What We Look For
            </h2>
          </div>

          {/* Timeline Flow Container */}
          <div className="w-full relative max-w-5xl flex flex-col items-center mb-36">
            {/* Connection Line */}
            <div className="absolute top-[22px] left-[12.5%] right-[12.5%] h-[2px] bg-[#022e54]/60 z-0 hidden md:block" />

            {/* 4-Step timeline columns */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 w-full relative z-10">
              {[
                { step: 1, title: "Apply Online", text: "Submit your resume and portfolio through our online application form." },
                { step: 2, title: "Initial Review", text: "Our team reviews your skills, experience, and fit for the role." },
                { step: 3, title: "Interview", text: "We connect with you to understand your goals, skills, and personality." },
                { step: 4, title: "Join the Team", text: "Start working on exciting products and projects with impact." }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-6">
                  {/* Step Number Circle Indicator */}
                  <div className="w-11 h-11 rounded-full border border-[#539be2]/60 bg-[#07080a] flex items-center justify-center text-[#539be2] font-semibold text-[16px] shadow-[0_0_15px_rgba(83,155,226,0.15)] select-none">
                    {item.step}
                  </div>

                  {/* Text Pill Box */}
                  <div className="w-full border border-[#022e54]/80 bg-[#021627]/40 px-5 py-6 rounded-[18px] min-h-[140px] flex flex-col items-center justify-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300">
                    <h4 className="font-sans text-[16px] sm:text-[17px] font-semibold text-white tracking-tight mb-2">
                      {item.title}
                    </h4>
                    <p className="font-sans text-[13px] sm:text-[14px] leading-relaxed font-medium text-slate-300">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lower Half: What We Value Grid */}
          <div className="flex flex-col items-center text-center mb-16 w-full">
            <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">
              What We Value
            </span>
            <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight mb-16">
              What We Look For
            </h2>

            {/* Grid for the 6 items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mb-24">
              {[
                "Problem-solving Mindset",
                "Willingness to Learn",
                "Team Collaboration",
                "Creative Thinking",
                "Attention to Detail",
                "Interest in Technology"
              ].map((value, i) => (
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
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Apply Now Button */}
            <button 
              onClick={() => {
                window.location.hash = '#careers-apply'
              }}
              className="bg-[#e2942b] hover:bg-[#cc6f2a] text-white px-16 py-4 rounded-full text-[15px] font-semibold flex items-center justify-center transition-colors cursor-pointer shadow-lg w-full max-w-sm"
            >
              Apply Now
            </button>
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
            your career <br />
            <span className="text-[#1b5ea3] font-medium">with us?</span>
          </h2>
          
          <p className="font-sans text-[16px] sm:text-[17px] leading-relaxed text-slate-500 max-w-2xl mb-10">
            Let us help you build a rewarding career at Galletrix.
          </p>
          
          <button 
            onClick={() => navigateToContact(1)}
            className="bg-[#1b5ea3] hover:bg-blue-800 text-white px-9 py-4 rounded-full text-[15px] font-semibold flex items-center gap-2.5 transition-colors cursor-pointer shadow-md"
          >
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

export default Careers
