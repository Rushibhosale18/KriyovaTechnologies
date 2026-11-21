import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  Menu,
  X,
  Home,
  Layers,
  Briefcase,
  User,
  Workflow,
  Mail,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { label: 'Home', to: '/', icon: Home },
  { label: 'Services', to: '/services', icon: Layers },
  { label: 'Our Work', to: '/portfolio', icon: Briefcase },
  { label: 'About', to: '/about', icon: User },
  { label: 'Process', to: '/process', icon: Workflow },
  { label: 'Contact', to: '/contact', icon: Mail },
]

// Professional Hexagon Brand Mark
function HexIcon({ className = 'w-7 h-7' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <polygon
        points="14,2 25,8 25,20 14,26 3,20 3,8"
        fill="url(#hexGrad)"
        stroke="#06B6D4"
        strokeWidth="1.8"
      />
      <polygon
        points="14,7 21,11 21,17 14,21 7,17 7,11"
        fill="#06B6D4"
        opacity="0.25"
      />
      <circle cx="14" cy="14" r="3" fill="#06B6D4" />
      <defs>
        <linearGradient id="hexGrad" x1="3" y1="2" x2="25" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" stopOpacity="0.4" />
          <stop offset="1" stopColor="#06B6D4" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Close mobile menu on route change & restore scroll
  useEffect(() => {
    setMobileOpen(false)
    document.body.style.overflow = 'unset'
  }, [location.pathname])

  // Manage body scroll lock when mobile drawer opens
  const toggleMobile = () => {
    const next = !mobileOpen
    setMobileOpen(next)
    document.body.style.overflow = next ? 'hidden' : 'unset'
  }

  // Scroll detection for navbar background elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B1220]/95 backdrop-blur-md border-b border-[#263449] shadow-xl shadow-black/30'
          : 'bg-[#0B1220]/80 backdrop-blur-sm border-b border-[#263449]/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
          aria-label="Kriyova Technologies Home"
        >
          <div className="p-1 rounded-xl bg-blue-950/40 border border-blue-500/20 group-hover:border-cyan-400/50 transition-colors">
            <HexIcon className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <span className="text-lg sm:text-xl font-extrabold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-cyan-300">
              Kriyova
            </span>
            <span className="text-white ml-1.5 font-bold">Technologies</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Action Button & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            to="/quote"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all duration-200 shadow-md shadow-blue-600/20 hover:shadow-cyan-500/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get a Quote</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobile}
            className="lg:hidden p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-[#172554] border border-[#263449] transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Smooth Framer Motion overlay) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden border-t border-[#263449] bg-[#0B1220]/98 backdrop-blur-xl overflow-hidden shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-5 space-y-4">
              <div className="grid grid-cols-2 gap-2">
                {NAV_ITEMS.map((item) => {
                  const Icon = item.icon
                  return (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end={item.to === '/'}
                      onClick={() => {
                        setMobileOpen(false)
                        document.body.style.overflow = 'unset'
                      }}
                      className={({ isActive }) =>
                        `flex items-center gap-2.5 px-3.5 py-3 rounded-xl text-sm font-medium transition-all ${
                          isActive
                            ? 'bg-[#172554] text-cyan-400 border border-cyan-500/40 font-semibold'
                            : 'bg-[#111827]/70 text-slate-300 hover:text-white hover:bg-[#172554]/50 border border-transparent'
                        }`
                      }
                    >
                      <Icon className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{item.label}</span>
                    </NavLink>
                  )
                })}
              </div>

              {/* Mobile CTA */}
              <div className="pt-2">
                <Link
                  to="/quote"
                  onClick={() => {
                    setMobileOpen(false)
                    document.body.style.overflow = 'unset'
                  }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-600/30 active:scale-98 transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start a Project & Get a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Quick direct contact indicator on mobile */}
              <div className="pt-3 border-t border-[#1e293b] flex items-center justify-between text-xs text-slate-400 px-1">
                <span>📧 hello@kriyova.com</span>
                <span className="text-emerald-400 flex items-center gap-1 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Responding in 24h
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
