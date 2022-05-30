import { Layout } from '../../components/Layout'
import { useUserData } from '../../hooks/useUserData'

const HomePage: React.FC = () => {
  const user = useUserData()

  return (
    <Layout>
      <section className='hero h-screen '>
        <div className='hero-content flex-col gap-6'>
          <p>{user.telefone}</p>
          <button
            className=' btn btn-primary btn-square px-12'
            type='button'
            onClick={() => window.location.reload()}
          >
            click
          </button>
          <label htmlFor='my-drawer' className='btn btn-primary drawer-button'>
            Open drawer
          </label>
        </div>
      </section>
    </Layout>
  )
}

export default HomePage
