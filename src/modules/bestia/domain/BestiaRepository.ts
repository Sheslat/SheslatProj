import type { Bestia } from "./Bestia"


export interface BestiaRepository {
    save: (bestia: Bestia) => Promise<void>
    remove: (id: number) => Promise<void>
    get: (id: number) => Promise<Bestia | null>
    update: (id: number, bestia: Bestia) => Promise<Bestia | null>
    getAll: () => Promise<Bestia[] | []>
}