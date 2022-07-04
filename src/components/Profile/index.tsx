import { Avatar } from '../Avatar'
import { MdMoreVert } from 'react-icons/md'
import { NavigationItem } from './NavigationItem'
import { useState } from 'react'
import PersonalInformation from './PersonalInformation'
import Notifications from './Notifications'
import Activities from './Activities'
import SafetySettings from './SafetySettings'
import { useUsersList } from '../../hooks/useUsersList'
import { useDecode } from '../../hooks/useDecode'
import { useUserData } from '../../hooks/useUserData'

export const Profile: React.FC = () => {
  const [mode, setMode] = useState<
    | 'Informações Pessoais'
    | 'Notificações'
    | 'Atividade'
    | 'Configurações de Segurança'
  >('Informações Pessoais')

  const { customerData } = useUserData()
  const { data } = useUsersList()
  const { user_id } = useDecode()
  const user = data?.filter((el) => el.id === user_id)[0]

  function renderSection() {
    if (mode === 'Informações Pessoais')
      return <PersonalInformation user={user} />
    if (mode === 'Notificações') return <Notifications />
    if (mode === 'Atividade') return <Activities />
    if (mode === 'Configurações de Segurança') return <SafetySettings />
  }

  return (
    <>
      {user && (
        <div className='flex flex-1'>
          <div className='flex flex-col w-96'>
            <section className='flex items-center justify-between w-full p-8 gap-4  '>
              <Avatar firstName={user.first_name} lastName={user.last_name} />
              <div className='flex-1'>
                <h3 className='font-black text-xl '>
                  {user.first_name}
                  {user.last_name}
                </h3>
                <h4 className='text-base-500'>{user.email}</h4>
              </div>
              <button className='px-2 py-2 hover:bg-light-100 rounded-full transition-colors '>
                <MdMoreVert />
              </button>
            </section>
            <section className='flex flex-col w-full p-8 border-t-2 border-b-2 dark:border-light-700'>
              <h4>Empresa</h4>
              <h2 className='text-2xl font-bold'>
                {customerData.razao_social}
              </h2>
            </section>
            <section className='flex flex-1 w-full p-8 '>
              <nav className='w-full'>
                <ul className='flex flex-col w-full gap-8'>
                  <NavigationItem
                    text='Informações Pessoais'
                    onClick={() => setMode('Informações Pessoais')}
                    active={mode === 'Informações Pessoais'}
                  />
                  <NavigationItem
                    text='Notificações'
                    onClick={() => setMode('Notificações')}
                    active={mode === 'Notificações'}
                  />
                  <NavigationItem
                    text='Atividade'
                    onClick={() => setMode('Atividade')}
                    active={mode === 'Atividade'}
                  />
                  <NavigationItem
                    text='Configurações de Segurança'
                    onClick={() => setMode('Configurações de Segurança')}
                    active={mode === 'Configurações de Segurança'}
                  />
                </ul>
              </nav>
            </section>
          </div>
          <section className='flex flex-col flex-1 p-8 border-l-2 dark:border-light-700'>
            {renderSection()}
          </section>
        </div>
      )}
    </>
  )
}
