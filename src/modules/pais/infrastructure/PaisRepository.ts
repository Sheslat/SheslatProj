import httpService from "@/plugins/http"
import type { Pais } from "../domain/Pais"
import type { PaisRepository } from "../domain/PaisRepository"


const ENTITY = 'pais'

export function createPaisRepository(): PaisRepository {
    return {
        getAll,
        save,
        get,
        remove,
        update
    }
}

async function getAll(): Promise<Pais[]> {
    const  { data } = await httpService.get(ENTITY)
    return data || []
}

async function save(pais: Pais): Promise<void> {
    await httpService.post(ENTITY, pais)
}

async function get(id: number): Promise<Pais>{
    const { data } = await httpService.get(`${ENTITY}/${id}`)
    return data || null
}
async function remove(id: number): Promise<void> {
    await httpService.delete(`${ENTITY}/${id}`)    
}

async function update(id: number, pais:Pais): Promise<Pais | null> {
    const  { data } = await httpService.put(`${ENTITY}/${id}`, pais)
    return data
}