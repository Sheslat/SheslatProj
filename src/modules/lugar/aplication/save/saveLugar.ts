import type { Lugar } from '../../domain/Lugar'
import type { LugarRepository } from '../../domain/LugarRepository'

export async function saveLugar(
  lugarRepository: LugarRepository,
  lugar: Lugar,
): Promise<void> {
  return await lugarRepository.save(lugar)
}
