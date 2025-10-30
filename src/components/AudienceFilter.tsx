'use client'

import { Audience } from '@/lib/types'

interface AudienceFilterProps {
  selectedAudience: Audience | null
  onAudienceChange: (audience: Audience | null) => void
}

export default function AudienceFilter({
  selectedAudience,
  onAudienceChange,
}: AudienceFilterProps) {
  const audiences = [
    { value: 'adultxs' as const, label: 'Adultxs', icon: '👥' },
    { value: 'infancias' as const, label: 'Infancias', icon: '🧸' },
  ]

  return (
    <div className="flex flex-col items-center space-y-6">
      <h2 className="text-foreground text-center text-xl font-semibold">
        ¿Para quién buscás clases?
      </h2>

      <div className="flex w-full max-w-md flex-col gap-4 sm:flex-row">
        {audiences.map((audience) => (
          <button
            key={audience.value}
            type="button"
            onClick={() =>
              onAudienceChange(
                selectedAudience === audience.value ? null : audience.value
              )
            }
            className={`group flex flex-1 transform flex-col items-center justify-center rounded-2xl border-2 p-6 transition-all duration-300 hover:scale-105 focus-visible:ring-4 focus-visible:ring-violet-400 focus-visible:outline-none ${
              selectedAudience === audience.value
                ? 'border-violet-400 bg-linear-to-br from-violet-600 to-violet-700 shadow-lg shadow-violet-500/25'
                : 'border-border bg-card hover:bg-muted hover:border-violet-300'
            }`}
            aria-pressed={selectedAudience === audience.value}
          >
            <div className="mb-3 text-4xl transition-transform duration-300 group-hover:scale-110">
              {audience.icon}
            </div>
            <span
              className={`text-lg font-semibold ${
                selectedAudience === audience.value
                  ? 'text-white'
                  : 'text-foreground'
              }`}
            >
              {audience.label}
            </span>
            <div
              className={`mt-2 text-sm ${
                selectedAudience === audience.value
                  ? 'text-white/90'
                  : 'text-foreground'
              }`}
            >
              {audience.value === 'adultxs'
                ? 'Mayores de 18 años'
                : 'De 3 a 17 años'}
            </div>
          </button>
        ))}
      </div>

      {selectedAudience && (
        <button
          onClick={() => onAudienceChange(null)}
          className="text-primary hover:text-primary/80 focus-visible:ring-ring text-sm underline transition-colors duration-200 focus-visible:rounded-sm focus-visible:ring-2 focus-visible:outline-none"
        >
          Ver todas las clases
        </button>
      )}
    </div>
  )
}
