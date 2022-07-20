import styled, { css } from 'styled-components'
import { colors } from '../../styles/colors'

export const HeaderContainer = styled.header`
  display: flex;
  background: ${colors.neutral[50]};
  height: 50px;
  align-items: center;
  justify-content: space-between;
  color: ${colors.base[500]};
  padding: 2.35rem 1.5rem;
  box-shadow: -2px 2px 7px -1px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: -2px 2px 7px -1px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: -2px 2px 7px -1px rgba(0, 0, 0, 0.25);
`

export const IconContainer = styled.button`
  ${({ theme }) => css`
    min-width: 2.5rem;
    min-height: 2.5rem;
    display: grid;
    place-content: center;
    border-radius: ${theme.radius.full};
    transition: ${theme.transition};
    outline: 0;
    border: 0;

    &:hover {
      cursor: pointer;
      background: ${colors.brand[50]};
      transition: ${theme.transition};
    }
  `}
`
