import styled, { css } from 'styled-components'
import { colors } from '../../styles/colors'

export const SidebarContainer = styled.aside<{ isOpened: boolean }>`
  ${({ theme, isOpened }) => css`
    background: ${colors.neutral[50]};
    width: ${isOpened ? '15rem' : '5vw'};
    transition: ${theme.transition};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    border-top: 1px solid ${colors.light[200]};
    padding-top: 1rem;

    height: 100%;
    border-right: 1px solid ${colors.light[200]};

    box-shadow: ${isOpened ? '' : '0px 2px 7px -1px rgba(0, 0, 0, 0.2)'};
    -webkit-box-shadow: ${isOpened
      ? ''
      : '0px 2px 7px -1px rgba(0, 0, 0, 0.2)'};
    -moz-box-shadow: ${isOpened ? '' : '0px 2px 7px -1px rgba(0, 0, 0, 0.2)'};
  `}
`
export const LogoBox = styled.div`
  ${({ theme }) => css`
    width: 7rem;
    max-height: 2.5rem;
    margin: 0 auto;
  `}
`
