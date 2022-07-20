import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  `}
`
