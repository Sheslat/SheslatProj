import type { Lugar } from "@/modules/lugar/domain/Lugar"


export interface Evento {
    id: number
    nombre: string
    descripcion: string
    lugar: Lugar
}