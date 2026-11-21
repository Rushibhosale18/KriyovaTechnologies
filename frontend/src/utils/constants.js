// ─── Navigation ─────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Our Work', to: '/portfolio' },
  { label: 'About', to: '/about' },
  { label: 'Process', to: '/process' },
  { label: 'Contact', to: '/contact' },
]

// ─── Services ────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id: 'web-development',
    title: 'Website Development',
    shortTitle: 'Web Dev',
    description:
      'High-performance, SEO-optimised websites and web apps built with modern frameworks. From landing pages to complex portals.',
    icon: 'Globe',
    tech: ['React', 'Next.js', 'Node.js', 'TailwindCSS'],
    color: 'blue',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Development',
    shortTitle: 'E-Commerce',
    description:
      'Scalable online stores with secure payment gateways, inventory management, and conversion-focused UX.',
    icon: 'ShoppingCart',
    tech: ['Shopify', 'WooCommerce', 'Stripe', 'Next.js'],
    color: 'cyan',
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    shortTitle: 'AI & Auto',
    description:
      'Intelligent workflows, chatbots, and AI integrations that save time, reduce costs, and unlock new capabilities.',
    icon: 'Bot',
    tech: ['OpenAI', 'LangChain', 'Python', 'n8n'],
    color: 'purple',
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    shortTitle: 'Custom Software',
    description:
      'Bespoke software solutions tailored to your unique business logic — from internal tools to full SaaS platforms.',
    icon: 'Code2',
    tech: ['Node.js', 'React', 'PostgreSQL', 'MongoDB'],
    color: 'green',
  },
]

// ─── Tech Stack ───────────────────────────────────────────────────────────────
export const TECH_STACK = [
  { label: 'React', category: 'Frontend' },
  { label: 'JavaScript', category: 'Frontend' },
  { label: 'Tailwind CSS', category: 'Frontend' },
  { label: 'Framer Motion', category: 'Frontend' },
  { label: 'Node.js', category: 'Backend' },
  { label: 'Express.js', category: 'Backend' },
  { label: 'MongoDB', category: 'Database' },
  { label: 'Python', category: 'Backend' },
  { label: 'REST APIs', category: 'API' },
  { label: 'Git & GitHub', category: 'Version Control' },
]

// ─── Process Steps ────────────────────────────────────────────────────────────
export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description:
      'We start with a deep-dive consultation to understand your goals, audience, and technical requirements. We then create a detailed project plan and timeline.',
    icon: 'Compass',
    duration: '1–2 days',
  },
  {
    step: '02',
    title: 'Design & Prototyping',
    description:
      'Our designers craft wireframes and high-fidelity prototypes that reflect your brand. You review and approve before a single line of code is written.',
    icon: 'Figma',
    duration: '3–5 days',
  },
  {
    step: '03',
    title: 'Development',
    description:
      'We build your product using modern tech stacks with clean, maintainable code. Daily updates keep you in the loop throughout the sprint.',
    icon: 'Code2',
    duration: '1–4 weeks',
  },
  {
    step: '04',
    title: 'Testing & QA',
    description:
      'Rigorous cross-browser, performance, and security testing ensures your product is rock-solid before it reaches your users.',
    icon: 'CheckCircle',
    duration: '2–3 days',
  },
  {
    step: '05',
    title: 'Launch & Deployment',
    description:
      'We deploy to your preferred infrastructure with zero downtime, configure DNS, SSL, and monitoring — then hand over the keys.',
    icon: 'Rocket',
    duration: '1 day',
  },
  {
    step: '06',
    title: 'Support & Growth',
    description:
      'Post-launch, we provide ongoing maintenance, feature additions, and strategic guidance to help your digital presence grow.',
    icon: 'TrendingUp',
    duration: 'Ongoing',
  },
]

// ─── Social Links ─────────────────────────────────────────────────────────────
export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/kriyova-technologies',
  github: 'https://github.com/kriyova-technologies',
  twitter: 'https://twitter.com/kriyova',
  whatsapp: 'https://wa.me/1234567890',
  email: 'mailto:hello@kriyova.com',
}
