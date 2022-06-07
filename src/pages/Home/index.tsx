import { HiOutlineDocumentReport } from 'react-icons/hi'
import { PurpleButton } from '../../components/Elements/Buttons/PurpleButton'
import { Dashboard } from '../../components/Dashboard'
import { Layout } from '../../components/Layout'
import { Logo } from '../../components/Logo'
import { useUserData } from '../../hooks/useUserData'

const HomePage: React.FC = () => {
  document.title = 'Uni.Cloud | Dashboard'
  const { customerType } = useUserData()

  return (
    <Layout>
      <section className='h-screen '>
        <div className='flex-col gap-6 items-center justify-center'>
          <Logo />
          <p className='mb-6 text-brand-google'>{customerType?.type}</p>
          <button
            className='py-4 bg-brand-600 px-10 text-slate-100 font-semibold text-lg rounded-2xl border-brand-800 hover:bg-brand-700 focus:outline-brand-800 focus:ring-offset-brand-800 focus:ring-1 focus:ring-brand-800'
            type='button'
            onClick={() => window.location.reload()}
          >
            click
          </button>
        </div>
        <Dashboard />
      </section>
    </Layout>
  )
}

export default HomePage
