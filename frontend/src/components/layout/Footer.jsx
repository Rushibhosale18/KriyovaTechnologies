import { Link } from 'react-router-dom'
import { Mail, MessageCircle, Linkedin, Github } from 'lucide-react'

const COMPANY_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Our Work', to: '/portfolio' },
  { label: 'About', to: '/about' },
  { label: 'Process', to: '/process' },
  { label: 'Contact', to: '/contact' },
]

const SERVICE_LINKS = [
  { label: 'Website Development', to: '/services' },
  { label: 'E-Commerce Development', to: '/services' },
  { label: 'AI & Automation', to: '/services' },
  { label: 'Custom Software', to: '/services' },
  { label: 'Get a Quote', to: '/quote' },
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
]

function HexIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <polygon points="14,2 25,8 25,20 14,26 3,20 3,8" fill="none" stroke="#06B6D4" strokeWidth="2" />
      <polygon points="14,7 21,11 21,17 14,21 7,17 7,11" fill="#06B6D4" opacity="0.4" />
      <circle cx="14" cy="14" r="3" fill="#06B6D4" />
    </svg>
  )
}

function FooterLink({ to, children, external }) {
  const cls = "text-sm text-textSecondary hover:text-textMain transition-colors duration-200"
  if (external) {
    return <a href={to} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>
  }
  return <Link to={to} className={cls}>{children}</Link>
}

export default function Footer() {
  return (
    <footer className="bg-[#0B1220] border-t border-[#263449]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <HexIcon />
              <span className="text-lg font-bold">
                <span className="text-gradient">Kriyova</span>
                <span className="text-textMain ml-1">Technologies</span>
              </span>
            </Link>
            <p className="text-textSecondary text-sm leading-relaxed max-w-xs">
              Building Digital Experiences. Empowering Businesses.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://linkedin.com/company/kriyova-technologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-bgCard border border-border text-textSecondary hover:text-cyan-accent hover:border-cyan-accent/50 transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://github.com/kriyova-technologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg bg-bgCard border border-border text-textSecondary hover:text-cyan-accent hover:border-cyan-accent/50 transition-colors"
              >
                <Github size={16} />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 rounded-lg bg-bgCard border border-border text-textSecondary hover:text-cyan-accent hover:border-cyan-accent/50 transition-colors"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-textMain font-semibold text-sm mb-4 uppercase tracking-widest">Company</h3>
            <ul className="flex flex-col gap-2.5">
              {COMPANY_LINKS.map((l) => (
                <li key={l.to + l.label}><FooterLink to={l.to}>{l.label}</FooterLink></li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h3 className="text-textMain font-semibold text-sm mb-4 uppercase tracking-widest">Services</h3>
            <ul className="flex flex-col gap-2.5">
              {SERVICE_LINKS.map((l) => (
                <li key={l.label}><FooterLink to={l.to}>{l.label}</FooterLink></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-textMain font-semibold text-sm mb-4 uppercase tracking-widest">Contact</h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="mailto:hello@kriyova.com"
                  className="flex items-center gap-2 text-sm text-textSecondary hover:text-textMain transition-colors"
                >
                  <Mail size={14} /> hello@kriyova.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-textSecondary hover:text-textMain transition-colors"
                >
                  <MessageCircle size={14} /> WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/kriyova-technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-textSecondary hover:text-textMain transition-colors"
                >
                  <Linkedin size={14} /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kriyova-technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-textSecondary hover:text-textMain transition-colors"
                >
                  <Github size={14} /> GitHub
                </a>
              </li>
            </ul>
            {/* Legal sub-section */}
            <h3 className="text-textMain font-semibold text-sm mt-7 mb-3 uppercase tracking-widest">Legal</h3>
            <ul className="flex flex-col gap-2.5">
              {LEGAL_LINKS.map((l) => (
                <li key={l.label}><FooterLink to={l.to}>{l.label}</FooterLink></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-textSecondary text-sm">
            &copy; 2024 Kriyova Technologies. All rights reserved.
          </p>
          <p className="text-textSecondary text-xs">
            Crafted with ❤️ for the digital age
          </p>
        </div>
      </div>
    </footer>
  )
}
