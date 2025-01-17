import type { EventoRepository } from '../../domain/EventoRepository'

export async function removeEvento(
  eventoRepository: EventoRepository,
  id: number,
): Promise<void> {
  return await eventoRepository.remove(id)
}
