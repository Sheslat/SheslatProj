import type { Cultura } from '@/modules/cultura/domain/Cultura'

export type Pais = {
  documentId: string
  nombre: string
  descripcion: string
  cultura: Cultura
}
