import { Colony } from '@/lib/types'

export const colony: Colony[] = [
  {
    id: '1',
    season: 'verano',
    dates: [
      '2024-12-20',
      '2024-12-27',
      '2025-01-03',
      '2025-01-10',
      '2025-01-17',
      '2025-01-24',
      '2025-01-31',
    ],
    ages: '4 a 12 años',
    description:
      'Colonia de verano con actividades recreativas, deportivas y artísticas en nuestro hermoso patio verde.',
    price: '$15.000/mes',
    schedule: 'Lunes a Viernes de 9:00 a 17:00',
    activities: [
      'Actividades deportivas',
      'Talleres de arte',
      'Juegos teatrales',
      'Música y canto',
      'Natación (piscina externa)',
      'Excursiones',
      'Almuerzo incluido',
    ],
    images: ['/verano.jpeg', '/patiopro.jpg', '/arte-juego.jpg'],
  },
  {
    id: '2',
    season: 'invierno',
    dates: [
      '2025-07-15',
      '2025-07-22',
      '2025-07-29',
      '2025-08-05',
      '2025-08-12',
      '2025-08-19',
    ],
    ages: '4 a 12 años',
    description:
      'Colonia de invierno con actividades indoor y outdoor adaptadas al clima invernal.',
    price: '$12.000/mes',
    schedule: 'Lunes a Viernes de 9:00 a 16:00',
    activities: [
      'Talleres de arte',
      'Teatro y expresión',
      'Música y danza',
      'Juegos de mesa',
      'Cocina para niños',
      'Lectura y cuentos',
      'Almuerzo incluido',
    ],
    images: ['/invierno.jpeg', '/teatro-infantil.jpeg', '/arte-juego.jpg'],
  },
]
