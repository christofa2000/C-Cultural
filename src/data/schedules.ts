import type { ClassSchedule } from '@/lib/types'

export const schedules: ClassSchedule[] = [
  // ---------- INFANCIAS ----------
  // LUNES (1)
  {
    id: 'sc-inf-musica-canto-guitarra-teclado-lun',
    classId: 'inf-musica-canto-guitarra-teclado',
    weekday: 1,
    byAppointment: true,
    notes: 'Hora a convenir',
  },
  {
    id: 'sc-inf-teatro-infantil-lun-1730',
    classId: 'inf-teatro-infantil',
    weekday: 1,
    start: '17:30',
    end: '19:00',
    spots: 12,
  },

  // MARTES (2)
  {
    id: 'sc-inf-musica-canto-guitarra-teclado-mar',
    classId: 'inf-musica-canto-guitarra-teclado',
    weekday: 2,
    byAppointment: true,
    notes: 'Hora a convenir',
  },
  {
    id: 'sc-inf-danza-exp-corporal-mar-1730',
    classId: 'inf-danza-exp-corporal',
    weekday: 2,
    start: '17:30',
  },
  {
    id: 'sc-inf-urbano-kids-mar-1830',
    classId: 'inf-urbano-kids',
    weekday: 2,
    start: '18:30',
  },

  // MIÉRCOLES (3)
  {
    id: 'sc-inf-arte-y-juego-mie-1630',
    classId: 'inf-arte-y-juego',
    weekday: 3,
    start: '16:30',
  },
  {
    id: 'sc-inf-teatro-musica-mie-1745',
    classId: 'inf-teatro-musica',
    weekday: 3,
    start: '17:45',
  },

  // JUEVES (4)
  {
    id: 'sc-inf-musica-canto-guitarra-teclado-jue',
    classId: 'inf-musica-canto-guitarra-teclado',
    weekday: 4,
    byAppointment: true,
    notes: 'Hora a convenir',
  },
  {
    id: 'sc-inf-teatro-musica-jue-1645',
    classId: 'inf-teatro-musica',
    weekday: 4,
    start: '16:45',
    end: '18:00',
  },
  {
    id: 'sc-inf-danza-exp-corporal-jue-1700',
    classId: 'inf-danza-exp-corporal',
    weekday: 4,
    start: '17:00',
  },
  {
    id: 'sc-inf-danza-ritmica-jue-1800',
    classId: 'inf-danza-ritmica',
    weekday: 4,
    start: '18:00',
  },

  // VIERNES (5)
  {
    id: 'sc-inf-yoga-infantil-vie-1800',
    classId: 'inf-yoga-infantil',
    weekday: 5,
    start: '18:00',
  },

  // ---------- JÓVENES / ADULTXS ----------
  // LUNES (1)
  {
    id: 'sc-adu-yoga-postural-lun-1100',
    classId: 'adu-yoga-postural',
    weekday: 1,
    start: '11:00',
  },
  {
    id: 'sc-adu-musica-canto-guitarra-teclado-lun',
    classId: 'adu-musica-canto-guitarra-teclado',
    weekday: 1,
    byAppointment: true,
    notes: 'Hora a convenir',
  },
  {
    id: 'sc-adu-bachata-lun-1930',
    classId: 'adu-bachata-interm',
    weekday: 1,
    start: '19:30',
    end: '21:00',
    spots: 8,
  },

  // MARTES (2)
  {
    id: 'sc-adu-teatro-mar-1930',
    classId: 'adu-teatro-martes',
    weekday: 2,
    start: '19:30',
    end: '21:30',
    spots: 10,
  },

  // MIÉRCOLES (3)
  {
    id: 'sc-adu-baile-mov-mie-1030',
    classId: 'adu-baile-mov-adul-mayores',
    weekday: 3,
    start: '10:30',
  },
  {
    id: 'sc-adu-yoga-flow-mie-1900',
    classId: 'adu-yoga-flow',
    weekday: 3,
    start: '19:00',
  },

  // JUEVES (4)
  {
    id: 'sc-adu-musica-canto-guitarra-teclado-jue',
    classId: 'adu-musica-canto-guitarra-teclado',
    weekday: 4,
    byAppointment: true,
    notes: 'Hora a convenir',
  },
  {
    id: 'sc-adu-teatro-jue-2000',
    classId: 'adu-teatro-jueves',
    weekday: 4,
    start: '20:00',
    end: '22:00',
  },

  // VIERNES (5)
  {
    id: 'sc-adu-yoga-vie-1830',
    classId: 'adu-yoga-viernes',
    weekday: 5,
    start: '18:30',
  },
  {
    id: 'sc-adu-bujinkan-vie-2000',
    classId: 'adu-bujinkan',
    weekday: 5,
    start: '20:00',
  },

  // SÁBADO (6)
  {
    id: 'sc-adu-flamenco-sab-1500',
    classId: 'adu-flamenco',
    weekday: 6,
    start: '15:00',
    end: '16:30',
    spots: 6,
  },
  {
    id: 'sc-adu-salsa-sab-1700',
    classId: 'adu-salsa',
    weekday: 6,
    start: '17:00',
  },
  {
    id: 'sc-adu-danza-folclorica-sab-1830',
    classId: 'adu-danza-folclorica',
    weekday: 6,
    start: '18:30',
    end: '20:00',
  },
]
