import { motion } from 'framer-motion';
import {
  MessageSquare, FileSearch, FileText, Palette, Code2,
  CheckCircle2, Rocket, Headphones, ArrowRight, Eye, ThumbsUp, ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: 'easeOut' },
  }),
};

const steps = [
  {
    num: '01',
    title: 'Initial Discussion',
    icon: MessageSquare,
    duration: '~1-2 days',
    desc: "We start by understanding your business, your goals, and what you're trying to achieve. This conversation helps us shape the right solution for you.",
  },
  {
    num: '02',
    title: 'Requirement Analysis',
    icon: FileSearch,
    duration: '~2-3 days',
    desc: 'We analyze your requirements in detail — defining the project scope, key features, technical approach, estimated timeline, and budget.',
  },
  {
    num: '03',
    title: 'Proposal',
    icon: FileText,
    duration: '~1-2 days',
    desc: 'We prepare a detailed project proposal covering everything we discussed — features, deliverables, timeline, pricing, and terms.',
  },
  {
    num: '04',
    title: 'UI/UX Design',
    icon: Palette,
    duration: '1-2 weeks',
    desc: "Our design phase produces wireframes and high-fidelity mockups. We share these with you and refine them until you're fully satisfied before development begins.",
  },
  {
    num: '05',
    title: 'Development',
    icon: Code2,
    duration: '2-8 weeks',
    desc: 'Our development phase brings your designs to life. We build frontend, backend, and databases using modern, scalable technology.',
  },
  {
    num: '06',
    title: 'Testing',
    icon: CheckCircle2,
    duration: '3-5 days',
    desc: 'Every project goes through thorough testing — responsiveness across devices, form validation, security checks, performance testing, and browser compatibility.',
  },
  {
    num: '07',
    title: 'Delivery',
    icon: Rocket,
    duration: '1-2 days',
    desc: 'We deploy your project to your chosen hosting environment and hand over all agreed credentials, documentation, and source code.',
  },
  {
    num: '08',
    title: 'Support',
    icon: Headphones,
    duration: 'Ongoing',
    desc: 'After launch, we remain available for maintenance, updates, and improvements according to your agreed support plan.',
  },
];

const differentiators = [
  {
    icon: Eye,
    title: 'Transparent at Every Stage',
    desc: 'You are kept in the loop throughout the entire project — no black boxes, no sudden surprises.',
  },
  {
    icon: ThumbsUp,
    title: 'Client-Approved Before Development',
    desc: 'We never start building until you have reviewed and approved the designs and proposal.',
  },
  {
    icon: ShieldCheck,
    title: 'Tested Before Delivery',
    desc: 'Every deliverable goes through rigorous QA before it reaches your hands.',
  },
];

export default function Process() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-white">

      {/* Hero */}
      <section className="pt-28 pb-16 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          Our <span className="text-[#2563EB]">Process</span>
        </motion.h1>
        <motion.p
          className="text-gray-400 text-lg max-w-2xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          A transparent, structured approach to delivering your project on time and to your expectations.
        </motion.p>
      </section>

      {/* Timeline Steps */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#2563EB] via-[#06B6D4] to-[#2563EB] -translate-x-1/2" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={step.num}
                className="relative flex flex-col md:flex-row items-center md:items-start gap-6 mb-12"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                {/* Left card (even) or spacer */}
                <div className={`w-full md:w-5/12 ${isEven ? 'md:text-right md:pr-8' : 'md:order-3 md:pl-8'}`}>
                  {(isEven) && (
                    <StepCard step={step} Icon={Icon} isEven={isEven} />
                  )}
                  {(!isEven) && <div className="hidden md:block" />}
                </div>

                {/* Center dot */}
                <div className="md:w-2/12 flex justify-center z-10 shrink-0">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center shadow-lg shadow-blue-900/40">
                    <Icon size={22} className="text-white" />
                  </div>
                </div>

                {/* Right card (odd) or spacer */}
                <div className={`w-full md:w-5/12 ${!isEven ? 'md:text-left md:pl-8' : 'md:order-3 md:pr-8'}`}>
                  {(!isEven) && (
                    <StepCard step={step} Icon={Icon} isEven={isEven} />
                  )}
                  {(isEven) && <div className="hidden md:block" />}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* What Makes Our Process Different */}
      <section className="py-16 px-6 bg-[#111827]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            What Makes Our Process Different
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map(({ icon: DIcon, title, desc }, i) => (
              <motion.div
                key={title}
                className="bg-[#172554] border border-[#263449] rounded-xl p-8 text-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-900/30">
                  <DIcon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Reach out today and we'll walk you through the first step together.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Start the Conversation <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

function StepCard({ step }) {
  return (
    <div className="bg-[#172554] border border-[#263449] rounded-xl p-6">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-4xl font-black text-[#263449] select-none leading-none">{step.num}</span>
        <h3 className="text-lg font-bold text-white">{step.title}</h3>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{step.desc}</p>
      <span className="inline-block bg-[#1e3a5f] border border-[#263449] text-[#06B6D4] text-xs font-semibold px-3 py-1 rounded-full">
        {step.duration}
      </span>
    </div>
  );
}
