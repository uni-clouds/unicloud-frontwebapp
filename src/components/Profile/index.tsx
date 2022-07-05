import { Avatar } from '../Avatar'
import { MdMoreVert } from 'react-icons/md'
import { NavigationItem } from './NavigationItem'
import { useEffect, useState } from 'react'
import PersonalInformation from './PersonalInformation'
import Activities from './Activities'
import SafetySettings from './SafetySettings'
import { useUsersList } from '../../hooks/useUsersList'
import { useDecode } from '../../hooks/useDecode'
import { useUserData } from '../../hooks/useUserData'
import { useNavigate } from 'react-router-dom'
import { renderData } from './util'

export const Profile: React.FC = () => {
  const navigate = useNavigate()
  const [mode, setMode] = useState<
    'Informações Pessoais' | 'Atividade' | 'Configurações de Segurança'
  >('Informações Pessoais')

  const { customerData } = useUserData()
  const { data } = useUsersList()
  const { user_id } = useDecode()
  const user = data?.filter((el) => el.id === user_id)[0]

  const companyNameSize =
    customerData?.razao_social.length > 30 ? 'text-xl' : 'text-2xl'

  function renderSection() {
    if (mode === 'Informações Pessoais')
      return <PersonalInformation user={user} />
    if (mode === 'Atividade') return <Activities />
    if (mode === 'Configurações de Segurança') return <SafetySettings />
  }

  return (
    <div className='flex flex-1 border dark:border-none shadow bg-white custom-dark rounded-md'>
      <div className='flex flex-col max-w-64'>
        <section className='flex items-center justify-between w-full p-8 gap-4  '>
          <Avatar
            firstName={user ? renderData(user.first_name) : ''}
            lastName={user ? renderData(user.last_name) : ''}
          />
          <div className='flex-1'>
            <h3 className='font-black text-xl '>
              {user ? renderData(user.first_name) : ''}
              {user ? renderData(user.last_name) : ''}
            </h3>
            <h4 className='text-base-500'>
              {user ? renderData(user.last_name) : ''}
            </h4>
          </div>
          <button className='px-2 py-2 hover:bg-light-100 rounded-full transition-colors '>
            <MdMoreVert />
          </button>
        </section>
        <section className='flex flex-col w-full p-8 border-t border-b dark:border-light-700'>
          <h4>Empresa</h4>
          <h2 className={`${companyNameSize} font-bold`}>
            {customerData ? renderData(customerData.razao_social) : ''}
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
                onClick={() => navigate('/notifications')}
                active={false}
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
      <section className='flex flex-col flex-1 p-8 border-l dark:border-light-700'>
        {user ? renderSection() : null}
      </section>
    </div>
  )
}
