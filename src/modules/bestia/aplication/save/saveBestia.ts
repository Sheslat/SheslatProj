import type { Bestia } from '../../domain/Bestia'
import type { BestiaRepository } from '../../domain/BestiaRepository'

export async function saveBestia(
  bestiaRepository: BestiaRepository,
  bestia: Bestia,
): Promise<void> {
  return await bestiaRepository.save(bestia)
}
