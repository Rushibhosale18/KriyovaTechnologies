import { Link } from 'react-router-dom'
import { Loader2 } from 'lucide-react'

const SIZE_CLASSES = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-2.5 text-sm rounded-xl',
  lg: 'px-8 py-3.5 text-base rounded-xl',
}

const VARIANT_CLASSES = {
  primary:
    'bg-gradient-to-r from-blue-brand to-cyan-accent text-white font-semibold shadow-md hover:from-blue-600 hover:to-cyan-500 hover:shadow-cyan-accent/20 hover:shadow-lg disabled:opacity-60',
  secondary:
    'border border-border text-textMain font-semibold bg-transparent hover:bg-bgCard hover:border-blue-brand/60 disabled:opacity-60',
  ghost:
    'text-textSecondary font-medium hover:text-textMain hover:bg-bgCard disabled:opacity-60',
}

/**
 * Reusable Button component
 * @param {object} props
 * @param {'primary'|'secondary'|'ghost'} props.variant
 * @param {'sm'|'md'|'lg'} props.size
 * @param {boolean} props.loading
 * @param {string} props.to - If provided, renders as a Link
 * @param {string} props.href - If provided, renders as an <a>
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  to,
  href,
  children,
  className = '',
  disabled,
  ...props
}) {
  const baseClass = `inline-flex items-center justify-center gap-2 transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-accent/60 ${SIZE_CLASSES[size]} ${VARIANT_CLASSES[variant]} ${className}`
  const isDisabled = disabled || loading

  if (to) {
    return (
      <Link to={to} className={baseClass} {...props}>
        {loading && <Loader2 size={16} className="animate-spin" />}
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={baseClass} target="_blank" rel="noopener noreferrer" {...props}>
        {loading && <Loader2 size={16} className="animate-spin" />}
        {children}
      </a>
    )
  }

  return (
    <button className={baseClass} disabled={isDisabled} {...props}>
      {loading && <Loader2 size={16} className="animate-spin" />}
      {children}
    </button>
  )
}
