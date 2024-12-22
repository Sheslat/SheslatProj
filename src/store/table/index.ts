import type { Bestia } from '@/modules/bestia/domain/Bestia'
import { bestiaHeader } from '@/modules/bestia/domain/BestiaHeader'
import { createBestiaRepository } from '@/modules/bestia/infrastructure/BestiaRepository'
import type { Cultura } from '@/modules/cultura/domain/Cultura'
import { culturaHeader } from '@/modules/cultura/domain/CulturaHeader'
import { createCulturaRepository } from '@/modules/cultura/infrastructure/CulturaRepository'
import type { Evento } from '@/modules/evento/domain/Evento'
import { eventoHeader } from '@/modules/evento/domain/EventoHeader'
import { createEventoRepository } from '@/modules/evento/infrastructure/EventoRepository'
import type { Lugar } from '@/modules/lugar/domain/Lugar'
import { lugarHeader } from '@/modules/lugar/domain/LugarHeader'
import { createLugarRepository } from '@/modules/lugar/infrastructure/LugarRepository'
import type { Pais } from '@/modules/pais/domain/Pais'
import { paisHeader } from '@/modules/pais/domain/PaisHeader'
import { createPaisRepository } from '@/modules/pais/infrastructure/PaisRepository'
import type { Personaje } from '@/modules/personaje/domain/Personaje'
import { personajeHeader } from '@/modules/personaje/domain/PersonajeHeader'
import { createPersonajeRepository } from '@/modules/personaje/infrastructure/PersonajeRepository'
import type { Raza } from '@/modules/raza/domain/Raza'
import { razaHeader } from '@/modules/raza/domain/RazaHeader'
import { createRazaRepository } from '@/modules/raza/infrastructure/RazaRepository'
import type { ServiceName } from '@/types/ServiceName'
import { defineStore } from 'pinia'

type Entity = Cultura | Personaje | Pais | Lugar | Evento | Raza | Bestia

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
  },
  getters: {
    getServiceName: state => state.serviceName,
    getDataTable: state => state.dataTable,
    getTableHeaders: state => state.tableHeaders,
  },
})
