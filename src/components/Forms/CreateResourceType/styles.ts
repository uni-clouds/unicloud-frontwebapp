import styled, { css, DefaultTheme } from 'styled-components'

export const Container = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    gap: 1.5rem;
    align-items: center;
    padding: 1rem;
  `}
`
