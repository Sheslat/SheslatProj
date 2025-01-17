import type { Personaje } from '../../domain/Personaje'
import type { PersonajeRepository } from '../../domain/PersonajeRepository'

export async function savePersonaje(
  personajeRepository: PersonajeRepository,
  personaje: Personaje,
): Promise<void> {
  return await personajeRepository.save(personaje)
}
