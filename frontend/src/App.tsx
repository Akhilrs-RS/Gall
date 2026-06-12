import { useState, useEffect } from 'react'
import type { ViewState } from './types'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Works from './pages/Works'
import Industry from './pages/Industry'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Erp from './pages/Erp'
import Automation from './pages/Automation'
import Web from './pages/Web'
import Dashboard from './pages/Dashboard'
import Marketing from './pages/Marketing'
import UIUX from './pages/UIUX'
import Careers from './pages/Careers'
import Other from './pages/Other'

function App() {
  const [view, setView] = useState<ViewState>('other')
  const [contactScrollTarget, setContactScrollTarget] = useState<1 | 2 | 3 | null>(null)

  const navigateToContact = (page: 1 | 2 | 3) => {
    (window as any).__contactPageOverride = page
    setView('contact')
    setContactScrollTarget(page)
    window.location.hash = '#contact'
  }

  const scrollToContactPage = (page: 1 | 2 | 3) => {
    const element = document.getElementById(`contact-page-${page}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash.startsWith('#industry')) {
        setView('industry')
      } else if (hash.startsWith('#services')) {
        setView('services')
      } else if (hash.startsWith('#erp')) {
        setView('erp')
      } else if (hash.startsWith('#works')) {
        setView('works')
      } else if (hash.startsWith('#contact')) {
        setView('contact')
        const override = (window as any).__contactPageOverride
        if (override === 1 || override === 2 || override === 3) {
          setContactScrollTarget(override)
          delete (window as any).__contactPageOverride
        } else {
          const match = hash.match(/#contact-page-(\d+)/)
          if (match) {
            setContactScrollTarget(parseInt(match[1]) as 1 | 2 | 3)
          } else {
            setContactScrollTarget(1)
          }
        }
      } else if (hash.startsWith('#about')) {
        setView('about')
      } else if (hash.startsWith('#careers')) {
        setView('careers')
      } else if (hash.startsWith('#automation')) {
        setView('automation')
      } else if (hash.startsWith('#web')) {
        setView('web')
      } else if (hash.startsWith('#dashboard')) {
        setView('dashboard')
      } else if (hash.startsWith('#marketing')) {
        setView('marketing')
      } else if (hash.startsWith('#uiux')) {
        setView('uiux')
      } else if (hash === '' || hash === '#' || hash === '#other') {
        setView('other')
      } else {
        setView('other')
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (view === 'contact' && contactScrollTarget !== null) {
      const timer = setTimeout(() => {
        scrollToContactPage(contactScrollTarget)
        setContactScrollTarget(null)
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [view, contactScrollTarget])

  return (
    <div className="min-h-screen bg-[#07080a] text-slate-100 font-sans flex flex-col justify-between overflow-x-hidden select-none">
      <Navbar view={view} setView={setView} navigateToContact={navigateToContact} />

      <main className="w-full flex flex-col items-center">
        {view === 'about' && <About navigateToContact={navigateToContact} />}
        {view === 'works' && <Works navigateToContact={navigateToContact} />}
        {view === 'industry' && <Industry navigateToContact={navigateToContact} />}
        {view === 'contact' && <Contact navigateToContact={navigateToContact} />}
        {view === 'services' && <Services view={view} setView={setView} navigateToContact={navigateToContact} />}
        {view === 'erp' && <Erp navigateToContact={navigateToContact} />}
        {view === 'automation' && <Automation navigateToContact={navigateToContact} />}
        {view === 'web' && <Web navigateToContact={navigateToContact} />}
        {view === 'dashboard' && <Dashboard navigateToContact={navigateToContact} />}
        {view === 'marketing' && <Marketing navigateToContact={navigateToContact} />}
        {view === 'uiux' && <UIUX navigateToContact={navigateToContact} />}
        {view === 'careers' && <Careers navigateToContact={navigateToContact} />}
        {view === 'other' && <Other setView={setView} navigateToContact={navigateToContact} />}
      </main>

      <Footer setView={setView} navigateToContact={navigateToContact} />
    </div>
  )
}

export default App
