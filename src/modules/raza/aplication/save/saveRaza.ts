import type { Raza } from '../../domain/Raza'
import type { RazaRepository } from '../../domain/RazaRepository'

export async function saveRaza(
  razaRepository: RazaRepository,
  raza: Raza,
): Promise<void> {
  return await razaRepository.save(raza)
}
