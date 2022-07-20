import { ForwardRefRenderFunction, forwardRef } from 'react'
import * as Styled from './styles'
import { IconButtonProps } from './types'

const ButtonIcon: ForwardRefRenderFunction<
  HTMLButtonElement,
  IconButtonProps
> = ({ icon: Icon, onClick, size, title, ...rest }, ref) => {
  return (
    <Styled.Tooltip title={title}>
      <Styled.Button onClick={onClick} {...rest} ref={ref}>
        <Icon size={size} />
      </Styled.Button>
    </Styled.Tooltip>
  )
}
export const IconButton = forwardRef(ButtonIcon)
