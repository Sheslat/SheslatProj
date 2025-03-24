import { defineStore } from 'pinia'
import type { Lugar } from '../domain/Lugar'
import { createLugarRepository } from '../infrastructure/LugarRepository'
import { lugarHeader } from '../domain/LugarHeader'

export const useLugarStore = defineStore('table', {
  state: () => ({
    dataTable: [] as Lugar[],
    tableHeaders: lugarHeader,
    serviceName: 'lugar',
    repository: createLugarRepository(),
  }),
  actions: {
    async initTable() {
      const response = await this.repository.getAll()
      this.dataTable = response
    },
    async updateRow(item: Lugar, index: number | null) {
      if (index === null || !item.id) return

      const { id } = item
      this.dataTable[index] = item
      await this.repository.update(id, item)
    },
    async createRow(item: Lugar) {
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
