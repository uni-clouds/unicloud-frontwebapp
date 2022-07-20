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
      width: 100%;
    }
  `}
`
export const ContainerList = styled.section`
  ${({ theme }) => css``}
`

export const List = styled.ul`
  ${({ theme }) => css``}
`

export const ListItem = styled.li`
  ${({ theme }) => css``}
`

export const ListHeading = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.md};
    font-weight: ${theme.fontWeight.semibold};
    margin-bottom: 0.5rem;
  `}
`
