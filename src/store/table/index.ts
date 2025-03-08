import { bestiaHeader } from '@/modules/bestia/domain/BestiaHeader'
import { createBestiaRepository } from '@/modules/bestia/infrastructure/BestiaRepository'
import { culturaHeader } from '@/modules/cultura/domain/CulturaHeader'
import { createCulturaRepository } from '@/modules/cultura/infrastructure/CulturaRepository'
import { eventoHeader } from '@/modules/evento/domain/EventoHeader'
import { createEventoRepository } from '@/modules/evento/infrastructure/EventoRepository'
import { lugarHeader } from '@/modules/lugar/domain/LugarHeader'
import { createLugarRepository } from '@/modules/lugar/infrastructure/LugarRepository'
import { paisHeader } from '@/modules/pais/domain/PaisHeader'
import { createPaisRepository } from '@/modules/pais/infrastructure/PaisRepository'
import { personajeHeader } from '@/modules/personaje/domain/PersonajeHeader'
import { createPersonajeRepository } from '@/modules/personaje/infrastructure/PersonajeRepository'
import { razaHeader } from '@/modules/raza/domain/RazaHeader'
import { createRazaRepository } from '@/modules/raza/infrastructure/RazaRepository'
import { type Entity } from '@/types/Entity'
import type { ServiceName } from '@/types/ServiceName'
import { defineStore } from 'pinia'

export interface DefaultInterface {
  save: () => Promise<void>
  remove: () => Promise<void>
  get: () => Promise<null>
  update: () => Promise<null>
  getAll: () => Promise<[]>
}

export const useTableStore = defineStore('table', {
  state: () => ({
    dataTable: [] as Entity[],
    tableHeaders: [] as { title: string; key: string }[],
    serviceName: 'default' as ServiceName,
    services: {
      personaje: createPersonajeRepository(),
      bestia: createBestiaRepository(),
      evento: createEventoRepository(),
      pais: createPaisRepository(),
      cultura: createCulturaRepository(),
      lugar: createLugarRepository(),
      raza: createRazaRepository(),
      default: {
        save: async () => {},
        remove: async () => {},
        get: async () => {
          return null
        },
        update: async () => {
          return null
        },
        getAll: async () => {
          return []
        },
      } as DefaultInterface,
    },
  }),
  actions: {
    setTableHeader() {
      switch (this.getServiceName) {
        case 'personaje':
          this.tableHeaders = personajeHeader
          break
        case 'bestia':
          this.tableHeaders = bestiaHeader
          break
        case 'pais':
          this.tableHeaders = paisHeader
          break
        case 'lugar':
          this.tableHeaders = lugarHeader
          break
        case 'evento':
          this.tableHeaders = eventoHeader
          break
        case 'raza':
          this.tableHeaders = razaHeader
          break
        case 'cultura':
          this.tableHeaders = culturaHeader
          break

        default:
          break
      }
    },
    async initTable() {
      if (this.getServiceName === 'default') return null
      const servicio = this.services[this.serviceName]
      const response = await servicio.getAll()
      this.setTableHeader()
      this.dataTable = response
    },
    setServiceName(serviceName: ServiceName) {
      this.serviceName = serviceName
    },
    async updateRow(item: Entity, index: number | null) {
      const { id } = item

      if (index === null) return
      this.dataTable[index] = item

      const servicio = this.services[this.serviceName]
      await servicio.update(id, item)
    },
    async createRow(item: Entity) {
      const servicio = this.services[this.serviceName]
      await servicio.save(item)
      const response = await servicio.getAll()
      this.dataTable = response
    },
  },
  getters: {
    getServiceName: state => state.serviceName,
    getDataTable: state => state.dataTable,
    getTableHeaders: state => state.tableHeaders,
  },
})
