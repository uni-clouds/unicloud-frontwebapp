import { Footer } from '../../components/Footer'
import { Login as LoginForm } from '../../components/Forms/Login'
import { Logo } from '../../components/Logo'
import { NavLinkLogin } from '../../components/Elements/Navigation/NavLinkLogin'
import { useTranslation } from 'react-i18next'
import { LinkInternal } from '../../components/Elements/Navigation/LinkInternal'
import { Divider } from '@mui/material'
import { NavLinksHelpers } from '../../components/Elements/Navigation/NavLinksHelpers'

export const Login: React.FC = () => {
  const { t: translate } = useTranslation()

  const navItems = [
    {
      name: `${translate('login:commercial')}`,
      path: 'https://uni.cloud/pt-br/fale-com-especialista/'
    },
    {
      name: `${translate('login:help-desk')}`,
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
            <p className='my-5'>
              {translate('login:noAccess')}
              <span className='ml-2'>
                <LinkInternal name={translate('login:noAccessLink')} href='#' />
              </span>
            </p>
            <Divider>{translate('login:or')}</Divider>
            <NavLinksHelpers items={navItems} />
          </div>
        </section>
        <Footer local='auth' />
      </main>
    </>
  )
}
