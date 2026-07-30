import {
  Zap, Activity, BatteryCharging, LineChart, Bell, ShieldCheck,
  Network, Leaf, Gauge, FileBarChart, Sun, Wind, Cloud,
  Database, Server, Globe, Cpu, Layers, Users, GraduationCap,
} from 'lucide-react'

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Technology', href: '#technology' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Impact', href: '#impact' },
  { label: 'About', href: '#about' },
]

export const heroStats = [
  { value: 90, suffix: '%+', label: 'Forecast accuracy' },
  { value: 60, suffix: '%', prefix: '30–', label: 'Grid dependence cut', displayOverride: '30–60%' },
  { value: 25, suffix: '%', label: 'Battery efficiency gain' },
  { value: 35, suffix: '%', prefix: '15–', label: 'Bill savings', displayOverride: '15–35%' },
]

export const features = [
  { icon: Activity, title: 'Real-Time Monitoring', desc: 'Live visibility across solar, wind, battery, and grid assets.' },
  { icon: LineChart, title: 'AI Forecasting', desc: 'Prophet & LSTM models predict generation and demand with 90%+ accuracy.' },
  { icon: BatteryCharging, title: 'Battery Scheduling', desc: 'Automated charge/discharge cycles that extend battery lifespan.' },
  { icon: Network, title: 'Vendor-Agnostic', desc: 'Works across MQTT, Modbus, and OPC-UA hardware — no vendor lock-in.' },
  { icon: Zap, title: 'Actionable Recommendations', desc: 'Clear, prioritized actions instead of raw data dumps.' },
  { icon: Gauge, title: 'Cost-Effective Rollout', desc: 'Software-first approach cuts capex by up to 70% vs hardware-first VPPs.' },
  { icon: FileBarChart, title: 'Carbon Reporting', desc: 'Automated Net Zero-aligned emissions tracking and reports.' },
  { icon: Bell, title: 'Smart Alerts', desc: 'Severity-ranked notifications the moment anomalies appear.' },
  { icon: ShieldCheck, title: 'Grid Resilience', desc: 'Reduces peak-load strain and strengthens campus energy security.' },
  { icon: Leaf, title: 'Sustainability Scoring', desc: 'Tracks renewable utilisation gains of up to 40% over time.' },
]

export const comparisonRows = [
  'Real-time Monitoring',
  'Forecasting',
  'Battery Scheduling',
  'Vendor-Agnostic',
  'Actionable Recs',
  'Cost-Effective',
  'Carbon Reporting',
]

export const comparisonData = {
  'Vidyut Sanchalak': [true, true, true, true, true, true, true],
  'Schneider': [true, true, false, false, true, false, true],
  'Vitality.io': [true, true, true, false, false, false, false],
  'NovaVue': [true, false, false, true, false, true, false],
  'Distech': [true, false, true, false, false, false, true],
}

export const techBadges = [
  { label: 'MQTT / Modbus / OPC-UA', icon: Network },
  { label: 'Python / Django', icon: Server },
  { label: 'PyTorch / Prophet / LSTM', icon: Cpu },
  { label: 'MySQL / InfluxDB', icon: Database },
  { label: 'React / Tailwind', icon: Layers },
  { label: 'Docker / K8s / AWS', icon: Cloud },
]

export const architectureSteps = [
  { label: 'Sources', desc: 'Solar, wind, battery & grid sensors', icon: Sun },
  { label: 'Client', desc: 'Web dashboard & mobile', icon: Globe },
  { label: 'Server', desc: 'AI forecasting engine', icon: Cpu },
  { label: 'Database', desc: 'Time-series + relational store', icon: Database },
]

export const services = [
  'Weather API',
  'Time Series DB',
  'Notifications',
  'Analytics Engine',
  'Cloud Storage',
]

export const roles = ['Technician', 'Energy Admin', 'Auditor']

export const generationMix = [
  { name: 'Solar', value: 42, color: '#E8963A' },
  { name: 'Wind', value: 30, color: '#4A9B7F' },
  { name: 'Battery', value: 18, color: '#7FD1AE' },
  { name: 'Grid', value: 10, color: '#3A4A47' },
]

export const forecastData = [
  { hour: '00:00', forecast: 32, actual: 30 },
  { hour: '02:00', forecast: 28, actual: 27 },
  { hour: '04:00', forecast: 24, actual: 26 },
  { hour: '06:00', forecast: 38, actual: 35 },
  { hour: '08:00', forecast: 55, actual: 58 },
  { hour: '10:00', forecast: 72, actual: 70 },
  { hour: '12:00', forecast: 88, actual: 91 },
  { hour: '14:00', forecast: 84, actual: 80 },
  { hour: '16:00', forecast: 66, actual: 64 },
  { hour: '18:00', forecast: 48, actual: 50 },
  { hour: '20:00', forecast: 40, actual: 38 },
  { hour: '22:00', forecast: 35, actual: 36 },
]

export const alerts = [
  { severity: 'high', text: 'Battery Bank 2 temperature above nominal threshold', time: '4m ago' },
  { severity: 'medium', text: 'Wind turbine 3 output dipped below forecast', time: '22m ago' },
  { severity: 'low', text: 'Scheduled maintenance due for Inverter Unit A', time: '1h ago' },
  { severity: 'medium', text: 'Grid import spiked during peak-tariff window', time: '2h ago' },
]

export const benefits = {
  Economic: [
    '15–35% reduction in campus energy bills',
    'Up to 70% capex savings vs hardware-first VPPs',
    'Scales cost-efficiently across 1,000+ campuses',
  ],
  Environmental: [
    'Up to 40% increase in renewable utilisation',
    '30–60% cut in grid dependence',
    'Aligned with Net Zero 2070 targets',
  ],
  Social: [
    'Greater energy resilience for campus communities',
    'Transparent, auditable carbon reporting',
    'Empowers facility teams with clear, actionable insight',
  ],
}

export const teamInfo = {
  name: 'Team Velox',
  blurb: 'Team Velox builds AI-driven infrastructure for the energy transition, with Vidyut Sanchalak as its flagship Virtual Power Plant platform for campuses.',
  research: 'Backed by research from Google Scholar, IEEE Xplore, ScienceDirect, and arXiv.',
  prototype: 'A working Arduino-based solar-tracker prototype demonstrates the hardware layer behind our forecasting models.',
}

export const iconMap = { Users, GraduationCap, Leaf }
