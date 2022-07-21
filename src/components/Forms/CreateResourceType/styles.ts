import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column wrap;
    gap: 1.5rem;
    padding: 1rem;

    & h3 {
      text-align: left;
      margin-bottom: 1rem;
    }
  `}
`

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    gap: 1.5rem;
    align-items: center;
  `}
`
export const Box = styled.div`
  ${({ theme }) => css`
    display: block;
    margin-bottom: 0.5rem;
  `}
`
