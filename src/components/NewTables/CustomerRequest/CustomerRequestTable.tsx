import { formatDate } from '../../Tables/CustomerRequests/utils'
import { TableHeader } from '../TableHeader'

import { TableBody } from './TableBody'
import { RequestTableProps } from './types'

export function CustomerRequestTable(props: RequestTableProps) {
  const { data, cells, modalCell } = props
  return (
    <table>
      <TableHeader cells={cells} modalCell={modalCell} />
      <TableBody data={data} cells={cells} modalCell={modalCell} />
    </table>
  )
}
