import { FC } from 'react'
import { IconButton } from '../../components/IconButton'
import { colors } from '../../styles/colors'
import { ResourcesButtonProps } from './types'

export const ButtonDelete: FC<ResourcesButtonProps> = ({ onClick }) => {
  return (
    <>
      <IconButton
        icon='fluent:delete-dismiss-20-regular'
        size='1.3rem'
        title='Excluir'
        outline
        color={colors.base[500]}
        borderColor={colors.brand[400]}
        onClick={onClick}
      />
    </>
  )
}
