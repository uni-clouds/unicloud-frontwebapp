import { FC } from 'react'
import { Paper } from '../../components/Paper'
import { ContractListProps } from './types'

import * as Styled from './styles'
import { Heading } from '../../components/Heading'

export const ContractList: FC<ContractListProps> = () => {
  return (
    <Styled.Container>
      <Paper></Paper>
    </Styled.Container>
  )
}
