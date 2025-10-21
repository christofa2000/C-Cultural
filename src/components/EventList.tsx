import { Event } from '@/lib/types'
import Link from 'next/link'

interface EventListProps {
  events: Event[]
  maxItems?: number
}

export default function EventList({ events, maxItems = 3 }: EventListProps) {
  const displayEvents = events.slice(0, maxItems)

  return (
    <div className="space-y-4">
      {displayEvents.map((event) => (
        <div
          key={event.id}
          className="rounded-lg border border-white/10 bg-neutral-900 p-4 transition-all duration-200 hover:border-white/20 hover:bg-neutral-800"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="font-semibold text-white">{event.title}</h3>
              <p className="mt-1 text-sm text-neutral-400">
                {new Date(event.dateISO).toLocaleDateString('es-AR', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
              {event.description && (
                <p className="mt-2 line-clamp-2 text-sm text-neutral-300">
                  {event.description}
                </p>
              )}
              {event.price && (
                <p className="mt-2 text-sm font-medium text-violet-400">
                  {event.price}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}

      {events.length > maxItems && (
        <div className="text-center">
          <Link
            href="/agenda"
            className="inline-flex items-center text-sm text-violet-400 transition-colors duration-200 hover:text-violet-300 focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none"
          >
            Ver todos los eventos
            <svg
              className="ml-1 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      )}
    </div>
  )
}
