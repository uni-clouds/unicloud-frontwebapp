import styled, { css } from 'styled-components'
import { colors } from '../../styles/colors'

export const SidebarContainer = styled.aside<{ isOpened: boolean }>`
  ${({ theme, isOpened }) => css`
    background: ${colors.neutral[50]};
    width: ${isOpened ? '15rem' : '3.6vw'};
    transition: ${theme.transition};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem 0;

    box-shadow: 0px 2px 7px -1px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: 0px 2px 7px -1px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 2px 7px -1px rgba(0, 0, 0, 0.25);
  `}
`
export const LogoBox = styled.div`
  ${({ theme }) => css`
    width: 7rem;
    max-height: 2.5rem;
    margin: 0.5rem auto 0 auto;
  `}
`
