import styled, { css } from 'styled-components'
import { colors } from '../../styles/colors'

export const Container = styled.div`
  ${({ theme }) => css`
    width: clamp(80vw 1180px 100%);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 3.3rem;
    justify-content: space-around;
    padding: 1.25rem;
  `}
`
export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
    padding: 1rem;
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.15);
    border-radius: ${theme.radius.sm};
    gap: 0.5rem;
  `}
`
export const CardItem = styled.div`
  ${({ theme }) => css``}
`

export const CardTopic = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeight.semibold};
  `}
`
