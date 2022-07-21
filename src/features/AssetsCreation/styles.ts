import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 3.5rem;
    padding: 1.5rem;
    align-items: flex-start;
    justify-content: space-between;
  `}
`
export const ContainerList = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 1rem;
    border-radius: ${theme.radius.sm};
    border: 1px solid #ddd;
  `}
`
export const Box = styled.div`
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
