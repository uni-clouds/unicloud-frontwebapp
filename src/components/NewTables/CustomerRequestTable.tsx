import { formatDate } from '../Tables/CustomerRequests/utils'

export function CustomerRequestTable(props: TableProps) {
  const { data, cells, modalCell } = props
  return (
    <table>
      <TableHeader cells={cells} modalCell={modalCell} />
      <TableBody data={data} cells={cells} modalCell={modalCell} />
    </table>
  )
}

export function TableHeader(props: TableHeaderProps) {
  const { cells, modalCell } = props
  return (
    <thead>
      {cells.map((cell) => (
        <THeadCell cellName={cell.name} />
      ))}
      {!!modalCell && <THeadCell cellName='+' />}
    </thead>
  )
}

export function THeadCell(props: THeadCellProps) {
  const { cellName } = props
  return (
    <>
      <th className='text-left'>{cellName}</th>
    </>
  )
}

export function TableBody(props: TBodyProps) {
  const { data, cells, modalCell } = props
  return (
    <tbody>
      {data.map((row) => (
        <TRow cells={cells} data={row} modalCell={modalCell} />
      ))}
    </tbody>
  )
}

export function TRow(props: TRowProps) {
  const { data, cells, modalCell } = props

  return (
    <tr id={data.id}>
      <td>
        <p>{data.customer}</p>
        <p>{data.opportunity_name}</p>
      </td>
      <td>{formatDate(data.request_date)}</td>
      <td>{data.status}</td>
      {!!modalCell && <td></td>}
    </tr>
  )
}

export interface TableProps {
  cells: TableCellList[]
  data: []
  modalCell?: boolean
}

export interface TableHeaderProps {
  cells: TableCellList[]
  modalCell: boolean
}

export interface THeadCellProps {
  cellName: string
}

export interface TBodyProps {
  data: []
  cells: TableCellList[]
  modalCell: boolean
}

export interface TRowProps {
  cells: TableCellList[]
  data: []
  modalCell: boolean
}

export interface TableCellList {
  name: string
  dataKey: string
}

export const requestTableCells: TableCellList[] = [
  { name: 'Customer', dataKey: 'customer' },
  { name: 'Requerido em', dataKey: 'request_date' },
  { name: 'Status', dataKey: 'status' }
]

export interface RequestObject {
  id: number
  customer: string
  opportunity_name: string
  opportunity_description: string
  user: string
  request_date: string
  status: string
  resources: { resource_name: string; resource_id: number }[]
  history: { type: string; user: string; date: string }[]
}
