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
        <v-form ref="editForm">
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
import { useTableStore } from '@/store/table'
import { computed, ref } from 'vue'

// Usamos el store directamente para mantener la reactividad
const tableStore = useTableStore()

// Desestructuración reactiva de los getters
const serviceName = computed(() => tableStore.getServiceName)
const header = computed(() => tableStore.getTableHeaders)

const data = computed(() => tableStore.getDataTable)

//Variables
const indexToEdit = ref<number | null>(null)

// Edit dialog state
const dialogEdit = ref(false)
const editableFields = ref<Record<string, number>>({})
const originalItem = ref<any>(null) // Store the original item

// Estado del diálogo de creación
const dialogCreate = ref(false)
const newItem = ref({ nombre: '', descripcion: '' })

// Generate dynamic labels based on headers
const fieldLabels = computed(() => {
  return header.value.reduce((acc: Record<string, string>, item: any) => {
    acc[item.key] = item.title
    return acc
  }, {})
})

// Abrir el diálogo de creación
const openCreateDialog = () => {
  newItem.value = { nombre: '', descripcion: '' } // Reset del formulario
  dialogCreate.value = true
}

// Cerrar el diálogo de creación
const closeCreateDialog = () => {
  dialogCreate.value = false
}

// Función para crear un nuevo elemento
const createNewItem = async () => {
  // try {
  //   await tableStore.services[serviceName.value].save(newItem.value) // Llamar al backend
  //   await tableStore.initTable() // Recargar la tabla
  //   closeCreateDialog()
  // } catch (error) {
  //   console.error('Error al crear el elemento:', error)
  // }
  tableStore.createRow(newItem.value)
  closeCreateDialog()
}

// Open edit dialog
const openEditDialog = (item: any, index: number) => {
  indexToEdit.value = index
  originalItem.value = item // Store original item reference
  editableFields.value = { ...item } // Copy data to avoid modifying original until save
  dialogEdit.value = true
}

// Close edit dialog
const closeEdit = () => {
  dialogEdit.value = false
  editableFields.value = {}
  originalItem.value = null
}

// Save edited item
const saveEdit = async () => {
  tableStore.updateRow(editableFields.value, indexToEdit.value)
  closeEdit()
}

// Delete dialog state
const dialogDelete = ref(false)
const itemToDelete = ref<any>(null)

// Open delete confirmation dialog
const openDeleteDialog = (item: any) => {
  itemToDelete.value = item
  dialogDelete.value = true
}

// Close delete dialog
const closeDelete = () => {
  dialogDelete.value = false
  itemToDelete.value = null
}

// Confirm deletion
const deleteItemConfirm = async () => {
  if (itemToDelete.value) {
    console.log('Deleting item:', itemToDelete.value)

    try {
      await tableStore.services[serviceName.value].remove(itemToDelete.value.id)
      await tableStore.initTable() // Refresh table after deletion
    } catch (error) {
      console.error('Error deleting item:', error)
    }
  }
  closeDelete()
}
</script>

<style>
/* Aplicar estilos globales sin scoped */
.v-table__wrapper thead th {
  font-weight: 900 !important; /* Aseguramos que el estilo se aplique con mayor prioridad */
}
</style>
