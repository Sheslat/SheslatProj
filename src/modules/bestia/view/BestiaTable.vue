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
      <v-icon size="small" @click="openDeleteDialog(item)"> mdi-delete </v-icon>
    </template>
  </v-data-table>
  <DialogActions
    :serviceName="serviceName"
    :dialogDelete="openCloseDialogDelete"
    :dialogEdit="openCloseDialogEdit"
    :dialogCreate="openCloseDialogCreate"
    :itemToEdit="itemToEdit"
    @deleteItemConfirm="deleteItem"
    @saveEdit="saveEdit"
    @closeDelete="openCloseDialogDelete = false"
    @closeEdit="openCloseDialogEdit = false"
    @closeCreate="openCloseDialogCreate = false"
    @create="create"
  >
  </DialogActions>
</template>

<script lang="ts" setup>
import DialogActions from '@/components/DialogActions.vue'
import { useBestiaStore } from '../store'
import { ref, computed, reactive } from 'vue'
import type { Bestia } from '../domain/Bestia'
import { editableFields } from '../domain/EditableFields';
import { createPaisRepository } from '@/modules/pais/infrastructure/PaisRepository';
import type { Pais } from '@/modules/pais/domain/Pais';

const bestiaStore = useBestiaStore()
const serviceName = computed(() => bestiaStore.getServiceName)
const data = computed(() => bestiaStore.getDataTable)
const header = computed(() => bestiaStore.getTableHeaders)

const openCloseDialogDelete = ref(false)
const openCloseDialogEdit = ref(false)
const openCloseDialogCreate = ref(false)

const itemToRemove = ref<Bestia | null>(null)
const itemToEdit = reactive(editableFields)

const indexItemToEdit = ref<number | null>(null)
const paises = ref<Pais[] | []>([])

const paisRepository = createPaisRepository()

const openDeleteDialog = (item: Bestia) => {
  itemToRemove.value = item
  openCloseDialogDelete.value = true
}

const openEditDialog = async (item: Bestia, index: number) => {
  paises.value = await paisRepository.getAll()

  itemToEdit.nombre.value = item.nombre
  itemToEdit.descripcion.value = item.descripcion
  itemToEdit.pais.value = item.pais.id
  itemToEdit.pais.items = paises.value

  indexItemToEdit.value = index
  openCloseDialogEdit.value = true
}

const deleteItem = () => {
  const { id } = itemToRemove.value as Bestia
  bestiaStore.removeRow(id)
  openCloseDialogDelete.value = false
  itemToRemove.value = null
}

const saveEdit = (item: Bestia) => {
  bestiaStore.updateRow(item, indexItemToEdit.value)
  openCloseDialogEdit.value = false
  itemToEdit.value = null
  indexItemToEdit.value = null
}

const create = (item: Bestia) => {
  bestiaStore.createRow(item)
  openCloseDialogCreate.value = false
}
</script>
