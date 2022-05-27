import { Layout } from '../../components/Layout'
import { useUserData } from '../../hooks/useUserData'

const HomePage: React.FC = () => {
  const user = useUserData()

  console.log('context na home =>', user)

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
        </div>
      </section>
    </Layout>
  )
}

export default HomePage
