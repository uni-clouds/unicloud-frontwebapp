import { BsPersonCircle, BsBell } from 'react-icons/bs'
import { FiActivity, FiLock } from 'react-icons/fi'
import { FaAngleRight } from 'react-icons/fa'
import { NavigationItemProps } from '../types'

export const NavigationItem: React.FC<NavigationItemProps> = ({
  text,
  onClick,
  active
}) => {
  function renderIcon() {
    if (text === 'Informações Pessoais') return <BsPersonCircle />
    if (text === 'Notificações') return <BsBell />
    if (text === 'Atividade') return <FiActivity />
    if (text === 'Configurações de Segurança') return <FiLock />
  }
  const activeColor = active && 'brand-600'

  return (
    <li
      className={`flex items-center justify-between gap-2 cursor-pointer px-4 py-2 hover:bg-light-100 rounded-full transition-colors -translate-x-4 text-${activeColor} `}
      onClick={onClick}
    >
      {renderIcon()}
      <p className={`flex-1 font-bold `}>{text}</p>
      <FaAngleRight />
    </li>
  )
}
