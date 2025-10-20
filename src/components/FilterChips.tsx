'use client'

import { Audience, ClassLevel } from '@/lib/types'

export type Filters = {
  audience?: Audience | undefined
  weekday?: number | undefined
  teacherId?: string | undefined
  level?: ClassLevel | undefined
  discipline?: string | undefined
}

interface FilterChipsProps {
  filters: Filters
  options: {
    audiences: Array<{ value: Audience; label: string }>
    weekdays: Array<{ value: number; label: string }>
    teachers: Array<{ value: string; label: string }>
    levels: Array<{ value: ClassLevel; label: string }>
    disciplines: Array<{ value: string; label: string }>
  }
  onChange: (next: Filters) => void
}

export default function FilterChips({
  filters,
  options,
  onChange,
}: FilterChipsProps) {
  const handleFilterChange = (key: keyof Filters, value: any) => {
    const newFilters = { ...filters }

    if (value === undefined || value === '') {
      delete newFilters[key]
    } else {
      newFilters[key] = value
    }

    onChange(newFilters)
  }

  const clearAllFilters = () => {
    onChange({})
  }

  const hasActiveFilters = Object.keys(filters).length > 0

  return (
    <div className="space-y-6">
      {/* Botón para limpiar filtros */}
      {hasActiveFilters && (
        <div className="flex justify-end">
          <button
            onClick={clearAllFilters}
            className="text-sm text-violet-400 underline hover:text-violet-300 focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none"
          >
            Limpiar filtros
          </button>
        </div>
      )}

      {/* Audiencia */}
      <fieldset>
        <legend className="mb-3 text-sm font-medium text-neutral-200">
          Audiencia
        </legend>
        <div className="flex flex-wrap gap-2">
          {options.audiences.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() =>
                handleFilterChange(
                  'audience',
                  filters.audience === option.value ? undefined : option.value
                )
              }
              className={`rounded-full border px-3 py-1.5 text-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none ${
                filters.audience === option.value
                  ? 'border-transparent bg-linear-to-r from-violet-600 to-pink-600 text-white'
                  : 'border-neutral-700 bg-neutral-800 text-neutral-300 hover:border-neutral-600 hover:text-white'
              }`}
              aria-pressed={filters.audience === option.value}
            >
              {option.label}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Días de la semana */}
      <fieldset>
        <legend className="mb-3 text-sm font-medium text-neutral-200">
          Días
        </legend>
        <div className="flex flex-wrap gap-2">
          {options.weekdays.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() =>
                handleFilterChange(
                  'weekday',
                  filters.weekday === option.value ? undefined : option.value
                )
              }
              className={`rounded-full border px-3 py-1.5 text-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none ${
                filters.weekday === option.value
                  ? 'border-transparent bg-linear-to-r from-violet-600 to-pink-600 text-white'
                  : 'border-neutral-700 bg-neutral-800 text-neutral-300 hover:border-neutral-600 hover:text-white'
              }`}
              aria-pressed={filters.weekday === option.value}
            >
              {option.label}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Docentes */}
      <fieldset>
        <legend className="mb-3 text-sm font-medium text-neutral-200">
          Docente
        </legend>
        <div className="flex flex-wrap gap-2">
          {options.teachers.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() =>
                handleFilterChange(
                  'teacherId',
                  filters.teacherId === option.value ? undefined : option.value
                )
              }
              className={`rounded-full border px-3 py-1.5 text-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none ${
                filters.teacherId === option.value
                  ? 'border-transparent bg-linear-to-r from-violet-600 to-pink-600 text-white'
                  : 'border-neutral-700 bg-neutral-800 text-neutral-300 hover:border-neutral-600 hover:text-white'
              }`}
              aria-pressed={filters.teacherId === option.value}
            >
              {option.label}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Nivel */}
      <fieldset>
        <legend className="mb-3 text-sm font-medium text-neutral-200">
          Nivel
        </legend>
        <div className="flex flex-wrap gap-2">
          {options.levels.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() =>
                handleFilterChange(
                  'level',
                  filters.level === option.value ? undefined : option.value
                )
              }
              className={`rounded-full border px-3 py-1.5 text-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none ${
                filters.level === option.value
                  ? 'border-transparent bg-linear-to-r from-violet-600 to-pink-600 text-white'
                  : 'border-neutral-700 bg-neutral-800 text-neutral-300 hover:border-neutral-600 hover:text-white'
              }`}
              aria-pressed={filters.level === option.value}
            >
              {option.label}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Disciplina */}
      <fieldset>
        <legend className="mb-3 text-sm font-medium text-neutral-200">
          Disciplina
        </legend>
        <div className="flex flex-wrap gap-2">
          {options.disciplines.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() =>
                handleFilterChange(
                  'discipline',
                  filters.discipline === option.value ? undefined : option.value
                )
              }
              className={`rounded-full border px-3 py-1.5 text-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none ${
                filters.discipline === option.value
                  ? 'border-transparent bg-linear-to-r from-violet-600 to-pink-600 text-white'
                  : 'border-neutral-700 bg-neutral-800 text-neutral-300 hover:border-neutral-600 hover:text-white'
              }`}
              aria-pressed={filters.discipline === option.value}
            >
              {option.label}
            </button>
          ))}
        </div>
      </fieldset>
    </div>
  )
}
