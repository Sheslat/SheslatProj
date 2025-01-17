import type { CulturaRepository } from '../../domain/CulturaRepository'

export async function removeCultura(
  culturaRepository: CulturaRepository,
  id: number,
): Promise<void> {
  return await culturaRepository.remove(id)
}
