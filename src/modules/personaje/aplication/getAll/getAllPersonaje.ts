import type { Personaje } from "../../domain/Personaje";
import type { PersonajeRepository } from "../../domain/PersonajeRepository";


export async function getAllPersonaje(personajeRepository: PersonajeRepository): Promise<Personaje[] | null> {
    return personajeRepository.getAll() || null
}