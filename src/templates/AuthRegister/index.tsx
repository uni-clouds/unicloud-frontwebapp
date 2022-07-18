import { Title } from '../../components/Elements/TitleDashboard'
import { RegisterUser } from '../../components/Forms/RegisterUser'

export const AuthRegister: React.FC = () => {
  return (
    <section className='h-screen w-screen grid place-content-center'>
      <Title text='Crie sua conta' />
      <RegisterUser />
    </section>
  )
}
