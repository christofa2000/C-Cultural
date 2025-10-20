import { Room } from '@/lib/types'

export const rooms: Room[] = [
  {
    id: '1',
    name: 'Salón Principal',
    type: 'salon',
    capacity: 30,
    features: [
      'Piso de madera',
      'Espejos completos',
      'Sistema de sonido',
      'Aire acondicionado',
      'Iluminación profesional',
    ],
    description:
      'Espacioso salón con piso de madera y espejos completos, ideal para clases de danza y teatro.',
    images: ['/salapro.jpg', '/sala.jpg'],
  },
  {
    id: '2',
    name: 'Patio Verde',
    type: 'patio',
    capacity: 50,
    features: [
      'Espacio al aire libre',
      'Césped natural',
      'Sombras naturales',
      'Mesas y sillas',
      'Acceso a baños',
    ],
    description:
      'Hermoso patio con césped natural, perfecto para actividades al aire libre y eventos.',
    images: ['/patiopro.jpg', '/patio3.jpg', '/arbol.jpg'],
  },
]
