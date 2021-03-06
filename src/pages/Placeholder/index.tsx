import emptyStateImg from '../../assets/under-construction.png'
import { useNavigate } from 'react-router-dom'

const Notifications: React.FC = () => {
  const navigate = useNavigate()

  return (
    <section className='h-screen grid place-content-center text-center'>
      <img
        src={emptyStateImg}
        alt='empty state image'
        width='300px'
        height='300px'
        className='w-auto'
        loading='lazy'
      />
      <h2 className='font-bold text-2xl my-6'>
        Em breve um novo conteúdo aqui!
      </h2>
      <button
        className='py-4 bg-brand-600 px-10 text-slate-100 font-medium text-lg rounded-2xl border-brand-800 hover:bg-brand-700 focus:outline-brand-800 focus:ring-offset-brand-800 focus:ring-1 focus:ring-brand-800'
        type='button'
        onClick={() => navigate('/', { replace: false })}
      >
        Voltar
      </button>
    </section>
  )
}

export default Notifications
