<template>
  <v-container
    fluid
    class="d-flex align-center justify-center"
    style="height: 100vh"
  >
    <v-row class="fill-height" align="center" justify="center">
      <v-col cols="12" md="6" class="text-center">
        <TableView :serviceName="serviceName"></TableView>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import TableView from './TableView.vue'
const route = useRoute()
const serviceName = ref(route.params.module)

watch(
  () => route.params.module,
  newServiceName => {
    serviceName.value = newServiceName
  },
)
// import { createRazaRepository } from '@/modules/raza/infrastructure/RazaRepository';

// const razaRepository = createRazaRepository()
// console.log(razaRepository.getAll())
</script>
