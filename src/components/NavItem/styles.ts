import styled, { css, keyframes } from 'styled-components'

export const NavList = styled.div`
  ${({ theme }) => css``}
`
const fadein = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

export const ListContainer = styled.div`
  animation: ${fadein} 1s linear;
`
