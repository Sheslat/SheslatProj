import type { LugarRepository } from '../../domain/LugarRepository'

export async function removeLugar(
  lugarRepository: LugarRepository,
  id: number,
): Promise<void> {
  return lugarRepository.remove(id)
}
