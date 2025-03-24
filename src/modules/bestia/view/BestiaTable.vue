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
import { ref, computed } from 'vue'
import type { Bestia } from '../domain/Bestia'

const bestiaStore = useBestiaStore()
const serviceName = computed(() => bestiaStore.getServiceName)
const data = computed(() => bestiaStore.getDataTable)
const header = computed(() => bestiaStore.getTableHeaders)

const openCloseDialogDelete = ref(false)
const openCloseDialogEdit = ref(false)
const openCloseDialogCreate = ref(false)

const itemToRemove = ref<Bestia | null>(null)
const itemToEdit = ref<Bestia | null>(null)

const indexItemToEdit = ref<number | null>(null)

const openDeleteDialog = (item: Bestia) => {
  itemToRemove.value = item
  openCloseDialogDelete.value = true
}

const openEditDialog = (item: Bestia, index: number) => {
  itemToEdit.value = item
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
