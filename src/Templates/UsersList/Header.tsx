import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from '@mui/material'
import { HiPlus } from 'react-icons/hi'
import { FcInvite } from 'react-icons/fc'
import { PurpleButton } from '../../components/Elements/Buttons/PurpleButton'
import { OutlineButton } from '../../components/Elements/Buttons/OutlineButton'
import { ModalInvitation } from './ModalInvitation'
import { HeaderProps } from './types'

export const Header: React.FC<HeaderProps> = ({ totalUsers, data }) => {
  const [openModal, setOpenModal] = useState(false)
  const navigate = useNavigate()
  const isInvite = Number(data?.length) > 0 ? true : false

  return (
    <div className='w-full flex flex-row justify-between px-4'>
      <div className='flex flex-col gap-2 justify-start'>
        <h1 className='text-3xl font-bold text-base-700 dark:text-base-100'>
          Usuários
        </h1>
        <p className='text-base-400'>Você tem {totalUsers} usuários</p>
      </div>
      <div className='flex flex-row gap-4'>
        {!!isInvite && (
          <OutlineButton
            onclick={() => navigate('/user-list-default/invite')}
            name='convites'
          >
            <FcInvite fontSize={20} />
            Convites
          </OutlineButton>
        )}
        <Tooltip title='Adicionar usuário' aria-haspopup role='alert'>
          <PurpleButton
            name='adicionar usuários'
            onclick={() => setOpenModal(true)}
          >
            <HiPlus fontSize={20} />
            Usuário
          </PurpleButton>
        </Tooltip>
        <ModalInvitation
          isOpen={openModal}
          handleClose={() => setOpenModal(false)}
        />
      </div>
    </div>
  )
}
