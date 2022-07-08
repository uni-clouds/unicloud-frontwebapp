import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from '@mui/material'
import { HiPlus } from 'react-icons/hi'
import { FcInvite } from 'react-icons/fc'
import { PurpleButton } from '../../components/Elements/Buttons/PurpleButton'
import { OutlineButton } from '../../components/Elements/Buttons/OutlineButton'
import { ModalInvitation } from './ModalInvitation'
import { HeaderProps } from './types'
import { useTranslation } from 'react-i18next'

export const Header: React.FC<HeaderProps> = ({ totalUsers, data }) => {
  const [openModal, setOpenModal] = useState(false)
  const navigate = useNavigate()
  const isInvite = Number(data?.length) > 0 ? true : false

  const { t: translate } = useTranslation()

  return (
    <div className='w-full flex flex-row justify-between px-4'>
      <div className='flex flex-col gap-2 justify-start'>
        <h1 className='text-3xl font-bold text-base-700 dark:text-base-100'>
          {translate('Usuários')}
        </h1>
        <p className='text-base-400'>
          {translate('customersUsers:table-subtitle-1')} {totalUsers}{' '}
          {totalUsers === 1
            ? translate('customersUsers:users-subtitle-2-singular')
            : translate('customersUsers:users-subtitle-2-plural')}
        </p>
      </div>
      <div className='flex flex-row gap-4'>
        {!!isInvite && (
          <OutlineButton
            onclick={() => navigate('/user-list-default/invite')}
            name='convites'
          >
            <FcInvite fontSize={20} />
            {translate('customersUsers:userInvitations')}
          </OutlineButton>
        )}
        <Tooltip
          title={translate('customersUsers:addUser')}
          aria-haspopup
          role='alert'
        >
          <PurpleButton
            name='adicionar usuários'
            onclick={() => setOpenModal(true)}
          >
            <HiPlus fontSize={20} />
            {translate('user')}
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
