// composables/useAdd.ts
import { ref } from 'vue'
import { useTableStore } from '@/store/table'

export const useAdd = () => {
  const tableStore = useTableStore()
  const dialogCreate = ref(false)
  const newItem = ref({ nombre: '', descripcion: '' })

  const openCreateDialog = () => {
    newItem.value = { nombre: '', descripcion: '' }
    dialogCreate.value = true
  }

  const closeCreateDialog = () => {
    dialogCreate.value = false
  }

  const createNewItem = async () => {
    tableStore.createRow(newItem.value)
    closeCreateDialog()
  }

  return {
    dialogCreate,
    newItem,
    openCreateDialog,
    closeCreateDialog,
    createNewItem,
  }
}
