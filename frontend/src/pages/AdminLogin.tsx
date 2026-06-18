import React, { useState, useEffect } from 'react'
import { getProjects, saveProjects } from '../utils/projectData'
import type { Project } from '../utils/projectData'

interface Submission {
  id: number
  type: 'contact' | 'career'
  name: string
  detail: string
  time: string
  status: 'new' | 'reviewed'
}

const initialSubmissions: Submission[] = [
  { id: 1, type: 'career', name: 'Jane Doe', detail: 'Senior Frontend Engineer | Applied with resume.pdf', time: '2 hours ago', status: 'new' },
  { id: 2, type: 'contact', name: 'Alice Johnson', detail: 'Acme Corp | Interested in ERP implementation & Automation', time: '3 hours ago', status: 'new' },
  { id: 3, type: 'contact', name: 'Bob Miller', detail: 'BuildIT | Requesting quote for custom React/Node SPA', time: '5 hours ago', status: 'reviewed' },
  { id: 4, type: 'career', name: 'John Smith', detail: 'Technical Project Manager | Experience: 6 years', time: '1 day ago', status: 'reviewed' },
]

interface AdminLoginProps {
  navigateToContact: (page: 1 | 2 | 3) => void
}

const AdminLogin: React.FC<AdminLoginProps> = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorText, setErrorText] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Dashboard state
  const [submissions, setSubmissions] = useState<Submission[]>(initialSubmissions)
  const [logs, setLogs] = useState<string[]>([
    `[INFO] ${new Date().toLocaleTimeString()} - Admin login successful`,
    `[INFO] ${new Date().toLocaleTimeString()} - Database connection pool healthy`,
    `[INFO] 10:42:01 - Server container started on port 5252`,
    `[INFO] 09:30:15 - Background routine cleared temporary upload cache`,
  ])

  // Project manager state
  const [projectsList, setProjectsList] = useState<Project[]>([])
  const [newTag, setNewTag] = useState('')
  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')
  const [newMetric1, setNewMetric1] = useState('')
  const [newMetric2, setNewMetric2] = useState('')
  const [newMetric3, setNewMetric3] = useState('')
  const [newSelectedWork, setNewSelectedWork] = useState(false)

  useEffect(() => {
    setProjectsList(getProjects())
  }, [])

  const handleDeleteProject = (id: string) => {
    const updated = projectsList.filter(p => p.id !== id)
    setProjectsList(updated)
    saveProjects(updated)
    setLogs(prev => [
      `[ACTION] ${new Date().toLocaleTimeString()} - Deleted project with ID: ${id}`,
      ...prev
    ])
  }

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTag.trim() || !newTitle.trim() || !newDescription.trim()) {
      alert('Please fill out Tag, Title, and Description.')
      return
    }

    const metrics: string[] = []
    if (newMetric1.trim()) metrics.push(newMetric1.trim())
    if (newMetric2.trim()) metrics.push(newMetric2.trim())
    if (newMetric3.trim()) metrics.push(newMetric3.trim())

    const newProj: Project = {
      id: Date.now().toString(),
      tag: newTag.trim(),
      title: newTitle.trim(),
      description: newDescription.trim(),
      metrics,
      selectedWork: newSelectedWork
    }

    const updated = [...projectsList, newProj]
    setProjectsList(updated)
    saveProjects(updated)

    // Clear form inputs
    setNewTag('')
    setNewTitle('')
    setNewDescription('')
    setNewMetric1('')
    setNewMetric2('')
    setNewMetric3('')
    setNewSelectedWork(false)

    setLogs(prev => [
      `[ACTION] ${new Date().toLocaleTimeString()} - Created new project: "${newProj.title}"`,
      ...prev
    ])
  }

  // Forgot password states
  type AuthStage = 'login' | 'forgot-email' | 'forgot-otp' | 'forgot-reset'
  const [stage, setStage] = useState<AuthStage>('login')
  const [adminPassword, setAdminPassword] = useState('admin123')
  const [forgotEmail, setForgotEmail] = useState('')
  const [generatedOtp, setGeneratedOtp] = useState('')
  const [otpInput, setOtpInput] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [showOtpToast, setShowOtpToast] = useState(false)
  const [successText, setSuccessText] = useState('')

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorText('')
    setSuccessText('')

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setErrorText('Please enter a valid email address.')
      return
    }

    setIsSubmitting(true)

    // Simulate authenticating for 1.2 seconds to feel premium
    setTimeout(() => {
      if ((email === 'admin@galletrix.com' || email === 'info@galletrix.com') && password === adminPassword) {
        setIsLoggedIn(true)
        setIsSubmitting(false)
      } else {
        setErrorText('Invalid email or password. Please try again.')
        setIsSubmitting(false)
      }
    }, 1200)
  }

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorText('')

    if (forgotEmail.trim().toLowerCase() !== 'info@galletrix.com') {
      setErrorText('Recovery OTP can only be sent to info@galletrix.com.')
      return
    }

    setIsSubmitting(true)

    setTimeout(() => {
      const code = Math.floor(100000 + Math.random() * 900000).toString()
      setGeneratedOtp(code)
      setShowOtpToast(true)
      setIsSubmitting(false)
      setStage('forgot-otp')
      setLogs(prev => [
        `[SECURITY] ${new Date().toLocaleTimeString()} - Recovery OTP generated for info@galletrix.com`,
        ...prev
      ])
    }, 1000)
  }

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorText('')

    if (otpInput.trim() !== generatedOtp) {
      setErrorText('Invalid OTP code. Please check and try again.')
      return
    }

    setStage('forgot-reset')
  }

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorText('')

    if (!newPassword.trim()) {
      setErrorText('Password cannot be empty.')
      return
    }
    if (newPassword !== confirmNewPassword) {
      setErrorText('Passwords do not match.')
      return
    }

    setIsSubmitting(true)

    setTimeout(() => {
      setAdminPassword(newPassword)
      setSuccessText('Password reset successfully. Log in using your new credentials.')
      
      setForgotEmail('')
      setGeneratedOtp('')
      setOtpInput('')
      setNewPassword('')
      setConfirmNewPassword('')
      setShowOtpToast(false)
      setIsSubmitting(false)
      setStage('login')

      setLogs(prev => [
        `[SECURITY] ${new Date().toLocaleTimeString()} - Admin password reset successfully`,
        ...prev
      ])
    }, 1000)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setEmail('')
    setPassword('')
    setErrorText('')
  }

  const handleMarkReviewed = (id: number) => {
    setSubmissions(prev =>
      prev.map(sub => (sub.id === id ? { ...sub, status: 'reviewed' as const } : sub))
    )
    setLogs(prev => [
      `[ACTION] ${new Date().toLocaleTimeString()} - Marked submission #${id} as reviewed`,
      ...prev
    ])
  }

  const handleDeleteSubmission = (id: number) => {
    setSubmissions(prev => prev.filter(sub => sub.id !== id))
    setLogs(prev => [
      `[ACTION] ${new Date().toLocaleTimeString()} - Deleted submission #${id}`,
      ...prev
    ])
  }

  if (isLoggedIn) {
    return (
      <div className="w-full min-h-[calc(100vh-6rem)] pt-32 pb-20 px-6 md:px-12 lg:px-16 bg-[#07080a] animate-fade-in">
        <div className="max-w-7xl mx-auto space-y-10">
          
          {/* Dashboard Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-900 pb-8">
            <div>
              <span className="text-[13px] font-semibold tracking-wider text-[#cc6f2a] uppercase font-sans">
                Galletrix Admin Portal
              </span>
              <h1 className="font-serif text-[36px] sm:text-[42px] font-bold text-white tracking-tight mt-1">
                Control Hub
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 border border-slate-800 text-[13px] text-slate-300">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Admin session active
              </div>
              <button
                onClick={handleLogout}
                className="bg-slate-950/80 hover:bg-slate-900 border border-slate-800 text-slate-300 hover:text-white px-5 py-2.5 rounded-xl text-[14px] font-semibold transition-all duration-200 cursor-pointer active:scale-95"
              >
                Log Out
              </button>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="backdrop-blur-md bg-slate-950/45 border border-slate-900 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-800/80 transition-all duration-300">
              <span className="text-[13px] font-medium text-slate-400">Total Submissions</span>
              <div className="flex items-baseline gap-2.5 mt-4">
                <span className="text-[32px] font-serif font-bold text-white">22</span>
                <span className="text-[12px] font-semibold text-emerald-400 font-sans">+12%</span>
              </div>
              <span className="text-[11px] text-slate-500 mt-2">from last month</span>
            </div>

            <div className="backdrop-blur-md bg-slate-950/45 border border-slate-900 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-800/80 transition-all duration-300">
              <span className="text-[13px] font-medium text-slate-400">Careers Applications</span>
              <div className="flex items-baseline gap-2.5 mt-4">
                <span className="text-[32px] font-serif font-bold text-white">8</span>
                <span className="text-[12px] font-semibold text-emerald-400 font-sans">+25%</span>
              </div>
              <span className="text-[11px] text-slate-500 mt-2">active job postings</span>
            </div>

            <div className="backdrop-blur-md bg-slate-950/45 border border-slate-900 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-800/80 transition-all duration-300">
              <span className="text-[13px] font-medium text-slate-400">DB Service Link</span>
              <div className="flex items-baseline gap-2.5 mt-4">
                <span className="text-[20px] font-semibold text-white">MySQL DB</span>
              </div>
              <span className="text-[11px] text-emerald-500 flex items-center gap-1.5 mt-2 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Connected
              </span>
            </div>

            <div className="backdrop-blur-md bg-slate-950/45 border border-slate-900 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-800/80 transition-all duration-300">
              <span className="text-[13px] font-medium text-slate-400">Avg API Response</span>
              <div className="flex items-baseline gap-2.5 mt-4">
                <span className="text-[32px] font-serif font-bold text-white">84ms</span>
              </div>
              <span className="text-[11px] text-slate-500 mt-2">99.9% uptime</span>
            </div>

          </div>

          {/* Submissions & Logs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Live Submissions Table */}
            <div className="lg:col-span-8 backdrop-blur-md bg-slate-950/45 border border-slate-900 rounded-2xl p-6 space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-[18px] font-semibold text-white">Recent Inbox Submissions</h2>
                <span className="text-[12px] text-slate-400">{submissions.length} pending items</span>
              </div>

              {submissions.length === 0 ? (
                <div className="text-center py-12 text-slate-500 text-[14px]">
                  No recent submissions found.
                </div>
              ) : (
                <div className="space-y-4">
                  {submissions.map(sub => (
                    <div
                      key={sub.id}
                      className="p-4 rounded-xl bg-slate-950/80 border border-slate-900 hover:border-slate-800/80 transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                          <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                            sub.type === 'career' ? 'bg-[#cc6f2a]/20 text-[#cc6f2a]' : 'bg-[#0091ff]/20 text-[#0091ff]'
                          }`}>
                            {sub.type === 'career' ? 'Career' : 'Contact'}
                          </span>
                          <span className="text-[15px] font-semibold text-white">{sub.name}</span>
                          {sub.status === 'new' && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#cc6f2a]"></span>
                          )}
                        </div>
                        <p className="text-[13px] text-slate-400 leading-relaxed">{sub.detail}</p>
                        <span className="text-[11px] text-slate-500 block">{sub.time}</span>
                      </div>

                      <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                        {sub.status === 'new' && (
                          <button
                            onClick={() => handleMarkReviewed(sub.id)}
                            className="bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white px-3.5 py-1.5 rounded-lg text-[12px] font-medium transition-all duration-200 cursor-pointer"
                          >
                            Mark Reviewed
                          </button>
                        )}
                        <button
                          onClick={() => handleDeleteSubmission(sub.id)}
                          className="bg-rose-950/20 hover:bg-rose-950/40 border border-rose-900/40 hover:border-rose-900/80 text-rose-400 hover:text-rose-300 px-3.5 py-1.5 rounded-lg text-[12px] font-medium transition-all duration-200 cursor-pointer"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* System Log Console */}
            <div className="lg:col-span-4 backdrop-blur-md bg-slate-950/45 border border-slate-900 rounded-2xl p-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h2 className="text-[18px] font-semibold text-white">System Console</h2>
                <div className="bg-[#050608] border border-slate-900 rounded-xl p-4 font-mono text-[12px] text-slate-400 space-y-2.5 h-[280px] overflow-y-auto custom-scrollbar">
                  {logs.map((log, index) => (
                    <div key={index} className="leading-relaxed break-all">
                      <span className={log.includes('[ACTION]') ? 'text-[#cc6f2a]' : 'text-slate-500'}>
                        {log}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setLogs([`[INFO] ${new Date().toLocaleTimeString()} - Console cleared`, ...logs])}
                className="w-full bg-slate-950 hover:bg-slate-900 border border-slate-900 text-slate-400 hover:text-slate-300 py-3 rounded-xl text-[13px] font-medium transition-colors cursor-pointer"
              >
                Clear Log View
              </button>
            </div>

          </div>

          {/* Project Works Manager Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-slate-900 pt-10">
            
            {/* List and Delete Options */}
            <div className="lg:col-span-7 backdrop-blur-md bg-slate-950/45 border border-slate-900 rounded-2xl p-6 space-y-6">
              <div className="flex justify-between items-center pb-2 border-b border-slate-900">
                <h2 className="text-[18px] font-semibold text-white">Project Portfolio Manager</h2>
                <span className="text-[12px] text-slate-400">{projectsList.length} total works</span>
              </div>

              {projectsList.length === 0 ? (
                <div className="text-center py-12 text-slate-500 text-[14px]">
                  No project works defined in portfolio.
                </div>
              ) : (
                <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1 custom-scrollbar">
                  {projectsList.map(proj => (
                    <div
                      key={proj.id}
                      className="p-4 rounded-xl bg-slate-950/80 border border-slate-900 hover:border-slate-800/80 transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
                    >
                      <div className="space-y-1 max-w-[80%] text-left">
                        <div className="flex items-center gap-2.5">
                          <span className="text-[11px] px-2 py-0.5 rounded-full font-bold uppercase bg-slate-900 text-slate-400 border border-slate-800">
                            {proj.tag}
                          </span>
                          {proj.selectedWork && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase bg-amber-500/10 text-amber-500 border border-amber-500/20">
                              Featured
                            </span>
                          )}
                        </div>
                        <h4 className="text-[15px] font-semibold text-white">{proj.title}</h4>
                        <p className="text-[13px] text-slate-400 line-clamp-2 leading-relaxed">{proj.description}</p>
                        {proj.metrics && proj.metrics.length > 0 && (
                          <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-[#cc6f2a] pt-1">
                            {proj.metrics.map((m, i) => (
                              <span key={i} className="flex items-center gap-1">
                                <span className="w-1 h-1 rounded-full bg-[#cc6f2a]"></span> {m}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => handleDeleteProject(proj.id)}
                        className="bg-rose-950/20 hover:bg-rose-950/40 border border-rose-900/40 hover:border-rose-900/80 text-rose-400 hover:text-rose-300 px-3.5 py-1.5 rounded-lg text-[12px] font-medium transition-all duration-200 cursor-pointer self-start sm:self-center"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Add Project Form */}
            <div className="lg:col-span-5 backdrop-blur-md bg-slate-950/45 border border-slate-900 rounded-2xl p-6 space-y-6">
              <div className="pb-2 border-b border-slate-900">
                <h2 className="text-[18px] font-semibold text-white">Add New Project Work</h2>
              </div>

              <form onSubmit={handleAddProject} className="space-y-4 text-left">
                <div className="space-y-1.5">
                  <label className="block text-[12px] font-semibold text-slate-400">Project Tag *</label>
                  <input
                    type="text"
                    placeholder="e.g. ERP System, UIUX Design"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    className="w-full bg-[#0a0c10] border border-slate-800/80 rounded-xl px-4 py-2.5 text-[14px] text-white placeholder-slate-600 focus:outline-none focus:border-[#cc6f2a] focus:ring-1 focus:ring-[#cc6f2a] transition-all"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[12px] font-semibold text-slate-400">Project Title *</label>
                  <input
                    type="text"
                    placeholder="e.g. Enterprise Resource Planning Platform"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full bg-[#0a0c10] border border-slate-800/80 rounded-xl px-4 py-2.5 text-[14px] text-white placeholder-slate-600 focus:outline-none focus:border-[#cc6f2a] focus:ring-1 focus:ring-[#cc6f2a] transition-all"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[12px] font-semibold text-slate-400">Description *</label>
                  <textarea
                    rows={3}
                    placeholder="Enter short description of the solution..."
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    className="w-full bg-[#0a0c10] border border-slate-800/80 rounded-xl px-4 py-2.5 text-[14px] text-white placeholder-slate-600 focus:outline-none focus:border-[#cc6f2a] focus:ring-1 focus:ring-[#cc6f2a] transition-all resize-none"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[12px] font-semibold text-slate-400">Project Metrics (Optional)</label>
                  <div className="space-y-2">
                    <input
                      type="text"
                      placeholder="Metric 1: e.g. 80% reduction in manual data entry"
                      value={newMetric1}
                      onChange={(e) => setNewMetric1(e.target.value)}
                      className="w-full bg-[#0a0c10] border border-slate-800/80 rounded-xl px-4 py-2 text-[13px] text-white placeholder-slate-600 focus:outline-none focus:border-[#cc6f2a] transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Metric 2: e.g. 6-week implementation timeline"
                      value={newMetric2}
                      onChange={(e) => setNewMetric2(e.target.value)}
                      className="w-full bg-[#0a0c10] border border-slate-800/80 rounded-xl px-4 py-2 text-[13px] text-white placeholder-slate-600 focus:outline-none focus:border-[#cc6f2a] transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Metric 3: e.g. 500+ active daily users"
                      value={newMetric3}
                      onChange={(e) => setNewMetric3(e.target.value)}
                      className="w-full bg-[#0a0c10] border border-slate-800/80 rounded-xl px-4 py-2 text-[13px] text-white placeholder-slate-600 focus:outline-none focus:border-[#cc6f2a] transition-all"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2.5 py-1">
                  <input
                    type="checkbox"
                    id="selectedWork"
                    checked={newSelectedWork}
                    onChange={(e) => setNewSelectedWork(e.target.checked)}
                    className="w-4.5 h-4.5 rounded border-slate-800 bg-[#0a0c10] text-[#cc6f2a] focus:ring-0 cursor-pointer"
                  />
                  <label htmlFor="selectedWork" className="text-[13px] text-slate-300 font-medium cursor-pointer select-none">
                    Feature on Landing Page (Selected Work)
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#cc6f2a] hover:bg-[#b86120] text-white py-3 rounded-xl text-[14px] font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <span>Add Project</span>
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
              </form>
            </div>

          </div>

        </div>
      </div>
    )
  }

  return (
    <div className="w-full min-h-[calc(100vh-6rem)] flex items-center justify-center pt-28 pb-20 px-6 bg-[#07080a]">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] bg-[#cc6f2a]/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-md animate-slide-up">
        
        {/* Portal Branding */}
        <div className="text-center mb-8 space-y-2">
          <span className="text-[12px] font-semibold tracking-[0.2em] text-[#cc6f2a] uppercase font-sans">
            Secure Terminal Access
          </span>
          <h1 className="font-serif text-[32px] sm:text-[36px] font-bold text-white tracking-tight leading-tight">
            {stage === 'login' ? 'Administrator Login' : stage === 'forgot-email' || stage === 'forgot-otp' ? 'Recovery Verification' : 'Reset Password'}
          </h1>
          <p className="text-[14px] text-slate-400 leading-normal max-w-xs mx-auto">
            {stage === 'login' ? 'Authorized personnel only. Sessions are encrypted and monitored.' : 'Verify authorization credentials to proceed with password recovery.'}
          </p>
        </div>

        {/* Login Card */}
        <div className="backdrop-blur-xl bg-slate-950/45 border border-slate-900/90 shadow-2xl rounded-2xl p-6 sm:p-8">
          {stage === 'login' && (
            <form onSubmit={handleLoginSubmit} className="space-y-6">
              
              <div className="space-y-2">
                <label className="block text-[13px] font-semibold text-slate-300 font-sans tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="admin@galletrix.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#0a0c10] border border-slate-800/80 rounded-xl px-5 py-4 text-[15px] text-white placeholder-slate-600 focus:outline-none focus:border-[#cc6f2a] focus:ring-1 focus:ring-[#cc6f2a] transition-all animate-fade-in"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <label className="block text-[13px] font-semibold text-slate-300 font-sans tracking-wide">
                  Secure Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#0a0c10] border border-slate-800/80 rounded-xl px-5 py-4 text-[15px] text-white placeholder-slate-600 focus:outline-none focus:border-[#cc6f2a] focus:ring-1 focus:ring-[#cc6f2a] transition-all animate-fade-in"
                  required
                  disabled={isSubmitting}
                />
                <div className="flex justify-end pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setStage('forgot-email')
                      setErrorText('')
                      setSuccessText('')
                    }}
                    className="text-[12px] font-semibold text-[#cc6f2a] hover:text-[#b86120] hover:underline cursor-pointer focus:outline-none transition-colors"
                  >
                    Forgot Password?
                  </button>
                </div>
              </div>

              {errorText && (
                <div className="bg-rose-500/10 border border-rose-500/30 text-rose-400 p-4 rounded-xl text-[13px] text-center font-medium animate-fade-in flex items-center justify-center gap-2.5">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  {errorText}
                </div>
              )}

              {successText && (
                <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 rounded-xl text-[13px] text-center font-medium animate-fade-in">
                  {successText}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#cc6f2a] hover:bg-[#b86120] text-white py-4 rounded-xl text-[15px] font-semibold flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] cursor-pointer shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Authenticating...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In</span>
                    <svg className="w-4.5 h-4.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h16.5a1.5 1.5 0 001.5-1.5V12a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 12v8.25a1.5 1.5 0 001.5 1.5z" />
                    </svg>
                  </>
                )}
              </button>

            </form>
          )}

          {stage === 'forgot-email' && (
            <form onSubmit={handleSendOtp} className="space-y-6">
              <div className="space-y-2 text-left">
                <label className="block text-[13px] font-semibold text-slate-300 font-sans tracking-wide">
                  Recovery Email Address
                </label>
                <p className="text-[12px] text-slate-400">
                  OTP recovery emails will be sent to the administrator recovery address.
                </p>
                <input
                  type="email"
                  placeholder="info@galletrix.com"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  className="w-full bg-[#0a0c10] border border-slate-800/80 rounded-xl px-5 py-4 text-[15px] text-white placeholder-slate-600 focus:outline-none focus:border-[#cc6f2a] focus:ring-1 focus:ring-[#cc6f2a] transition-all animate-fade-in"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {errorText && (
                <div className="bg-rose-500/10 border border-rose-500/30 text-rose-400 p-4 rounded-xl text-[13px] text-center font-medium animate-fade-in flex items-center justify-center gap-2.5">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  {errorText}
                </div>
              )}

              <div className="flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#cc6f2a] hover:bg-[#b86120] text-white py-4 rounded-xl text-[15px] font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] cursor-pointer shadow-lg"
                >
                  {isSubmitting ? 'Sending OTP...' : 'Send OTP'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setStage('login')
                    setErrorText('')
                  }}
                  className="w-full bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 py-3.5 rounded-xl text-[14px] font-semibold transition-colors cursor-pointer"
                >
                  Back to Login
                </button>
              </div>
            </form>
          )}

          {stage === 'forgot-otp' && (
            <form onSubmit={handleVerifyOtp} className="space-y-6">
              <div className="space-y-2 text-left">
                <label className="block text-[13px] font-semibold text-slate-300 font-sans tracking-wide">
                  Enter Verification OTP
                </label>
                <p className="text-[12px] text-slate-400">
                  Please enter the 6-digit recovery code sent to <code className="text-white">info@galletrix.com</code>.
                </p>
                <input
                  type="text"
                  placeholder="••••••"
                  value={otpInput}
                  onChange={(e) => setOtpInput(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  maxLength={6}
                  className="w-full bg-[#0a0c10] border border-slate-800/80 rounded-xl px-5 py-4 text-[18px] text-white placeholder-slate-600 focus:outline-none focus:border-[#cc6f2a] focus:ring-1 focus:ring-[#cc6f2a] transition-all text-center tracking-[0.3em] font-mono animate-fade-in"
                  required
                  disabled={isSubmitting}
                />
              </div>

              {errorText && (
                <div className="bg-rose-500/10 border border-rose-500/30 text-rose-400 p-4 rounded-xl text-[13px] text-center font-medium animate-fade-in flex items-center justify-center gap-2.5">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  {errorText}
                </div>
              )}

              <div className="flex flex-col gap-3">
                <button
                  type="submit"
                  className="w-full bg-[#cc6f2a] hover:bg-[#b86120] text-white py-4 rounded-xl text-[15px] font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] cursor-pointer shadow-lg"
                >
                  Verify Code
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setStage('forgot-email')
                    setErrorText('')
                    setShowOtpToast(false)
                  }}
                  className="w-full bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 py-3.5 rounded-xl text-[14px] font-semibold transition-colors cursor-pointer"
                >
                  Change Email
                </button>
              </div>
            </form>
          )}

          {stage === 'forgot-reset' && (
            <form onSubmit={handleResetPassword} className="space-y-6">
              <div className="space-y-4 text-left">
                <div className="space-y-2">
                  <label className="block text-[13px] font-semibold text-slate-300 font-sans tracking-wide">
                    New Secure Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full bg-[#0a0c10] border border-slate-800/80 rounded-xl px-5 py-4 text-[15px] text-white placeholder-slate-600 focus:outline-none focus:border-[#cc6f2a] focus:ring-1 focus:ring-[#cc6f2a] transition-all animate-fade-in"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[13px] font-semibold text-slate-300 font-sans tracking-wide">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    className="w-full bg-[#0a0c10] border border-slate-800/80 rounded-xl px-5 py-4 text-[15px] text-white placeholder-slate-600 focus:outline-none focus:border-[#cc6f2a] focus:ring-1 focus:ring-[#cc6f2a] transition-all animate-fade-in"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {errorText && (
                <div className="bg-rose-500/10 border border-rose-500/30 text-rose-400 p-4 rounded-xl text-[13px] text-center font-medium animate-fade-in flex items-center justify-center gap-2.5">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  {errorText}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#cc6f2a] hover:bg-[#b86120] text-white py-4 rounded-xl text-[15px] font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] cursor-pointer shadow-lg"
              >
                {isSubmitting ? 'Resetting Password...' : 'Reset Password'}
              </button>
            </form>
          )}

        </div>
      </div>

      {/* Floating OTP Debug Notice */}
      {showOtpToast && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm backdrop-blur-md bg-slate-900/90 border border-[#cc6f2a]/60 text-slate-100 p-5 rounded-2xl shadow-2xl animate-fade-in flex flex-col gap-2.5">
          <div className="flex items-center gap-2 text-amber-500 font-semibold text-[13px]">
            <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span>[DEBUG] Email sent to info@galletrix.com</span>
          </div>
          <p className="text-[12px] text-slate-300 leading-normal">
            A recovery verification OTP code has been generated. Use the code below to reset the administrator password:
          </p>
          <div className="flex items-center justify-between bg-black/50 border border-slate-800 rounded-xl px-4 py-2 font-mono text-[16px] text-white select-text">
            <span>{generatedOtp}</span>
            <button
              onClick={() => {
                navigator.clipboard.writeText(generatedOtp)
                alert('OTP code copied to clipboard!')
              }}
              className="text-[11px] font-bold text-[#cc6f2a] hover:underline uppercase tracking-wide cursor-pointer focus:outline-none"
            >
              Copy
            </button>
          </div>
          <button
            onClick={() => setShowOtpToast(false)}
            className="text-[11px] text-slate-500 hover:text-slate-400 self-end mt-1 cursor-pointer focus:outline-none"
          >
            Dismiss
          </button>
        </div>
      )}

    </div>
  )
}

export default AdminLogin
