import { FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { IconButton } from '../../components/IconButton'
import { colors } from '../../styles/colors'
import * as Styled from './styles'
import { ContractCardProps } from './types'

export const ContractCards: FC<ContractCardProps> = ({ contracts }) => {
  return (
    <Styled.Container>
      {contracts?.map((contract) => (
        <Styled.Card key={uuidv4()}>
          <Styled.CardItem>
            <Styled.CardTopic>Nome:</Styled.CardTopic> {contract.name}
          </Styled.CardItem>

          <Styled.CardItem>
            <Styled.CardTopic>Início: </Styled.CardTopic>
            {contract.start_date}
          </Styled.CardItem>
          <Styled.CardItem>
            <Styled.CardTopic>Fim: </Styled.CardTopic>
            {contract.end_date}
          </Styled.CardItem>
          <Styled.CardItem>
            <Styled.CardTopic>Prazo:</Styled.CardTopic> {contract.term}
          </Styled.CardItem>
          <Styled.CardItem>
            <Styled.CardTopic>Período de reajuste:</Styled.CardTopic>
            {contract.readjust_cycle}
          </Styled.CardItem>
          <Styled.CardItem>
            <Styled.CardTopic>Valor:</Styled.CardTopic> {contract.amount}
          </Styled.CardItem>
          <Styled.CardItem>
            <Styled.CardTopic>Observações:</Styled.CardTopic> {contract.note}
          </Styled.CardItem>
          <Styled.CardItem>
            <Styled.CardTopic>Contrato:</Styled.CardTopic>
            {contract.contract}
            <IconButton
              icon='carbon:document-download'
              title='Download'
              size='1.75rem'
              color={colors.teal.custom}
              onClick={() => console.log('fez download 🥸')}
            />
          </Styled.CardItem>
        </Styled.Card>
      ))}
    </Styled.Container>
  )
}
