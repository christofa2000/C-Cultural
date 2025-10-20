'use client'

import ClassCard from '@/components/ClassCard'
import FilterChips, { Filters } from '@/components/FilterChips'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { classes } from '@/data/classes'
import { schedules } from '@/data/schedules'
import { teachers } from '@/data/teachers'
import { useMemo, useState } from 'react'

export default function ClassesPage() {
  const [filters, setFilters] = useState<Filters>({})

  // Opciones para los filtros
  const filterOptions = useMemo(() => {
    const audiences = [
      { value: 'adultxs' as const, label: 'Adultxs' },
      { value: 'infancias' as const, label: 'Infancias' },
    ]

    const weekdays = [
      { value: 1, label: 'Lunes' },
      { value: 2, label: 'Martes' },
      { value: 3, label: 'Miércoles' },
      { value: 4, label: 'Jueves' },
      { value: 5, label: 'Viernes' },
      { value: 6, label: 'Sábado' },
      { value: 0, label: 'Domingo' },
    ]

    const teacherOptions = teachers.map((teacher) => ({
      value: teacher.id,
      label: teacher.name,
    }))

    const levels = [
      { value: 'inic' as const, label: 'Inicial' },
      { value: 'inter' as const, label: 'Intermedio' },
      { value: 'avanz' as const, label: 'Avanzado' },
    ]

    // Obtener disciplinas únicas de las clases
    const disciplines = Array.from(
      new Set(classes.map((c) => c.discipline).filter(Boolean))
    ).map((discipline) => ({
      value: discipline!,
      label: discipline!,
    }))

    return {
      audiences,
      weekdays,
      teachers: teacherOptions,
      levels,
      disciplines,
    }
  }, [])

  // Filtrar clases según los filtros activos
  const filteredClasses = useMemo(() => {
    return classes.filter((classItem) => {
      // Filtro por audiencia
      if (filters.audience && classItem.audience !== filters.audience) {
        return false
      }

      // Filtro por nivel
      if (filters.level && classItem.level !== filters.level) {
        return false
      }

      // Filtro por disciplina
      if (filters.discipline && classItem.discipline !== filters.discipline) {
        return false
      }

      // Filtro por docente
      if (filters.teacherId && classItem.teacherId !== filters.teacherId) {
        return false
      }

      // Filtro por día de la semana
      if (filters.weekday !== undefined) {
        const hasScheduleOnDay = schedules.some(
          (schedule) =>
            schedule.classId === classItem.id &&
            schedule.weekday === filters.weekday
        )
        if (!hasScheduleOnDay) {
          return false
        }
      }

      return true
    })
  }, [filters])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-950 text-neutral-100">
        <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="bg-linear-to-r from-violet-400 to-pink-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
              Clases
            </h1>
            <p className="mt-2 text-lg text-neutral-400">
              Adultxs e infancias · filtrá por día, profe y nivel
            </p>
          </div>

          {/* Filtros */}
          <div className="mb-8">
            <FilterChips
              filters={filters}
              options={filterOptions}
              onChange={setFilters}
            />
          </div>

          {/* Resultados */}
          <div className="mb-6">
            <p className="text-sm text-neutral-400">
              {filteredClasses.length === classes.length
                ? `Mostrando todas las ${classes.length} clases`
                : `Mostrando ${filteredClasses.length} de ${classes.length} clases`}
            </p>
          </div>

          {/* Grid de clases */}
          {filteredClasses.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredClasses.map((classItem) => {
                const teacher = teachers.find(
                  (t) => t.id === classItem.teacherId
                )
                if (!teacher) return null

                return (
                  <ClassCard
                    key={classItem.id}
                    classItem={classItem}
                    schedules={schedules}
                    teacher={teacher}
                  />
                )
              })}
            </div>
          ) : (
            <div className="py-12 text-center">
              <div className="mx-auto max-w-md">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-800">
                  <svg
                    className="h-8 w-8 text-neutral-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-medium text-white">
                  No hay clases con esos filtros
                </h3>
                <p className="mb-4 text-neutral-400">
                  Probá ajustando los filtros para encontrar lo que buscás.
                </p>
                <button
                  onClick={() => setFilters({})}
                  className="inline-flex items-center rounded-lg bg-linear-to-r from-violet-600 to-pink-600 px-4 py-2 text-white transition-all duration-200 hover:from-violet-700 hover:to-pink-700 focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none"
                >
                  Ver todas las clases
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
