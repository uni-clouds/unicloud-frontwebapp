import { IoIosNotificationsOutline } from 'react-icons/io'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { FiActivity, FiLock } from 'react-icons/fi'
import { FaAngleRight } from 'react-icons/fa'
import { NavigationItemProps } from '../types'
import { Link } from 'react-router-dom'

export const NavigationItem: React.FC<NavigationItemProps> = ({
  text,
  active,
  href
}) => {
  function renderIcon() {
    if (text === 'Informações Pessoais') return <HiOutlineUserCircle />
    if (text === 'Notificações') return <IoIosNotificationsOutline />
    if (text === 'Atividade') return <FiActivity />
    if (text === 'Configurações de Segurança') return <FiLock />
  }
  const activeColor = active && 'brand-600'

  return (
    <Link to={href}>
      <li
        className={`flex w-full items-center justify-between gap-2 cursor-pointer px-4 py-2 hover:bg-light-100 dark:hover:bg-light-800 rounded-full transition-colors -translate-x-4 text-${activeColor} `}
      >
        {renderIcon()}
        <p className={`flex-1 font-bold`}>{text}</p>
        <FaAngleRight />
      </li>
    </Link>
  )
}
