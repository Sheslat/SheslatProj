import type { RazaRepository } from '../../domain/RazaRepository'

export async function removeRaza(
  razaRepository: RazaRepository,
  id: number,
): Promise<void> {
  return await razaRepository.remove(id)
}
