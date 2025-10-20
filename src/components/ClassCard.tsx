import { Class, ClassSchedule, Teacher } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'

interface ClassCardProps {
  classItem: Class
  schedules: ClassSchedule[]
  teacher: Teacher
}

export default function ClassCard({
  classItem,
  schedules,
  teacher,
}: ClassCardProps) {
  const classSchedules = schedules.filter(
    (schedule) => schedule.classId === classItem.id
  )

  const weekdayLabels = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']

  const levelLabels = {
    inic: 'Inicial',
    inter: 'Intermedio',
    avanz: 'Avanzado',
  }

  const audienceLabels = {
    adultxs: 'Adultxs',
    infancias: 'Infancias',
  }

  const getScheduleChips = () => {
    if (classSchedules.length === 0) return null

    return (
      <div className="mt-2 flex flex-wrap gap-1">
        {classSchedules.map((schedule) => (
          <span
            key={schedule.id}
            className="rounded-md border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs text-neutral-300"
          >
            {weekdayLabels[schedule.weekday]} {schedule.start}
          </span>
        ))}
      </div>
    )
  }

  const mainImage = classItem.images?.[0] || '/placeholder-class.jpg'

  return (
    <div className="group overflow-hidden rounded-lg border border-white/10 bg-neutral-900 transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-violet-500/10">
      {/* Imagen */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={mainImage}
          alt={`Imagen de la clase ${classItem.title}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="rounded-full bg-linear-to-r from-violet-600 to-pink-600 px-2 py-1 text-xs font-medium text-white">
            {audienceLabels[classItem.audience]}
          </span>
        </div>
        {classItem.level && (
          <div className="absolute top-3 right-3">
            <span className="rounded-full bg-neutral-800/90 px-2 py-1 text-xs font-medium text-neutral-200">
              {levelLabels[classItem.level]}
            </span>
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-4">
        <div className="space-y-3">
          {/* Título y disciplina */}
          <div>
            <h3 className="text-lg font-semibold text-white transition-colors duration-200 group-hover:text-violet-300">
              {classItem.title}
            </h3>
            {classItem.discipline && (
              <p className="mt-1 text-sm text-neutral-400">
                {classItem.discipline}
              </p>
            )}
          </div>

          {/* Docente */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-r from-violet-600 to-pink-600">
              <span className="text-xs font-medium text-white">
                {teacher.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')
                  .slice(0, 2)}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-200">
                {teacher.name}
              </p>
              {teacher.specialties && (
                <p className="text-xs text-neutral-400">
                  {teacher.specialties.slice(0, 2).join(', ')}
                </p>
              )}
            </div>
          </div>

          {/* Horarios */}
          {getScheduleChips()}

          {/* Precio */}
          {classItem.price && (
            <p className="text-sm font-medium text-violet-400">
              {classItem.price}
            </p>
          )}

          {/* Descripción corta */}
          {classItem.description && (
            <p className="line-clamp-2 text-sm text-neutral-400">
              {classItem.description}
            </p>
          )}
        </div>

        {/* CTA */}
        <div className="mt-4 border-t border-neutral-800 pt-4">
          <Link
            href={`/clases/${classItem.id}`}
            className="inline-flex w-full items-center justify-center rounded-lg bg-linear-to-r from-violet-600 to-pink-600 px-4 py-2 text-white transition-all duration-200 hover:from-violet-700 hover:to-pink-700 focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:outline-none"
          >
            Ver detalle
            <svg
              className="ml-2 h-4 w-4"
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
}
