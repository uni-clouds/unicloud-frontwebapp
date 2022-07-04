import { CardPod } from '../../components/Cards/Pods'
import { Header } from './Header'

export const ZadaraPods: React.FC = () => {
  return (
    <section className='h-full container mx-auto'>
      <Header />
      <CardPod />
    </section>
  )
}
