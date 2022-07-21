import styled, { css } from 'styled-components'
import { colors } from '../../styles/colors'

export const ListItem = styled.li`
  ${({ theme }) => css`
    padding: 0.5rem;
    text-transform: capitalize;
  `}
`

export const IconBox = styled.span<{ depth: number }>`
  ${({ theme, depth }) => css`
    margin-left: ${depth ? `${depth}ch` : 0};
    display: grid;
    place-content: center;
    font-size: ${theme.fontSize.lg};
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
    gap: 1rem;
    justify-content: flex-start;
  `}
`
