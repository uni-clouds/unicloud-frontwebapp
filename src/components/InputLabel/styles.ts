import styled, { css } from 'styled-components'

export const Label = styled.label`
  ${({ theme }) => css`
    margin-left: 0.85rem;
    text-transform: capitalize;
  `}
`
