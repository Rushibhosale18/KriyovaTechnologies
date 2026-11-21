/**
 * Badge — small pill for tech stack tags or status labels
 * @param {'default'|'cyan'|'blue'|'green'|'yellow'} variant
 */
const VARIANT_CLASSES = {
  default: 'border-border text-textSecondary bg-bgCard',
  cyan: 'border-cyan-accent/40 text-cyan-accent bg-cyan-accent/10',
  blue: 'border-blue-brand/40 text-blue-brand bg-blue-brand/10',
  green: 'border-green-500/40 text-green-400 bg-green-500/10',
  yellow: 'border-yellow-500/40 text-yellow-400 bg-yellow-500/10',
}

export default function Badge({ children, variant = 'default', className = '' }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
