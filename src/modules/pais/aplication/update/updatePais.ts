import type { Pais } from '../../domain/Pais'
import type { PaisRepository } from '../../domain/PaisRepository'

export async function updatePais(
  paisRepository: PaisRepository,
  id: number,
  pais: Pais,
): Promise<Pais | null> {
  return await paisRepository.update(id, pais)
}
