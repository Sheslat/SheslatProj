import type { Pais } from '@/modules/pais/domain/Pais'

export type Bestia = {
  id: number
  nombre: string
  descripcion: string
  pais: Pais
}
