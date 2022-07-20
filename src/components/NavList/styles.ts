import styled, { css } from 'styled-components'

export const List = styled.ul`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;
  `}
`
