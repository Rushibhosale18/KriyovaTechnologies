import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FileText,
  CheckCircle,
  Loader2,
  X,
  Clock,
  PhoneCall,
  Send,
  Sparkles,
  HelpCircle,
  ArrowRight
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { submitQuote } from '../utils/api'

const inputClass =
  'w-full bg-[#0B1220] border border-[#263449] rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors'
const errorInputClass =
  'w-full bg-[#0B1220] border border-red-500 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-red-400 transition-colors'

const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  projectType: '',
  requirements: '',
  budget: '',
  timeline: '',
}

const PROJECT_TYPES = [
  'Website Development',
  'E-Commerce',
  'AI & Automation',
  'Custom Software',
  'Other',
]

const BUDGET_OPTIONS = [
  'Not decided yet',
  'Under ₹25,000',
  '₹25,000 - ₹50,000',
  '₹50,000 - ₹1,00,000',
  '₹1,00,000 - ₹3,00,000',
  'Above ₹3,00,000',
]

const TIMELINE_OPTIONS = [
  'Flexible',
  'Within 2 weeks',
  'Within 1 month',
  'Within 2-3 months',
  'Within 6 months',
]

function validate(data) {
  const errs = {}
  if (!data.name.trim() || data.name.trim().length < 2) {
    errs.name = 'Full name must be at least 2 characters.'
  }
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errs.email = 'Please enter a valid email address.'
  }
  if (!data.projectType) {
    errs.projectType = 'Please select a project type.'
  }
  if (!data.requirements.trim() || data.requirements.trim().length < 20) {
    errs.requirements = 'Please describe your requirements in at least 20 characters.'
  }
  return errs
}

const steps = [
  {
    step: '01',
    icon: Clock,
    title: 'We Review Your Request',
    desc: 'Our team examines your project requirements and technical scope within 24 business hours.',
  },
  {
    step: '02',
    icon: PhoneCall,
    title: 'We Schedule a Discovery Call',
    desc: 'A brief 20-30 minute consultation to clarify specifics, milestones, and technical preferences.',
  },
  {
    step: '03',
    icon: FileText,
    title: 'We Deliver Your Proposal',
    desc: 'You receive a comprehensive proposal with itemized milestones, explicit timelines, and fixed pricing.',
  },
]

export default function Quote() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [serverMessage, setServerMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(formData)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setStatus('loading')
    setServerMessage('')

    try {
      const res = await submitQuote(formData)
      if (res.success) {
        setStatus('success')
        setServerMessage(
          res.message ||
            'Your quote request has been received. We will prepare a custom proposal for you!'
        )
      } else {
        setStatus('error')
        setServerMessage(res.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus('error')
      setServerMessage(err.message || 'Unable to connect to the server. Please try again later.')
    }
  }

  const handleReset = () => {
    setFormData(initialForm)
    setErrors({})
    setStatus('idle')
    setServerMessage('')
  }

  return (
    <div className="min-h-screen bg-[#0B1220] py-16 px-4 sm:px-6 lg:px-8">
      {/* Background decorations */}
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Project Estimation
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Request a <span className="text-gradient">Custom Quote</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            Tell us about your goals, features, and target timeline. We will engineer a detailed technical roadmap and honest pricing proposal within 48 hours.
          </p>
        </div>

        {/* Error Alert */}
        <AnimatePresence>
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-8 p-4 bg-red-950/60 border border-red-500/50 rounded-xl flex items-center justify-between text-red-200"
            >
              <span>{serverMessage}</span>
              <button
                onClick={() => setStatus('idle')}
                className="text-red-400 hover:text-red-200 ml-4"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Card */}
        <div className="bg-[#111827] border border-[#263449] rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400 mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Quote Request Submitted!</h3>
              <p className="text-slate-300 max-w-md mb-8">
                {serverMessage} Our engineering team will review your requirements and reach out via email shortly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-[#172554] border border-[#263449] text-white rounded-lg hover:border-blue-500 transition-colors font-medium text-sm"
                >
                  Submit Another Request
                </button>
                <Link
                  to="/"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:opacity-90 transition-opacity font-medium text-sm"
                >
                  Back to Homepage
                </Link>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Full Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className={errors.name ? errorInputClass : inputClass}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@company.com"
                    className={errors.email ? errorInputClass : inputClass}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone Number <span className="text-slate-500">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className={labelClass}>
                    Project Type <span className="text-cyan-400">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className={errors.projectType ? errorInputClass : inputClass}
                  >
                    <option value="">Select project type</option>
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.projectType}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className={labelClass}>
                    Expected Budget <span className="text-slate-500">(Optional)</span>
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select budget range</option>
                    {BUDGET_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="timeline" className={labelClass}>
                    Preferred Timeline <span className="text-slate-500">(Optional)</span>
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select target timeline</option>
                    {TIMELINE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="requirements" className={labelClass}>
                  Project Requirements & Scope <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  rows={6}
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="Describe what you are looking to build: target audience, key features (auth, payments, dashboards), current pain points, design preferences, or reference websites..."
                  className={errors.requirements ? errorInputClass : inputClass}
                />
                <div className="flex justify-between items-center mt-1.5">
                  {errors.requirements ? (
                    <p className="text-xs text-red-400">{errors.requirements}</p>
                  ) : (
                    <span />
                  )}
                  <span className="text-xs text-slate-500">
                    {formData.requirements.length} characters (min. 20)
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/20 hover:opacity-95 focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Quote Request</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Process Steps */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white">What Happens Next?</h2>
            <p className="text-slate-400 text-sm mt-1">Our structured estimation and kickoff approach</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.step}
                  className="bg-[#111827]/60 border border-[#263449] rounded-xl p-6 relative hover:border-blue-500/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-cyan-400 tracking-wider font-mono">
                      STEP {item.step}
                    </span>
                    <div className="p-2 bg-[#172554] rounded-lg text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Need help note */}
        <div className="mt-12 text-center bg-[#172554]/40 border border-[#263449] rounded-xl p-6">
          <p className="text-slate-300 text-sm">
            Not sure about the technical details or requirements yet? That's completely normal.
          </p>
          <p className="text-slate-400 text-sm mt-1">
            You can also reach out through our{' '}
            <Link to="/contact" className="text-cyan-400 hover:underline font-medium inline-flex items-center gap-1">
              General Contact Form <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
