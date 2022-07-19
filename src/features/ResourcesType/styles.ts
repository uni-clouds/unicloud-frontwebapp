import styled, { css, DefaultTheme } from 'styled-components'
import { Paper } from '../../components/Paper'

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    gap: 2rem;
  `}
`

export const ContainerList = styled.div`
  ${({ theme }) => css`
    max-width: 100rem;
    margin: 0 auto;
    padding: 1rem;
  `}
`

export const Box = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    gap: 1.25rem;

    p {
      font-size: ${theme.fontSize.lg};
    }
  `}
`

export const CardResourcesTypes = styled.div`
  ${({ theme }) => css`
    padding: 1.5rem 2rem;
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    gap: 1.25rem;
    border-radius: ${theme.radius.sm};
    box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.25);
  `}
`
