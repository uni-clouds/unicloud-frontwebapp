import styled, { css, DefaultTheme } from 'styled-components'
import { colors } from '../../styles/colors'

export const Card = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: #fff;
    color: ${colors.base[600]};
    font-size: ${theme.fontSize.md};
    border-radius: ${theme.radius.sm};
    box-shadow: -2px 2px 7px -1px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: -2px 2px 7px -1px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: -2px 2px 7px -1px rgba(0, 0, 0, 0.25);
    padding: 1rem;
    margin: 0 auto;
  `}
`
