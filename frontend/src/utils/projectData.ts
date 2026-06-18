export interface Project {
  id: string
  tag: string
  title: string
  description: string
  metrics: string[]
  selectedWork: boolean
}

export const defaultProjects: Project[] = [
  {
    id: '1',
    tag: 'ERP System',
    title: 'Enterprise Resource Planning Platform',
    description: 'A fully integrated ERP platform built for a 500-person manufacturing company. Covers procurement, finance, HR, inventory, and production scheduling in a unified dashboard interface.',
    metrics: [
      '80% reduction in manual data entry',
      '6-week implementation timeline',
      '500+ active daily users'
    ],
    selectedWork: true
  },
  {
    id: '2',
    tag: 'Business Automation',
    title: 'HR Onboarding & Payroll Automation Suite',
    description: 'Automated end-to-end onboarding workflow for a manpower agency managing 3,000+ contractors. Document collection, contract signing, payroll processing — all automated.',
    metrics: [
      '82% reduction in onboarding time',
      '3,000+ employees managed',
      'Zero manual payroll errors'
    ],
    selectedWork: true
  },
  {
    id: '3',
    tag: 'Dashboard & Analytics',
    title: 'Logistics Command Dashboard',
    description: 'A real-time operations dashboard for a regional logistics company with 200+ vehicles. Live GPS tracking, driver performance analytics, route efficiency scoring.',
    metrics: [
      '200+ vehicles tracked live',
      '34% fuel cost reduction',
      'Executive-level real-time visibility'
    ],
    selectedWork: true
  },
  {
    id: '4',
    tag: 'Web Application',
    title: 'Healthcare Patient Management Portal',
    description: 'A secure, HIPAA-aligned patient management web application covering appointment booking, medical records, billing integration, and doctor-patient communication.',
    metrics: [
      '15 clinics unified on one platform',
      '40% reduction in admin workload',
      'Patient satisfaction up by 28%'
    ],
    selectedWork: false
  },
  {
    id: '5',
    tag: 'Recruitment Pipeline Automation',
    title: 'Recruitment Pipeline Automation',
    description: 'A visual workflow engine automating the full recruitment cycle — from job posting, CV screening, interview scheduling, to offer issuance and onboarding initiation.',
    metrics: [
      'Time-to-hire reduced by 60%',
      '10,000+ candidates processed',
      'Fully automated screening'
    ],
    selectedWork: false
  },
  {
    id: '6',
    tag: 'Digital Transformation',
    title: 'Corporate Operations Modernization',
    description: 'Complete digital transformation of a legacy paper-based operation into a cloud-first enterprise platform covering compliance, approvals, reporting, and cross-department workflows.',
    metrics: [
      'Legacy systems eliminated',
      '12 departments integrated',
      'Executive-level real-time visibility'
    ],
    selectedWork: false
  }
]

const LOCAL_STORAGE_KEY = 'galletrix_projects'

export const getProjects = (): Project[] => {
  if (typeof window === 'undefined') return defaultProjects
  try {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (!data) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(defaultProjects))
      return defaultProjects
    }
    return JSON.parse(data)
  } catch (error) {
    console.error('Failed to read projects from localStorage', error)
    return defaultProjects
  }
}

export const saveProjects = (projects: Project[]): void => {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(projects))
  } catch (error) {
    console.error('Failed to save projects to localStorage', error)
  }
}
