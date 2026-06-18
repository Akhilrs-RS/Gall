import React from 'react'
import logoImg from '../assets/logog.png'
import type { ViewState } from '../types'

interface FooterProps {
  setView: (view: ViewState) => void;
  navigateToContact: (page: 1 | 2 | 3) => void;
}

const Footer: React.FC<FooterProps> = ({ setView, navigateToContact }) => {
  return (
    <footer className="w-full bg-[#07080a] border-t border-[#0091ff] pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Brand, Description and Address Column */}
          <div className="col-span-12 md:col-span-6 lg:col-span-4 space-y-6">
            <a href="#logo" onClick={(e) => { e.preventDefault(); setView('other'); }} className="hover:opacity-90 transition-opacity inline-block">
              <img 
                src={logoImg} 
                alt="GALLETRIX" 
                className="h-10 md:h-12 w-auto object-contain rounded-md"
              />
            </a>
            <p className="text-slate-400 text-[15px] leading-relaxed max-w-sm">
              Architects of digital order. Building intelligent enterprise solutions for the modern era.
            </p>
            
            {/* Address Details */}
            <div className="space-y-2.5 border-t border-slate-900/50 pt-6 text-left">
              <h4 className="text-white text-[13px] font-bold tracking-wider uppercase">
                OFFICE LOCATION
              </h4>
              <p className="text-slate-400 text-[14px] leading-relaxed">
                Galletrix Innovations,<br />
                GOG Tower, Kazhakkoottam<br />
                (Opposite to Technopark Phase - 1),<br />
                Thiruvananthapuram, Kerala - 695582
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-6 pt-2">
              <a href="https://www.instagram.com/galletrix_innovations?utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors duration-200" aria-label="Instagram">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#whatsapp" className="text-slate-400 hover:text-white transition-colors duration-200" aria-label="WhatsApp">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>
              </a>
              <a href="#facebook" className="text-slate-400 hover:text-white transition-colors duration-200" aria-label="Facebook">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="col-span-12 md:col-span-6 lg:col-span-5 grid grid-cols-3 gap-6 md:gap-8">
            {/* SOLUTIONS */}
            <div className="space-y-5">
              <h3 className="text-white text-[13px] font-bold tracking-wider uppercase">
                SOLUTIONS
              </h3>
              <ul className="space-y-3.5">
                <li><a href="#erp" className="text-slate-400 text-[14px] hover:text-white transition-colors duration-200">ERP Systems</a></li>
                <li><a href="#automation" className="text-slate-400 text-[14px] hover:text-white transition-colors duration-200">Automation</a></li>
                <li><a href="#web-development" className="text-slate-400 text-[14px] hover:text-white transition-colors duration-200">Web Development</a></li>
                <li><a href="#analytics" className="text-slate-400 text-[14px] hover:text-white transition-colors duration-200">Analytics</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-5">
              <h3 className="text-white text-[13px] font-bold tracking-wider">
                Company
              </h3>
              <ul className="space-y-3.5">
                <li><a href="#about" onClick={() => setView('about')} className="text-slate-400 text-[14px] hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#works" onClick={() => setView('works')} className="text-slate-400 text-[14px] hover:text-white transition-colors duration-200">Our Work</a></li>
                <li><a href="#industry" onClick={() => setView('industry')} className="text-slate-400 text-[14px] hover:text-white transition-colors duration-200">Industries</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); navigateToContact(1); }} className="text-slate-400 text-[14px] hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>

            {/* RESOURCES */}
            <div className="space-y-5">
              <h3 className="text-white text-[13px] font-bold tracking-wider uppercase">
                RESOURCES
              </h3>
              <ul className="space-y-3.5">
                <li><a href="#case-studies" className="text-slate-400 text-[14px] hover:text-white transition-colors duration-200">Case Studies</a></li>
                <li><a href="#services" onClick={() => setView('services')} className="text-slate-400 text-[14px] hover:text-white transition-colors duration-200">Services</a></li>
                <li><a href="#privacy-policy" className="text-slate-400 text-[14px] hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#support" className="text-slate-400 text-[14px] hover:text-white transition-colors duration-200">Support</a></li>
              </ul>
            </div>
          </div>

          {/* Google Map Column */}
          <div className="col-span-12 lg:col-span-3 space-y-4 text-left">
            <h3 className="text-white text-[13px] font-bold tracking-wider uppercase">
              FIND US ON MAP
            </h3>
            <div className="relative w-full h-44 rounded-xl overflow-hidden border border-slate-900 shadow-2xl group hover:border-[#cc6f2a]/60 transition-all duration-300">
              <iframe
                title="Galletrix Innovations Location Map"
                src="https://maps.google.com/maps?q=GOG%20Tower,%20Kazhakkoottam,%20Thiruvananthapuram,%20Kerala%20695582&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0 filter invert grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=GOG+Tower,+Pallinada,+Kazhakkoottam,+Thiruvananthapuram,+Kerala+695582"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#cc6f2a] hover:text-[#b86120] transition-colors group/map-link"
              >
                <span>Open in Google Maps</span>
                <svg className="w-3.5 h-3.5 transform group-hover/map-link:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Line */}
        <div className="mt-16 md:mt-24 pt-6 border-t border-slate-900/50 flex justify-start">
          <span className="text-slate-500 text-[11px] font-medium tracking-[0.1em] uppercase">
            @ {new Date().getFullYear()} GALLETRIX . ALL RIGHTS RESERVED
          </span>
        </div>

      </div>
    </footer>
  )
}

export default Footer
