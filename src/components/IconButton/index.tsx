import { Icon } from '@iconify-icon/react'
import { ForwardRefRenderFunction, forwardRef } from 'react'
import * as Styled from './styles'
import { IconButtonProps } from './types'

const ButtonIcon: ForwardRefRenderFunction<
  HTMLButtonElement,
  IconButtonProps
> = (
  { icon, onClick, size, title, rounded, outline, color, borderColor, ...rest },
  ref
) => {
  return (
    <Styled.Tooltip title={title}>
      <Styled.Button
        onClick={onClick}
        {...rest}
        ref={ref}
        role='icon'
        aria-describedby={title}
        outline={outline}
        rounded={rounded}
        borderColor={borderColor}
      >
        <Icon icon={icon} style={{ fontSize: `${size}`, color: `${color}` }} />
      </Styled.Button>
    </Styled.Tooltip>
  )
}
export const IconButton = forwardRef(ButtonIcon)
