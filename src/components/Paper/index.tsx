import { FC } from 'react'
import { Card } from './styles'
import { PaperProps } from './types'

export const Paper: FC<PaperProps> = ({ children }) => {
  return <Card>{children}</Card>
}
