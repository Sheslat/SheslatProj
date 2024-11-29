<template>
  <v-container
    fluid
    class="d-flex align-center justify-center"
    style="height: 100vh"
  >
    <v-row class="fill-height" align="center" justify="center">
      <v-col cols="12" md="6" class="text-center">
        <TableView :serviceName="getServiceName"></TableView>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useTableStore } from '@/store/table'
import type { ServiceName } from '@/types/ServiceName'
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import TableView from './TableView.vue'
const route = useRoute()
const { getServiceName, setServiceName, initTable } = useTableStore()

watch(
  () => route.params.module,
  newServiceName => {
    // Asegúrate de que newServiceName sea un string válido de ServiceName
    const serviceName = Array.isArray(newServiceName)
      ? newServiceName[0] // Si es un array, toma el primer elemento
      : newServiceName // Si es un string, úsalo directamente

    // Crear un Set de los nombres de servicios válidos
    const validServiceNames = new Set<ServiceName>([
      'personaje',
      'bestia',
      'evento',
      'pais',
      'cultura',
      'lugar',
      'raza',
      'default',
    ])

    // Verificar si el valor de serviceName es uno de los valores válidos
    if (validServiceNames.has(serviceName as ServiceName)) {
      setServiceName(serviceName as ServiceName) // Asignar el serviceName si es válido
    } else {
      console.log(`${serviceName} no es un nombre de servicio válido.`) // Mensaje de error si no es válido
    }

    // Inicializar la tabla
    initTable()
  },
)
// import { createRazaRepository } from '@/modules/raza/infrastructure/RazaRepository';

// const razaRepository = createRazaRepository()
// console.log(razaRepository.getAll())
</script>
