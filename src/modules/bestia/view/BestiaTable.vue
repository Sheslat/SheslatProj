<template>
  <div class="pb-5 ps-5 text-h5">Bestia</div>
  <v-data-table :headers="header" :items="data">
    <template v-slot:item.actions="{ item }">
      <v-icon
        class="me-2"
        size="small"
        @click="openEditDialog(item, data.indexOf(item))"
      >
        mdi-pencil
      </v-icon>
      <v-icon size="small" @click="openDeleteDialog(item.id)">
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>

  <v-dialog v-model="openEditModal" max-width="500px">
    <v-card title="Editar Bestia">
      <v-card-text>
        <FormBestia :nombre="nombre" :descripcion="descripcion" :pais="pais" />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue-darken-1"
          variant="text"
          @click="openEditModal = false"
          >Cancel</v-btn
        >
        <v-btn color="blue-darken-1" variant="text" @click="updateRow"
          >Save</v-btn
        >
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- Delete Confirmation Dialog -->
  <v-dialog v-model="dialogDelete" max-width="500px">
    <v-card>
      <v-card-title class="text-h5"
        >Are you sure you want to delete this item?</v-card-title
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue-darken-1"
          variant="text"
          @click="dialogDelete = false"
          >Cancel</v-btn
        >
        <v-btn color="blue-darken-1" variant="text" @click="deleteRow"
          >OK</v-btn
        >
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import FormBestia from './FormBestia.vue'
import { useBestiaStore } from '../store'
import { computed, onMounted, ref } from 'vue'
import type { Bestia } from '../domain/Bestia'

const bestiaStore = useBestiaStore()
const openEditModal = ref(false)
const dialogDelete = ref(false)
const idToDelete = ref(0)
const indexToUpdate = ref(0)

const data = computed(() => bestiaStore.getDataTable)
const header = computed(() => bestiaStore.getTableHeaders)

const idToEdit = ref(0)
const nombre = ref('')
const descripcion = ref('')
const pais = ref({})

const openEditDialog = (item: Bestia, index: number) => {
  idToEdit.value = item.id
  nombre.value = item.nombre
  descripcion.value = item.descripcion
  pais.value = item.pais
  indexToUpdate.value = index
  openEditModal.value = true
}

const updateRow = () => {
  const bestia = {
    id: idToEdit.value,
    nombre: nombre.value,
    descripcion: descripcion.value,
    pais: pais.value,
  }
  bestiaStore.updateRow(bestia as Bestia, indexToUpdate.value)
  openEditModal.value = false
}

const openDeleteDialog = (id: number) => {
  dialogDelete.value = true
  idToDelete.value = id
}

const deleteRow = () => {
  bestiaStore.removeRow(idToDelete.value)
  dialogDelete.value = false
}

onMounted(() => {
  bestiaStore.initTable()
})
</script>
