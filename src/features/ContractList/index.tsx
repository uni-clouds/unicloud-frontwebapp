import { FC } from 'react'
import { Paper } from '../../components/Paper'
import { ContractListProps } from './types'

import * as Styled from './styles'
import { Heading } from '../../components/Heading'
import { useContracts } from '../../hooks/useContracts'
import { ContractCards } from '../ContractCards'

export const ContractList: FC<ContractListProps> = () => {
  const { data } = useContracts()
  console.log(data)
  return (
    <Styled.Container>
      <Paper>{!!data && <ContractCards contracts={data} />}</Paper>
    </Styled.Container>
  )
}
