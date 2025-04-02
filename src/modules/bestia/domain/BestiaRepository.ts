import type { Bestia } from './Bestia'

export interface BestiaRepository {
  save: (
    bestia: Omit<Bestia, 'pais' | 'documentId'> & { pais: string },
  ) => Promise<void>
  remove: (id: string) => Promise<void>
  get: (id: string) => Promise<Bestia | null>
  update: (
    id: string,
    bestia: Omit<Bestia, 'pais' | 'documentId'> & { pais: string },
  ) => Promise<Bestia | null>
  getAll: () => Promise<Bestia[] | []>
}
