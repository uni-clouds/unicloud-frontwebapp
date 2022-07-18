import styled, { css } from 'styled-components'

export const ListItem = styled.li`
  ${({ theme }) => css`
    padding: 0.5rem;
    &:hover {
    }
    transition: ;
  `}
`

export const IconBox = styled.span<{ depth: number }>`
  ${({ theme, depth }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: ${(depth) => `${depth}rem`};
  `}
`
export const LinkBox = styled.span`
  ${({ theme }) => css``}
`
export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`
