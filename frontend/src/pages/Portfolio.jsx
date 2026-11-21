import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  ShoppingBag,
  Bot,
  UtensilsCrossed,
  Heart,
  Package,
  ArrowRight,
  Rocket,
  AlertTriangle,
} from 'lucide-react';

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07, ease: 'easeOut' },
  }),
  exit: { opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.2 } },
};

// ─── Category Filters ─────────────────────────────────────────────────────────
const FILTERS = ['All', 'Websites', 'E-Commerce', 'AI & Software'];

// ─── Projects Data ────────────────────────────────────────────────────────────
const projects = [
  {
    id: 'coaching',
    title: 'Coaching Institute Platform',
    category: 'Websites',
    icon: BookOpen,
    gradient: 'from-blue-600 to-purple-600',
    description:
      'A complete digital platform for coaching institutes featuring course listings, batch management, student enquiry forms, and admission information.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    features: [
      'Course Management',
      'Batch Scheduling',
      'Student Enquiry System',
      'Admin Dashboard',
      'Responsive Design',
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Store',
    category: 'E-Commerce',
    icon: ShoppingBag,
    gradient: 'from-green-500 to-teal-500',
    description:
      'Full-featured online retail store with product catalogue, shopping cart, secure checkout, and comprehensive admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    features: [
      'Product Catalogue',
      'Shopping Cart',
      'Order Management',
      'Admin Dashboard',
      'Payment Integration',
    ],
  },
  {
    id: 'ai-assistant',
    title: 'AI Business Assistant',
    category: 'AI & Software',
    icon: Bot,
    gradient: 'from-purple-600 to-pink-500',
    description:
      'An intelligent AI-powered assistant that handles customer FAQs, collects leads, and provides business information around the clock.',
    tech: ['Python', 'React', 'OpenAI API', 'MongoDB', 'Node.js'],
    features: [
      'AI-Powered Responses',
      'Lead Collection',
      'FAQ Automation',
      'Business Information Hub',
    ],
  },
  {
    id: 'restaurant',
    title: 'Restaurant Management System',
    category: 'AI & Software',
    icon: UtensilsCrossed,
    gradient: 'from-orange-500 to-red-500',
    description:
      'Complete restaurant management system with table booking, menu management, order tracking, and kitchen display system.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    features: ['Table Booking', 'Menu Management', 'Order Tracking', 'Kitchen Display'],
  },
  {
    id: 'healthcare',
    title: 'Healthcare Portal',
    category: 'Websites',
    icon: Heart,
    gradient: 'from-blue-500 to-green-500',
    description:
      'A patient management portal for healthcare providers with appointment scheduling, patient records, and doctor availability tracking.',
    tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    features: [
      'Appointment Booking',
      'Patient Records',
      'Doctor Availability',
      'Admin Panel',
    ],
  },
  {
    id: 'inventory',
    title: 'Inventory Management',
    category: 'AI & Software',
    icon: Package,
    gradient: 'from-indigo-600 to-blue-500',
    description:
      'Smart inventory management system with real-time stock tracking, supplier management, low-stock alerts, and analytics dashboard.',
    tech: ['React', 'Express', 'MongoDB', 'Chart.js'],
    features: ['Stock Tracking', 'Supplier Management', 'Low-Stock Alerts', 'Analytics'],
  },
];

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, index }) {
  const { title, description, icon: Icon, gradient, tech, features } = project;

  return (
    <motion.div
      key={project.id}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
      className="bg-[#172554] border border-[#263449] rounded-xl overflow-hidden hover:border-blue-500/50 transition-all group flex flex-col"
    >
      {/* Visual area */}
      <div className={`relative h-[200px] bg-gradient-to-br ${gradient} flex items-center justify-center`}>
        <Icon className="w-16 h-16 text-white/80 group-hover:scale-110 transition-transform duration-300" />
        {/* Demo badge */}
        <span className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
          Demo Project
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="font-semibold text-white text-lg leading-snug">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {features.map((f) => (
            <span
              key={f}
              className="text-xs text-slate-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded"
            >
              {f}
            </span>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs font-medium text-cyan-300 bg-cyan-900/20 border border-cyan-800/30 px-2.5 py-0.5 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button className="mt-3 w-full flex items-center justify-center gap-2 border border-blue-500/50 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 font-semibold text-sm px-4 py-2.5 rounded-lg transition-all">
          View Details <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#0B1220]">
      {/* ── Hero ── */}
      <section className="relative pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-600/15 blur-[120px] rounded-full" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 bg-cyan-600/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold px-4 py-2 rounded-full mb-6"
          >
            <Rocket className="w-3.5 h-3.5" /> Our Work
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
          >
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Work
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-slate-400 text-lg max-w-2xl mx-auto mb-8"
          >
            Concept and demonstration projects showcasing our development approach and capabilities.
          </motion.p>

          {/* Important notice banner */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="inline-flex items-start gap-3 bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm px-5 py-3.5 rounded-xl max-w-2xl mx-auto text-left"
          >
            <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
            <span>
              <strong className="text-amber-400">Important:</strong> All projects shown are
              demonstration projects created to showcase capabilities. They are not real client
              projects.
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── Filter Tabs ── */}
      <section className="sticky top-16 z-10 bg-[#0B1220]/80 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-700/30'
                    : 'text-slate-400 bg-[#172554] border border-[#263449] hover:border-blue-500/40 hover:text-white'
                }`}
              >
                {filter}
                <span className="ml-2 text-xs opacity-60">
                  {filter === 'All'
                    ? projects.length
                    : projects.filter((p) => p.category === filter).length}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <p className="text-center text-slate-500 py-20">No projects in this category yet.</p>
          )}
        </div>
      </section>

      {/* ── More Coming Soon ── */}
      <section className="py-20 bg-[#111827]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#172554] border border-[#263449] rounded-2xl p-10 hover:border-cyan-500/50 transition-all"
          >
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">More Coming Soon</h2>
            <p className="text-slate-400 mb-8 text-lg">
              We are actively building new projects. Check back soon or reach out to discuss your
              project idea.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-700/30"
            >
              Start a Project <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
