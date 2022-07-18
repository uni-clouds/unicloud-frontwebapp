import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: ${colors.base[500]};
`

export const Content = styled.div`
  display: flex;
  flex: 1;
`

export const PageContainer = styled.div`
  padding: 20px;
  width: 80vw;
`
