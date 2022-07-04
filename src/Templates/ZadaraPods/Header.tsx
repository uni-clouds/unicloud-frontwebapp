import { Tooltip, IconButton } from '@mui/material'
import { HiPlus } from 'react-icons/hi'
import { PurpleButton } from '../../components/Elements/Buttons/PurpleButton'
import { Title } from '../../components/Elements/TitleDashboard'

export const Header: React.FC = () => {
  return (
    <div className='w-full p-6 flex row justify-between items-center'>
      <Title text='PODS' />
      <Tooltip title='Adicionar POD'>
        <IconButton>
          <PurpleButton
            name='create-pod'
            onclick={() => console.log('🐑 clickou')}
          >
            <HiPlus fontSize={20} />
            POD
          </PurpleButton>
        </IconButton>
      </Tooltip>
    </div>
  )
}
