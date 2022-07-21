import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
  `}
`
