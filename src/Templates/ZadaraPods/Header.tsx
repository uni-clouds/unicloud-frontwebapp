import { Tooltip } from '@mui/material'
import { useState } from 'react'
import { HiPlus } from 'react-icons/hi'
import { PurpleButton } from '../../components/Elements/Buttons/PurpleButton'
import { Title } from '../../components/Elements/TitleDashboard'
import { ModalCreatePod } from './ModalCreatePod'

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='w-full py-6 px-12 flex row justify-between items-center'>
      <Title text='PODS' />
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
