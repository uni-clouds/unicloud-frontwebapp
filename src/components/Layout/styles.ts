import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: ${colors.base[500]};
  ${({ theme }) => theme.transition};
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  ${({ theme }) => theme.transition};
`

export const PageContainer = styled.main`
  padding: 2.5rem;
  width: 100vw;
  transition: ${({ theme }) => theme.transition};
`
//todo custom page transition
