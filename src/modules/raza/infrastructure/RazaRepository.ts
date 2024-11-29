import httpService from "@/plugins/http"
import type { Raza } from "../domain/Raza"
import type { RazaRepository } from "../domain/RazaRepository"


const ENTITY = 'raza'

export function createRazaRepository(): RazaRepository {
    return {
        getAll,
        save,
        get,
        remove,
        update
    }
}

async function getAll(): Promise<Raza[]> {
    const  { data } = await httpService.get(ENTITY)
    return data || []
}

async function save(raza: Raza): Promise<void> {
    await httpService.post(ENTITY, raza)
}

async function get(id: number): Promise<Raza>{
    const { data } = await httpService.get(`${ENTITY}/${id}`)
    return data || null
}
async function remove(id: number): Promise<void> {
    await httpService.delete(`${ENTITY}/${id}`)    
}

async function update(id: number, raza:Raza): Promise<Raza | null> {
    const  { data } = await httpService.put(`${ENTITY}/${id}`, raza)
    return data
}