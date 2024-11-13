import type { Pais } from "../../domain/Pais";
import type { PaisRepository } from "../../domain/PaisRepository";

export async function getAllPais(paisRepository: PaisRepository): Promise<Pais[] | null> {
    return paisRepository.getAll() || null
}