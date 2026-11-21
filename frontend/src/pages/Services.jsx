import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe,
  ShoppingCart,
  Bot,
  Code2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

// ─── Feature Check Item ───────────────────────────────────────────────────────
function FeatureItem({ text }) {
  return (
    <li className="flex items-start gap-2 text-slate-300 text-sm">
      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
      <span>{text}</span>
    </li>
  );
}

// ─── Perfect-For Item ─────────────────────────────────────────────────────────
function PerfectForItem({ text }) {
  return (
    <li className="flex items-center gap-2 text-slate-300 text-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
      {text}
    </li>
  );
}

// ─── Service Section ──────────────────────────────────────────────────────────
function ServiceSection({ service, reversed, bgClass }) {
  const { icon: Icon, title, description, features, perfectFor, cta, ctaLink, iconBg } = service;

  const leftContent = (
    <motion.div
      variants={reversed ? fadeRight : fadeLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="flex flex-col gap-6"
    >
      {/* Icon + heading */}
      <div className="flex items-center gap-4">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${iconBg}`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-white">{title}</h2>
      </div>

      <p className="text-slate-400 text-lg leading-relaxed">{description}</p>

      {/* Features */}
      <div>
        <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider text-cyan-400">
          What's Included
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {features.map((f) => (
            <FeatureItem key={f} text={f} />
          ))}
        </ul>
      </div>

      <Link
        to={ctaLink}
        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors w-fit mt-2"
      >
        {cta} <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );

  const rightContent = (
    <motion.div
      variants={reversed ? fadeLeft : fadeRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="bg-[#172554] border border-[#263449] rounded-xl p-6 flex flex-col gap-4 hover:border-blue-500/50 transition-all"
    >
      {perfectFor && (
        <>
          <h3 className="text-white font-semibold text-lg">Perfect For</h3>
          <ul className="flex flex-col gap-2.5">
            {perfectFor.map((p) => (
              <PerfectForItem key={p} text={p} />
            ))}
          </ul>
          <div className="border-t border-[#263449] my-1" />
        </>
      )}
      <div className="rounded-lg bg-blue-600/10 border border-blue-500/20 p-4">
        <p className="text-sm text-slate-300">
          <span className="text-cyan-400 font-semibold">Ready to get started?</span> We work
          closely with you to understand your goals and deliver solutions that exceed expectations.
        </p>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        {features.slice(0, 4).map((f) => (
          <span
            key={f}
            className="text-xs bg-blue-900/30 text-cyan-300 border border-cyan-800/40 px-3 py-1 rounded-full"
          >
            {f}
          </span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section className={`py-20 ${bgClass}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {reversed ? (
            <>
              {rightContent}
              {leftContent}
            </>
          ) : (
            <>
              {leftContent}
              {rightContent}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Services Data ────────────────────────────────────────────────────────────
const services = [
  {
    id: 'web',
    icon: Globe,
    iconBg: 'bg-gradient-to-br from-blue-600 to-cyan-500',
    title: 'Website Development',
    description:
      'We build modern, fast, and responsive websites that make a strong first impression and drive real business results.',
    features: [
      'Business Websites',
      'Company Websites',
      'Landing Pages',
      'Educational Websites',
      'Portfolio Websites',
      'Responsive Design',
      'SEO-Friendly Structure',
      'Performance Optimized',
    ],
    perfectFor: [
      'Coaching Institutes',
      'Educational Institutions',
      'Small Businesses',
      'Healthcare Providers',
      'Startups',
    ],
    cta: 'Get Started',
    ctaLink: '/contact',
  },
  {
    id: 'ecommerce',
    icon: ShoppingCart,
    iconBg: 'bg-gradient-to-br from-green-600 to-teal-500',
    title: 'E-Commerce Development',
    description:
      'Complete online stores built to convert visitors into customers with seamless shopping experiences.',
    features: [
      'Online Product Catalogue',
      'Shopping Cart & Wishlist',
      'Secure Payment Gateway Integration',
      'Order Management System',
      'Admin Dashboard',
      'Inventory Management',
      'Customer Account Portal',
      'Mobile-Optimized Shopping',
    ],
    perfectFor: null,
    cta: 'Build Your Store',
    ctaLink: '/contact',
  },
  {
    id: 'ai',
    icon: Bot,
    iconBg: 'bg-gradient-to-br from-purple-600 to-pink-500',
    title: 'AI & Automation Solutions',
    description:
      'Leverage artificial intelligence to automate repetitive tasks, improve customer experience, and make smarter business decisions.',
    features: [
      'AI-Powered Chatbots',
      'Business Process Automation',
      'Customer Support Automation',
      'AI API Integration (OpenAI, etc.)',
      'Lead Collection Automation',
      'Intelligent FAQ Systems',
      'Workflow Automation',
    ],
    perfectFor: null,
    cta: 'Explore AI Solutions',
    ctaLink: '/contact',
  },
  {
    id: 'custom',
    icon: Code2,
    iconBg: 'bg-gradient-to-br from-orange-600 to-red-500',
    title: 'Custom Software Development',
    description:
      'Purpose-built software applications designed around your unique business processes and requirements.',
    features: [
      'CRM Systems',
      'Management Dashboards',
      'Inventory Systems',
      'Admin Panels',
      'Employee Management',
      'Reporting & Analytics',
      'Custom Business Applications',
      'REST API Development',
    ],
    perfectFor: null,
    cta: 'Discuss Your Project',
    ctaLink: '/contact',
  },
];

const bgClasses = ['bg-[#0B1220]', 'bg-[#111827]', 'bg-[#0B1220]', 'bg-[#111827]'];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Services() {
  return (
    <main className="min-h-screen">
      {/* ── Hero ── */}
      <section className="relative bg-[#0B1220] pt-28 pb-16 overflow-hidden">
        {/* Gradient blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/20 blur-[100px] rounded-full" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/30 text-cyan-400 text-xs font-semibold px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" /> What We Offer
          </motion.div>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
          >
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Services
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Comprehensive digital solutions tailored to your business needs.
          </motion.p>
        </div>
      </section>

      {/* ── Service Sections ── */}
      {services.map((service, index) => (
        <ServiceSection
          key={service.id}
          service={service}
          reversed={index % 2 !== 0}
          bgClass={bgClasses[index]}
        />
      ))}

      {/* ── Bottom CTA ── */}
      <section className="bg-[#0B1220] py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#172554] border border-[#263449] rounded-2xl p-10 hover:border-blue-500/50 transition-all"
          >
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-slate-400 mb-8 text-lg">
              Our team will help you identify the right solution for your business goals — no
              pressure, just an honest conversation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg shadow-blue-700/30"
            >
              Talk to Us <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
