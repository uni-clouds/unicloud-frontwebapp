import { Tooltip } from '@mui/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HiPlus } from 'react-icons/hi'
import { PurpleButton } from '../../components/Elements/Buttons/PurpleButton'
import { ModalNewCustomer } from './ModalNewCustomer'
import { HeaderProps } from './types'

export const Header: React.FC<HeaderProps> = ({ totalUsers }) => {
  const [openModal, setOpenModal] = useState(false)
  const { t: translate } = useTranslation()

  return (
    <div className='w-full flex flex-row justify-between px-4'>
      <div className='flex flex-col gap-2 justify-start'>
        <h1 className='text-3xl font-bold text-base-700 dark:text-base-100'>
          {translate('customers')}
        </h1>
        <p className='text-base-400'>
          {translate('pageSubtitle-1')} {totalUsers}{' '}
          {totalUsers > 1
            ? translate('customersUsers:customers-subtitle-2-plural')
            : translate('customersUsers:customers-subtitle-2-singular')}
        </p>
      </div>
      <div className='flex flex-row gap-4'>
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
