import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe, ShoppingCart, Bot, Code2,
  Puzzle, Zap, MessageSquare, Target, Smartphone, Headphones,
  BookOpen, Store, MessagesSquare,
  Search, Lightbulb, Paintbrush, Terminal, TestTube, Rocket,
  ArrowRight, ChevronRight,
} from 'lucide-react';
import DashboardMockup from '../components/home/DashboardMockup';

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' } }),
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  { icon: Globe,        name: 'Website Development',   desc: 'Modern, responsive websites built for performance and business growth.',                       href: '/services' },
  { icon: ShoppingCart, name: 'E-Commerce Solutions',  desc: 'Complete online stores with payment integration and admin dashboards.',                       href: '/services' },
  { icon: Bot,          name: 'AI & Automation',       desc: 'Smart automation and AI integration to streamline your business operations.',                  href: '/services' },
  { icon: Code2,        name: 'Custom Software',       desc: 'Tailored business applications built for your specific workflow needs.',                       href: '/services' },
];

const whyUs = [
  { icon: Puzzle,       title: 'Tailored Solutions',           desc: 'Every project is built from scratch to match your unique business goals and audience.' },
  { icon: Zap,          title: 'Modern Technology',            desc: 'We use the latest frameworks and tools to ensure your product is fast and future-ready.' },
  { icon: MessageSquare,title: 'Transparent Communication',    desc: 'Regular updates and clear communication at every stage of the project.' },
  { icon: Target,       title: 'Business-Focused Development', desc: 'We prioritise features that drive growth, conversions, and real ROI.' },
  { icon: Smartphone,   title: 'Responsive Design',            desc: 'Pixel-perfect experiences that look great on every screen and device.' },
  { icon: Headphones,   title: 'Ongoing Support',              desc: 'Post-launch assistance, bug fixes, and feature additions whenever you need them.' },
];

const projects = [
  {
    title: 'Coaching Institute Platform',
    desc: 'A comprehensive digital platform for coaching institutes with course management, batch scheduling, and student enquiry system.',
    stack: ['React', 'Node.js', 'MongoDB'],
    icon: BookOpen,
    gradient: 'from-blue-900 via-blue-800 to-indigo-900',
    iconColor: 'text-blue-300',
  },
  {
    title: 'E-Commerce Store',
    desc: 'Full-featured online store with product management, shopping cart, secure checkout, and admin dashboard.',
    stack: ['React', 'Express', 'MongoDB'],
    icon: Store,
    gradient: 'from-purple-900 via-purple-800 to-pink-900',
    iconColor: 'text-purple-300',
  },
  {
    title: 'AI Business Assistant',
    desc: 'An intelligent chatbot assistant for handling customer FAQs, lead collection, and business information queries.',
    stack: ['Python', 'React', 'OpenAI'],
    icon: MessagesSquare,
    gradient: 'from-cyan-900 via-teal-800 to-cyan-900',
    iconColor: 'text-cyan-300',
  },
];

const processSteps = [
  { num: '01', icon: Search,     label: 'Discover' },
  { num: '02', icon: Lightbulb,  label: 'Plan' },
  { num: '03', icon: Paintbrush, label: 'Design' },
  { num: '04', icon: Terminal,   label: 'Develop' },
  { num: '05', icon: TestTube,   label: 'Test' },
  { num: '06', icon: Rocket,     label: 'Launch' },
];

