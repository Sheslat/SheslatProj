import type { Raza } from '../../domain/Raza'
import type { RazaRepository } from '../../domain/RazaRepository'

export async function updateRaza(
  razaRepository: RazaRepository,
  id: number,
  raza: Raza,
): Promise<Raza | null> {
  return await razaRepository.update(id, raza)
}
