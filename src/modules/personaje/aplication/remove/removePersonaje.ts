import type { PersonajeRepository } from '../../domain/PersonajeRepository'

export async function removePersonaje(
  personajeRepository: PersonajeRepository,
  id: number,
): Promise<void> {
  return await personajeRepository.remove(id)
}
