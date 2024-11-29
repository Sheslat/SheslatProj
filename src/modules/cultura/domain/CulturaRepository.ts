import type { Cultura } from './Cultura'

export interface CulturaRepository {
    save: (cultura: Cultura) => Promise<void>
    remove: (id: number) => Promise<void>
    get: (id: number) => Promise<Cultura | null>
    update: (id: number, cultura: Cultura) => Promise<Cultura | null>
    getAll: () => Promise<Cultura[] | []>
}