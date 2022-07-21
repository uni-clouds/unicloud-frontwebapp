import styled, { css, DefaultTheme } from 'styled-components'
import { colors } from '../../styles/colors'
import { HeadingStyleProps } from './types'

// const titleSize = {
//   normal: (theme: DefaultTheme) =>
//     css`
//        {
//         font-size: ${theme.fontSize.lg};
//       }
//     `,
//   big: (theme: DefaultTheme) => css`
//      {
//       font-size: ${theme.fontSize.xl};
//     }
//   `,
//   huge: (theme: DefaultTheme) => css`
//      {
//       font-size: ${theme.fontSize.huge};
//     }
//   `
// }

export const Title = styled.h1<HeadingStyleProps>`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ size, theme }) =>
    size === 'normal'
      ? theme.fontSize.lg
      : size === 'big'
      ? theme.fontSize.xl
      : theme.fontSize.huge};
  color: ${colors.base[700]};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
  text-align: ${({ align }) => (align ? align : 'left')};
`
