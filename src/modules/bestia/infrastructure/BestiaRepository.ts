import httpService from '@/plugins/http'
import type { Bestia } from '../domain/Bestia'
import type { BestiaRepository } from '../domain/BestiaRepository'

const ENTITY = 'bestias'

export function createBestiaRepository(): BestiaRepository {
  return {
    getAll,
    save,
    get,
    remove,
    update,
  }
}

async function getAll(): Promise<Bestia[]> {
  const {
    data: { data },
  } = await httpService.get(`${ENTITY}?populate[0]=pais`)
  return data || []
}

async function save(
  bestia: Omit<Bestia, 'pais' | 'documentId'> & { pais: string },
): Promise<void> {
  const payload = {
    data: { ...bestia },
  }
  await httpService.post(ENTITY, payload)
}

async function get(id: string): Promise<Bestia> {
  const {
    data: { data },
  } = await httpService.get(`${ENTITY}/${id}`)
  return data || null
}
async function remove(id: string): Promise<void> {
  await httpService.delete(`${ENTITY}/${id}`)
}

async function update(
  id: string,
  bestia: Omit<Bestia, 'pais' | 'documentId'> & { pais: string },
): Promise<Bestia | null> {
  const payload = {
    data: { ...bestia },
  }
  const {
    data: { data },
  } = await httpService.put(`${ENTITY}/${id}`, payload)
  return data
}
