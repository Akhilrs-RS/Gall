import React from 'react'
import type { ViewState } from '../types'

interface FooterProps {
  setView: (view: ViewState) => void;
  navigateToContact: (page: 1 | 2 | 3) => void;
}

const Footer: React.FC<FooterProps> = ({ setView, navigateToContact }) => {
  return (
    <footer className="w-full bg-[#07080a] border-t border-[#0091ff] pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">
          {/* Brand and Description Column */}
          <div className="col-span-12 md:col-span-6 space-y-6">
            <span className="font-serif font-bold text-[22px] tracking-wide text-white block">
              GALLETRIX
            </span>
            <p className="text-slate-400 text-[15px] leading-relaxed max-w-sm">
              Architects of digital order. Building intelligent enterprise solutions for the modern era.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-6 pt-2">
              <a href="#instagram" className="text-slate-400 hover:text-white transition-colors duration-200" aria-label="Instagram">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#whatsapp" className="text-slate-400 hover:text-white transition-colors duration-200" aria-label="WhatsApp">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
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
          <div className="col-span-12 md:col-span-6 grid grid-cols-3 gap-6 md:gap-8">
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
