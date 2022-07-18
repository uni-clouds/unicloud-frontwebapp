import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const MenuItemContainer = styled.a`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  padding: 10px 0px 10px 10px;
  align-items: center;
  justify-content: space-between;

  & svg {
    height: 30px;
    margin-right: 10px;
  }

  &:hover {
    background-color: ${colors.neutral[50]};
    color: ${colors.brand[700]};
    opacity: 0.5;
    cursor: pointer;
  }

  &.selected {
    background-color: ${colors.brand[200]};
    color: ${colors.brand[800]};
  }
`
