import httpService from "@/plugins/http"
import type { Bestia } from "../domain/Bestia"
import type { BestiaRepository } from "../domain/BestiaRepository"



const ENTITY = 'bestia'

export function createBestiaRepository(): BestiaRepository {
    return {
        getAll,
        save,
        get,
        remove,
        update
    }
}

async function getAll(): Promise<Bestia[]> {
    const  { data } = await httpService.get(ENTITY)
    return data || null
}

async function save(bestia: Bestia): Promise<void> {
    await httpService.post(ENTITY, bestia)
}

async function get(id: number): Promise<Bestia>{
    const { data } = await httpService.get(`${ENTITY}/${id}`)
    return data || null
}
async function remove(id: number): Promise<void> {
    await httpService.delete(`${ENTITY}/${id}`)    
}

async function update(id: number, bestia:Bestia): Promise<Bestia | null> {
    const  { data } = await httpService.put(`${ENTITY}/${id}`, bestia)
    return data
}