import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
};

const sections = [
  {
    id: 1,
    heading: '1. Information We Collect',
    content: [
      {
        sub: 'Contact Form Data',
        text: 'When you submit our contact or quote request forms, we collect information you provide directly — including your name, business name, email address, phone number, and project details. This information is used solely to respond to your enquiry.',
      },
      {
        sub: 'Usage Data',
        text: 'We may collect anonymised usage data through analytics tools (such as page views and general traffic patterns) to help us understand how visitors use our website and improve the user experience. This data does not identify you personally.',
      },
    ],
  },
  {
    id: 2,
    heading: '2. How We Use Your Information',
    content: [
      {
        sub: null,
        text: 'We use the information we collect for the following purposes:',
      },
      {
        sub: null,
        text: '• To respond to your enquiries and project requests in a timely manner.\n• To communicate with you about your project during and after engagement.\n• To improve our website, services, and overall client experience.\n• To meet any legal obligations that may apply to our operations.',
      },
      {
        sub: null,
        text: 'We will never use your information to send unsolicited marketing communications without your explicit consent.',
      },
    ],
  },
  {
    id: 3,
    heading: '3. Data Storage',
    content: [
      {
        sub: null,
        text: 'Information submitted through our forms is stored securely in a MongoDB database hosted on reputable cloud infrastructure. We implement reasonable technical and organisational measures to protect your data from unauthorised access, disclosure, or loss.',
      },
      {
        sub: null,
        text: 'We retain your data only for as long as necessary to fulfil the purpose for which it was collected, or as required by applicable law.',
      },
    ],
  },
  {
    id: 4,
    heading: '4. Sharing of Information',
    content: [
      {
        sub: null,
        text: 'Kriyova Technologies does not sell, rent, trade, or otherwise share your personal information with third parties for marketing or commercial purposes.',
      },
      {
        sub: null,
        text: 'We may share information only where strictly necessary — for example, with hosting providers or email delivery services that assist us in operating our website — and only under appropriate data protection terms. We do not share your data with any advertising networks.',
      },
    ],
  },
  {
    id: 5,
    heading: '5. Cookies',
    content: [
      {
        sub: null,
        text: 'Our website may use basic session cookies to ensure the site functions correctly during your visit. These cookies are temporary and are removed when you close your browser.',
      },
      {
        sub: null,
        text: 'We do not use cookies to track you across other websites or to serve targeted advertising. You may configure your browser to refuse cookies; however, some parts of the site may not function as intended if you do so.',
      },
    ],
  },
  {
    id: 6,
    heading: '6. Contact Us',
    content: [
      {
        sub: null,
        text: 'If you have any questions about this Privacy Policy, or if you would like to request access to, correction of, or deletion of your personal data, please reach out to us through our contact form on the website.',
      },
      {
        sub: null,
        text: 'We will make every effort to respond to your request within a reasonable timeframe.',
      },
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#111827] text-white py-28 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-12"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Last updated: November 2024</p>
          <div className="mt-6 h-px bg-[#263449]" />
        </motion.div>

        {/* Intro */}
        <motion.p
          className="text-gray-300 leading-relaxed mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          At Kriyova Technologies, we respect your privacy and are committed to protecting the
          personal information you share with us. This Privacy Policy explains what information we
          collect, how we use it, and the choices you have regarding your data. By using our
          website, you agree to the practices described in this policy.
        </motion.p>

        {/* Sections */}
        {sections.map((section, i) => (
          <motion.div
            key={section.id}
            className="mb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <h2 className="text-xl font-bold text-[#06B6D4] mb-4">{section.heading}</h2>
            {section.content.map((block, j) => (
              <div key={j} className="mb-3">
                {block.sub && (
                  <h3 className="text-base font-semibold text-white mb-1">{block.sub}</h3>
                )}
                {block.text.includes('\n') ? (
                  <ul className="text-gray-300 leading-relaxed space-y-1">
                    {block.text.split('\n').map((line, k) => (
                      <li key={k} className="pl-2">{line}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-300 leading-relaxed">{block.text}</p>
                )}
              </div>
            ))}
            <div className="mt-8 h-px bg-[#1e2d44]" />
          </motion.div>
        ))}

        {/* Footer note */}
        <motion.p
          className="text-gray-500 text-sm mt-4"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Kriyova Technologies reserves the right to update this Privacy Policy at any time. Changes
          will be reflected on this page with an updated "Last updated" date. We encourage you to
          review this policy periodically.
        </motion.p>
      </div>
    </div>
  );
}
