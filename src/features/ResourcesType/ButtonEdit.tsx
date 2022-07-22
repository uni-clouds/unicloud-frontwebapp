import { FC } from 'react'
import { IconButton } from '../../components/IconButton'
import { colors } from '../../styles/colors'
import { ResourcesButtonProps } from './types'

export const ButtonEdit: FC<ResourcesButtonProps> = ({ onClick }) => {
  return (
    <>
      <IconButton
        icon='ph:pencil-line-thin'
        size='1.2rem'
        title='Editar'
        outline
        color={colors.base[500]}
        borderColor={colors.brand[400]}
        onClick={onClick}
      />
    </>
  )
}
