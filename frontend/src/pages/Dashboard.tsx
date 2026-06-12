import React from 'react'
import dashboardImg from '../assets/d24.png'

interface DashboardProps {
  navigateToContact: (page: 1 | 2 | 3) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ navigateToContact }) => {
  return (
    <>
      {/* Dashboard Page 1: Hero */}
      <section id="dashboard" className="w-full relative lg:aspect-[3/2] bg-[#07080a] flex flex-col justify-between">
        <div className="absolute inset-0 hidden lg:grid lg:grid-cols-2">
          <div className="bg-[#07080a] w-full h-full"></div>
          <div className="bg-[#07080a] w-full h-full relative overflow-hidden flex items-center justify-center p-12">
            <div className="absolute inset-0 bg-[#07080a] mix-blend-overlay z-10"></div>
            <div className="relative z-0 w-full max-w-lg aspect-square rounded-[40px] overflow-hidden shadow-[0_0_80px_rgba(83,155,226,0.15)] ring-1 ring-[#539be2]/20 group">
              <img src={dashboardImg} alt="Dashboard & Analytics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#021627]/60 to-transparent"></div>
            </div>
          </div>
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-32 flex flex-col items-start lg:w-1/2">
          <span className="font-sans text-[14px] font-semibold tracking-widest text-[#539be2] uppercase mb-4">Galletrix Service</span>
          <h1 className="font-serif text-[48px] sm:text-[56px] md:text-[68px] font-medium leading-[1.12] text-white tracking-tight mb-8">Dashboard & Analytics</h1>
          <p className="font-sans text-[20px] md:text-[22px] font-medium text-[#539be2] leading-snug mb-6 max-w-lg">Turn data into clear insights.</p>
          <p className="font-sans text-[16px] sm:text-[17px] leading-[1.7] text-slate-300 max-w-md mb-12">Galletrix creates real-time data visualization systems that help businesses monitor performance, track operations, and make smarter decisions.</p>
        </div>
        <div className="w-full lg:hidden bg-[#07080a] py-12 px-6">
          <div className="w-full aspect-square rounded-[32px] overflow-hidden shadow-[0_0_60px_rgba(83,155,226,0.15)] ring-1 ring-[#539be2]/20 relative">
            <img src={dashboardImg} alt="Dashboard & Analytics" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#021627]/60 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Dashboard Page 2: Overview & Features */}
      <section className="w-full bg-[#07080a] py-24 md:py-32 lg:py-40 border-t border-slate-900/60 flex flex-col items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
            <div className="lg:col-span-4 flex flex-col">
              <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">Overview</span>
              <h2 className="font-serif text-[42px] sm:text-[48px] font-medium leading-[1.15] text-white tracking-tight">What We <span className="text-[#1b5ea3]">Deliver</span></h2>
            </div>
            <div className="lg:col-span-8 flex items-center">
              <p className="font-sans text-[16px] sm:text-[18px] leading-[1.8] text-slate-300">Dashboards help businesses understand their data clearly, track important metrics, monitor performance, and make decisions based on real-time insights. With custom analytics solutions, organizations can explore data trends, identify growth opportunities, and maintain complete visibility across all operations.</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center w-full mb-16">
            <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">Capabilities</span>
            <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight mb-20">Key Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {/* Feature 1 */}
              <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Real-time Dashboards</h3>
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Live dashboards that update in real-time to show current metrics and performance.</p>
              </div>
              {/* Feature 2 */}
              <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">KPI Tracking</h3>
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Track key performance indicators across teams and goals to measure success.</p>
              </div>
              {/* Feature 3 */}
              <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
                </div>
                <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Data Visualization</h3>
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Turn complex data into easy-to-understand charts, graphs, and visual representations.</p>
              </div>
              {/* Feature 4 */}
              <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Custom Reports</h3>
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Automated report generation with customizable parameters for different stakeholders.</p>
              </div>
              {/* Feature 5 */}
              <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Performance Metrics</h3>
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Detailed insights into system usage, team productivity, and operational efficiency.</p>
              </div>
              {/* Feature 6 */}
              <div className="border border-[#022e54]/80 bg-[#021627]/40 p-8 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-blue-800/40 hover:bg-[#021627]/60 transition-all duration-300 hover:scale-[1.01]">
                <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                </div>
                <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">Centralized Hub</h3>
                <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">Pull data from multiple sources into one unified dashboard for a complete overview.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Page 3: Benefits & Process */}
      <section className="w-full bg-[#07080a] py-24 md:py-32 lg:py-40 border-t border-slate-900/60 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col justify-between items-center animate-fade-in">
          <div className="flex flex-col items-center text-center mb-16 w-full">
            <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">Advantages</span>
            <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight mb-16">Business Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mb-36">
              {[
                "Clear performance visibility",
                "Better decision making",
                "Real-time performance tracking",
                "Better reporting",
                "Easy data understanding",
                "Improved business planning"
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
                { step: 1, text: "Identify key metrics" },
                { step: 2, text: "Connect data sources" },
                { step: 3, text: "Design dashboard layout" },
                { step: 4, text: "Build charts and reporting system" },
                { step: 5, text: "Test insights and improve tracking" }
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

      {/* Dashboard Page 4: CTA */}
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

export default Dashboard
