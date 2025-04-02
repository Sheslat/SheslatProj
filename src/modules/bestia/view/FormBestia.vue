<template>
  <v-form>
    <v-text-field
      v-model="nombreModified"
      @input="emitChanges"
      label="Nombre"
    ></v-text-field>
    <v-text-field
      v-model="descripcionModified"
      label="Descripcion"
      @input="emitChanges"
    ></v-text-field>
    <v-select
      v-model="paisModified"
      label="Pais"
      :items="paises"
      item-title="nombre"
      item-value="documentId"
      @update:modelValue="emitChanges"
    ></v-select>
  </v-form>
</template>
<script setup lang="ts">
import type { Pais } from '@/modules/pais/domain/Pais'
import { createPaisRepository } from '@/modules/pais/infrastructure/PaisRepository'
import { onMounted, ref } from 'vue'

const props = defineProps<{
  nombre?: string
  descripcion?: string
  pais?: Pais
}>()

const emit = defineEmits(['update:bestia'])

const nombreModified = ref('')
const descripcionModified = ref('')
const paisModified = ref('')
const paises = ref<Pais[] | []>([])

const paisRepository = createPaisRepository()

const emitChanges = () => {
  emit('update:bestia', {
    nombre: nombreModified.value,
    descripcion: descripcionModified.value,
    pais: paisModified.value,
  })
}

onMounted(() => {
  if (props.nombre) {
    nombreModified.value = props.nombre
  }
  if (props.descripcion) {
    descripcionModified.value = props.descripcion
  }
  if (props.pais && props.pais.documentId) {
    paisModified.value = props.pais.documentId
  }

  paisRepository.getAll().then(data => (paises.value = data))
})
</script>
