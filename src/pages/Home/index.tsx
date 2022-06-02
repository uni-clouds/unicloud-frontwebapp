import { HiOutlineDocumentReport } from 'react-icons/hi'
import { PurpleButton } from '../../components/Elements/Buttons/PurpleButton'
import { Dashboard } from '../../components/Dashboard'
import { Layout } from '../../components/Layout'
import { useUserData } from '../../hooks/useUserData'

const HomePage: React.FC = () => {
  document.title = 'Uni.Cloud | Dashboard'
  const { customerType } = useUserData()

  return (
    <Layout>
      <section className='h-full pl-14 pr-6'>
        <div className='flex flex-row justify-between gap-6 py-4 items-center'>
          <h1 className='font-bold text-4xl py-2 leading-10 tracking-tight text-base-600'>
            Dashboard
          </h1>
          <PurpleButton onclick={() => {}} name='reports'>
            <HiOutlineDocumentReport />
            <span>reports</span>
          </PurpleButton>
        </div>
        <Dashboard />
      </section>
    </Layout>
  )
}

export default HomePage
