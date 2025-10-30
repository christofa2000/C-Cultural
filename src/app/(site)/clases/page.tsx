'use client'

import AudienceFilter from '@/components/AudienceFilter'
import ClassCard from '@/components/ClassCard'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { classes } from '@/data/classes'
import { schedules } from '@/data/schedules'
import { teachers } from '@/data/teachers'
import { Audience } from '@/lib/types'
import { useMemo, useState } from 'react'

export default function ClassesPage() {
  const [selectedAudience, setSelectedAudience] = useState<Audience | null>(
    null
  )

  // Filtrar clases según la audiencia seleccionada
  const filteredClasses = useMemo(() => {
    if (!selectedAudience) {
      return classes
    }

    return classes.filter(
      (classItem) => classItem.audience === selectedAudience
    )
  }, [selectedAudience])

  return (
    <>
      <Header />
      <main className="bg-background text-foreground min-h-screen">
        <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 bg-linear-to-r from-violet-400 to-violet-300 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Nuestras Clases
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
              Descubrí nuestras clases de danza, teatro, música y yoga para
              todas las edades
            </p>
          </div>

          {/* Filtro de Audiencia */}
          <div className="mb-12">
            <AudienceFilter
              selectedAudience={selectedAudience}
              onAudienceChange={setSelectedAudience}
            />
          </div>

          {/* Resultados */}
          <div className="mb-8 text-center">
            <p className="text-muted-foreground text-lg">
              {selectedAudience
                ? `Mostrando ${filteredClasses.length} clases para ${selectedAudience === 'adultxs' ? 'adultxs' : 'infancias'}`
                : `Mostrando todas las ${classes.length} clases disponibles`}
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
                <div className="bg-muted mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                  <svg
                    className="text-muted-foreground h-8 w-8"
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
                <h3 className="text-foreground mb-2 text-lg font-medium">
                  No hay clases con esos filtros
                </h3>
                <p className="text-muted-foreground mb-4">
                  Probá ajustando los filtros para encontrar lo que buscás.
                </p>
                <button
                  onClick={() => setSelectedAudience(null)}
                  className="inline-flex items-center rounded-lg bg-linear-to-r from-violet-600 to-violet-500 px-6 py-3 text-white transition-all duration-200 hover:from-violet-700 hover:to-violet-600 focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none"
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
