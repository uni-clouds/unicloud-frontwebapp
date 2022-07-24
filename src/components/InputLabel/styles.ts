import styled, { css } from 'styled-components'
import { LabelStyleProps } from './types'

export const Label = styled.label<LabelStyleProps>`
  ${({ theme, events }) => css`
    margin-left: 0.85rem;
    text-transform: capitalize;
    /* pointer-events: ${events ? 'none' : 'auto'};
    -webkit-pointer-events: ${events ? 'none' : 'auto'};
    -moz-pointer-events: ${events ? 'none' : 'auto'};
    -o-pointer-events: ${events ? 'none' : 'auto'};
    & a{
      pointer-events? auto;
      padding: 0.5rem;
    } */
  `}
`
