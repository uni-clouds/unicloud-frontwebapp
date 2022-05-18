import { Link } from 'react-router-dom'

export const NavLinksFooter: React.FC = () => {
  const navItems = [
    {
      name: 'Termos & Condições',
      path: `${import.meta.env.PUBLIC_URL}/terms`
    },
    {
      name: 'Política de Privacidade',
      path: `${import.meta.env.PUBLIC_URL}/policitys`
    },
    {
      name: 'Ajuda',
      path: `${import.meta.env.PUBLIC_URL}/help`
    }
  ]
  return (
    <ul className='flex items-center justify-between'>
      {navItems.map((item) => (
        <li
          key={item.name}
          className='py-2 px-4 text-brand-600 hover:text-brand-700 transition-colors ease-in'
        >
          <Link to={item.path}> {item.name}</Link>
        </li>
      ))}
    </ul>
  )
}
