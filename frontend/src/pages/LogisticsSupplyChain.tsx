import React, { useState } from 'react'
import z3Img from '../assets/z3.png'

interface LogisticsSupplyChainProps {
  navigateToContact: (page: 1 | 2 | 3) => void;
}

const LogisticsSupplyChain: React.FC<LogisticsSupplyChainProps> = ({ navigateToContact }) => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  return (
    <>
      {/* Hero Section */}
      <section id="logistics-supply-chain-hero" className="w-full relative lg:aspect-[3/2] bg-[#07080a] flex flex-col justify-between">
        {/* Desktop split layout */}
        <div className="absolute inset-0 hidden lg:block">
          <div className="absolute inset-0 grid grid-cols-2">
            <div className="bg-[#07080a] w-full h-full"></div>
            <div className="bg-[#07080a] w-full h-full relative overflow-hidden flex items-center justify-center p-12">
              <div className="absolute inset-0 bg-[#07080a] mix-blend-overlay z-10"></div>
              <div className="relative z-0 w-full max-w-lg aspect-square rounded-[40px] overflow-hidden shadow-[0_0_80px_rgba(83,155,226,0.15)] ring-1 ring-[#539be2]/20 group">
                <img 
                  src={z3Img} 
                  alt="Logistics & Supply Chain solutions" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#021627]/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 md:pt-32 flex flex-col items-start lg:w-1/2">
          <span className="font-sans text-[14px] font-semibold tracking-widest text-[#539be2] uppercase mb-4">
            Fleet and delivery tracking
          </span>
          <h1 className="font-serif text-[48px] sm:text-[56px] md:text-[68px] font-bold leading-[1.12] text-white tracking-tight mb-8">
            Logistics & Supply Chain
          </h1>
          <p className="font-sans text-[16px] sm:text-[18px] leading-[1.7] text-slate-300 max-w-md mb-12">
            Build and scale logistics platforms that help to manage fleet tracking, warehouse operations, delivery routes, and supply chain visibility.
          </p>
          <button 
            onClick={() => navigateToContact(2)} 
            className="bg-[#cc6f2a] hover:bg-[#b86120] text-white px-8 py-3.5 rounded-full text-[15px] font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-lg shadow-amber-950/20"
          >
            Discuss Your Requirements
          </button>
        </div>

        {/* Mobile Block Image */}
        <div className="w-full lg:hidden bg-[#07080a] py-12 px-6">
          <div className="w-full aspect-square rounded-[32px] overflow-hidden shadow-[0_0_60px_rgba(83,155,226,0.15)] ring-1 ring-[#539be2]/20 relative">
            <img 
              src={z3Img} 
              alt="Logistics & Supply Chain solutions" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#021627]/60 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Section 2: Understanding the Landscape */}
      <section id="logistics-supply-chain-landscape" className="w-full bg-[#07080a] py-24 md:py-32 border-t border-slate-900/60 flex flex-col items-center">
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
                Managing fleet operations, route planning, and warehouse inventory manually leads to delayed deliveries, high fuel costs, and poor customer visibility. Teams struggle to track real-time fleet locations, optimize routes, and manage warehouse space efficiently.
              </p>
            </div>

            {/* The Galletrix Response */}
            <div className="border border-slate-800/60 bg-slate-950/10 p-8 md:p-10 rounded-[28px]">
              <h3 className="font-sans text-[20px] font-semibold text-white tracking-tight mb-4 uppercase text-[#539be2]">
                The Galletrix Response
              </h3>
              <p className="font-sans text-[15px] md:text-[16px] leading-[1.7] text-slate-400">
                Galletrix builds logistics management systems that automate fleet tracking, route optimization, warehouse inventory tracking, and delivery updates. Our solutions help logistics companies optimize cost and improve delivery performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What We Build */}
      <section id="logistics-supply-chain-what-we-build" className="w-full bg-[#07080a] py-24 md:py-32 border-t border-slate-900/60 flex flex-col items-center">
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10M21 16V10a2 2 0 00-2-2h-6M21 12h-8" />
                </svg>
              </div>
              <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">
                Fleet Tracking
              </h3>
              <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">
                Real-time location tracking of all active vehicles, fuel consumption monitoring, and diagnostics alerts.
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-slate-700/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">
                Route Optimization
              </h3>
              <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">
                AI-driven route calculations to minimize delivery duration, fuel consumption, and vehicle wear.
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-slate-700/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
              </div>
              <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">
                Warehouse Management
              </h3>
              <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">
                Inventory tracking, warehouse capacity planning, barcode scanning, and order processing workflows.
              </p>
            </div>

            {/* Card 4 */}
            <div className="border border-slate-800/80 bg-slate-950/20 p-8 md:p-10 rounded-[24px] flex flex-col justify-start text-left items-start hover:border-slate-700/60 transition-all duration-300">
              <div className="w-12 h-12 rounded-[14px] bg-[#02223c]/60 flex items-center justify-center text-[#539be2] mb-6">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-.778.099-1.533.284-2.253" />
                </svg>
              </div>
              <h3 className="font-sans text-[19px] sm:text-[21px] font-semibold text-white tracking-tight mb-3">
                Delivery Portals
              </h3>
              <p className="font-sans text-[14px] sm:text-[15px] leading-relaxed text-slate-400">
                Customer portals showing order status, dispatch updates, real-time tracking, and digital proof of delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Business Impact */}
      <section id="logistics-supply-chain-benefits" className="w-full bg-[#07080a] py-24 md:py-32 border-t border-slate-900/60 flex flex-col items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-sans text-[15px] font-semibold tracking-wide text-slate-400 mb-4 uppercase">
              Advantages
            </span>
            <h2 className="font-serif text-[42px] sm:text-[52px] font-medium leading-[1.15] text-white tracking-tight">
              Business Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
            {[
              "Real-time visibility",
              "Faster delivery planning",
              "Lower operational costs",
              "Improved supply chain efficiency"
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
      <section id="logistics-supply-chain-reality" className="w-full bg-[#07080a] py-24 md:py-32 border-t border-slate-900/60 flex flex-col items-center">
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
                  Fleet management hub
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
                  Provide dispatcher control rooms with real-time GPS fleet positions, traffic overlays, driver statuses, and automated alerts for detour detection.
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
                  Route optimization engine
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
                  Utilize historical delivery and route data to calculate optimal multi-stop routes, adapt to real-time traffic conditions, and dynamically assign drivers.
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

export default LogisticsSupplyChain
