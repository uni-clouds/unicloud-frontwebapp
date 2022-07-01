import { useNavigate } from 'react-router-dom'
import { MdKeyboardBackspace } from 'react-icons/md'
import { PurpleButton } from '../../../components/Elements/Buttons/PurpleButton'
import { PathActive } from '../../../components/Elements/Navigation/PathActive'

import { HeaderProps } from './types'

export const Header: React.FC<HeaderProps> = ({ data }) => {
  const navigate = useNavigate()
  const totalInvites = Number(data?.length)
  const paths = [
    { path: 'Usuários', route: 'user-list-default' },
    { path: 'Convites', route: 'user-list-default/invite' }
  ]

  return (
    <div className='w-full flex flex-row justify-between px-4 mb-6'>
      <div className='flex flex-col gap-2 justify-start'>
        <PathActive paths={paths} />
        <h1 className='text-3xl font-bold text-base-700 dark:text-base-100'>
          Convites
        </h1>
        <p className='text-base-400'>
          Você tem {totalInvites}{' '}
          {totalInvites > 1 ? 'convites enviados' : 'convite enviado'}
        </p>
      </div>
      <div className='flex flex-row gap-4'>
        <PurpleButton name='back' onclick={() => navigate(-1)}>
          <MdKeyboardBackspace fontSize={20} />
          Voltar
        </PurpleButton>
      </div>
    </div>
  )
}
