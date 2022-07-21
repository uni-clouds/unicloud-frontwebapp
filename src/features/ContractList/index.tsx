import { FC } from 'react'
import { Paper } from '../../components/Paper'
import { ContractListProps } from './types'

import * as Styled from './styles'
import { Heading } from '../../components/Heading'
import { useContracts } from '../../hooks/useContracts'

export const ContractList: FC<ContractListProps> = () => {
  const { data } = useContracts()
  return (
    <Styled.Container>
      <Paper></Paper>
    </Styled.Container>
  )
}
