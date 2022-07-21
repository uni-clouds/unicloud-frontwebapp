import styled, { css } from 'styled-components'
import {
  Box as NewBox,
  ContainerList,
  CardResourcesTypes
} from '../ResourcesType/styles'

export const Container = styled.div`
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

export const ListBox = styled(ContainerList)`
  ${({ theme }) => css`
    max-width: 25rem;
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
  `}
`

export const CardResources = styled(CardResourcesTypes)`
  ${({ theme }) => css`
    padding: 1.5rem 2rem;
    width: 100%;
    display: flex;
    flex-flow: column wrap;
    gap: 1.25rem;
    border-radius: ${theme.radius.sm};
    box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: -1px 1px 3px -1px rgba(0, 0, 0, 0.25);

    & h3 {
      text-align: left;
    }
  `}
`
export const Box = styled(NewBox)`
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
