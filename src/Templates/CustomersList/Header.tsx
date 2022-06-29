import { useState } from 'react'
import { HiPlus } from 'react-icons/hi'
import { PurpleButton } from '../../components/Elements/Buttons/PurpleButton'
import { ModalNewCustomer } from './ModalNewCustomer'
import { HeaderProps } from './types'

export const Header: React.FC<HeaderProps> = ({ totalUsers }) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className='w-full flex flex-row justify-between px-4'>
      <div className='flex flex-col gap-2 justify-start'>
        <h1 className='text-3xl font-bold text-base-700 dark:text-base-100'>
          Clientes
        </h1>
        <p className='text-base-400'>
          Você tem {totalUsers} {totalUsers > 1 ? 'clientes' : 'cliente'}
        </p>
      </div>
      <div className='flex flex-row gap-4'>
        <PurpleButton
          name='adicionar usuários'
          onclick={() => setOpenModal(true)}
        >
          <HiPlus fontSize={20} />
          Usuário
        </PurpleButton>
        <ModalNewCustomer
          isOpen={openModal}
          handleClose={() => setOpenModal(false)}
        />
      </div>
    </div>
  )
}
