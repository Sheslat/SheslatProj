import type { Lugar } from '@/modules/lugar/domain/Lugar'
import type { Raza } from '@/modules/raza/domain/Raza'

export interface Personaje {
  id?: number
  nombre: string
  edad: number
  descripcion: string
  raza: Raza
  lugarOrigen: Lugar
}
