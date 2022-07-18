import { useTranslation } from 'react-i18next'
import { PodsLocationsProps } from '../../../templates/Dashboard/types'
import { Loading } from '../../Elements/Loading'
import { Title } from '../../Elements/TitleDashboard'
import PodsLocation from '../Charts/Maps'

export const CardPodsLocation: React.FC<PodsLocationsProps> = ({
  coordinates,
  isLoading
}) => {
  const { t: translate } = useTranslation()
  return (
    <div className=' w-full h-[34rem] xl:h-full flex flex-col items-start bg-white custom-dark py-4 px-6 rounded-md shadow overflow-hidden'>
      <div className='flex items-baseline gap-1'>
        <Title text={translate('dashboard:ourPods')} />
        {!!isLoading && <Loading />}
      </div>
      <PodsLocation coordinates={coordinates} />
    </div>
  )
}
