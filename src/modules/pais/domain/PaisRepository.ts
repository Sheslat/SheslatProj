import type { Pais } from './Pais'

export interface PaisRepository {
    save: (pais: Pais) => Promise<void>
    remove: (id: number) => Promise<void>
    get: (id: number) => Promise<Pais | null>
    update: (id: number, pais: Pais) => Promise<Pais | null>
    getAll: () => Promise<Pais[] | []>
}