import type { Raza } from "../../domain/Raza";
import type { RazaRepository } from "../../domain/RazaRepository";

export async function getAllRaza(razaRepository: RazaRepository): Promise<Raza[] | null> {
    return razaRepository.getAll() || null
}