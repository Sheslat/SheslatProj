import type { Cultura } from '../../domain/Cultura'
import type { CulturaRepository } from '../../domain/CulturaRepository'

export async function saveCultura(
  culturaRepository: CulturaRepository,
  cultura: Cultura,
): Promise<void> {
  return await culturaRepository.save(cultura)
}
