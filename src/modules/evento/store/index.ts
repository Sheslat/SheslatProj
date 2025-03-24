import { defineStore } from 'pinia'
import type { Evento } from '../domain/Evento'
import { createEventoRepository } from '../infrastructure/EventoRepository'
import { eventoHeader } from '../domain/EventoHeader'

export const useEventoStore = defineStore('table', {
  state: () => ({
    dataTable: [] as Evento[],
    tableHeaders: eventoHeader,
    serviceName: 'evento',
    repository: createEventoRepository(),
  }),
  actions: {
    async initTable() {
      const response = await this.repository.getAll()
      this.dataTable = response
    },
    async updateRow(item: Evento, index: number | null) {
      if (index === null || !item.id) return

      const { id } = item
      this.dataTable[index] = item
      await this.repository.update(id, item)
    },
    async createRow(item: Evento) {
      await this.repository.save(item)
      const response = await this.repository.getAll()
      this.dataTable = response
    },
  },
  getters: {
    getServiceName: state => state.serviceName,
    getDataTable: state => state.dataTable,
    getTableHeaders: state => state.tableHeaders,
  },
})
