import { useTranslation } from 'react-i18next'
import InformationDisplay from '../InformationDisplay'
import { renderData } from '../util'

export default function PersonalInformation({ user }) {
  const { t } = useTranslation()

  function transformDate(date: string) {
    return new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'long'
    }).format(new Date(date))
  }
  function interpolateAdress() {
    return `${
      user && user.userprofile ? renderData(user.userprofile.address) : ''
    }, ${user && user.userprofile ? renderData(user.userprofile.city) : ''} - ${
      user && user.userprofile ? renderData(user.userprofile.state) : ''
    }, ${user && user.userprofile ? renderData(user.userprofile.country) : ''}`
  }

  console.log(user)

  const lastLogin = transformDate(user ? renderData(user.last_login) : '-')
  const dateJoined = transformDate(user ? renderData(user.date_joined) : '-')

  return (
    <div className='w-full flex flex-col gap-8'>
      <div>
        <h2 className='font-black text-2xl'>
          {t('profile:personalInformation')}
        </h2>
        <p>{t('profile:personalInformation-subtitle')}</p>
      </div>
      <div className='w-full flex flex-col gap-4 '>
        <div>
          <h3 className='w-full bg-brand-200 dark:bg-zinc-700 p-4 py-1 rounded-sm uppercase font-black text-sm'>
            {t('profile:contactData')}
          </h3>
          <div className='flex flex-col divide-y   px-2'>
            <InformationDisplay
              label={t('name')}
              text={`${user ? renderData(user.first_name) : '-'}
              ${user ? renderData(user.last_name) : '-'}`}
              icon
            />
            <InformationDisplay
              label={t('email')}
              text={user ? renderData(user.email) : '-'}
              icon
            />
            <InformationDisplay
              label={t('phone')}
              text={
                user && user.userprofile
                  ? renderData(user.userprofile.phone)
                  : '-'
              }
              icon
            />
            <InformationDisplay
              label={t('address')}
              text={user.userprofile ? interpolateAdress() : '-'}
              icon
            />
          </div>
        </div>

        <div className='py-4 '>
          <h3 className='w-full bg-brand-200 dark:bg-zinc-700 p-4 py-1 rounded-sm uppercase font-black text-sm'>
            Geral
          </h3>
          <div className='px-2'>
            <InformationDisplay
              text={lastLogin}
              label={t('profile:lastLogin')}
            />
            <InformationDisplay
              text={dateJoined}
              label={t('profile:userSince')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
