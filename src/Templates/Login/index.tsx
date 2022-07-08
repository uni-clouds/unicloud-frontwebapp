import { Footer } from '../../components/Footer'
import { Login as LoginForm } from '../../components/Forms/Login'
import { Logo } from '../../components/Logo'
import { NavLinkLogin } from '../../components/Elements/Navigation/NavLinkLogin'
import { useTranslation } from 'react-i18next'

export const Login: React.FC = () => {
  const { t: translate } = useTranslation()

  const navItems = [
    {
      name: 'Comercial',
      path: 'https://uni.cloud/pt-br/fale-com-especialista/'
    },
    {
      name: 'Suporte Técnico',
      path: 'https://uni.cloud/pt-br/fale-com-especialista/'
    }
  ]
  return (
    <>
      <main className='h-screen flex flex-col gap-6 items-center justify-center'>
        <section className='flex-col justify-center align-center'>
          <Logo />
          <div className='mt-6 flex gap-4 flex-col align-center w-[30rem] rounded-sm bg-neutral-50 custom-dark p-10 justify-center border border-light-200 dark:border-neutral-700 shadow-sm'>
            <div>
              <h4 className='font-bold text-2xl text-base-600 dark:text-base-200 mb-2'>
                {translate('login:login')}
              </h4>
              <p className='text-sm'>{translate('login:subtitle')}</p>
            </div>
            <LoginForm />
<<<<<<< HEAD
            <p className='my-4 text-sm lg:text-md text-center'>
              {translate('login:noAccess')}
              <span className='ml-2'>
                <LinkInternal name={translate('login:noAccessLink')} href='#' />
              </span>
            </p>
            <Divider>{translate('login:or')}</Divider>
            <NavLinksHelpers items={navItems} />
=======
            <div className='flex flex-row items-center gap-2'>
              <p className='text-sm'>Ainda não possui acesso?</p>
              <NavLinkLogin items={navItems} />
            </div>
>>>>>>> a81dbb9 (git pull 8/7)
          </div>
        </section>
        <Footer local='auth' />
      </main>
    </>
  )
}
