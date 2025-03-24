import type { Cultura } from '@/modules/cultura/domain/Cultura'

export type Pais = {
  id: number
  nombre: string
  descripcion: string
  cultura: Cultura
}
