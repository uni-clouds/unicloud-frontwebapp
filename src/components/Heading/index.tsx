import { FC } from 'react'
import * as Styled from './styles'
import { HeadingProps } from './types'

export const Heading: FC<HeadingProps> = ({
  children,
  size,
  as,
  uppercase = false
}) => {
  return (
    <Styled.Title size={size} as={as} uppercase={uppercase}>
      {children}
    </Styled.Title>
  )
}
