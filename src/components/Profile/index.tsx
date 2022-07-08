import { Avatar } from '../Avatar'
import { MdMoreVert } from 'react-icons/md'
import { NavigationItem } from './NavigationItem'
import { useEffect, useMemo, useState } from 'react'
import PersonalInformation from './PersonalInformation'
import { useUsersList } from '../../hooks/useUsersList'
import { useDecode } from '../../hooks/useDecode'
import { useUserData } from '../../hooks/useUserData'
import { renderData } from './util'
import { UserDataType } from '../Tables/Users/types'
import { useTranslation } from 'react-i18next'

export const Profile: React.FC = () => {
  document.title = 'Uni.Cloud | Perfil'
  const [mode, setMode] = useState<'Informações Pessoais'>(
    'Informações Pessoais'
  )
  const { t: translate } = useTranslation()

  const { data: customerData } = useUserData()
  const { data } = useUsersList()
  const { user_id } = useDecode()
  const [currentUser, setCurrentUser] = useState<UserDataType>()
  const [isHugeName, setIsHugeName] = useState<'text-xl' | 'text-2xl'>(
    'text-xl'
  )
  useEffect(() => {
    const user = data?.filter((el) => el.id === user_id)[0]
    setCurrentUser(user)
    setIsHugeName(
      customerData?.razao_social.length > 30 ? 'text-xl' : 'text-2xl'
    )
  }, [data, user_id, customerData])

  function renderSection() {
    if (mode === 'Informações Pessoais')
      return <PersonalInformation user={currentUser} />
  }
  return (
    <section
      className='flex flex-1 border dark:border-none shadow bg-white custom-dark rounded-md'
      role='region'
      aria-label='User profile'
    >
      <div className='flex flex-col max-w-64'>
        <div className='flex items-center justify-between w-full p-8 gap-4  '>
          <Avatar
            firstName={currentUser ? renderData(currentUser.first_name) : ''}
            lastName={currentUser ? renderData(currentUser.last_name) : ''}
          />
          <div className='flex-1'>
            <h3 className='font-black text-xl '>
              {currentUser ? renderData(currentUser.first_name) : ''}{' '}
              {currentUser ? renderData(currentUser.last_name) : ''}
            </h3>
            <h4 className='text-base-500'>
              {currentUser ? renderData(currentUser.email) : ''}
            </h4>
          </div>
          <button>
            <MdMoreVert />
          </button>
        </div>
        <div className='flex flex-col w-full p-8 border-t border-b dark:border-zinc-700'>
          <h4>Empresa</h4>
          <h2 className={`${isHugeName} font-bold`}>
            {customerData ? renderData(customerData.razao_social) : ''}
          </h2>
        </div>
        <div className='flex flex-1 w-full p-8 '>
          <nav
            className='w-full'
            role='navigation'
            aria-label='User profile section'
          >
            <ul className='flex flex-col w-full gap-8' role='menu'>
              <NavigationItem
                text='Informações Pessoais'
                href='#'
                active={mode === 'Informações Pessoais'}
              />

              <NavigationItem text='Notificações' href='#' active={false} />
              <NavigationItem text='Atividade' href='#' active={false} />
              <NavigationItem
                text='Configurações de Segurança'
                href='#'
                active={false}
              />
            </ul>
          </nav>
        </div>
      </div>
      <div className='flex flex-col flex-1 p-8 border-l dark:border-zinc-700'>
        {currentUser ? renderSection() : null}
      </div>
    </section>
  )
}
