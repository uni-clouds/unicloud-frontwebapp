import LanguageSelector from '../Elements/LanguageSelector'
import { NavLinksHelpers } from '../Elements/Navigation/NavLinksHelpers'
import '../../i18n'
import { useTranslation } from 'react-i18next'

export const Footer = ({ local }: { local: string }) => {
  const { t: translate } = useTranslation()

  const navItems = [
    {
      name: `${translate('terms')}`,
      path: '/terms'
    },
    {
      name: `${translate('privacy')}`,
      path: '/policitys'
    },
    {
      name: `${translate('help')}`,
      path: '/help'
    }
  ]

  return (
    <footer
      className={`flex items-center flex-wrap p-4 justify-around border-t border-light-200 bg-slate-50 dark:bg-zinc-800 dark:border-neutral-700
      ${local === 'auth' ? 'fixed inset-x-0 bottom-0 w-full ' : 'relative'}`}
    >
      <div className='text-base-400 dark:text-base-100 text-sm'>
        {translate('copyright')}
      </div>
      <nav>
        <NavLinksHelpers items={navItems} />
      </nav>
      <LanguageSelector />
    </footer>
  )
}