const techStack = [
  { label: 'React',        color: 'text-cyan-400',   bg: 'bg-cyan-400/10',   border: 'border-cyan-400/30' },
  { label: 'JavaScript',   color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/30' },
  { label: 'Node.js',      color: 'text-green-400',  bg: 'bg-green-400/10',  border: 'border-green-400/30' },
  { label: 'Express.js',   color: 'text-gray-300',   bg: 'bg-gray-500/10',   border: 'border-gray-500/30' },
  { label: 'MongoDB',      color: 'text-green-500',  bg: 'bg-green-500/10',  border: 'border-green-500/30' },
  { label: 'Python',       color: 'text-blue-400',   bg: 'bg-blue-400/10',   border: 'border-blue-400/30' },
  { label: 'Tailwind CSS', color: 'text-cyan-300',   bg: 'bg-cyan-300/10',   border: 'border-cyan-300/30' },
  { label: 'REST APIs',    color: 'text-purple-400', bg: 'bg-purple-400/10', border: 'border-purple-400/30' },
  { label: 'Git',          color: 'text-orange-400', bg: 'bg-orange-400/10', border: 'border-orange-400/30' },
];

// ─── Section Header Helper ────────────────────────────────────────────────────
function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center mb-14">
      {eyebrow && (
        <span className="inline-block text-xs tracking-widest text-cyan-400 uppercase mb-3 border border-cyan-400/30 rounded-full px-4 py-1">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC]">{title}</h2>
      {subtitle && <p className="mt-3 text-[#94A3B8] max-w-xl mx-auto">{subtitle}</p>}
    </div>
  );
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="bg-[#0B1220] text-[#F8FAFC] overflow-x-hidden">

      {/* ══════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════ */}
      <section className="min-h-[calc(100vh-5rem)] flex items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative">
        {/* Background glow blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-0 w-72 h-72 bg-cyan-400/8 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16">
          {/* Left — text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="lg:w-1/2 space-y-7"
          >
            {/* Pill badge */}
            <motion.div variants={fadeUp} custom={0}>
              <span className="inline-flex items-center border border-cyan-400/60 text-cyan-400 text-xs tracking-widest rounded-full px-4 py-1.5 uppercase">
                Technology • Innovation • Growth
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-[#F8FAFC]"
            >
              Building Digital Solutions That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Move Your Business Forward.
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-[#94A3B8] text-lg leading-relaxed max-w-lg"
            >
              We help businesses transform ideas into powerful digital experiences through modern websites, intelligent automation, and custom software solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 w-full sm:w-auto pt-2">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Start Your Project</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#111827]/80 border border-[#263449] hover:border-cyan-400/60 text-[#F8FAFC] font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:bg-cyan-500/10 hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Explore Our Work</span>
                <ChevronRight size={18} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="lg:w-1/2 relative w-full"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 2 — SERVICES OVERVIEW
      ══════════════════════════════════════════════════ */}
      <section className="bg-[#111827] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionHeader
                eyebrow="What We Do"
                title="Services Built for Growth"
                subtitle="From beautiful websites to AI-powered tools — we build digital products that deliver results."
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map(({ icon: Icon, name, desc, href }) => (
                <motion.div
                  key={name}
                  variants={fadeUp}
                  className="bg-[#172554] border border-[#263449] rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-600/25 transition-colors duration-300">
                    <Icon size={22} className="text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">{name}</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">{desc}</p>
                  <Link
                    to={href}
                    className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-cyan-400 transition-colors duration-200 font-medium"
                  >
                    Learn More <ChevronRight size={15} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 3 — WHY CHOOSE KRIYOVA
      ══════════════════════════════════════════════════ */}
      <section className="bg-[#0B1220] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionHeader
                eyebrow="Our Edge"
                title="Why Businesses Choose Kriyova"
              />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {whyUs.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="bg-[#111827] border border-[#263449] rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-cyan-400" />
                  </div>
                  <h3 className="text-base font-semibold text-[#F8FAFC] mb-2">{title}</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 4 — FEATURED PROJECTS
      ══════════════════════════════════════════════════ */}
      <section className="bg-[#111827] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionHeader
                eyebrow="Portfolio"
                title="Featured Work"
                subtitle="A glimpse of what we've built. Each project reflects our commitment to quality and business impact."
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map(({ title, desc, stack, icon: Icon, gradient, iconColor }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="bg-[#172554] border border-[#263449] rounded-xl overflow-hidden hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/20 group"
                >
                  {/* Visual area */}
                  <div className={`h-36 bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-2 left-2 w-16 h-16 rounded-full bg-white/10 blur-xl" />
                      <div className="absolute bottom-2 right-2 w-20 h-20 rounded-full bg-white/10 blur-xl" />
                    </div>
                    <Icon size={40} className={`${iconColor} drop-shadow-lg relative z-10`} />
                    {/* Demo badge */}
                    <span className="absolute top-3 right-3 bg-amber-400/20 border border-amber-400/40 text-amber-300 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full">
                      Demo Project
                    </span>
                  </div>

                  {/* Info */}
                  <div className="p-5 space-y-3">
                    <h3 className="text-base font-semibold text-[#F8FAFC]">{title}</h3>
                    <p className="text-[#94A3B8] text-sm leading-relaxed">{desc}</p>

                    {/* Stack badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {stack.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[10px] font-medium px-2 py-0.5 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/portfolio"
                      className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-cyan-400 transition-colors duration-200 font-medium mt-1"
                    >
                      View Details <ChevronRight size={15} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 5 — OUR PROCESS
      ══════════════════════════════════════════════════ */}
      <section className="bg-[#0B1220] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionHeader
                eyebrow="Our Process"
                title="How We Work"
                subtitle="A proven six-step workflow that keeps projects on track and clients in the loop."
              />
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-10">
              {processSteps.map(({ num, icon: Icon, label }, idx) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  custom={idx}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Connector line (desktop) */}
                  {idx < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] right-[-calc(50%-28px)] h-px bg-gradient-to-r from-[#263449] to-transparent w-full" />
                  )}
                  <div className="w-14 h-14 rounded-full bg-[#111827] border-2 border-[#263449] group-hover:border-blue-500/60 flex items-center justify-center mb-3 transition-all duration-300 relative z-10">
                    <Icon size={22} className="text-blue-400" />
                  </div>
                  <span className="text-[10px] font-bold text-blue-500/60 tracking-widest">{num}</span>
                  <span className="text-sm font-semibold text-[#F8FAFC] mt-0.5">{label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUp} className="text-center">
              <Link
                to="/process"
                className="inline-flex items-center gap-2 border border-[#263449] hover:border-blue-500/50 text-[#F8FAFC] font-semibold px-7 py-3 rounded-xl transition-all duration-300 hover:bg-blue-500/5"
              >
                View Full Process <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 6 — TECH STACK
      ══════════════════════════════════════════════════ */}
      <section className="bg-[#111827] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionHeader
                eyebrow="Our Stack"
                title="Technologies We Work With"
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-2.5 sm:gap-3"
            >
              {techStack.map(({ label, color, bg, border }) => (
                <span
                  key={label}
                  className={`${bg} border ${border} ${color} text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl tracking-wide transition-all duration-300 hover:scale-105 cursor-default`}
                >
                  {label}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 7 — FINAL CTA
      ══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-blue-900 via-[#0d1b35] to-cyan-900 border border-[#263449] rounded-2xl p-8 sm:p-12 md:p-16 text-center overflow-hidden"
          >
            {/* Glow overlays */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-16 -left-16 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl" />
              <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 space-y-6">
              <span className="inline-block text-xs tracking-widest text-cyan-400 border border-cyan-400/30 rounded-full px-4 py-1 uppercase">
                Let's Work Together
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F8FAFC]">
                Have an idea? Let's build something{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  great together.
                </span>
              </h2>
              <p className="text-[#94A3B8] text-base sm:text-lg max-w-xl mx-auto">
                From concept to launch, we're with you every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3.5 sm:gap-4 pt-2 w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Start Your Project</span>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/quote"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#111827]/80 border border-cyan-400/50 hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:bg-cyan-400/10 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Get a Free Quote</span>
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
