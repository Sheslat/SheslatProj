import type { Evento } from '../../domain/Evento'
import type { EventoRepository } from '../../domain/EventoRepository'

export async function updateEvento(
  eventoRepository: EventoRepository,
  id: number,
  evento: Evento,
): Promise<Evento | null> {
  return await eventoRepository.update(id, evento)
}
