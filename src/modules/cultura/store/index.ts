import { createCulturaRepository } from '@/modules/cultura/infrastructure/CulturaRepository'
import { defineStore } from 'pinia'
import type { Cultura } from '../domain/Cultura'
import { culturaHeader } from '../domain/CulturaHeader'

export const useCulturaStore = defineStore('table', {
  state: () => ({
    dataTable: [] as Cultura[],
    tableHeaders: culturaHeader,
    serviceName: 'cultura',
    repository: createCulturaRepository(),
  }),
  actions: {
    async initTable() {
      const response = await this.repository.getAll()
      this.dataTable = response
    },
    async updateRow(item: Cultura, index: number | null) {
      if (index === null || !item.id) return

      const { id } = item
      this.dataTable[index] = item
      await this.repository.update(id, item)
    },
    async createRow(item: Cultura) {
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
