import { Layout } from '../../components/Layout'
import { useUserData } from '../../hooks/useUserData'

const HomePage: React.FC = () => {
  const user = useUserData()

  return (
    <Layout>
      <section className='hero h-screen '>
        <div className='hero-content flex-col gap-6'>
          <p className='mb-6 text-brand-google'>{user.type}</p>
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
