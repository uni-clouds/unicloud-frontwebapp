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
    padding: 3rem 1rem;
    border-radius: ${theme.radius.sm};
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.15);
  `}
`
export const Box = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column wrap;
    text-align: left;
    gap: 0.425rem;
    width: 100%;
    border-radius: ${theme.radius.sm};
    padding: 1.5rem;
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.15);
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
