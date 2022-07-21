import { FC } from 'react'
import { Heading } from '../../components/Heading'
import { NavigationTabs } from '../NavigationTabs'
import { HeaderContractProps } from './types'

import { CONTRACTS_LINKS } from '../../constants/navigation'

import * as Styled from './styles'

export const HeaderContracts: FC<HeaderContractProps> = () => {
  return (
    <Styled.Container>
      <NavigationTabs links={CONTRACTS_LINKS} />
      <Heading size='big' as='h2'>
        Contratos
      </Heading>
    </Styled.Container>
  )
}
