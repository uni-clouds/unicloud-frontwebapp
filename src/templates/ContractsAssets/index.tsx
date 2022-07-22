import { FC } from 'react'
import { Layout } from '../../components/Layout'
import { AssetsCreation } from '../../features/AssetsCreation'
import { HeaderContracts } from '../../features/HeaderContracts'
import * as Styled from './styles'

export const ContractsAssets: FC = () => {
  return (
    <Layout>
      <Styled.Container>
        <HeaderContracts />
        <AssetsCreation />
      </Styled.Container>
    </Layout>
  )
}
