import { FC } from 'react'
import { Layout } from '../../components/Layout'

import { HeaderContracts } from '../../features/HeaderContracts'
import { CreateContractForm } from '../../features/CreateContractForm'
import * as Styled from './styles'

export const ContractsCreation: FC = () => {
  return (
    <Layout>
      <Styled.Container>
        <HeaderContracts />
        <CreateContractForm />
      </Styled.Container>
    </Layout>
  )
}
