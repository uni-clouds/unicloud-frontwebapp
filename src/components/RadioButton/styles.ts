import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row nowrap;
    gap: 0.5rem;
    padding: 0.5rem;
    align-items: center;
    cursor: pointer;
  `}
`
export const Radio = styled.input`
  ${({ theme }) => css``}
`
export const Label = styled.label`
  ${({ theme }) => css``}
`
