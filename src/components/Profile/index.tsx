import { Avatar } from '../Avatar'
import { MdMoreVert } from 'react-icons/md'
import { NavigationItem } from './NavigationItem'
import { useState } from 'react'
import PersonalInformation from './PersonalInformation'
import Notifications from './Notifications'
import Activities from './Activities'
import SafetySettings from './SafetySettings'
import { render } from 'react-dom'

export const Profile: React.FC = () => {
  const [mode, setMode] = useState<
    | 'Informações Pessoais'
    | 'Notificações'
    | 'Atividade'
    | 'Configurações de Segurança'
  >('Informações Pessoais')

  function renderSection() {
    if (mode === 'Informações Pessoais') return <PersonalInformation />
    if (mode === 'Notificações') return <Notifications />
    if (mode === 'Atividade') return <Activities />
    if (mode === 'Configurações de Segurança') return <SafetySettings />
  }

  return (
    <div className='flex flex-1'>
      <div className='flex flex-col w-96'>
        <section className='flex items-center justify-between w-full p-8 gap-4  '>
          <Avatar firstName='Joao' lastName='Avelino' />
          <div className='flex-1'>
            <h3 className='font-black text-xl '>João Avelino</h3>
            <h4 className='text-base-500'>joao.avelino@uni.cloud</h4>
          </div>
          <button className='px-2 py-2 hover:bg-light-100 rounded-full transition-colors '>
            <MdMoreVert />
          </button>
        </section>
        <section className='flex flex-col w-full p-8  '>
          <h4>Empresa</h4>
          <h2 className='text-2xl font-bold'>Uni.Cloud</h2>
          <p>0.034939 BTC</p>
        </section>
        <section className='flex flex-1 w-full p-8 '>
          <nav className='w-full'>
            <ul className='flex flex-col w-full gap-8'>
              <NavigationItem
                text='Informações Pessoais'
                onClick={() => setMode('Informações Pessoais')}
                active={mode === 'Informações Pessoais'}
              />
              <NavigationItem
                text='Notificações'
                onClick={() => setMode('Notificações')}
                active={mode === 'Notificações'}
              />
              <NavigationItem
                text='Atividade'
                onClick={() => setMode('Atividade')}
                active={mode === 'Atividade'}
              />
              <NavigationItem
                text='Configurações de Segurança'
                onClick={() => setMode('Configurações de Segurança')}
                active={mode === 'Configurações de Segurança'}
              />
            </ul>
          </nav>
        </section>
      </div>
      <section className='flex flex-col flex-1 p-8 '>{renderSection()}</section>
    </div>
  )
}