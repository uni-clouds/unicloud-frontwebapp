import styled, { css, keyframes } from 'styled-components'
import { colors } from '../../styles/colors'

export const NavList = styled.div<{ isOpened: boolean }>`
  ${({ theme, isOpened }) => css`
    padding: 0 1rem 0 1.2rem;
    font-size: ${theme.fontSize.md};
    font-weight: ${theme.fontWeight.regular};
    display: block;
    width: 100%;
    transition: ${theme.transition};
    &:first-of-type {
      border-top-color: ${isOpened ? colors.light[300] : 'transparent'};
      border-top-style: solid;
      border-top-width: 1px;
    }

    &:nth-of-type(4) {
      border-bottom: 1px solid ${colors.light[300]};
      padding-bottom: 0.5rem;
    }
    &:hover {
      background: ${colors.brand[50]};
      color: ${colors.brand[600]};
      transition: ${theme.transition};
    }

    &:first-child {
      padding-top: 0.85rem;
    }
  `}
`
const fadein = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

export const ListContainer = styled.div`
  animation: ${fadein} 1s ease-in;
`
