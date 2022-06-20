import { PodsLocationsProps } from '../../../Templates/Dashboard/types'
import { Loading } from '../../Elements/Loading'
import { Title } from '../../Elements/TitleDashboard'
import PodsLocation from '../Charts/Maps'


export const CardPodsLocation: React.FC<PodsLocationsProps> = ({ coordinates, isLoading }) => {

  return (
    <div className='lg:w-[35rem] md:w-[15rem] w-60 h-full flex flex-col items-start bg-white custom-dark py-4 px-6 rounded-md shadow'>
     <div className="flex items-baseline gap-1">
     <Title text="Nossos Pods"/>
     {!!isLoading && <Loading/>}
     </div>
     <PodsLocation coordinates={coordinates} />
    </div>
  )
}
