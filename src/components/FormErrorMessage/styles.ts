import styled, { css } from 'styled-components'
import { colors } from '../../styles/colors'

export const Message = styled.p<{ error: boolean }>`
  ${({ theme, error }) => css`
    position: absolute;
    color: ${colors.red.custom};
    display: ${error ? 'block' : 'none'};
    padding: 1rem 0;
    font-size: ${theme.fontSize.sm};
    transition: ${theme.transition};
    inset: 70% 0 0 0;
    margin-left: 0.5rem;
  `}
`
