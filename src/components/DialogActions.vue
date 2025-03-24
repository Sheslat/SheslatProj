<template>
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
          @click="$emit('closeDelete')"
          >Cancel</v-btn
        >
        <v-btn
          color="blue-darken-1"
          variant="text"
          @click="$emit('deleteItemConfirm')"
          >OK</v-btn
        >
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- Edit Confirmation Dialog -->
  <v-dialog v-model="props.dialogEdit" max-width="500px">
    <v-card>
      <v-card-title class="text-h5"> Edit {{ serviceName }} </v-card-title>
      <v-card-text>
        <v-form v-if="editableFields !== null" ref="editForm">
          <v-text-field
            v-for="(field, key) in editableFields"
            :type="key === 'id' ? 'hidden' : 'text'"
            :key="key"
            v-model="editableFields[key]"
            :label="key"
          />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="$emit('closeEdit')"
          >Cancel</v-btn
        >
        <v-btn
          color="blue-darken-1"
          variant="text"
          @click="$emit('saveEdit', editableFields)"
          >Save</v-btn
        >
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- Diálogo para Crear Nuevo Dato -->
  <v-dialog v-model="props.dialogCreate" max-width="500px">
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
        <v-btn
          color="blue-darken-1"
          variant="text"
          @click="$emit('closeCreate')"
          >Cancelar</v-btn
        >
        <v-btn
          color="blue-darken-1"
          variant="text"
          @click="$emit('create', newBestia)"
          >Guardar</v-btn
        >
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script lang="ts" setup>
import type { Bestia } from '@/modules/bestia/domain/Bestia'
import { defineProps, ref } from 'vue'

const props = defineProps({
  dialogDelete: Boolean,
  dialogCreate: Boolean,
  dialogEdit: Boolean,
  serviceName: String,
  itemToEdit: Object,
})

const editableFields = ref<Bestia | null>(null)
const newBestia = ref<Bestia | null>(null)

editableFields.value = props.itemToEdit
</script>
