import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FileCheck, Shield, Scale, Clock, ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
}

const sections = [
  {
    id: 1,
    heading: '1. Services & Engagement Scope',
    content: [
      {
        sub: 'Service Offerings',
        text: 'Kriyova Technologies provides software engineering, web application development, e-commerce solutions, and digital automation services. All services are rendered according to individual Statements of Work (SOW) or written proposals agreed upon between Kriyova Technologies and the client.',
      },
      {
        sub: 'Project Specifications',
        text: 'Detailed specifications including feature lists, technical stacks, deliverables, and acceptance criteria are outlined in individual project proposals. Any feature or capability not explicitly detailed in the project agreement is considered out of scope.',
      },
    ],
  },
  {
    id: 2,
    heading: '2. Project Agreements & Changes',
    content: [
      {
        sub: 'Agreement Formalization',
        text: 'A formal project agreement or confirmed proposal is required before development begins. Any alterations, additional features, or material revisions requested after approval of project scope will be evaluated via a change request and may incur adjustments to project timeline and budget.',
      },
      {
        sub: 'Milestone Approvals',
        text: 'Work is structured around defined milestones (such as UI/UX design sign-off, staging deployment, and final acceptance). Prompt review and written sign-off from the client are essential to maintaining project schedules.',
      },
    ],
  },
  {
    id: 3,
    heading: '3. Payment & Invoicing Terms',
    content: [
      {
        sub: 'Payment Schedule',
        text: 'Unless otherwise stipulated in a signed project contract, standard engagements require an advance deposit prior to project commencement, with balance payments tied to milestone completion and final deployment.',
      },
      {
        sub: 'Taxes and Invoicing',
        text: 'Invoices are issued electronically with payment due as indicated on each invoice. In accordance with applicable Indian statutory regulations, applicable Goods and Services Tax (GST) or other taxes are charged as required by law.',
      },
    ],
  },
  {
    id: 4,
    heading: '4. Intellectual Property Rights',
    content: [
      {
        sub: 'Client Ownership',
        text: 'Upon receipt of full and final payment for all agreed deliverables, all custom source code, design assets, and content created specifically for the client are assigned to the client.',
      },
      {
        sub: 'Pre-existing Tools & Open-Source Software',
        text: 'Open-source libraries (e.g., React, Express, Tailwind CSS) and pre-existing reusable utilities remain subject to their respective open-source licenses and are incorporated into deliverables for the client’s perpetual, non-exclusive use.',
      },
    ],
  },
  {
    id: 5,
    heading: '5. Client Obligations & Confidentiality',
    content: [
      {
        sub: 'Content & Materials',
        text: 'The client is responsible for supplying all required project assets, domain credentials, brand materials, copy, and timely feedback necessary for project progress.',
      },
      {
        sub: 'Non-Disclosure',
        text: 'Both Kriyova Technologies and the client agree to hold in strict confidence any proprietary business information, technical architectures, trade secrets, or client data shared during the course of the engagement.',
      },
    ],
  },
  {
    id: 6,
    heading: '6. Limitation of Liability',
    content: [
      {
        sub: null,
        text: 'To the fullest extent permitted by applicable law, Kriyova Technologies shall not be liable for any indirect, incidental, punitive, or consequential damages resulting from downtime, third-party hosting outages, cyberattacks, or external API disruptions.',
      },
      {
        sub: null,
        text: 'In all circumstances, our maximum cumulative liability arising out of or related to any project engagement shall not exceed the total fees actually paid to Kriyova Technologies by the client under the applicable agreement.',
      },
    ],
  },
  {
    id: 7,
    heading: '7. Governing Law & Jurisdiction',
    content: [
      {
        sub: null,
        text: 'These Terms of Service and any contractual disputes arising hereunder shall be governed by and construed in accordance with the laws of the Republic of India. Any legal action or proceeding shall be subject to the exclusive jurisdiction of the competent courts in Maharashtra, India.',
      },
    ],
  },
  {
    id: 8,
    heading: '8. Modifications to Terms & Inquiries',
    content: [
      {
        sub: null,
        text: 'Kriyova Technologies reserves the right to revise these Terms of Service periodically. Updated terms become effective upon publication on this website. Continued use of our site and services signifies acceptance of revised terms.',
      },
    ],
  },
]

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#0B1220] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-cyan-400 text-xs font-semibold tracking-widest uppercase mb-4">
            <Scale className="w-3.5 h-3.5" /> Legal Terms
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Terms of <span className="text-gradient">Service</span>
          </h1>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            These terms define our mutual commitments, engagement framework, and operating standards for all clients and website visitors.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-xs text-slate-500 font-mono">
            <Clock className="w-3.5 h-3.5" />
            <span>Effective Date: November 2024</span>
          </div>
        </motion.div>

        {/* Intro Card */}
        <motion.div
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
          className="bg-[#111827] border border-[#263449] rounded-2xl p-6 sm:p-8 mb-8"
        >
          <h2 className="text-xl font-bold text-white mb-3">Welcome to Kriyova Technologies</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            By accessing our website (kriyova.com) or engaging Kriyova Technologies for development, consulting, or software services, you agree to comply with and be bound by the following Terms of Service. Please review them carefully before submitting project requirements or executing a service agreement.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, idx) => (
            <motion.div
              key={section.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={idx}
              variants={fadeUp}
              className="bg-[#111827] border border-[#263449] rounded-xl p-6 sm:p-8 hover:border-blue-500/30 transition-colors"
            >
              <h2 className="text-lg sm:text-xl font-bold text-cyan-400 mb-4">
                {section.heading}
              </h2>
              <div className="space-y-4">
                {section.content.map((item, itemIdx) => (
                  <div key={itemIdx}>
                    {item.sub && (
                      <h3 className="text-sm font-semibold text-white mb-1">
                        {item.sub}
                      </h3>
                    )}
                    <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact info box */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-12 bg-[#172554]/40 border border-[#263449] rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-base font-semibold text-white mb-1">
              Have Questions About Our Terms?
            </h3>
            <p className="text-slate-400 text-sm">
              We believe in total transparency. Contact our team for any contract clarification.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-colors"
          >
            Contact Legal Team <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
