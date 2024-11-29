import type { Personaje } from "./Personaje"


export interface PersonajeRepository {
    save: (personaje: Personaje) => Promise<void>
    remove: (id: number) => Promise<void>
    get: (id: number) => Promise<Personaje | null>
    update: (id: number, personaje: Personaje) => Promise<Personaje | null>
    getAll: () => Promise<Personaje[] | []>
}