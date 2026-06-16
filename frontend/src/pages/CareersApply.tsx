import React, { useState, useRef } from 'react'
import caplImg from '../assets/capl.png'

interface CareersApplyProps {
  navigateToContact: (page: 1 | 2 | 3) => void;
}

const CareersApply: React.FC<CareersApplyProps> = ({ navigateToContact }) => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [position, setPosition] = useState('')
  const [experience, setExperience] = useState('')
  const [portfolio, setPortfolio] = useState('')
  const [message, setMessage] = useState('')
  const [resume, setResume] = useState<File | null>(null)
  
  const [dragActive, setDragActive] = useState(false)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorText, setErrorText] = useState('')

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      const validTypes = ['.pdf', '.doc', '.docx', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      const isValidType = validTypes.some(type => file.type.includes(type) || file.name.endsWith(type))
      const isValidSize = file.size <= 5 * 1024 * 1024 // 5MB
      
      if (!isValidType) {
        setErrorText('Invalid file format. Please upload a PDF, DOC, or DOCX.')
        setStatus('error')
        return
      }
      if (!isValidSize) {
        setErrorText('File is too large. Maximum size allowed is 5MB.')
        setStatus('error')
        return
      }
      setResume(file)
      setErrorText('')
      if (status === 'error') setStatus('idle')
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const isValidSize = file.size <= 5 * 1024 * 1024 // 5MB
      if (!isValidSize) {
        setErrorText('File is too large. Maximum size allowed is 5MB.')
        setStatus('error')
        return
      }
      setResume(file)
      setErrorText('')
      if (status === 'error') setStatus('idle')
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!resume) {
      setErrorText('Please upload your resume to complete the application.')
      setStatus('error')
      return
    }
    
    setStatus('submitting')
    setErrorText('')

    const formData = new FormData()
    formData.append('fullName', fullName)
    formData.append('email', email)
    formData.append('phone', phone || '')
    formData.append('position', position)
    formData.append('experience', experience)
    formData.append('portfolio', portfolio || '')
    formData.append('message', message || '')
    formData.append('resume', resume)

    try {
      const response = await fetch('http://localhost:5252/api/careers', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        setStatus('success')
        setFullName('')
        setEmail('')
        setPhone('')
        setPosition('')
        setExperience('')
        setPortfolio('')
        setMessage('')
        setResume(null)
      } else {
        const errorData = await response.json().catch(() => null)
        setStatus('error')
        setErrorText(errorData?.message || 'Failed to submit application. Please try again.')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
      setErrorText('A network error occurred. Please check if the backend is running.')
    }
  }

  return (
    <>
      {/* Page 1: Hero Section */}
      <section id="careers-apply-hero" className="w-full relative lg:aspect-[3/2] bg-[#07080a] flex flex-col justify-between lg:justify-center min-h-[calc(100vh-6rem)] lg:min-h-0">
        {/* Desktop Background Image */}
        <div className="absolute inset-0 hidden lg:block">
          <img 
            src={caplImg} 
            alt="Build Your Future With Galletrix" 
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
            Build Your Future With Galletrix
          </h1>

          {/* Description */}
          <p className="font-sans text-[16px] sm:text-[18px] md:text-[19px] leading-[1.65] text-slate-400 max-w-3xl mb-14">
            Tell us about your business challenge. Our team will respond within 24 hours with a tailored assessment.
          </p>
        </div>

        {/* Mobile Block Image */}
        <div className="w-full lg:hidden my-6">
          <img 
            src={caplImg} 
            alt="Build Your Future With Galletrix" 
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Page 2: Apply Now Form Section */}
      <section id="careers-apply-form" className="w-full bg-[#07080a] py-24 border-t border-slate-900/60 flex flex-col items-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center animate-fade-in">
          
          {/* Section Headers */}
          <div className="flex flex-col items-center text-center mb-16">
            <span className="font-sans text-[15px] font-medium tracking-widest text-slate-400 mb-4 uppercase flex items-center gap-4">
              <span className="h-[1px] w-8 bg-slate-700"></span>
              Applications
              <span className="h-[1px] w-8 bg-slate-700"></span>
            </span>
            <h2 className="font-serif text-[38px] sm:text-[46px] md:text-[52px] font-bold text-white tracking-tight mb-3">
              Apply Now
            </h2>
            <p className="font-sans text-[15px] sm:text-[16px] text-slate-400">
              Send your profile to our team.
            </p>
          </div>

          {/* Form container */}
          <div className="w-full max-w-4xl border border-slate-800/80 bg-slate-950/20 p-8 md:p-12 rounded-[32px] shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Row 1: Full Name and Email Address */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[14px] font-semibold tracking-wider text-slate-300 uppercase">
                    Full NAME *
                  </label>
                  <input 
                    type="text" 
                    placeholder="Your full name" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#0a0c10]/60 border border-slate-800/80 rounded-xl px-5 py-4 text-[15px] text-white placeholder-slate-600 focus:outline-none focus:border-[#e2942b] focus:ring-1 focus:ring-[#e2942b] transition-all" 
                    required 
                    disabled={status === 'submitting'}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[14px] font-semibold tracking-wider text-slate-300 uppercase">
                    EMAIL ADDRESS *
                  </label>
                  <input 
                    type="email" 
                    placeholder="you@email.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#0a0c10]/60 border border-slate-800/80 rounded-xl px-5 py-4 text-[15px] text-white placeholder-slate-600 focus:outline-none focus:border-[#e2942b] focus:ring-1 focus:ring-[#e2942b] transition-all" 
                    required 
                    disabled={status === 'submitting'}
                  />
                </div>
              </div>

              {/* Row 2: Phone Number */}
              <div className="space-y-2">
                <label className="block text-[14px] font-semibold tracking-wider text-slate-300 uppercase">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  placeholder="+91 00000 00000" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#0a0c10]/60 border border-slate-800/80 rounded-xl px-5 py-4 text-[15px] text-white placeholder-slate-600 focus:outline-none focus:border-[#e2942b] focus:ring-1 focus:ring-[#e2942b] transition-all" 
                  disabled={status === 'submitting'}
                />
              </div>

              {/* Row 3: Position Applying For and Experience Level */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[14px] font-semibold tracking-wider text-slate-300 uppercase">
                    Position Applying For *
                  </label>
                  <div className="relative">
                    <select 
                      value={position}
                      onChange={(e) => setPosition(e.target.value)}
                      className="w-full bg-[#0a0c10]/60 border border-slate-800/80 rounded-xl px-5 py-4 text-[15px] text-slate-300 focus:outline-none focus:border-[#e2942b] focus:ring-1 focus:ring-[#e2942b] transition-all appearance-none cursor-pointer"
                      required
                      disabled={status === 'submitting'}
                    >
                      <option value="" disabled>Select a role</option>
                      <option value="frontend">Frontend Developer</option>
                      <option value="backend">Backend Developer</option>
                      <option value="fullstack">Fullstack Engineer</option>
                      <option value="uiux">UI/UX Designer</option>
                      <option value="project-manager">Project Manager</option>
                      <option value="devops">DevOps Engineer</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-slate-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[14px] font-semibold tracking-wider text-slate-300 uppercase">
                    Experience Level *
                  </label>
                  <div className="relative">
                    <select 
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="w-full bg-[#0a0c10]/60 border border-slate-800/80 rounded-xl px-5 py-4 text-[15px] text-slate-300 focus:outline-none focus:border-[#e2942b] focus:ring-1 focus:ring-[#e2942b] transition-all appearance-none cursor-pointer"
                      required
                      disabled={status === 'submitting'}
                    >
                      <option value="" disabled>Select Level</option>
                      <option value="junior">Junior (0-2 years)</option>
                      <option value="mid">Mid-Level (2-5 years)</option>
                      <option value="senior">Senior (5+ years)</option>
                      <option value="lead">Lead / Architect</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-slate-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 4: Portfolio/LinkedIn */}
              <div className="space-y-2">
                <label className="block text-[14px] font-semibold tracking-wider text-slate-300 uppercase">
                  Portfolio / Linkedin Link
                </label>
                <input 
                  type="url" 
                  placeholder="https://yourportfolio.com or linkedin.com/in/you" 
                  value={portfolio}
                  onChange={(e) => setPortfolio(e.target.value)}
                  className="w-full bg-[#0a0c10]/60 border border-slate-800/80 rounded-xl px-5 py-4 text-[15px] text-white placeholder-slate-600 focus:outline-none focus:border-[#e2942b] focus:ring-1 focus:ring-[#e2942b] transition-all" 
                  disabled={status === 'submitting'}
                />
              </div>

              {/* Row 5: Upload Resume Drag and Drop */}
              <div className="space-y-2">
                <label className="block text-[14px] font-semibold tracking-wider text-slate-300 uppercase">
                  Upload Resume
                </label>
                <div 
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                  onClick={triggerFileInput}
                  className={`w-full border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300 ${
                    dragActive 
                      ? 'border-[#e2942b] bg-[#e2942b]/5' 
                      : 'border-slate-800/80 bg-[#0a0c10]/40 hover:border-slate-700/80 hover:bg-[#0a0c10]/60'
                  }`}
                >
                  <input 
                    ref={fileInputRef}
                    type="file" 
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                    disabled={status === 'submitting'}
                  />
                  
                  <div className="w-12 h-12 rounded-full bg-slate-900/60 flex items-center justify-center text-slate-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                  </div>
                  
                  {resume ? (
                    <div className="text-center space-y-1">
                      <p className="font-sans text-[15px] font-semibold text-slate-200">{resume.name}</p>
                      <p className="font-sans text-[13px] text-slate-500">{(resume.size / (1024 * 1024)).toFixed(2)} MB</p>
                    </div>
                  ) : (
                    <div className="text-center space-y-1">
                      <p className="font-sans text-[15px] font-semibold text-slate-300">
                        Drop your resume here, or <span className="text-[#e2942b] hover:underline">click to browse</span>
                      </p>
                      <p className="font-sans text-[13px] text-slate-500">PDF, DOC, DOCX - max 5MB</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Row 6: Message Textarea */}
              <div className="space-y-2">
                <label className="block text-[14px] font-semibold tracking-wider text-slate-300 uppercase">
                  Message
                </label>
                <textarea 
                  rows={6} 
                  placeholder="Tell us a bit yourself and why you want to join Galletrix..." 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#0a0c10]/60 border border-slate-800/80 rounded-xl px-5 py-4 text-[15px] text-white placeholder-slate-600 focus:outline-none focus:border-[#e2942b] focus:ring-1 focus:ring-[#e2942b] transition-all resize-none" 
                  disabled={status === 'submitting'}
                />
              </div>

              {/* Status alerts */}
              {status === 'success' && (
                <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 rounded-xl text-[14px] text-center font-medium animate-fade-in">
                  Application submitted successfully! Our recruitment team will review your profile and contact you soon.
                </div>
              )}

              {status === 'error' && (
                <div className="bg-rose-500/10 border border-rose-500/30 text-rose-400 p-4 rounded-xl text-[14px] text-center font-medium animate-fade-in">
                  {errorText}
                </div>
              )}

              {/* Submit Button */}
              <div className="w-full flex justify-center">
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full max-w-sm bg-[#e2942b] hover:bg-[#cc6f2a] text-white py-4.5 rounded-full text-[16px] font-semibold flex items-center justify-center transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] cursor-pointer shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{status === 'submitting' ? 'Submitting...' : 'Submit Application'}</span>
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

      {/* Page 3: Get In Touch Section (as in screenshot) */}
      <section id="careers-apply-get-in-touch" className="w-full bg-white text-[#07080a] py-24 md:py-32 flex flex-col items-center justify-center border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center animate-fade-in">
          <span className="text-[15px] font-semibold tracking-wide text-slate-500 mb-5 uppercase font-sans">
            Get In Touch
          </span>
          
          <h2 className="font-serif text-[42px] sm:text-[52px] md:text-[68px] font-bold leading-[1.15] text-[#07080a] tracking-tight mb-8 max-w-3xl">
            Ready to transform <br />
            your business <br />
            <span className="text-[#1b5ea3] font-medium">digitally?</span>
          </h2>
          
          <p className="font-sans text-[16px] sm:text-[18px] md:text-[20px] leading-relaxed text-slate-500 max-w-2xl mb-10">
            Let us architect the digital infrastructure your business deserves.
          </p>

          <button 
            onClick={() => navigateToContact(1)}
            className="bg-black hover:bg-slate-900 text-white px-10 py-4 rounded-full text-[15px] font-semibold transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            Let's Talk
          </button>
        </div>
      </section>
    </>
  )
}

export default CareersApply
