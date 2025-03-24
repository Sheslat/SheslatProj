import type { Pais } from "@/modules/pais/domain/Pais";

export const editableFields = {
  nombre: {
    type: 'text',
    label: 'Nombre',
    value: ''
  },
  descripcion: {
    type: 'text',
    label: 'Descripcion',
    value: ''
  },
  pais: {
    type: 'select',
    label: 'Pais',
    value: '' as string | number,
    items: [] as Pais[]
  },
}
