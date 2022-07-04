import InformationDisplay from '../InformationDisplay'

export default function PersonalInformation({ user }) {
  console.log(user.last_login)

  function transformDate(date: string) {
    return new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'long'
      // month: 'narrow',
      // year: 'numeric'
    }).format(new Date(date))
  }

  const lastLogin = transformDate(user.last_login)
  const dateJoined = transformDate(user.date_joined)

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
              text={`${user.first_name} ${user.last_name}`}
              icon
            />
            <InformationDisplay label='Email' text={user.email} icon />
            <InformationDisplay
              label='Telefone'
              text={user.userprofile.phone}
              icon
            />
            <InformationDisplay
              label='Endereço'
              text={`${user.userprofile.address}, ${user.userprofile.city} - ${user.userprofile.state}, ${user.userprofile.country}`}
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
