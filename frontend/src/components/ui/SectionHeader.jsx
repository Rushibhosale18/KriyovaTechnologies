/**
 * SectionHeader — reusable page section heading
 * @param {string} label   Small caps cyan label above the title
 * @param {string} title   Main large heading
 * @param {string} subtitle Secondary descriptive text beneath the title
 * @param {'left'|'center'} align
 */
export default function SectionHeader({ label, title, subtitle, align = 'center', className = '' }) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center mx-auto'

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {label && (
        <p className="text-cyan-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3">
          {label}
        </p>
      )}
      {title && (
        <h2 className="text-3xl sm:text-4xl font-bold text-textMain leading-tight mb-4">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-textSecondary text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
