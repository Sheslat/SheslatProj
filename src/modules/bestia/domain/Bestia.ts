import type { Pais } from '@/modules/pais/domain/Pais'

export type Bestia = {
  documentId: string
  nombre: string
  descripcion: string
  pais: Pais
}
