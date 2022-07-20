import styled, { css } from 'styled-components'
import { colors } from '../../styles/colors'

export const Button = styled.button`
  ${({ theme }) => css`
    position: relative;
    min-width: 2.5rem;
    min-height: 2.5rem;
    display: grid;
    place-content: center;
    border-radius: ${theme.radius.full};
    transition: ${theme.transition};
    outline: 0;
    border: 0;

    &:focus,
    :hover {
      background: ${colors.brand[100]};
      outline-offset: 1px;
      outline: 1px solid ${colors.brand[200]};
      transition: ${theme.transition};
      border: 0;
    }

    & span:hover {
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
