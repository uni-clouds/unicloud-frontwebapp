import { TBodyProps } from './types'
import { TRow } from './TableRow'

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
