import styled, { css, DefaultTheme } from 'styled-components'
import { colors } from '../../styles/colors'

export const Card = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: #fff;
    color: ${colors.base[600]};
    font-size: ${theme.fontSize.md};
    border-radius: ${theme.radius.sm};
    box-shadow: 0 1px 2px -1px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    margin: 0 auto;
  `}
`
