import React, { useState } from 'react'

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

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorText('')

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setErrorText('Please enter a valid email address.')
      return
    }

    setIsSubmitting(true)

    // Simulate authenticating for 1.2 seconds to feel premium
    setTimeout(() => {
      if (email === 'admin@galletrix.com' && password === 'admin123') {
        setIsLoggedIn(true)
        setIsSubmitting(false)
      } else {
        setErrorText('Invalid email or password. Please try again.')
        setIsSubmitting(false)
      }
    }, 1200)
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
            Administrator Login
          </h1>
          <p className="text-[14px] text-slate-400 leading-normal max-w-xs mx-auto">
            Authorized personnel only. Sessions are encrypted and monitored.
          </p>
        </div>

        {/* Login Card */}
        <div className="backdrop-blur-xl bg-slate-950/45 border border-slate-900/90 shadow-2xl rounded-2xl p-6 sm:p-8">
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
                className="w-full bg-[#0a0c10] border border-slate-800/80 rounded-xl px-5 py-4 text-[15px] text-white placeholder-slate-600 focus:outline-none focus:border-[#cc6f2a] focus:ring-1 focus:ring-[#cc6f2a] transition-all"
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
                className="w-full bg-[#0a0c10] border border-slate-800/80 rounded-xl px-5 py-4 text-[15px] text-white placeholder-slate-600 focus:outline-none focus:border-[#cc6f2a] focus:ring-1 focus:ring-[#cc6f2a] transition-all"
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
        </div>

        {/* Info Notice */}
        <div className="text-center mt-6 text-slate-500 text-[11px] leading-relaxed">
          Default developer credentials: <code className="bg-slate-950 px-1.5 py-0.5 rounded border border-slate-900 text-slate-400">admin@galletrix.com</code> / <code className="bg-slate-950 px-1.5 py-0.5 rounded border border-slate-900 text-slate-400">admin123</code>
        </div>

      </div>
    </div>
  )
}

export default AdminLogin
