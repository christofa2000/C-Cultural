import Link from 'next/link'

interface ContactCardProps {
  icon: React.ReactNode
  label: string
  href: string
  isExternal?: boolean
}

export default function ContactCard({
  icon,
  label,
  href,
  isExternal = true,
}: ContactCardProps) {
  const cardContent = (
    <div className="group flex items-center space-x-4 rounded-lg border border-white/10 bg-neutral-900 p-6 transition-all duration-200 hover:border-violet-500/50 hover:bg-neutral-800 hover:shadow-lg hover:shadow-violet-500/10">
      <div className="shrink-0" aria-hidden="true">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-neutral-200 transition-colors duration-200 group-hover:text-white">
          {label}
        </p>
      </div>
      <div className="shrink-0" aria-hidden="true">
        <svg
          className="h-4 w-4 text-neutral-400 transition-colors duration-200 group-hover:text-violet-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>
    </div>
  )

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus-visible:rounded-lg focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none"
        aria-label={`Abrir ${label} en una nueva ventana`}
      >
        {cardContent}
      </a>
    )
  }

  return (
    <Link
      href={href}
      className="block focus-visible:rounded-lg focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none"
      aria-label={`Ir a ${label}`}
    >
      {cardContent}
    </Link>
  )
}
