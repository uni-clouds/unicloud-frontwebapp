import { Divider } from '../../components/Elements/Divider'
import { Footer } from '../../components/Footer'
import { Login } from '../../components/Forms/Login'
import { Logo } from '../../components/Logo'
import { LinkInternal } from '../../components/Nav/LinkInternal'
import { NavLinksHelpers } from '../../components/Nav/NavLinksHelpers'

const AuthPage: React.FC = () => {
  //! cofirmar se será rota ou link interno

  const navItems = [
    {
      name: 'Comercial',
      path: '/commercial'
    },
    {
      name: 'Suporte Técnico',
      path: '/help-desk'
    }
  ]

  return (
    <>
      <main className='h-screen flex flex-col items-center pt-10'>
        <section className='flex-col justify-center align-center'>
          <Logo />
          <div className='flex flex-col align-center w-[30rem] rounded-sm bg-neutral-50 p-10 justify-center border border-light-200 shadow-sm'>
            <div>
              <h4 className='font-bold text-2xl text-base-600 mb-2'>Entrar</h4>
              <p className='text-sm'>Acesse o Broker com seu e-mail e senha.</p>
            </div>
            <Login />
            <p className='my-5'>
              Ainda não possui acesso?
              <span className='ml-2'>
                <LinkInternal name='Contate nossa equipe' href='#' />
              </span>
            </p>
            <Divider />
            <NavLinksHelpers items={navItems} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
export default AuthPage
