import type { Pais } from '../../domain/Pais'
import type { PaisRepository } from '../../domain/PaisRepository'

export async function savePais(
  paisRepository: PaisRepository,
  pais: Pais,
): Promise<void> {
  return await paisRepository.save(pais)
}
