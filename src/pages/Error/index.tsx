import { Link } from 'react-router-dom'
import ErrorImage from '../../assets/error-404.svg'

const Error404: React.FC = () => {
  return (
    <section>
      <div className='nk-block nk-block-middle wide-md mx-auto'>
        <div className='nk-block-content nk-error-ld text-center'>
          <img className='nk-error-gfx' src={ErrorImage} alt='error' />
          <div className='wide-xs mx-auto'>
            <h3 className='nk-error-title'>Oops! Como você chegou aqui?</h3>
            <p className='nk-error-text'>
              Sentimos muito pelo inconveniente, mas parece que você está
              tentando acessar uma página que não existe.
            </p>
            <Link to={'/'}>
              <button className='mt-2'>Voltar para página principal</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Error404
