import type { Pais } from "@/modules/pais/domain/Pais"


export interface Lugar {
    id: number
    nombre: string
    descripcion: string
    pais: Pais
}