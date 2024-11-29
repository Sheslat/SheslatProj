import httpService from "@/plugins/http"
import type { Evento } from "../domain/Evento"
import type { EventoRepository } from "../domain/EventoRepository"



const ENTITY = 'evento'

export function createEventoRepository(): EventoRepository {
    return {
        getAll,
        save,
        get,
        remove,
        update
    }
}

async function getAll(): Promise<Evento[]> {
    const  { data } = await httpService.get(ENTITY)
    return data || []
}

async function save(evento: Evento): Promise<void> {
    await httpService.post(ENTITY, evento)
}

async function get(id: number): Promise<Evento>{
    const { data } = await httpService.get(`${ENTITY}/${id}`)
    return data || null
}
async function remove(id: number): Promise<void> {
    await httpService.delete(`${ENTITY}/${id}`)    
}

async function update(id: number, evento:Evento): Promise<Evento | null> {
    const  { data } = await httpService.put(`${ENTITY}/${id}`, evento)
    return data
}