import { NavLinksHelpers } from '../Nav/NavLinksHelpers'

export const Footer: React.FC = () => {
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
    <footer className='w-full flex items-center justify-evenly mx-auto p-4 border border-light-200 bg-neutral-50 absolute inset-x-0 bottom-0'>
      <div className='text-base-400 text-sm'>
        © 2022 Uni.Cloud. Todos os direitos reservados.
      </div>
      <nav>
        <NavLinksHelpers items={navItems} />
      </nav>
    </footer>
  )
}
