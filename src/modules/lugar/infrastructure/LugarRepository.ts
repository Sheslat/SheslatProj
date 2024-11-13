import httpService from "@/plugins/http"
import type { Lugar } from "../domain/Lugar"
import type { LugarRepository } from "../domain/LugarRepository"



const ENTITY = 'lugar'

export function createLugarRepository(): LugarRepository {
    return {
        getAll,
        save,
        get,
        remove,
        update
    }
}

async function getAll(): Promise<Lugar[]> {
    const  { data } = await httpService.get(ENTITY)
    return data || null
}

async function save(lugar: Lugar): Promise<void> {
    await httpService.post(ENTITY, lugar)
}

async function get(id: number): Promise<Lugar>{
    const { data } = await httpService.get(`${ENTITY}/${id}`)
    return data || null
}
async function remove(id: number): Promise<void> {
    await httpService.delete(`${ENTITY}/${id}`)    
}

async function update(id: number, lugar:Lugar): Promise<Lugar | null> {
    const  { data } = await httpService.put(`${ENTITY}/${id}`, lugar)
    return data
}