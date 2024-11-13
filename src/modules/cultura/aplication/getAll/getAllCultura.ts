import type { Cultura } from "../../domain/Cultura";
import type { CulturaRepository } from "../../domain/CulturaRepository";

export async function getAllCultura(culturaRepository: CulturaRepository): Promise<Cultura[] | null> {
    return culturaRepository.getAll() || null
}