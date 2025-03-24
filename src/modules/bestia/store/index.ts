import { bestiaHeader } from '@/modules/bestia/domain/BestiaHeader'
import { createBestiaRepository } from '@/modules/bestia/infrastructure/BestiaRepository'
import { defineStore } from 'pinia'
import type { Bestia } from '../domain/Bestia'

export const useBestiaStore = defineStore('table', {
  state: () => ({
    dataTable: [] as Bestia[],
    tableHeaders: bestiaHeader,
    serviceName: 'bestia',
    repository: createBestiaRepository(),
  }),
  actions: {
    async initTable() {
      const response = await this.repository.getAll()
      this.dataTable = response
    },
    async updateRow(item: Bestia, index: number | null) {
      if (index === null || !item.id) return

      const { id } = item
      this.dataTable[index] = item
      await this.repository.update(id, item)
    },
    async createRow(item: Bestia) {
      await this.repository.save(item)
      this.initTable()
    },
    async removeRow(id: number) {
      await this.repository.remove(id)
      this.initTable()
    },
  },
  getters: {
    getServiceName: state => state.serviceName,
    getDataTable: state => state.dataTable,
    getTableHeaders: state => state.tableHeaders,
  },
})
