import styled, { css } from 'styled-components'
import checkedIcon from '../../assets/check.svg'
import { colors } from '../../styles/colors'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row nowrap;
    gap: 0.5rem;
    padding: 0.5rem;
    align-items: center;
    cursor: pointer;
  `}
`
export const Radio = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: ${theme.radius.sm};
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    margin-right: 0.25rem;
    transition: ${theme.transition};
    &:checked,
    :focus {
      background: ${`${colors.brand[600]} url(${checkedIcon}) no-repeat center`};
      outline-offset: 2px;
      outline: 2px solid ${colors.brand[200]};
      transition: ${theme.transition};
      border: 0;
    }
  `}
`
export const Label = styled.label`
  ${({ theme }) => css``}
`
