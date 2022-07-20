import { useTheme } from '@mui/system'
import { useMediaQuery } from '@mui/material'
import { CardPod } from '../../components/Cards/Pods'
import { usePodsData } from '../../hooks/usePodsData'
import { Header } from './Header'
import { PodsSkeleton } from '../../components/Skeletons/PodsSkeleton'

export const ZadaraPods: React.FC = () => {
  const { data } = usePodsData()
  const { breakpoints } = useTheme()
  const mediaQuery = useMediaQuery(breakpoints.down('lg'))
  const isFullScreen = Number(data?.length) > 6 && mediaQuery === true

  return (
    <section
      className={`container mx-auto ${
        isFullScreen ? ' h-full' : 'h-screen'
      } px-12 flex flex-col gap-4`}
    >
      {data ? (
        <>
          <Header pods={Number(data?.length)} />
          <CardPod />
        </>
      ) : (
        <PodsSkeleton />
      )}
    </section>
  )
}
