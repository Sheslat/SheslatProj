import type { Evento } from "./Evento"

export interface EventoRepository {
    save: (evento: Evento) => Promise<void>
    remove: (id: number) => Promise<void>
    get: (id: number) => Promise<Evento | null>
    update: (id: number, evento: Evento) => Promise<Evento | null>
    getAll: () => Promise<Evento[] | null>
}