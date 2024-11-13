import type { Raza } from './Raza'

export interface RazaRepository {
    save: (raza: Raza) => Promise<void>
    remove: (id: number) => Promise<void>
    get: (id: number) => Promise<Raza | null>
    update: (id: number, raza: Raza) => Promise<Raza | null>
    getAll: () => Promise<Raza[] | null>
}