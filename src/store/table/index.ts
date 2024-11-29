import type { Bestia } from '@/modules/bestia/domain/Bestia'
import { createBestiaRepository } from '@/modules/bestia/infrastructure/BestiaRepository'
import type { Cultura } from '@/modules/cultura/domain/Cultura'
import { createCulturaRepository } from '@/modules/cultura/infrastructure/CulturaRepository'
import type { Evento } from '@/modules/evento/domain/Evento'
import { createEventoRepository } from '@/modules/evento/infrastructure/EventoRepository'
import type { Lugar } from '@/modules/lugar/domain/Lugar'
import { createLugarRepository } from '@/modules/lugar/infrastructure/LugarRepository'
import type { Pais } from '@/modules/pais/domain/Pais'
import { createPaisRepository } from '@/modules/pais/infrastructure/PaisRepository'
import type { Personaje } from '@/modules/personaje/domain/Personaje'
import { createPersonajeRepository } from '@/modules/personaje/infrastructure/PersonajeRepository'
import type { Raza } from '@/modules/raza/domain/Raza'
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
    tableHeaders: [],
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
    // setTableData(payload) {
    //   this.dataTable = payload
    // },
    // setTableColumns(payload) {
    //   this.tableHeaders = payload
    // },
    async initTable() {
      if (this.getServiceName === 'default') return null
      const servicio = this.services[this.serviceName]
      const response = await servicio.getAll()
      this.dataTable = response
    },
    setServiceName(serviceName: ServiceName) {
      this.serviceName = serviceName
    },
  },
  getters: {
    getServiceName: state => state.serviceName,
    getDataTable: state => state.dataTable,
  },
})
