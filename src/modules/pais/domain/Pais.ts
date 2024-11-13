import type { Cultura } from "@/modules/cultura/domain/Cultura"

export interface Pais {
    id: number
    nombre: string
    descripcion: string
    cultura: Cultura
}