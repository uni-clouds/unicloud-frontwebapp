import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const HeaderContainer = styled.header`
  display: flex;
  background: ${colors.brand[200]};
  height: 50px;
  align-items: center;
  justify-content: space-between;
  color: ${colors.base[500]};
  padding: 1.5rem 2rem;
`

export const IconContainer = styled.div`
  padding: 10px;

  & svg {
    height: 30px;
  }

  &:hover {
    cursor: pointer;
  }
`

export const TitleContainer = styled.div`
  margin: auto;
`
