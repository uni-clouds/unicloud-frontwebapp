import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    position: relative;

    span:hover {
      visibility: visible;
      transition: ${theme.transition};
    }
  `}
`

export const Tooltip = styled.span<{ title: string }>`
  ${({ theme, title }) => css`
    &::after {
      width: 100%;
      position: absolute;
      visibility: hidden;
      content: '${title}';
      padding: 1rem;
      border-radius: ${theme.radius.sm};
      transition: ${theme.transition};
      background: #fff;
      font-size: ${theme.fontSize.sm};
    }
  `}
`
