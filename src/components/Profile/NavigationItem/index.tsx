import { BsPersonCircle, BsBell } from 'react-icons/bs'
import { FiActivity, FiLock } from 'react-icons/fi'
import { FaAngleRight } from 'react-icons/fa'

interface NavigationItemProps {
  text: string
  onClick: () => void
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  text,
  onClick
}) => {
  function renderIcon() {
    if (text === 'Informações Pessoais') return <BsPersonCircle />
    if (text === 'Notificações') return <BsBell />
    if (text === 'Atividade') return <FiActivity />
    if (text === 'Configurações de Segurança') return <FiLock />
  }

  return (
    <li
      className='flex items-center justify-between gap-2 cursor-pointer'
      onClick={onClick}
    >
      {renderIcon()}
      <p className='flex-1 font-bold'>{text}</p>
      <FaAngleRight />
    </li>
  )
}
