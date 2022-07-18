import styled from 'styled-components'
import { colors } from '../../styles/colors'

type SidebarContainerProps = {
  isOpened: boolean
}
export const SidebarContainer = styled.aside<SidebarContainerProps>`
  background: ${colors.neutral[50]};
  width: ${(props) => (props.isOpened ? '20vw' : '0vw')};
  transition: width 0.5s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`
