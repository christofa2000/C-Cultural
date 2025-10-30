/**
 * Helpers para generar enlaces de WhatsApp con mensajes prellenados
 * según las especificaciones del Centro Cultural Chivilcoy
 */

import { WHATSAPP_PHONE } from './constants'

/**
 * Construye un enlace de WhatsApp para inscripción a clases
 */
export function buildClassEnroll(params: {
  title: string
  day: string
  time: string
  studentName?: string
  studentAge?: string
}): string {
  const {
    title,
    day,
    time,
    studentName = '[Tu nombre]',
    studentAge = '[Tu edad]',
  } = params

  const message = `Hola, quiero inscribirme a ${title} el ${day} a las ${time}. Mi nombre es ${studentName} y tengo ${studentAge} años.`

  return buildWhatsAppLink(message)
}

/**
 * Construye un enlace de WhatsApp para pre-inscripción a colonia
 */
export function buildColonyPreEnroll(params: {
  kidName?: string
  age?: string
  season: 'verano' | 'invierno'
}): string {
  const { kidName = '[Nombre del menor]', age = '[Edad]', season } = params

  const message = `Hola, quiero pre-inscribir a ${kidName}, edad ${age}, para la colonia de ${season}.`

  return buildWhatsAppLink(message)
}

/**
 * Construye un enlace de WhatsApp para consulta/reserva de salón
 */
export function buildRoomBooking(params: {
  date?: string
  time?: string
  activity?: string
}): string {
  const {
    date = '[Fecha]',
    time = '[Horario]',
    activity = '[Actividad]',
  } = params

  const message = `Hola, quiero reservar el salón el ${date} a las ${time}, actividad: ${activity}. ¿Disponibilidad y valor?`

  return buildWhatsAppLink(message)
}

/**
 * Construye un enlace de WhatsApp genérico para consultas generales
 */
export function buildGeneralInquiry(message: string): string {
  return buildWhatsAppLink(message)
}

/**
 * Construye el enlace de WhatsApp base con el mensaje URL-encoded
 */
function buildWhatsAppLink(message: string): string {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`
}

/**
 * Utilidad para abrir WhatsApp en una nueva ventana
 */
export function openWhatsApp(message: string): void {
  const link = buildWhatsAppLink(message)
  if (typeof window !== 'undefined') {
    window.open(link, '_blank', 'noopener,noreferrer')
  }
}

/**
 * Tipos para los parámetros de los helpers
 */
export interface ClassEnrollParams {
  title: string
  day: string
  time: string
  studentName?: string
  studentAge?: string
}

export interface ColonyPreEnrollParams {
  kidName?: string
  age?: string
  season: 'verano' | 'invierno'
}

export interface RoomBookingParams {
  date?: string
  time?: string
  activity?: string
}
