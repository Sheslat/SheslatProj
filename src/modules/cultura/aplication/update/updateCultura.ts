import type { Cultura } from '../../domain/Cultura'
import type { CulturaRepository } from '../../domain/CulturaRepository'

export async function updateCultura(
  culturaRepository: CulturaRepository,
  id: number,
  cultura: Cultura,
): Promise<Cultura | null> {
  return await culturaRepository.update(id, cultura)
}
