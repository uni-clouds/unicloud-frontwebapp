import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${({ theme }) => css`
    width: 100%;
    padding: 1rem 2rem;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;
  `}
`
