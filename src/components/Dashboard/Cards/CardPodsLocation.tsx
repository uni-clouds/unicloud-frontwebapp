import { Skeleton } from '@mui/material'
import { Loading } from '../../Elements/Loading'
import { Title } from '../../Elements/TitleDashboard'
import PodsLocation from '../Charts/Maps'
import { PodsLocationsProps } from '../types'

export const CardPodsLocation: React.FC<PodsLocationsProps> = ({ locations, isLoading }) => {
  const mockNames = [
    'Belo Horizonte',
    'Rio de Janeiro',
    'São Paulo',
    'Fortaleza',
    'Curitiba',
    'Brasília',
    'Aparecida de Goiânia',
    'Manaus',
    'Aracaju',
    'Porto Alegre',
    ' Apucarana',
    'Porto Velho',
    'Montevideo',
    'La Paz',
    'Buenos Aires',
  ]
  return (
    <div className='lg:w-full md:w-[20rem]  h-full flex flex-col items-start bg-white py-4 px-6 rounded-md shadow w-60'>
     <div className="flex items-baseline gap-1">
     <Title text="Nossos Pods"/>
     {!!isLoading && <Loading/>}
     </div>
     <PodsLocation coordinates={locations} names={mockNames} />
    </div>
  )
}
