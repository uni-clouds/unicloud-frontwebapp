import { Avatar } from '../Avatar'
import { MdMoreVert } from 'react-icons/md'
import { BsPersonCircle, BsBell } from 'react-icons/bs'
import { FiActivity, FiLock } from 'react-icons/fi'
import { NavigationItem } from './NavigationItem'
import { useState } from 'react'

export const Profile: React.FC = () => {
  const [mode, setMode] = useState<
    | 'Informações Pessoais'
    | 'Notificações'
    | 'Atividade'
    | 'Configurações de Segurança'
  >('Informações Pessoais')

  return (
    <div className='flex flex-1'>
      <div className='flex flex-col w-96'>
        <section className='flex justify-between w-full p-8 gap-4 bg-red-300 '>
          <Avatar firstName='Joao' lastName='Avelino' />
          <div className='flex-1'>
            <h3>João Avelino</h3>
            <h4>joao.avelino@uni.cloud</h4>
          </div>
          <button>
            <MdMoreVert />
          </button>
        </section>
        <section className='flex flex-col w-full p-8 bg-green-300 '>
          <h4>Empresa</h4>
          <h2>Uni.Cloud</h2>
          <p>0.034939 BTC</p>
        </section>
        <section className='flex flex-1 w-full p-8 bg-blue-300'>
          <nav className='w-full'>
            <ul className='flex flex-col w-full gap-8'>
              <NavigationItem text='Informações Pessoais' />
              <NavigationItem text='Notificações' />
              <NavigationItem text='Atividade' />
              <NavigationItem text='Configurações de Segurança' />
            </ul>
          </nav>
        </section>
      </div>
      <section className='flex flex-col flex-1 p-8 bg-yellow-200'>
        <h3>Main Part</h3>
      </section>
    </div>
  )
}
