import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 1rem;
  `}
`
export const Title = styled.p<{ isWarning?: boolean }>`
  ${({ theme, isWarning }) => css`
    padding: 1rem 1.5rem;
    font-size: ${theme.fontSize.lg};
    text-align: ${isWarning ? 'center' : 'left'};
  `}
`
export const Box = styled.div`
  ${({ theme }) => css`
    display: grid;
    place-content: center;
    grid-gap: 2rem;
    padding: 2rem;
  `}
`
