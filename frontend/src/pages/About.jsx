import { motion } from 'framer-motion';
import { Star, MessageSquare, Target, BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const skills = [
  'React.js', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB',
  'Python', 'SQL', 'REST APIs', 'JWT Auth', 'AI API Integration',
];

const values = [
  {
    icon: Star,
    color: 'blue',
    title: 'Quality First',
    desc: 'We prioritize code quality, design quality, and delivery quality.',
  },
  {
    icon: MessageSquare,
    color: 'cyan',
    title: 'Honest Communication',
    desc: 'We keep clients informed at every stage — no surprises.',
  },
  {
    icon: Target,
    color: 'blue',
    title: 'Business-Focused',
    desc: 'Every decision we make is guided by what actually helps your business.',
  },
  {
    icon: BookOpen,
    color: 'cyan',
    title: 'Continuous Learning',
    desc: 'We stay current with technology to bring you the best solutions.',
  },
];

const companyValues = [
  { icon: Star, label: 'Professional' },
  { icon: Target, label: 'Innovative' },
  { icon: MessageSquare, label: 'Reliable' },
  { icon: BookOpen, label: 'Modern' },
];

export default function About() {
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
          About <span className="text-[#2563EB]">Kriyova Technologies</span>
        </motion.h1>
        <motion.p
          className="text-gray-400 text-lg max-w-2xl mx-auto"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Learn about who we are, what we do, and what drives us to build great digital products.
        </motion.p>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Kriyova Technologies was created with a simple vision: to make modern technology
              accessible and useful for businesses of every size.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              We focus on building practical digital solutions that help businesses improve their
              online presence, simplify their operations, and grow with confidence.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Every project we take on is approached with genuine care — we aim to understand your
              business deeply before writing a single line of code.
            </p>
          </motion.div>

          {/* Right: values card */}
          <motion.div
            className="bg-[#172554] border border-[#263449] rounded-xl p-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <h3 className="text-lg font-semibold text-gray-300 mb-6 uppercase tracking-widest text-sm">
              Our Core Values
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {companyValues.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 p-4 bg-[#0d1f3c] rounded-lg border border-[#263449]">
                  <Icon className="text-[#06B6D4] shrink-0" size={20} />
                  <span className="text-white font-medium">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 bg-[#111827]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Mission &amp; Vision
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              className="bg-[#172554] border border-[#2563EB] rounded-xl p-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-[#2563EB] mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To deliver high-quality, practical technology solutions that create real business
                value for our clients — regardless of their size or industry.
              </p>
            </motion.div>
            {/* Vision */}
            <motion.div
              className="bg-[#172554] border border-[#06B6D4] rounded-xl p-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <h3 className="text-xl font-bold text-[#06B6D4] mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To become a trusted technology partner for businesses across India and globally,
                known for quality, transparency, and results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Meet the Founder
        </motion.h2>
        <motion.div
          className="bg-[#172554] border border-[#263449] rounded-xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Avatar */}
          <div className="shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center text-4xl font-bold text-white shadow-lg">
              RB
            </div>
          </div>

          {/* Info */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-1">Rushikesh Bhosale</h3>
            <p className="text-[#06B6D4] font-semibold mb-4">Founder &amp; Developer</p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Rushikesh is a BE Electronics and Telecommunication Engineering graduate with a passion
              for building practical software that solves real business problems. He founded Kriyova
              Technologies to bridge the gap between modern technology and businesses that need it
              most.
            </p>
            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-[#1e3a5f] border border-[#263449] rounded-lg px-3 py-1 text-sm text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-6 bg-[#111827]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Values
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, color, title, desc }, i) => (
              <motion.div
                key={title}
                className="bg-[#172554] border border-[#263449] rounded-xl p-6"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.5}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${color === 'blue' ? 'bg-[#1e3a8a]' : 'bg-[#0e4f5f]'}`}>
                  <Icon className={color === 'blue' ? 'text-[#2563EB]' : 'text-[#06B6D4]'} size={20} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
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
          <h2 className="text-3xl font-bold mb-4">Ready to work together?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Let's start a conversation about your project and how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
