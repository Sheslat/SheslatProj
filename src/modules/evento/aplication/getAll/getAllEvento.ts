import type { Evento } from "../../domain/Evento";
import type { EventoRepository } from "../../domain/EventoRepository";


export async function getAllEvento(eventoRepository: EventoRepository): Promise<Evento[] | null> {
    return eventoRepository.getAll() || null
}