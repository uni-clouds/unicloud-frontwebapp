import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    & h2,
    h3 {
      text-align: left;
    }
  `}
`

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    gap: 1rem;
    padding: 0.5rem;

    & input {
      width: 80%;
    }
  `}
`
