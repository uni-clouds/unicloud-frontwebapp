import { NavLinksFooter } from '../Navigations/NavLinksFooter'

export const Footer: React.FC = () => {
  return (
    <footer className='container max-width-xl flex items-center justify-evenly mx-auto p-6'>
      <div className='text-base-400'>
        © 2022 Uni.Cloud. Todos os direitos reservados.
      </div>
      <nav>
        <NavLinksFooter />
      </nav>
    </footer>
  )
}
