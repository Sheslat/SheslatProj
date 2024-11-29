import type { Lugar } from "./Lugar"


export interface LugarRepository {
    save: (lugar: Lugar) => Promise<void>
    remove: (id: number) => Promise<void>
    get: (id: number) => Promise<Lugar | null>
    update: (id: number, lugar: Lugar) => Promise<Lugar | null>
    getAll: () => Promise<Lugar[] | []>
}