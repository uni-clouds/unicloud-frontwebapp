import { Link } from 'react-router-dom'
import LogoImg from '../../assets/logo.png'

export const Logo: React.FC = () => {
  return (
    <Link to='/'>
      <img
        src={LogoImg}
        alt='Logo unicloud'
        width='300'
        height='300'
        className='mx-auto w-[13.125rem]'
      />
    </Link>
  )
}
