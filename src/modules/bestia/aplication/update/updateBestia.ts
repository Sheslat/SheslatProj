import type { Bestia } from '../../domain/Bestia'
import type { BestiaRepository } from '../../domain/BestiaRepository'

export async function updateBestia(
  bestiaRepository: BestiaRepository,
  id: number,
  bestia: Bestia,
): Promise<Bestia | null> {
  return await bestiaRepository.update(id, bestia)
}
