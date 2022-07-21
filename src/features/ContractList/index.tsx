import { FC } from 'react'
import { Paper } from '../../components/Paper'
import { ContractListProps } from './types'

import * as Styled from './styles'
import { Heading } from '../../components/Heading'
import { useContracts } from '../../hooks/useContracts'
import { ContractCards } from '../ContractCards'
import { NavigateButton } from '../../components/Elements/Buttons/NavigateButton'
import { useNavigate } from 'react-router-dom'

export const ContractList: FC<ContractListProps> = () => {
  const { data } = useContracts()
  const navigate = useNavigate()
  const mock = 0
  const message = `Você tem ${Number(data?.length)} ${
    Number(data?.length) === 1 ? 'contrato' : 'contratos'
  }!`

  return (
    <Styled.Container>
      <Paper>
        {Number(data?.length) === 0 ? (
          <Styled.Box>
            <Styled.Title isWarning>
              Você ainda não tem contrato cadastrado!
            </Styled.Title>
            <NavigateButton
              text='Cadastrar contrato'
              onclick={() => navigate('/contracts')}
            />
          </Styled.Box>
        ) : (
          <>
            <Styled.Title>{message} </Styled.Title>
            {!!data && <ContractCards contracts={data} />}
          </>
        )}
      </Paper>
    </Styled.Container>
  )
}
