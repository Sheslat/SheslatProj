<template>
  <v-card class="elevation-12">
    <div class="d-flex justify-space-between pa-4">
      <h2>Bestia</h2>

      <v-btn variant="outlined" @click="openNew"> Añadir </v-btn>
    </div>

    <v-card-text>
      <v-data-table :headers="header" :items="data">
        <template v-slot:item.actions="{ item }">
          <v-icon
            class="me-2"
            size="small"
            @click="openEditDialog(item, data.indexOf(item))"
          >
            mdi-pencil
          </v-icon>
          <v-icon size="small" @click="openDeleteDialog(item.documentId)">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>

  <!-- New Dialog -->
  <v-dialog v-model="openNewModal" max-width="500px">
    <v-card title="Editar Bestia">
      <v-card-text>
        <FormBestia @update:bestia="createBestia" />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="blue-darken-1"
          variant="text"
          @click="openNewModal = false"
          >Cancel</v-btn
        >
        <v-btn color="blue-darken-1" variant="text" @click="createRow"
          >Save</v-btn
        >
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- Edit Dialog -->
  <v-dialog v-model="openEditModal" max-width="500px">
    <v-card title="Editar Bestia">
      <v-card-text>
        <FormBestia
          :nombre="nombre"
          :descripcion="descripcion"
          :pais="pais"
          @update:bestia="updateBestia"
        />
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
import type { Pais } from '@/modules/pais/domain/Pais'

const bestiaStore = useBestiaStore()
const openNewModal = ref(false)
const openEditModal = ref(false)
const dialogDelete = ref(false)
const idToDelete = ref('')
const indexToUpdate = ref(0)

const data = computed(() => bestiaStore.getDataTable)
const header = computed(() => bestiaStore.getTableHeaders)

const idToEdit = ref('')
const nombre = ref('')
const descripcion = ref('')
const paisToEdit = ref('')

const nombreNew = ref('')
const descripcionNew = ref('')
const paisNew = ref('')

const pais = ref({} as Pais)

const openEditDialog = (item: Bestia, index: number) => {
  idToEdit.value = item.documentId
  nombre.value = item.nombre
  descripcion.value = item.descripcion
  pais.value = item.pais
  indexToUpdate.value = index
  openEditModal.value = true
}

const openNew = () => {
  nombreNew.value = ''
  descripcionNew.value = ''
  paisNew.value = ''
  openNewModal.value = true
}

const updateBestia = (updatedBestia: {
  nombre: string
  descripcion: string
  pais: string
}) => {
  nombre.value = updatedBestia.nombre
  descripcion.value = updatedBestia.descripcion
  paisToEdit.value = updatedBestia.pais
}

const createBestia = (updatedBestia: {
  nombre: string
  descripcion: string
  pais: string
}) => {
  nombreNew.value = updatedBestia.nombre
  descripcionNew.value = updatedBestia.descripcion
  paisNew.value = updatedBestia.pais
}

const updateRow = () => {
  const bestia: Omit<Bestia, 'pais'> & { pais: string } = {
    documentId: idToEdit.value,
    nombre: nombre.value,
    descripcion: descripcion.value,
    pais: paisToEdit.value,
  }
  bestiaStore.updateRow(bestia, indexToUpdate.value)
  openEditModal.value = false
}

const createRow = () => {
  const bestia: Omit<Bestia, 'pais' | 'documentId'> & { pais: string } = {
    nombre: nombreNew.value,
    descripcion: descripcionNew.value,
    pais: paisNew.value,
  }
  bestiaStore.createRow(bestia)
  openNewModal.value = false
}

const openDeleteDialog = (id: string) => {
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
