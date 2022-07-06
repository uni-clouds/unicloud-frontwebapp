import InformationDisplay from '../InformationDisplay'
import { renderData } from '../util'

export default function PersonalInformation({ user }) {
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

  const lastLogin = transformDate(user ? renderData(user.last_login) : '-')
  const dateJoined = transformDate(user ? renderData(user.date_joined) : '-')

  return (
    <div className='w-full flex flex-col gap-8'>
      <div>
        <h2 className='font-black text-2xl'>Informações Pessoais</h2>
        <p>Informações básicas de contato</p>
      </div>
      <div className='w-full flex flex-col gap-4 '>
        <div>
          <h3 className='w-full bg-brand-200 dark:bg-zinc-700 p-4 py-1 rounded-sm uppercase font-black text-sm'>
            Dados de contato
          </h3>
          <div className='flex flex-col divide-y   px-2'>
            <InformationDisplay
              label='Nome'
              text={`${user ? renderData(user.first_name) : '-'}
              ${user ? renderData(user.last_name) : '-'}`}
              icon
            />
            <InformationDisplay
              label='E-mail'
              text={user ? renderData(user.email) : '-'}
              icon
            />
            <InformationDisplay
              label='Telefone'
              text={
                user && user.userprofile
                  ? renderData(user.userprofile.phone)
                  : '-'
              }
              icon
            />
            <InformationDisplay
              label='Endereço'
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
            <InformationDisplay text={lastLogin} label='Último login' />
            <InformationDisplay text={dateJoined} label='Usuário desde' />
          </div>
        </div>
      </div>
    </div>
  )
}
