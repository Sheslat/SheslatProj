import type { Pais } from "@/modules/pais/domain/Pais"


export interface Bestia {
    id: number
    nombre: string
    descripcion: string
    pais: Pais
}