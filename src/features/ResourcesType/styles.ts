import styled, { css } from 'styled-components'

import { BoxStyleProps } from './types'

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    gap: 2rem;
  `}
`

export const ContainerList = styled.div`
  ${({ theme }) => css`
    max-width: 25rem;
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
  `}
`

export const CardResourcesTypes = styled.div`
  ${({ theme }) => css`
    padding: 1.5rem 2rem;
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    gap: 1.25rem;
    border-radius: ${theme.radius.sm};
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);

    & h3 {
      text-align: left;
    }
  `}
`
export const Box = styled.div<BoxStyleProps>`
  ${({ theme, justify, gap, align }) => css`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    flex: 1;
    gap: ${gap ? gap : '1.25rem'};
    align-items: ${align ? align : 'center'};
    justify-content: ${justify ? justify : 'flex-start'};

    p {
      font-size: ${theme.fontSize.lg};
      text-transform: capitalize;
    }
  `}
`
