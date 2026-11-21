/**
 * Card — glass-dark card container
 */
export default function Card({ children, className = '', hover = true, ...props }) {
  return (
    <div
      className={`bg-bgCard border border-border rounded-xl p-6 ${
        hover ? 'hover:border-blue-brand/50 hover:shadow-lg hover:shadow-blue-brand/5 transition-all duration-300' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
