import { Layout } from '../../components/Layout'
import { Logo } from '../../components/Logo'
import { useUserData } from '../../hooks/useUserData'

const HomePage: React.FC = () => {
  const { customerType } = useUserData()

  return (
    <Layout>
      <section className='hero h-screen '>
        <div className='hero-content flex-col gap-6'>
          <Logo />
          <p className='mb-6 text-brand-google'>{customerType?.type}</p>
          <button
            className=' btn btn-primary btn-square px-12'
            type='button'
            onClick={() => window.location.reload()}
          >
            click
          </button>
        </div>
      </section>
    </Layout>
  )
}

export default HomePage
