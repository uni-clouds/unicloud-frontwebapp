import { useUserData } from '../../../hooks/useUserData'
import { OrganizationLogoProps } from './types'

export const OrganizationLogo: React.FC<OrganizationLogoProps> = ({ logo }) => {
  const { data } = useUserData()

  return (
    <div className='w-20 min-h-10 mx-auto'>
      <img
        src={logo}
        alt={`logo de ${data?.razao_social}`}
        width={50}
        height={50}
        loading='lazy'
        className='w-full h-auto'
      />
    </div>
  )
}
