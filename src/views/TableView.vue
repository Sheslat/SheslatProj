<template>
  <div class="pb-5 ps-5 text-h5">{{ serviceName.toUpperCase() }}</div>
  <v-btn class="mb-5 ms-5" @click="openCreateDialog"> Nuevo Dato </v-btn>
  <v-data-table :headers="header" :items="data">
    <template v-slot:item.actions="{ item }">
      <v-icon
        class="me-2"
        size="small"
        @click="openEditDialog(item, data.indexOf(item))"
      >
        mdi-pencil
      </v-icon>
      <v-icon size="small" @click="openDeleteDialog(item)"> mdi-delete </v-icon>
    </template>
  </v-data-table>

  <!-- Delete Confirmation Dialog -->
  <v-dialog v-model="dialogDelete" max-width="500px">
    <v-card>
      <v-card-title class="text-h5"
        >Are you sure you want to delete this item?</v-card-title
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="closeDelete"
          >Cancel</v-btn
        >
        <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm"
          >OK</v-btn
        >
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="dialogEdit" max-width="500px">
    <v-card>
      <v-card-title class="text-h5"> Edit {{ serviceName }} </v-card-title>
      <v-card-text>
        <v-form v-if="editableFields !== null" ref="editForm">
          <v-text-field
            v-for="(field, key) in editableFields"
            :type="key === 'id' ? 'hidden' : 'text'"
            :key="key"
            v-model="editableFields[key]"
            :label="key !== 'id' ? fieldLabels[key] || key : ''"
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="closeEdit"
          >Cancel</v-btn
        >
        <v-btn color="blue-darken-1" variant="text" @click="saveEdit"
          >Save</v-btn
        >
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- Diálogo para Crear Nuevo Dato -->
  <v-dialog v-model="dialogCreate" max-width="500px">
    <v-card>
      <v-card-title class="text-h5">Crear Nuevo {{ serviceName }}</v-card-title>

      <v-card-text>
        <v-text-field
          v-model="newItem.nombre"
          label="Nombre"
          required
        ></v-text-field>
        <v-text-field
          v-model="newItem.descripcion"
          label="Descripción"
        ></v-text-field>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="closeCreateDialog"
          >Cancelar</v-btn
        >
        <v-btn color="blue-darken-1" variant="text" @click="createNewItem"
          >Guardar</v-btn
        >
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useTableStore } from '@/store/table'

import { useAdd } from '@/composables/useAdd'
import { useDelete } from '@/composables/useDelete'
import { useEdit } from '@/composables/useEdit'
// Funciones de añadir
const {
  dialogCreate,
  newItem,
  openCreateDialog,
  closeCreateDialog,
  createNewItem,
} = useAdd()

// Funciones de edicion
const {
  dialogEdit,
  editableFields,
  openEditDialog,
  closeEdit,
  saveEdit,
  fieldLabels,
} = useEdit()

// Funciones de eliminar
const { dialogDelete, openDeleteDialog, closeDelete, deleteItemConfirm } =
  useDelete()

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
