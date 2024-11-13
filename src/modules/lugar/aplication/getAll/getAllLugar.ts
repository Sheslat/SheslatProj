import type { Lugar } from "../../domain/Lugar";
import type { LugarRepository } from "../../domain/LugarRepository";


export async function getAllLugar(lugarRepository: LugarRepository): Promise<Lugar[] | null> {
    return lugarRepository.getAll() || null
}