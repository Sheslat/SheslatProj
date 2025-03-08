// composables/useEdit.ts
import { ref } from 'vue'
import { useTableStore } from '@/store/table'
import { type Entity } from '@/types/Entity'
import { computed } from 'vue'
import { type headerProperties } from '@/types/HeaderColumn'

export const useEdit = () => {
  const tableStore = useTableStore()
  const dialogEdit = ref(false)
  const editableFields = ref<Entity | null>(null)
  const originalItem = ref<Entity | null>(null)
  const indexToEdit = ref<number | null>(null)
  const header = computed(() => tableStore.getTableHeaders)

  // Generate dynamic labels based on headers
  const fieldLabels = computed(() => {
    if (header.value === null) return {} // Return empty object if header is null

    return header.value.reduce(
      (acc: Record<string, string>, item: headerProperties) => {
        acc[item.key] = item.title
        return acc
      },
      {},
    )
  })

  const openEditDialog = (item: Entity, index: number) => {
    indexToEdit.value = index
    originalItem.value = item
    editableFields.value = { ...item } // Assign the item to editableFields
    dialogEdit.value = true
  }

  const closeEdit = () => {
    dialogEdit.value = false
    editableFields.value = null
    originalItem.value = null
    indexToEdit.value = null
  }

  const saveEdit = async () => {
    if (editableFields.value === null) return
    tableStore.updateRow(editableFields.value, indexToEdit.value)
    closeEdit()
  }

  return {
    header,
    dialogEdit,
    editableFields,
    openEditDialog,
    closeEdit,
    saveEdit,
    fieldLabels,
  }
}
