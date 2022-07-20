import styled, { css } from 'styled-components'

export const ListItem = styled.li`
  ${({ theme }) => css`
    padding: 0.5rem;
  `}
`

export const IconBox = styled.span<{ depth: number }>`
  ${({ theme, depth }) => css`
    margin-left: ${depth ? `${depth}ch` : 0};
  `}
`
export const LinkBox = styled.span<{ isOpened: boolean }>`
  ${({ theme, isOpened }) => css`
    transition: ${theme.transition};
    visibility: ${isOpened ? 'visible' : 'hidden'};
  `}
`
export const Container = styled.div`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-flow: row wrap;
    gap: 0.5rem;
    justify-content: space-between;
  `}
`
