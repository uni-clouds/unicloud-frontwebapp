import styled, { css, keyframes } from 'styled-components'
import { colors } from '../../styles/colors'

export const NavList = styled.div`
  ${({ theme }) => css`
    padding: 0 0.85rem;
    font-size: ${theme.fontSize.md};
    font-weight: ${theme.fontWeight.semibold};
    display: block;
    width: 100%;
    transition: ${theme.transition};
    &:hover {
      background: ${colors.brand[50]};
      transition: ${theme.transition};
    }
  `}
`
const fadein = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

export const ListContainer = styled.div`
  animation: ${fadein} 1s linear;
`
