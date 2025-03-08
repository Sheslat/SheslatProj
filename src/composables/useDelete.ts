// composables/useDelete.ts
import { ref } from 'vue'
import { useTableStore } from '@/store/table'
import { type Entity } from '@/types/Entity'
import { computed } from 'vue'

export const useDelete = () => {
  const tableStore = useTableStore()
  const dialogDelete = ref(false)
  const itemToDelete = ref<Entity | null>(null)
  const serviceName = computed(() => tableStore.getServiceName)

  const openDeleteDialog = (item: Entity) => {
    itemToDelete.value = item
    dialogDelete.value = true
  }

  const closeDelete = () => {
    dialogDelete.value = false
    itemToDelete.value = null
  }

  const deleteItemConfirm = async () => {
    if (itemToDelete.value === null || !itemToDelete.value.id) return
    await tableStore.services[serviceName.value].remove(itemToDelete.value.id)
    await tableStore.initTable()
    closeDelete()
  }

  return {
    serviceName,
    dialogDelete,
    openDeleteDialog,
    closeDelete,
    deleteItemConfirm,
  }
}
