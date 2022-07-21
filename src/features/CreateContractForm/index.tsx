import { FC } from 'react'
import { CreateContract } from '../../components/Forms/CreateContract'
import { Paper } from '../../components/Paper'

import { CreateContractProps } from './types'
import * as Styled from './styles'

export const CreateContractForm: FC<CreateContractProps> = () => {
  return (
    <Styled.Container>
      <Paper>
        <CreateContract />
      </Paper>
    </Styled.Container>
  )
}
