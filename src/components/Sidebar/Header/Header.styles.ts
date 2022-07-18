import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const HeaderContainer = styled.header`
  display: flex;
  background: ${colors.neutral[50]};
  height: 50px;
  align-items: center;
  justify-content: space-between;
  color: ${colors.base[500]};
  border: 1px solid ${colors.brand.google};
  padding: 2rem 1.5rem;
`

export const IconContainer = styled.div`
  padding: 10px;

  &:hover {
    cursor: pointer;
  }
`
