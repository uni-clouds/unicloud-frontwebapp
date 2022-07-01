import { Column } from './types'

export const columns: readonly Column[] = [
  { id: 'name', label: 'Nome', minWidth: 170 },
  { id: 'locality', label: 'Localidade', minWidth: 100 },
  {
    id: 'joinAt',
    label: 'Ingressou em',
    minWidth: 170,
    align: 'right'
  }
]

export function createData(name: string, locality: string, joinAt: string) {
  return { name, locality, joinAt }
}
