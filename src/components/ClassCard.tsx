import {
  AUDIENCE_LABELS,
  LEVEL_LABELS,
  WEEKDAY_LABELS_SHORT,
} from '@/lib/constants'
import { Class, ClassSchedule, Teacher } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'

interface ClassCardProps {
  classItem: Class
  schedules: ClassSchedule[]
  teacher: Teacher
}

const ClassCard = memo(function ClassCard({
  classItem,
  schedules,
  teacher,
}: ClassCardProps) {
  const classSchedules = schedules.filter(
    (schedule) => schedule.classId === classItem.id
  )

  const getScheduleChips = () => {
    if (classSchedules.length === 0) return null

    return (
      <div className="mt-3 flex flex-wrap gap-2">
        {classSchedules.map((schedule) => (
          <span
            key={schedule.id}
            className="border-border bg-muted text-foreground rounded-lg border px-3 py-1.5 text-xs font-medium"
          >
            {WEEKDAY_LABELS_SHORT[schedule.weekday]} {schedule.start}
          </span>
        ))}
      </div>
    )
  }

  const mainImage = classItem.images?.[0] || '/placeholder-class.jpg'

  return (
    <div className="group border-border bg-card overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-md">
      {/* Imagen con proporción fija y centrado mejorado */}
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={mainImage}
          alt={`Imagen de la clase ${classItem.title}`}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          loading="lazy"
          priority={false}
        />

        {/* Badges con mejor contraste */}
        <div className="absolute top-3 left-3">
          <span className="rounded-full bg-linear-to-r from-violet-600 to-violet-500 px-3 py-1.5 text-xs font-semibold text-white shadow-md backdrop-blur-sm">
            {AUDIENCE_LABELS[classItem.audience]}
          </span>
        </div>
        {classItem.level && (
          <div className="absolute top-3 right-3">
            <span className="bg-muted text-foreground rounded-full px-3 py-1.5 text-xs font-semibold shadow-sm">
              {LEVEL_LABELS[classItem.level]}
            </span>
          </div>
        )}
      </div>

      {/* Contenido - siempre visible, sin movimiento */}
      <div className="p-5">
        <div className="space-y-3">
          {/* Título y disciplina - siempre visible */}
          <div>
            <h3 className="text-foreground text-lg font-semibold">
              {classItem.title}
            </h3>
            {classItem.discipline && (
              <p className="text-muted-foreground mt-1 text-sm">
                {classItem.discipline}
              </p>
            )}
          </div>

          {/* Docente */}
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-violet-600 to-violet-500 shadow-md">
              <span className="text-sm font-semibold text-white">
                {teacher.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)}
              </span>
            </div>
            <div>
              <p className="text-foreground text-sm font-semibold">
                {teacher.name}
              </p>
              {teacher.specialties && (
                <p className="text-muted-foreground text-xs">
                  {teacher.specialties.slice(0, 2).join(', ')}
                </p>
              )}
            </div>
          </div>

          {/* Horarios */}
          {getScheduleChips()}

          {/* Precio */}
          {classItem.price && (
            <p className="text-primary text-sm font-medium">
              {classItem.price}
            </p>
          )}

          {/* Descripción corta */}
          {classItem.description && (
            <p className="text-muted-foreground line-clamp-2 text-sm">
              {classItem.description}
            </p>
          )}
        </div>

        {/* CTA */}
        <div className="border-border mt-5 border-t pt-4">
          <Link
            href={`/clases/${classItem.id}`}
            className="inline-flex w-full items-center justify-center rounded-xl bg-linear-to-r from-violet-600 to-violet-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:from-violet-700 hover:to-violet-600 hover:shadow-lg hover:shadow-violet-500/25 focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none"
          >
            Ver detalle
            <svg
              className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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
      </div>
    </div>
  )
})

export default ClassCard
