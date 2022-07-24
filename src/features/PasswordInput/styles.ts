import styled, { css } from 'styled-components'
import { colors } from '../../styles/colors'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    position: relative;
    gap: 1rem;
  `}
`

export const VisibilityBox = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: 5%;
    top: 45%;
    z-index: 15;
  `}
`
export const Button = styled.button<{ error: boolean }>`
  ${({ theme, error }) => css`
    color: ${error ? colors.red.custom : colors.brand[500]};
    &:hover {
      color: ${error ? colors.brand[500] : colors.red.custom};
    }
  `}
`
export const LinkBox = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: 5%;
    top: 0%;
    font-size: ${theme.fontSize.xsm};
    color: ${colors.brand[600]};
    z-index: 10;
    transition: ${theme.transition};
    & a:hover {
      text-decoration: underline;
      transition: ${theme.transition};
    }
  `}
`
