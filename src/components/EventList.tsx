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
          className="border-border bg-card rounded-lg border p-4 transition-all duration-200 hover:shadow-sm"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-foreground font-semibold">{event.title}</h3>
              <p className="text-muted-foreground mt-1 text-sm">
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
                <p className="text-muted-foreground mt-2 line-clamp-2 text-sm">
                  {event.description}
                </p>
              )}
              {event.price && (
                <p className="text-primary mt-2 text-sm font-medium">
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
            className="text-primary hover:text-primary/80 focus-visible:ring-ring inline-flex items-center text-sm transition-colors duration-200 focus-visible:rounded-sm focus-visible:ring-2 focus-visible:outline-none"
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
