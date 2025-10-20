import {
  buildClassEnroll,
  buildColonyPreEnroll,
  buildGeneralInquiry,
  buildRoomBooking,
} from '@/lib/whatsapp'
import { describe, expect, it } from 'vitest'

describe('WhatsApp Helpers', () => {
  describe('buildClassEnroll', () => {
    it('should build correct WhatsApp link for class enrollment', () => {
      const params = {
        title: 'Danza Contemporánea',
        day: 'Lunes',
        time: '19:00',
        studentName: 'María',
        studentAge: '25',
      }

      const result = buildClassEnroll(params)

      expect(result).toContain('wa.me/')
      expect(result).toContain('text=')
      expect(decodeURIComponent(result)).toContain('Danza Contemporánea')
      expect(decodeURIComponent(result)).toContain('Lunes')
      expect(decodeURIComponent(result)).toContain('19:00')
      expect(decodeURIComponent(result)).toContain('María')
      expect(decodeURIComponent(result)).toContain('25')
    })

    it('should use default values when optional params are not provided', () => {
      const params = {
        title: 'Teatro',
        day: 'Martes',
        time: '18:30',
      }

      const result = buildClassEnroll(params)

      expect(decodeURIComponent(result)).toContain('[Tu nombre]')
      expect(decodeURIComponent(result)).toContain('[Tu edad]')
    })
  })

  describe('buildColonyPreEnroll', () => {
    it('should build correct WhatsApp link for colony pre-enrollment', () => {
      const params = {
        kidName: 'Juan',
        age: '8',
        season: 'verano' as const,
      }

      const result = buildColonyPreEnroll(params)

      expect(result).toContain('wa.me/')
      expect(result).toContain('text=')
      expect(decodeURIComponent(result)).toContain('Juan')
      expect(decodeURIComponent(result)).toContain('8')
      expect(decodeURIComponent(result)).toContain('verano')
    })

    it('should work for winter season', () => {
      const params = {
        season: 'invierno' as const,
      }

      const result = buildColonyPreEnroll(params)

      expect(decodeURIComponent(result)).toContain('invierno')
    })
  })

  describe('buildRoomBooking', () => {
    it('should build correct WhatsApp link for room booking', () => {
      const params = {
        date: '15/12/2024',
        time: '14:00',
        activity: 'Ensayo de teatro',
      }

      const result = buildRoomBooking(params)

      expect(result).toContain('wa.me/')
      expect(result).toContain('text=')
      expect(decodeURIComponent(result)).toContain('15/12/2024')
      expect(decodeURIComponent(result)).toContain('14:00')
      expect(decodeURIComponent(result)).toContain('Ensayo de teatro')
    })
  })

  describe('buildGeneralInquiry', () => {
    it('should build correct WhatsApp link for general inquiry', () => {
      const message = 'Hola, me interesa conocer más sobre las clases'

      const result = buildGeneralInquiry(message)

      expect(result).toContain('wa.me/')
      expect(result).toContain('text=')
      expect(result).toContain(encodeURIComponent(message))
    })
  })

  describe('URL encoding', () => {
    it('should properly encode special characters in general inquiry', () => {
      const message = 'Hola! ¿Cómo estás? Me interesa la clase de danza.'

      const result = buildGeneralInquiry(message)

      expect(result).toContain(encodeURIComponent(message))
    })
  })
})
