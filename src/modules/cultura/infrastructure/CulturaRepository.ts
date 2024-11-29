import httpService from "@/plugins/http"
import type { Cultura } from "../domain/Cultura"
import type { CulturaRepository } from "../domain/CulturaRepository"


const ENTITY = 'cultura'

export function createCulturaRepository(): CulturaRepository {
    return {
        getAll,
        save,
        get,
        remove,
        update
    }
}

async function getAll(): Promise<Cultura[]> {
    const  { data } = await httpService.get(ENTITY)
    return data || []
}

async function save(cultura: Cultura): Promise<void> {
    await httpService.post(ENTITY, cultura)
}

async function get(id: number): Promise<Cultura>{
    const { data } = await httpService.get(`${ENTITY}/${id}`)
    return data || null
}
async function remove(id: number): Promise<void> {
    await httpService.delete(`${ENTITY}/${id}`)    
}

async function update(id: number, cultura:Cultura): Promise<Cultura | null> {
    const  { data } = await httpService.put(`${ENTITY}/${id}`, cultura)
    return data
}