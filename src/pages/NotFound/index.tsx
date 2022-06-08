import { useNavigate } from 'react-router-dom'
import { NavigateButton } from '../../components/Elements/Buttons/NavigateButton'

import NotFoundImage from '../../assets/error-404.svg'

const NotFound: React.FC = () => {
  document.title = 'Uni.Cloud | Not Found'
  const navigate = useNavigate()
  return (
    <section className='h-screen flex flex-col justify-center items-center'>
      <div className='flex-col text-lg text-center gap-4'>
        <img
          className='w-auto h-[30rem]'
          src={NotFoundImage}
          alt='error image'
        />
        <div>
          <h3 className='font-medium text-xl leading-10'>
            Oops! Como você chegou aqui?
          </h3>
          <p className='my-2'>
            Sentimos muito pelo inconveniente, mas parece que você está tentando
            acessar uma página que não existe.
          </p>
        </div>
        <NavigateButton
          text='Voltar para página principal'
          onclick={() => navigate('/')}
        />
      </div>
    </section>
  )
}
export default NotFound
