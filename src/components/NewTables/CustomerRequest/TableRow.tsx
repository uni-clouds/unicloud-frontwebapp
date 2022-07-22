import { formatDate } from '../../Tables/CustomerRequests/utils'
import { TRowProps } from './types'
import styled from 'styled-components'

export function TRow(props: TRowProps) {
  const { data, modalCell } = props

  return (
    <tr id={data.id.toString()}>
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
