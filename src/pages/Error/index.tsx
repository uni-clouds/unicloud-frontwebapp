import { useNavigate } from 'react-router-dom'
import ErrorImage from '../../assets/error.svg'
import { NavigateButton } from '../../components/Elements/Buttons/NavigateButton'

const Error: React.FC = () => {
  const navigate = useNavigate()
  return (
    <section className='h-screen flex flex-col justify-center items-center'>
      <div className='flex-col text-lg text-center gap-4'>
        <img className='w-auto h-[30rem]' src={ErrorImage} alt='error image' />
        <div>
          <h3 className='font-semibold text-xl leading-10'>
            Oops! Algo inesperado ocorreu!
          </h3>
          <p className='my-2'>
            Sentimos muito pelo inconveniente, mas parece que a página que está
            tentando acessar encontra-se em manutenção.
          </p>
          <p>Nossa equipe já está trabalhando para normalizar o acesso.</p>
          <p className='mb-6'>Obrigado pela paciência!</p>
          <NavigateButton
            text='Voltar para página principal'
            onclick={() => navigate('/')}
          />
        </div>
      </div>
    </section>
  )
}
export default Error
