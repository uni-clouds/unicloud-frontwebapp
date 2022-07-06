import { Avatar } from '../Avatar'
import { MdMoreVert } from 'react-icons/md'
import { NavigationItem } from './NavigationItem'
import { useState } from 'react'
import { useUsersList } from '../../hooks/useUsersList'
import { useDecode } from '../../hooks/useDecode'
import { useUserData } from '../../hooks/useUserData'
import { useNavigate } from 'react-router-dom'
import { renderData } from './util'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PersonalInformation from './PersonalInformation'

export const Profile: React.FC = () => {
  const [mode, setMode] = useState<'Informações Pessoais'>(
    'Informações Pessoais'
  )
  const { t } = useTranslation()

  const { customerData } = useUserData()
  const { data } = useUsersList()
  const { user_id } = useDecode()
  const user = data?.filter((el) => el.id === user_id)[0]

  const companyNameSize =
    customerData?.razao_social.length > 30 ? 'text-xl' : 'text-2xl'

  function renderSection() {
    if (mode === 'Informações Pessoais')
      return <PersonalInformation user={user} />
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
            firstName={user ? renderData(user.first_name) : ''}
            lastName={user ? renderData(user.last_name) : ''}
          />
          <div className='flex-1'>
            <h3 className='font-black text-xl '>
              {user ? renderData(user.first_name) : ''}{' '}
              {user ? renderData(user.last_name) : ''}
            </h3>
            <h4 className='text-base-500'>
              {user ? renderData(user.email) : ''}
            </h4>
          </div>
          <button>
            <MdMoreVert />
          </button>
        </div>
        <div className='flex flex-col w-full p-8 border-t border-b dark:border-zinc-700'>
          <h4>{t('profile:company')}</h4>
          <h2 className={`${companyNameSize} font-bold`}>
            {customerData ? renderData(customerData.razao_social) : ''}
          </h2>
        </div>
        <div className='flex flex-1 w-full p-8 '>
          <nav
            className='w-full'
            role='navigation'
            aria-label='User profile section'
          >
            <ul className='flex flex-col w-full gap-8'>
              <NavigationItem
                text={t('profile:personalInformation')}
                href='#'
                active={mode === 'Informações Pessoais'}
              />

              <NavigationItem
                text={t('profile:notifications')}
                href='#'
                active={false}
              />
              <NavigationItem
                text={t('profile:activity')}
                href='#'
                active={false}
              />
              <NavigationItem
                text={t('profile:safetyAdjusts')}
                href='#'
                active={false}
              />
            </ul>
          </nav>
        </div>
      </div>
      <div className='flex flex-col flex-1 p-8 border-l dark:border-zinc-700'>
        {user ? renderSection() : null}
      </div>
    </section>
  )
}
