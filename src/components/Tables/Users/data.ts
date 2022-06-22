import { HeadCell, Data } from './types'

const today = new Date()
const phone = '(99) 99999-9999'
const active = 'Ativo'

function createData(
  name: string,
  username: string,
  phone: string,
  createdAt: string,
  status: string
): Data {
  return {
    name,
    username,
    phone,
    createdAt,
    status
  }
}

export const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Nome',
    minWidth: 180
  },
  {
    id: 'username',
    numeric: false,
    disablePadding: false,
    label: 'Username',
    minWidth: 200
  },
  {
    id: 'phone',
    numeric: false,
    disablePadding: false,
    label: 'Telefone',
    minWidth: 150
  },
  {
    id: 'createdAt',
    numeric: false,
    disablePadding: false,
    label: 'Data de criação',
    minWidth: 100
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
    minWidth: 100
  }
]

export const rows = [
  createData(
    'Cupcake',
    'contato@contato.com.br',
    phone,
    today.toLocaleDateString('pt-BR'),
    active
  ),
  createData(
    'Donut',
    'contato@contato.com.br',
    phone,
    today.toLocaleDateString('pt-BR'),
    active
  ),
  createData(
    'Eclair',
    'contato@contato.com.br',
    phone,
    today.toLocaleDateString('pt-BR'),
    active
  ),
  createData(
    'Frozen yoghurt',
    'contato@contato.com.br',
    phone,
    today.toLocaleDateString('pt-BR'),
    active
  ),
  createData(
    'Gingerbread',
    'contato@contato.com.br',
    phone,
    today.toLocaleDateString('pt-BR'),
    active
  ),
  createData(
    'Honeycomb',
    'contato@contato.com.br',
    phone,
    today.toLocaleDateString('pt-BR'),
    active
  ),
  createData(
    'Ice cream sandwich',
    'contato@contato.com.br',
    phone,
    today.toLocaleDateString('pt-BR'),
    active
  ),
  createData(
    'Jelly Bean',
    'contato@contato.com.br',
    phone,
    today.toLocaleDateString('pt-BR'),
    active
  ),
  createData(
    'KitKat',
    'contato@contato.com.br',
    phone,
    today.toLocaleDateString('pt-BR'),
    active
  ),
  createData(
    'Lollipop',
    'contato@contato.com.br',
    phone,
    today.toLocaleDateString('pt-BR'),
    active
  ),
  createData(
    'Marshmallow',
    'contato@contato.com.br',
    phone,
    today.toLocaleDateString('pt-BR'),
    active
  ),
  createData(
    'Nougat',
    'contato@contato.com.br',
    phone,
    today.toLocaleDateString('pt-BR'),
    active
  ),
  createData(
    'Oreo',
    'contato@contato.com.br',
    phone,
    today.toLocaleDateString('pt-BR'),
    active
  )
]
