import { Footer } from '../../components/Footer'
import { Login as LoginForm } from '../../components/Forms/Login'
import { Logo } from '../../components/Logo'
import { LinkInternal } from '../../components/Elements/Navigation/LinkInternal'
import { NavLinksHelpers } from '../../components/Elements/Navigation/NavLinksHelpers'
import { Divider } from '@mui/material'

export const Login: React.FC = () => {
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
      <main className='h-screen flex flex-col items-center justify-center'>
        <section className='flex-col justify-center align-center'>
          <Logo />
          <div className='mt-6 flex flex-col align-center w-[30rem] rounded-sm bg-neutral-50 custom-dark p-10 justify-center border border-light-200 dark:border-neutral-700 shadow-sm'>
            <div>
              <h4 className='font-bold text-2xl text-base-600 dark:text-base-200 mb-2'>
                Entrar
              </h4>
              <p className='text-sm'>Acesse o Broker com seu e-mail e senha.</p>
            </div>
            <LoginForm />
            <p className='my-5'>
              Ainda não possui acesso?
              <span className='ml-2'>
                <LinkInternal name='Contate nossa equipe' href='#' />
              </span>
            </p>
            <Divider>OU</Divider>
            <NavLinksHelpers items={navItems} />
          </div>
        </section>
      </main>
      <Footer local='' />
    </>
  )
}
