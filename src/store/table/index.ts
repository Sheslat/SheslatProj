import { defineStore } from 'pinia';

export const useTableStore = defineStore('table', {
  state: () => ({
    servicesResponse: {},
    dataTable: [],
    tableHeaders: [],
    serviceName: ''
  }),
  actions: {
    setTableData(payload) {
      this.dataTable = payload     
    },
    setTableColumns(payload) {
      this.tableHeaders = payload
    },
    init() {
      const { data } = { data: {}}


    }
  },
  getters: {
    getServiceName: (state) => state.serviceName
  },
});
