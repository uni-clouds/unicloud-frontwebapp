import { useNavigate } from 'react-router-dom'
import { NavigateButton } from '../../components/Elements/Buttons/NavigateButton'

import GatewayTimeoutImage from '../../assets/error-504.svg'

const GatewayTimeout: React.FC = () => {
  const navigate = useNavigate()
  return (
    <section className='h-screen flex flex-col justify-center items-center'>
      <div className='flex-col text-lg text-center gap-4'>
        <img
          className='w-auto h-[30rem]'
          src={GatewayTimeoutImage}
          alt='error image'
        />
        <div>
          <h3 className='font-semibold text-xl leading-10'>Oops!</h3>
          <p className='my-2'>
            Sentimos muito pelo inconveniente, mas parece que nossos servidores
            estão sobrecarregados.
          </p>
          <p className='my-2'>Poderia tentar novamente?</p>
        </div>
        <NavigateButton text='Voltar' onclick={() => navigate(-1)} />
      </div>
    </section>
  )
}
export default GatewayTimeout
