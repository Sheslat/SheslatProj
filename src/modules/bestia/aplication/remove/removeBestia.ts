import type { BestiaRepository } from '../../domain/BestiaRepository'

export async function removeBestia(
  bestiaRepository: BestiaRepository,
  id: number,
): Promise<void> {
  return await bestiaRepository.remove(id)
}
