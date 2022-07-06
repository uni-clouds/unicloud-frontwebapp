import { NavLinksHelpers } from '../Elements/Navigation/NavLinksHelpers'

export const Footer = ({ local }: { local: string }) => {
  const navItems = [
    {
      name: 'Termos & Condições',
      path: '/terms'
    },
    {
      name: 'Política de Privacidade',
      path: '/policitys'
    },
    {
      name: 'Ajuda',
      path: '/help'
    }
  ]

  return (
    <footer
      className={`flex items-center flex-wrap p-4 justify-around border-t border-light-200 bg-slate-50 dark:bg-zinc-800 dark:border-neutral-700
      ${local === 'auth' ? 'fixed inset-x-0 bottom-0 w-full ' : 'relative'}`}
    >
      <div className='text-base-400 dark:text-base-100 text-sm'>
        &copy; 2022 Uni.Cloud. Todos os direitos reservados.
      </div>
      <nav>
        <NavLinksHelpers items={navItems} />
      </nav>
    </footer>
  )
}
