/**
 * Tipos compartidos para el Centro Cultural Chivilcoy
 */

export type Audience = 'adultxs' | 'infancias'

export type ClassLevel = 'inic' | 'inter' | 'avanz'

export type RoomType = 'salon' | 'patio'

export type ColonySeason = 'verano' | 'invierno'

export interface Teacher {
  id: string
  name: string
  bioShort?: string
  avatar?: string
  specialties?: string[]
}

export interface Room {
  id: string
  name: string
  type: RoomType
  capacity?: number
  features?: string[]
  images?: string[]
  description?: string
}

export interface Class {
  id: string
  title: string
  audience: Audience
  level?: ClassLevel
  description?: string
  teacherId: string
  images?: string[]
  discipline?: string
  requirements?: string[]
  price?: string
}

export interface ClassSchedule {
  id: string
  classId: string
  weekday: 0 | 1 | 2 | 3 | 4 | 5 | 6 // 0 = domingo, 1 = lunes, etc.
  start: string // formato HH:mm
  end: string // formato HH:mm
  spots?: number
  available?: boolean
}

export interface Event {
  id: string
  title: string
  dateISO: string
  roomId?: string
  description?: string
  price?: string
  capacity?: number
  image?: string
}

export interface Colony {
  id: string
  season: ColonySeason
  dates: string[]
  ages: string
  description?: string
  images?: string[]
  price?: string
  schedule?: string
  activities?: string[]
}


