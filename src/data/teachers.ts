import type { Teacher } from '@/lib/types'

export const teachers: Teacher[] = [
  {
    id: 'team',
    name: 'Equipo Chivilcoy',
    specialties: ['Arte', 'Teatro', 'Música'],
  },
  {
    id: 'musica',
    name: 'Docente de Música',
    specialties: ['Música', 'Canto', 'Guitarra', 'Teclado'],
  },
  {
    id: 'danza',
    name: 'Docente de Danza',
    specialties: [
      'Danza',
      'Expresión Corporal',
      'Bachata',
      'Flamenco',
      'Salsa',
      'Folclórica',
    ],
  },
  {
    id: 'teatro',
    name: 'Docente de Teatro',
    specialties: ['Teatro', 'Actuación', 'Improvisación'],
  },
  {
    id: 'yoga',
    name: 'Docente de Yoga',
    specialties: ['Yoga', 'Postural', 'Flow', 'Infantil'],
  },
  {
    id: 'artes-marciales',
    name: 'Instructor de Bujinkan',
    specialties: ['Artes Marciales', 'Bujinkan', 'Defensa Personal'],
  },
]
