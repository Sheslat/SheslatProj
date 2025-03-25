<template>
  <v-form>
    <v-text-field v-model="nombreModified" label="Nombre"></v-text-field>
    <v-text-field v-model="descripcionModified" label="Descripcion"></v-text-field>
    <v-select
      v-model="paisModified"
      label="Pais"
      :items="paises"
      item-title="nombre"
      item-value="id"
    ></v-select>
  </v-form>
</template>
<script setup lang="ts">
import type { Pais } from '@/modules/pais/domain/Pais'
import { createPaisRepository } from '@/modules/pais/infrastructure/PaisRepository';
import { onMounted, ref } from 'vue'


const props = defineProps<{
  nombre: string
  descripcion: string
  pais: Pais
}>()

const nombreModified = ref('')
const descripcionModified = ref('')
const paisModified = ref({})
const paises = ref<Pais[] | []>([])

const paisRepository = createPaisRepository()



onMounted(() => {
  nombreModified.value = props.nombre
  descripcionModified.value = props.descripcion
  paisModified.value = props.pais

  paisRepository.getAll().then((data) => {
    paises.value = data
  })
})
</script>
