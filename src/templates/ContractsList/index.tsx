import { FC } from 'react'
import { Layout } from '../../components/Layout'
import { ContractList } from '../../features/ContractList'
import { HeaderContracts } from '../../features/HeaderContracts'
import * as Styled from './styles'

export const ContractsList: FC = () => {
  return (
    <Layout>
      <Styled.Container>
        <HeaderContracts />
        <ContractList />
      </Styled.Container>
    </Layout>
  )
}
