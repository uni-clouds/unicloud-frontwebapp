import { ReactNode } from 'react'

export interface HeadingProps extends HeadingStyleProps {
  children: ReactNode
}

export interface HeadingStyleProps {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size: 'normal' | 'big' | 'huge'
  uppercase?: boolean
  align?: 'center' | 'left' | 'right'
}
