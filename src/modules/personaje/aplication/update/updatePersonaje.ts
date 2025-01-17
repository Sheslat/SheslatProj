import type { Personaje } from '../../domain/Personaje'
import type { PersonajeRepository } from '../../domain/PersonajeRepository'

export async function updatePersonaje(
  personajeRepository: PersonajeRepository,
  id: number,
  personaje: Personaje,
): Promise<Personaje | null> {
  return await personajeRepository.update(id, personaje)
}
