import httpService from "@/plugins/http"
import type { Personaje } from "../domain/Personaje"
import type { PersonajeRepository } from "../domain/PersonajeRepository"



const ENTITY = 'personaje'

export function createPersonajeRepository(): PersonajeRepository {
    return {
        getAll,
        save,
        get,
        remove,
        update
    }
}

async function getAll(): Promise<Personaje[]> {
    const  { data } = await httpService.get(ENTITY)
    return data || []
}

async function save(personaje: Personaje): Promise<void> {
    await httpService.post(ENTITY, personaje)
}

async function get(id: number): Promise<Personaje>{
    const { data } = await httpService.get(`${ENTITY}/${id}`)
    return data || null
}
async function remove(id: number): Promise<void> {
    await httpService.delete(`${ENTITY}/${id}`)    
}

async function update(id: number, personaje:Personaje): Promise<Personaje | null> {
    const  { data } = await httpService.put(`${ENTITY}/${id}`, personaje)
    return data
}