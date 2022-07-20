import styled, { css } from 'styled-components'
import { colors } from '../../styles/colors'

export const TabsContainer = styled.div<{ isActive: boolean }>`
  ${({ theme, isActive }) => css`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    padding: 0.5rem 1rem;
    gap: 0.5rem;

    border-top-left-radius: ${theme.radius.sm};
    border-top-right-radius: ${theme.radius.sm};
    color: ${isActive ? colors.brand[800] : colors.base[400]};

    transition: ${theme.transition};

    transform: ${isActive ? 'translateY(-2px)' : 'none'};
    border: ${isActive ? 'none' : '1px solid #f0eaff'};
    box-shadow: ${isActive
      ? '-1px 0px 7px 1px rgba(212, 194, 255, 0.5)'
      : '-1px 0px 7px 1px rgba(0, 0, 0, 0)'};
    -webkit-box-shadow: ${isActive
      ? '-1px 0px 7px 1px rgba(212, 194, 255, 0.5)'
      : '-1px 0px 7px 1px rgba(0, 0, 0, 0)'};
    -moz-box-shadow: ${isActive
      ? '-1px 0px 7px 1px rgba(212, 194, 255, 0.5)'
      : '-1px 0px 7px 1px rgba(0, 0, 0, 0)'};
  `}
`
export const LinkBox = styled.span`
  ${({ theme }) => css``}
`
