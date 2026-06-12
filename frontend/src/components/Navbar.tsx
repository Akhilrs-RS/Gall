import React from 'react'
import logoImg from '../assets/logo.jpg'
import type { ViewState } from '../types'

interface NavbarProps {
  view: ViewState;
  setView: (view: ViewState) => void;
  navigateToContact: (page: 1 | 2 | 3) => void;
}

const Navbar: React.FC<NavbarProps> = ({ view, setView, navigateToContact }) => {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#07080a]/80 backdrop-blur-md border-b border-slate-900/80 shadow-lg' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <a href="#logo" onClick={() => setView('other')} className="hover:opacity-90 transition-opacity flex items-center">
            <img 
              src={logoImg} 
              alt="GALLETRIX" 
              className="h-10 md:h-12 w-auto object-contain rounded-md"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10">
          <div className="group">
            <a 
              href="#services"
              onClick={() => setView('services')}
              className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors duration-200 cursor-pointer ${
                view === 'services' || view === 'erp' ? 'text-[#cc6f2a]' : 'text-slate-300 hover:text-white'
              }`}
            >
              Services
              <svg className={`w-3 h-3 mt-0.5 transition-colors ${view === 'services' || view === 'erp' ? 'text-[#cc6f2a]' : 'text-slate-400 group-hover:text-white'}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            {/* Services Dropdown Overlay */}
            <div className="absolute top-full left-0 right-0 w-full bg-[#07080a] border-b border-slate-900 shadow-2xl py-16 z-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-16">
                {/* ERP Solutions */}
                <a 
                  href="#erp" 
                  onClick={() => {
                    setView('erp')
                  }} 
                  className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                >
                  <div className="mt-1 flex-shrink-0 text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7c0-1.657 3.582-3 8-3s8 1.343 8 3M4 7c0 1.657 3.582 3 8 3s8-1.343 8-3M4 7v10c0 1.657 3.582 3 8 3s8-1.343 8-3V7M4 12c0 1.657 3.582 3 8 3s8-1.343 8-3" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-sans text-[17px] font-semibold text-white leading-tight">
                      ERP Solutions
                    </span>
                    <span className="font-sans text-[13px] font-medium text-slate-400 mt-1.5 leading-normal">
                      Manage business operations
                    </span>
                  </div>
                </a>

                {/* Business Automation */}
                <a 
                  href="#automation" 
                  onClick={() => {
                    setView('automation')
                  }} 
                  className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                >
                  <div className="mt-1 flex-shrink-0 text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v4M12 10H5v4M12 10h7v4M12 10v4M10 2h4v4h-4zM3 14h4v4H3zM10 14h4v4h-4zM17 14h4v4h-4z" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-sans text-[17px] font-semibold text-white leading-tight">
                      Business Automation
                    </span>
                    <span className="font-sans text-[13px] font-medium text-slate-400 mt-1.5 leading-normal">
                      Automate daily workflows
                    </span>
                  </div>
                </a>

                {/* Web Application Development */}
                <a 
                  href="#web" 
                  onClick={() => {
                    setView('web')
                  }} 
                  className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                >
                  <div className="mt-1 flex-shrink-0 text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-sans text-[17px] font-semibold text-white leading-tight">
                      Web Application Development
                    </span>
                    <span className="font-sans text-[13px] font-medium text-slate-400 mt-1.5 leading-normal">
                      Automate daily workflows
                    </span>
                  </div>
                </a>

                {/* Dashboard & Analytics */}
                <a 
                  href="#dashboard" 
                  onClick={() => {
                    setView('dashboard')
                  }} 
                  className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                >
                  <div className="mt-1 flex-shrink-0 text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 20V10M12 20V4M6 20v-6" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-sans text-[17px] font-semibold text-white leading-tight">
                      Dashboard & Analytics
                    </span>
                    <span className="font-sans text-[13px] font-medium text-slate-400 mt-1.5 leading-normal">
                      Turn data into insights
                    </span>
                  </div>
                </a>

                {/* Digital Marketing */}
                <a 
                  href="#marketing" 
                  onClick={() => {
                    setView('marketing')
                  }} 
                  className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                >
                  <div className="mt-1 flex-shrink-0 text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-sans text-[17px] font-semibold text-white leading-tight">
                      Digital Marketing
                    </span>
                    <span className="font-sans text-[13px] font-medium text-slate-400 mt-1.5 leading-normal">
                      Grow your online presence
                    </span>
                  </div>
                </a>

                {/* UIUX Design */}
                <a 
                  href="#uiux" 
                  onClick={() => {
                    setView('uiux')
                  }} 
                  className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                >
                  <div className="mt-1 flex-shrink-0 text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7c0-1.657 3.582-3 8-3s8 1.343 8 3M4 7c0 1.657 3.582 3 8 3s8-1.343 8-3M4 7v10c0 1.657 3.582 3 8 3s8-1.343 8-3V7M4 12c0 1.657 3.582 3 8 3s8-1.343 8-3" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-sans text-[17px] font-semibold text-white leading-tight">
                      UIUX Design
                    </span>
                    <span className="font-sans text-[13px] font-medium text-slate-400 mt-1.5 leading-normal">
                      Design better experiences
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <a 
            href="#about" 
            onClick={() => setView('about')}
            className={`text-[15px] font-medium transition-colors duration-200 ${
              view === 'about' ? 'text-[#cc6f2a]' : 'text-slate-300 hover:text-white'
            }`}
          >
            About
          </a>

          <div className="group">
            <a 
              href="#industry" 
              onClick={() => setView('industry')}
              className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors duration-200 cursor-pointer ${
                view === 'industry' ? 'text-[#cc6f2a]' : 'text-slate-300 hover:text-white'
              }`}
            >
              Industry
              <svg className={`w-3 h-3 mt-0.5 transition-colors ${view === 'industry' ? 'text-[#cc6f2a]' : 'text-slate-400 group-hover:text-white'}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            {/* Industry Dropdown Overlay */}
            <div className="absolute top-full left-0 right-0 w-full bg-[#07080a] border-b border-slate-900 shadow-2xl py-16 z-40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-y-10 gap-x-16">
                
                {/* Manpower & HR */}
                <a 
                  href="#manpower-hr" 
                  onClick={() => {
                    setView('manpower-hr')
                  }} 
                  className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                >
                  <div className="mt-1 flex-shrink-0 text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-sans text-[17px] font-semibold text-white leading-tight">
                      Manpower & HR
                    </span>
                    <span className="font-sans text-[13px] font-medium text-slate-400 mt-1.5 leading-normal">
                      Workforce management systems
                    </span>
                  </div>
                </a>

                {/* HR & Recruitment */}
                <a 
                  href="#hr-recruitment" 
                  onClick={() => {
                    setView('hr-recruitment')
                  }} 
                  className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                >
                  <div className="mt-1 flex-shrink-0 text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM2 20a6 6 0 0112 0v1H2v-1z" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-sans text-[17px] font-semibold text-white leading-tight">
                      HR & Recruitment
                    </span>
                    <span className="font-sans text-[13px] font-medium text-slate-400 mt-1.5 leading-normal">
                      Hiring and applicant tracking
                    </span>
                  </div>
                </a>

                {/* Logistics & Supply Chain */}
                <a 
                  href="#logistics-supply-chain" 
                  onClick={() => {
                    setView('logistics-supply-chain')
                  }} 
                  className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                >
                  <div className="mt-1 flex-shrink-0 text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10M21 16V10a2 2 0 00-2-2h-6M21 12h-8" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-sans text-[17px] font-semibold text-white leading-tight">
                      Logistics & Supply chain
                    </span>
                    <span className="font-sans text-[13px] font-medium text-slate-400 mt-1.5 leading-normal">
                      Workforce management systems
                    </span>
                  </div>
                </a>

                {/* Healthcare */}
                <a 
                  href="#healthcare" 
                  onClick={() => {
                    setView('healthcare')
                  }} 
                  className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                >
                  <div className="mt-1 flex-shrink-0 text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 10.5h-5.5V5a1.5 1.5 0 00-3 0v5.5H5a1.5 1.5 0 000 3h5.5V19a1.5 1.5 0 003 0v-5.5H19a1.5 1.5 0 000-3z" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-sans text-[17px] font-semibold text-white leading-tight">
                      Healthcare
                    </span>
                    <span className="font-sans text-[13px] font-medium text-slate-400 mt-1.5 leading-normal">
                      Patient and clinic management
                    </span>
                  </div>
                </a>

                {/* Education */}
                <a 
                  href="#education" 
                  onClick={() => {
                    setView('education')
                  }} 
                  className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                >
                  <div className="mt-1 flex-shrink-0 text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v7" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-sans text-[17px] font-semibold text-white leading-tight">
                      Education
                    </span>
                    <span className="font-sans text-[13px] font-medium text-slate-400 mt-1.5 leading-normal">
                      Learning management systems
                    </span>
                  </div>
                </a>

                {/* Retail */}
                <a 
                  href="#retail" 
                  onClick={() => {
                    setView('retail')
                  }} 
                  className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                >
                  <div className="mt-1 flex-shrink-0 text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-sans text-[17px] font-semibold text-white leading-tight">
                      Retail
                    </span>
                    <span className="font-sans text-[13px] font-medium text-slate-400 mt-1.5 leading-normal">
                      Inventory and POS solutions
                    </span>
                  </div>
                </a>

                {/* Finance */}
                <a 
                  href="#finance" 
                  onClick={() => {
                    setView('finance')
                  }} 
                  className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                >
                  <div className="mt-1 flex-shrink-0 text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-sans text-[17px] font-semibold text-white leading-tight">
                      Finance
                    </span>
                    <span className="font-sans text-[13px] font-medium text-slate-400 mt-1.5 leading-normal">
                      Accounting and compliance tools
                    </span>
                  </div>
                </a>

                {/* Corporate Operations */}
                <a 
                  href="#corporate-operations" 
                  onClick={() => {
                    setView('corporate-operations')
                  }} 
                  className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                >
                  <div className="mt-1 flex-shrink-0 text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-sans text-[17px] font-semibold text-white leading-tight">
                      Corporate Operations
                    </span>
                    <span className="font-sans text-[13px] font-medium text-slate-400 mt-1.5 leading-normal">
                      Enterprise workflow systems
                    </span>
                  </div>
                </a>

              </div>
            </div>
          </div>

          <a 
            href="#works" 
            onClick={() => setView('works')}
            className={`text-[15px] font-medium transition-colors duration-200 ${
              view === 'works' ? 'text-[#cc6f2a]' : 'text-slate-300 hover:text-white'
            }`}
          >
            Works
          </a>

          <a 
            href="#careers" 
            onClick={() => setView('careers')}
            className={`text-[15px] font-medium transition-colors duration-200 ${
              view === 'careers' ? 'text-[#cc6f2a]' : 'text-slate-300 hover:text-white'
            }`}
          >
            Careers
          </a>

          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault()
              navigateToContact(1)
            }}
            className={`text-[15px] font-medium transition-colors duration-200 ${
              view === 'contact' ? 'text-[#cc6f2a]' : 'text-slate-300 hover:text-white'
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Call to Action Button */}
        <div className="flex items-center">
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              navigateToContact(2)
            }}
            className="bg-[#cc6f2a] hover:bg-[#b86120] text-white px-8 py-3.5 rounded-full text-[15px] font-semibold tracking-wide transition-all duration-300 shadow-lg shadow-amber-950/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer inline-block text-center"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
