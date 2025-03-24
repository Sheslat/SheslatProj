export type CrudOperations<T> = {
  save: () => Promise<void>
  remove: () => Promise<void>
  get: () => Promise<null>
  update: () => Promise<null>
  getAll: () => Promise<T[]>
}
