import type { PaisRepository } from '../../domain/PaisRepository'

export async function removePais(
  paisRepository: PaisRepository,
  id: number,
): Promise<void> {
  return await paisRepository.remove(id)
}
