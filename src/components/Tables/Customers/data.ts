import { HeadCell, Data } from './types'
import i18n from '../../../i18n'

export function createData(
  name: string,
  cnpj: string,
  phone: string | undefined,
  email: string | undefined,
  city: string | undefined,
  status: string
): Data {
  return {
    name,
    cnpj,
    phone,
    email,
    city,
    status
  }
}

export const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: `${i18n.t('company')}`,
    minWidth: 180
  },
  {
    id: 'cnpj',
    numeric: false,
    disablePadding: false,
    label: `${i18n.t('cnpj')}`,
    minWidth: 200
  },
  {
    id: 'phone',
    numeric: false,
    disablePadding: false,
    label: `${i18n.t('phone')}`,
    minWidth: 150
  },
  {
    id: 'city',
    numeric: false,
    disablePadding: false,
    label: `${i18n.t('city')}`,
    minWidth: 100
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: `${i18n.t('status')}`,
    minWidth: 100
  }
]
