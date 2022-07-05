import { Tooltip } from '@mui/material'
import { HiPlus } from 'react-icons/hi'
import { PurpleButton } from '../../components/Elements/Buttons/PurpleButton'
import { Title } from '../../components/Elements/TitleDashboard'

export const Header: React.FC = () => {
  return (
    <div className='w-full py-6 px-12 flex row justify-between items-center'>
      <Title text='PODS' />
      <Tooltip title='Adicionar POD'>
        <PurpleButton
          name='create-pod'
          onclick={() => console.log('🐑 clickou')}
        >
          <HiPlus fontSize={20} />
          POD
        </PurpleButton>
      </Tooltip>
    </div>
  )
}
