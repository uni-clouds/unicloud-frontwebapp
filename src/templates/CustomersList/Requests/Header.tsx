import { Tooltip } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiPlus } from 'react-icons/hi'
import { PurpleButton } from '../../../components/Elements/Buttons/PurpleButton'
import { ModalNewCustomer } from './ModalNewCustomer'
import { RequestHeaderProps } from '../types'
import { OutlineButton } from '../../../components/Elements/Buttons/OutlineButton'
import { useNavigate } from 'react-router-dom'

export const Header: React.FC<RequestHeaderProps> = ({ totalUsers }) => {
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(false)
  const { t: translate } = useTranslation()

  return (
    <div className='w-full flex flex-row justify-between px-4'>
      <div className='flex flex-col gap-2 justify-start align-start'>
        <h1 className='text-3xl font-bold text-base-700 dark:text-base-100 capitalize'>
          {translate('requests')}
        </h1>
        <p className='text-base-400'>
          {translate('pageSubtitle-1')} {totalUsers}{' '}
          {totalUsers > 1
            ? translate('customersUsers:requests-subtitle-2-plural')
            : translate('customersUsers:requests-subtitle-2-singular')}
        </p>
      </div>
      <div className='flex flex-row gap-4'>
        <OutlineButton onclick={() => navigate('/customers')} name='back'>
          {translate('back')}
        </OutlineButton>
        <Tooltip
          title={translate('customersUsers:addCustomer')}
          aria-haspopup
          role='alert'
        >
          <PurpleButton name='add-customer' onclick={() => setOpenModal(true)}>
            <HiPlus fontSize={20} />
            {translate('customersUsers:customers-subtitle-2-singular')}
          </PurpleButton>
        </Tooltip>
        <ModalNewCustomer
          isOpen={openModal}
          handleClose={() => setOpenModal(false)}
        />
      </div>
    </div>
  )
}
