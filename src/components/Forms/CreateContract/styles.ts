import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${({ theme }) => css`
    padding: 1rem;
  `}
`
export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column wrap;
    gap: 1rem;
    width: 100%;

    margin-top: 1.5rem;
  `}
`

export const Title = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.lg};
    line-height: 1.36rem;
    text-align: left;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
  `}
`
export const InputGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row nowrap;
    gap: 1.5rem;
    width: 100%;
    transition: ${theme.transition};

    & button[type='submit']:hover {
      span {
        transform: translateX(10px);
        transition: ${theme.transition};
      }
    }
  `}
`

export const InputBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column wrap;
    text-align: left;
    gap: 0.425rem;
    width: 100%;
  `}
`
export const Span = styled.span`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.425rem;
    width: 100%;
  `}
`
