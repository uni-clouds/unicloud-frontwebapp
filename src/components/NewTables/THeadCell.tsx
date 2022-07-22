import { THeadCellProps } from './types'

export function THeadCell(props: THeadCellProps) {
  const { cellName } = props
  return (
    <>
      <th className='text-left'>{cellName}</th>
    </>
  )
}
