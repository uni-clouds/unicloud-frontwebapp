import { Footer } from '../../components/Footer'
import { Login as LoginForm } from '../../components/Forms/Login'
import { Logo } from '../../components/Logo'
import { LinkInternal } from '../../components/Elements/Navigation/LinkInternal'
import { NavLinksHelpers } from '../../components/Elements/Navigation/NavLinksHelpers'
import { Divider } from '@mui/material'
import { useTranslation } from 'react-i18next'

export const Login: React.FC = () => {
  const { t } = useTranslation()

  const navItems = [
    {
      name: `${t('login:commercial')}`,
      path: '/commercial'
    },
    {
      name: `${t('login:help-desk')}`,
      path: '/help-desk'
    }
  ]
  return (
    <>
      <main className='h-screen flex flex-col gap-6 items-center justify-center'>
        <section className='flex-col justify-center align-center'>
          <Logo />
          <div className='mt-6 gap-4 flex flex-col align-center w-[25rem] lg:w-[30rem] rounded-sm bg-neutral-50 custom-dark p-6 lg:p-10 justify-center border border-light-200 dark:border-neutral-700 shadow-sm'>
            <div>
              <h4 className='font-bold text-2xl text-base-600 dark:text-base-200 mb-2'>
                {t('login:login')}
              </h4>
              <p className='text-sm'>{t('login:subtitle')}</p>
            </div>
            <LoginForm />
            <p className='my-4 text-sm lg:text-md text-center'>
              Ainda não possui acesso?
              <span className='ml-2'>
                <LinkInternal name='Contate nossa equipe' href='#' />
              </span>
            </p>
            <Divider>OU</Divider>
            <NavLinksHelpers items={navItems} />
          </div>
        </section>
        <Footer local='auth' />
      </main>
    </>
  )
}
