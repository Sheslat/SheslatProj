import { defineStore } from 'pinia';

export const useTableStore = defineStore('table', {
  state: () => ({
    dataTable: [],
    tableHeaders: []
  }),
  actions: {
    getTableData() {
        
    }
  },
  getters: {
  },
});
