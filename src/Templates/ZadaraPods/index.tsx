import { useTheme } from '@mui/system'
import { useMediaQuery } from '@mui/material'
import { CardPod } from '../../components/Cards/Pods'
import { usePodsData } from '../../hooks/usePodsData'
import { Header } from './Header'

export const ZadaraPods: React.FC = () => {
  const { data } = usePodsData()
  const { breakpoints } = useTheme()
  const mediaQuery = useMediaQuery(breakpoints.down('lg'))
  const isFullScreen = Number(data?.length) > 6 && mediaQuery === true
  console.log(mediaQuery)
  return (
    <section
      className={`container mx-auto ${isFullScreen ? ' h-full' : 'h-screen'}`}
    >
      <Header />
      <CardPod />
    </section>
  )
}