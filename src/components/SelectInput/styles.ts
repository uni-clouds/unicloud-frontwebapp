import styled, { css, DefaultTheme } from 'styled-components'

export const Select = styled.select`
  ${({ theme }) => css`
    width: 100%;
    padding: 1rem;
    text-transform: capitalize;
  `}
`

export const SelectLabel = styled.label`
  ${({ theme }) => css`
    padding: 0.5rem;
    font-size: ${theme.fontSize.md};
  `}
`

export const SelectOption = styled.option`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.md};
    text-transform: capitalize;
    background: inherit;
    border-radius: ${theme.radius.sm};

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }
  `}
`

export const SelectBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  `}
`
