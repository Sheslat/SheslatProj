import type { Evento } from '../../domain/Evento'
import type { EventoRepository } from '../../domain/EventoRepository'

export async function saveEvento(
  eventoRepository: EventoRepository,
  evento: Evento,
): Promise<void> {
  return await eventoRepository.save(evento)
}
