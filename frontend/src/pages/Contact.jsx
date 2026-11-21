import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  CheckCircle,
  Loader2,
  X,
  Clock,
  MapPin,
} from 'lucide-react'
import { submitContact } from '../utils/api'

const inputClass =
  'w-full bg-[#0B1220] border border-[#263449] rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors'
const errorInputClass =
  'w-full bg-[#0B1220] border border-red-500 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-red-400 transition-colors'

const labelClass = 'block text-sm font-medium text-slate-300 mb-1.5'

const initialForm = {
  name: '',
  businessName: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  description: '',
}

function validate(data) {
  const errs = {}
  if (!data.name.trim() || data.name.trim().length < 2)
    errs.name = 'Full name must be at least 2 characters.'
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errs.email = 'Please enter a valid email address.'
  if (!data.description.trim() || data.description.trim().length < 20)
    errs.description = 'Project description must be at least 20 characters.'
  return errs
}

const contactMethods = [
  {
    icon: Mail,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    label: 'Email',
    value: 'hello@kriyova.com',
    href: 'mailto:hello@kriyova.com',
    note: 'Replace with your actual email address',
  },
  {
    icon: MessageCircle,
    color: 'text-green-400',
    bg: 'bg-green-400/10',
    label: 'WhatsApp',
    value: 'Available on WhatsApp',
    href: '#',
    note: 'Placeholder – add your number when ready',
  },
  {
    icon: Linkedin,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    label: 'LinkedIn',
    value: 'linkedin.com/in/rushikeshbhosale',
    href: '#',
  },
  {
    icon: Github,
    color: 'text-white',
    bg: 'bg-white/10',
    label: 'GitHub',
    value: 'github.com/rushikeshbhosale',
    href: '#',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
}

export default function Contact() {
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
    setErrors({})
    setStatus('loading')
    try {
      const data = await submitContact(formData)
      if (data.success) {
        setStatus('success')
        setServerMessage(data.message || 'Your enquiry has been received. We\'ll be in touch soon!')
      } else {
        setStatus('error')
        setServerMessage(data.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus('error')
      setServerMessage(err.message || 'Failed to send. Please try again later.')
    }
  }

  const resetForm = () => {
    setFormData(initialForm)
    setErrors({})
    setStatus('idle')
    setServerMessage('')
  }

  return (
    <div className="min-h-screen bg-[#0B1220] pt-24 pb-16 px-4">
      {/* Page header */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-14"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <span className="inline-block text-xs font-semibold tracking-widest text-cyan-400 uppercase mb-3">
          Contact Us
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Let's Build Something{' '}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Great Together
          </span>
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto">
          Reach out and let us know how we can help. We'd love to hear about your project.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* ── LEFT: Form ── */}
        <motion.div
          className="lg:col-span-3"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
        >
          <div className="bg-[#111827] border border-[#1e2d45] rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-1">Get In Touch</h2>
            <p className="text-slate-400 text-sm mb-8">
              Have a project in mind? Tell us about it and we'll get back to you as soon as possible.
            </p>

            {/* Error banner */}
            <AnimatePresence>
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="flex items-start gap-3 bg-red-500/10 border border-red-500/40 rounded-lg px-4 py-3 mb-6"
                >
                  <span className="text-red-400 text-sm flex-1">{serverMessage}</span>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-red-400 hover:text-red-300 mt-0.5"
                  >
                    <X size={16} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Success panel */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center text-center py-10"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/15 flex items-center justify-center mb-5">
                    <CheckCircle size={36} className="text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-400 text-sm max-w-xs mb-8">{serverMessage}</p>
                  <button
                    onClick={resetForm}
                    className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors"
                  >
                    Send Another Enquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            {status !== 'success' && (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Row 1: Name + Business */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass} htmlFor="name">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={errors.name ? errorInputClass : inputClass}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="businessName">
                      Business Name{' '}
                      <span className="text-slate-500 font-normal">(optional)</span>
                    </label>
                    <input
                      id="businessName"
                      name="businessName"
                      type="text"
                      autoComplete="organization"
                      value={formData.businessName}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Row 2: Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass} htmlFor="email">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={errors.email ? errorInputClass : inputClass}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="phone">
                      Phone Number{' '}
                      <span className="text-slate-500 font-normal">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Row 3: Service + Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass} htmlFor="service">
                      Service Required
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select a service</option>
                      <option>Website Development</option>
                      <option>E-Commerce Development</option>
                      <option>AI &amp; Automation</option>
                      <option>Custom Software Development</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="budget">
                      Estimated Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select budget range</option>
                      <option>Under ₹25,000</option>
                      <option>₹25,000 - ₹50,000</option>
                      <option>₹50,000 - ₹1,00,000</option>
                      <option>₹1,00,000 - ₹3,00,000</option>
                      <option>Above ₹3,00,000</option>
                      <option>Let's discuss</option>
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className={labelClass} htmlFor="description">
                    Project Description <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Tell us about your project, your goals, and any specific requirements..."
                    className={`${errors.description ? errorInputClass : inputClass} resize-none`}
                  />
                  {errors.description && (
                    <p className="mt-1 text-xs text-red-400">{errors.description}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>

        {/* ── RIGHT: Info Panel ── */}
        <motion.div
          className="lg:col-span-2 flex flex-col gap-6"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeUp}
        >
          <div className="bg-[#172554] border border-[#1e3a8a] rounded-2xl p-8 flex flex-col gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Contact Information</h3>
              <p className="text-slate-400 text-sm">
                Prefer to reach out directly? Here are the best ways to connect.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {contactMethods.map(({ icon: Icon, color, bg, label, value, href, note }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== '#' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center shrink-0`}>
                    <Icon size={18} className={color} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide mb-0.5">{label}</p>
                    <p className={`text-sm font-medium text-white group-hover:${color} transition-colors`}>
                      {value}
                    </p>
                    {note && <p className="text-xs text-slate-500 mt-0.5 italic">{note}</p>}
                  </div>
                </a>
              ))}
            </div>

            <hr className="border-[#1e3a8a]" />

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Clock size={15} className="text-cyan-400 shrink-0" />
                <span>We typically respond within 24 hours on working days.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <Clock size={15} className="text-cyan-400 shrink-0" />
                <span>Monday to Saturday, 10 AM – 7 PM IST</span>
              </div>
            </div>
          </div>

          {/* Location tag */}
          <div className="flex items-center gap-3 bg-[#111827] border border-[#1e2d45] rounded-xl px-6 py-4">
            <MapPin size={16} className="text-cyan-400 shrink-0" />
            <p className="text-sm text-slate-400">
              <span className="text-white font-medium">Based in India</span> · Serving clients globally
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
