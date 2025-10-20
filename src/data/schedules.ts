import { ClassSchedule } from '@/lib/types'

export const schedules: ClassSchedule[] = [
  // Danza Contemporánea (adultxs)
  {
    id: '1',
    classId: '1',
    weekday: 1, // Lunes
    start: '19:00',
    end: '20:30',
    spots: 15,
    available: true,
  },
  {
    id: '2',
    classId: '1',
    weekday: 3, // Miércoles
    start: '19:00',
    end: '20:30',
    spots: 12,
    available: true,
  },

  // Teatro para Adultos
  {
    id: '3',
    classId: '2',
    weekday: 2, // Martes
    start: '18:30',
    end: '20:00',
    spots: 20,
    available: true,
  },
  {
    id: '4',
    classId: '2',
    weekday: 4, // Jueves
    start: '18:30',
    end: '20:00',
    spots: 18,
    available: true,
  },

  // Danza Infantil
  {
    id: '5',
    classId: '3',
    weekday: 1, // Lunes
    start: '17:00',
    end: '18:00',
    spots: 12,
    available: true,
  },
  {
    id: '6',
    classId: '3',
    weekday: 3, // Miércoles
    start: '17:00',
    end: '18:00',
    spots: 10,
    available: true,
  },

  // Juegos Teatrales
  {
    id: '7',
    classId: '4',
    weekday: 2, // Martes
    start: '17:30',
    end: '18:30',
    spots: 15,
    available: true,
  },
  {
    id: '8',
    classId: '4',
    weekday: 5, // Viernes
    start: '17:30',
    end: '18:30',
    spots: 12,
    available: true,
  },

  // Canto y Guitarra
  {
    id: '9',
    classId: '5',
    weekday: 2, // Martes
    start: '19:30',
    end: '21:00',
    spots: 8,
    available: true,
  },
  {
    id: '10',
    classId: '5',
    weekday: 4, // Jueves
    start: '19:30',
    end: '21:00',
    spots: 6,
    available: true,
  },

  // Yoga y Relajación
  {
    id: '11',
    classId: '6',
    weekday: 1, // Lunes
    start: '18:00',
    end: '19:00',
    spots: 20,
    available: true,
  },
  {
    id: '12',
    classId: '6',
    weekday: 3, // Miércoles
    start: '18:00',
    end: '19:00',
    spots: 18,
    available: true,
  },

  // Música para Niños
  {
    id: '13',
    classId: '7',
    weekday: 2, // Martes
    start: '16:30',
    end: '17:30',
    spots: 10,
    available: true,
  },
  {
    id: '14',
    classId: '7',
    weekday: 5, // Viernes
    start: '16:30',
    end: '17:30',
    spots: 8,
    available: true,
  },

  // Jazz Dance
  {
    id: '15',
    classId: '8',
    weekday: 4, // Jueves
    start: '20:00',
    end: '21:30',
    spots: 10,
    available: true,
  },
  {
    id: '16',
    classId: '8',
    weekday: 5, // Viernes
    start: '19:00',
    end: '20:30',
    spots: 8,
    available: true,
  },
]


