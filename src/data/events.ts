import { Event } from '@/lib/types'

export const events: Event[] = [
  {
    id: '1',
    title: 'Muestra de Fin de Año',
    dateISO: '2024-12-15T19:00:00-03:00',
    roomId: '1',
    description:
      'Presentación de todas las clases con trabajos realizados durante el año.',
    price: 'Entrada libre',
    capacity: 100,
    image: '/salapro.jpg',
  },
  {
    id: '2',
    title: 'Taller de Improvisación',
    dateISO: '2024-11-20T18:00:00-03:00',
    roomId: '1',
    description:
      'Taller intensivo de improvisación teatral para todos los niveles.',
    price: '$3.000',
    capacity: 25,
    image: '/musica-teatro.jpeg',
  },
  {
    id: '3',
    title: 'Festival de Danza Infantil',
    dateISO: '2024-11-10T16:00:00-03:00',
    roomId: '2',
    description: 'Festival al aire libre con presentaciones de danza infantil.',
    price: 'Entrada libre',
    capacity: 200,
    image: '/danza-ritmica.jpeg',
  },
  {
    id: '4',
    title: 'Concierto Acústico',
    dateISO: '2024-12-01T20:00:00-03:00',
    roomId: '1',
    description: 'Concierto íntimo con alumnos de canto y guitarra.',
    price: '$2.500',
    capacity: 50,
    image: '/musica-teatro.jpeg',
  },
  {
    id: '5',
    title: 'Clase Abierta de Yoga',
    dateISO: '2024-11-25T18:00:00-03:00',
    roomId: '1',
    description: 'Clase gratuita de yoga para conocer la disciplina.',
    price: 'Gratis',
    capacity: 30,
    image: '/yoga.jpeg',
  },
  {
    id: '6',
    title: 'Teatro para Niños - Obra',
    dateISO: '2024-12-08T17:00:00-03:00',
    roomId: '1',
    description:
      'Presentación de la obra preparada por los alumnos de teatro infantil.',
    price: 'Entrada libre',
    capacity: 80,
    image:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
  },
]
