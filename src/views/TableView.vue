<template>
  <div>tablas {{ serviceName }}</div>

  <v-data-table :headers="header" :items="data"> </v-data-table>
</template>

<script lang="ts" setup>
import { useTableStore } from '@/store/table'
import { computed } from 'vue'
// Usamos el store directamente para mantener la reactividad
const tableStore = useTableStore()

// Desestructuración reactiva de los getters
const serviceName = computed(() => tableStore.getServiceName)
const header = computed(() => tableStore.getTableHeaders)

const data = computed(() => tableStore.getDataTable)
</script>

<style>
/* Aplicar estilos globales sin scoped */
.v-table__wrapper thead th {
  font-weight: 900 !important; /* Aseguramos que el estilo se aplique con mayor prioridad */
}
</style>
