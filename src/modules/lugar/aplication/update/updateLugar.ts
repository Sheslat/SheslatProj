import type { Lugar } from '../../domain/Lugar'
import type { LugarRepository } from '../../domain/LugarRepository'

export async function updateLugar(
  paisRepository: LugarRepository,
  id: number,
  lugar: Lugar,
): Promise<Lugar | null> {
  return await paisRepository.update(id, lugar)
}
