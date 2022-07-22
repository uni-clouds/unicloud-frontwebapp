import { THeadCell } from './THeadCell'
import { TableHeaderProps } from './types'

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
