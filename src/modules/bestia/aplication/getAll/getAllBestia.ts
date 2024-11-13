import type { Bestia } from "../../domain/Bestia";
import type { BestiaRepository } from "../../domain/BestiaRepository";


export async function getAllBestia(bestiaRepository: BestiaRepository): Promise<Bestia[] | null> {
    return bestiaRepository.getAll() || null
}