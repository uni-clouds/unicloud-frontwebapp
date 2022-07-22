import styled, { css } from 'styled-components'
import { colors } from '../../styles/colors'
import { InputStylesProps } from './types'

export const Input = styled.input<InputStylesProps>`
  ${({ theme, borderColor, color, error }) => css`
    border: 1px solid ${borderColor ? borderColor : colors.light[200]};
    border-radius: ${theme.radius.md};
    padding: 0.85rem;
    color: ${color ? color : colors.base[500]};
    outline: 0;
    position: relative;
    &:focus {
      outline: ${error
        ? `1px solid #f1867e`
        : `1px solid ${colors.brand[300]}`};
      outline-offset: 1px;
      border: ${error ? `2px solid #f1867e` : `2px solid ${colors.brand[800]}`};
      box-shadow: ${error
        ? `1px 1px 5px 1px rgba(241, 134, 126, 0.5)`
        : `1px 1px 5px 1px ${colors.brand[300]}`};
      -webkit-box-shadow: ;
      ${error
        ? `1px 1px 5px 1px rgba(241, 134, 126, 0.5)`
        : `1px 1px 5px 1px ${colors.brand[300]}`};
      -moz-box-shadow: ${error
        ? `1px 1px 5px 1px rgba(241, 134, 126, 0.5)`
        : `1px 1px 5px 1px ${colors.brand[300]}`};
    }
  `}
`
export const Container = styled.div<InputStylesProps>`
  ${({ theme, layout, gap }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-flow: ${layout ? layout : 'column'};
    gap: ${gap ? gap : '0.75rem'};
    transition: ${theme.transition};
    margin-bottom: 1.25rem;
  `}
`
