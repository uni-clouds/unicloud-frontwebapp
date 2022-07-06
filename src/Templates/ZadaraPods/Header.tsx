import { Tooltip } from '@mui/material'
import { useState } from 'react'
import { HiPlus } from 'react-icons/hi'
import { PurpleButton } from '../../components/Elements/Buttons/PurpleButton'
import { Title } from '../../components/Elements/TitleDashboard'
import { ModalCreatePod } from './ModalCreatePod'
import { HeaderPodsProps } from './types'

export const Header: React.FC<HeaderPodsProps> = ({ pods }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='w-full py-6 px-4 flex row justify-between items-center'>
      <div className='flex flex-col gap-3'>
        <Title text='PODS' />
        <p className='text-base-400'>
          {pods > 1
            ? `Você tem ${pods} PODS`
            : pods === 1
            ? `Você tem ${pods} POD`
            : null}
        </p>
      </div>
      <Tooltip title='Adicionar POD'>
        <PurpleButton name='create-pod' onclick={() => setIsOpen(true)}>
          <HiPlus fontSize={20} />
          POD
        </PurpleButton>
      </Tooltip>
      <ModalCreatePod isOpen={isOpen} handleClose={() => setIsOpen(false)} />
    </div>
  )
}
