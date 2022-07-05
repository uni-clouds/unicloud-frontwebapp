import InformationDisplay from '../InformationDisplay'
import { renderData } from '../util'

export default function PersonalInformation({ user }) {
  function transformDate(date: string) {
    return new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'long'
    }).format(new Date(date))
  }

  const lastLogin = transformDate(renderData(user.last_login))
  const dateJoined = transformDate(renderData(user.date_joined))

  return (
    <div className='w-full flex flex-col gap-8'>
      <div>
        <h2 className='font-black text-2xl'>Informações Pessoais</h2>
        <p>Informações básicas de contato</p>
      </div>
      <div className='w-full flex flex-col gap-4 '>
        <div>
          <h3 className='w-full bg-light-200 dark:bg-light-800 p-4 py-1 rounded-sm uppercase font-black text-sm'>
            Dados de contato
          </h3>
          <div className='flex flex-col divide-y-2   px-2'>
            <InformationDisplay
              label='Nome'
              text={`${renderData(user.first_name)} ${renderData(
                user.last_name
              )}`}
              icon
            />
            <InformationDisplay
              label='Email'
              text={renderData(user.email)}
              icon
            />
            <InformationDisplay
              label='Telefone'
              text={renderData(user.userprofile.phone)}
              icon
            />
            <InformationDisplay
              label='Endereço'
              text={`${renderData(user.userprofile.address)}, ${renderData(
                user.userprofile.city
              )} - ${renderData(user.userprofile.state)}, ${renderData(
                user.userprofile.country
              )}`}
              icon
            />
          </div>
        </div>

        <div className='py-4 '>
          <h3 className='w-full bg-light-200 dark:bg-light-800 p-4 py-1 rounded-sm uppercase font-black text-sm'>
            Geral
          </h3>
          <div className='px-2'>
            <InformationDisplay text={lastLogin} label='Último login' />
            <InformationDisplay text={dateJoined} label='Usuário' />
          </div>
        </div>
      </div>
    </div>
  )
}
