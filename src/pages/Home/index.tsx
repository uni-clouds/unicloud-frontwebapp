import { Layout } from '../../components/Layout'
import { useAuth } from '../../hooks/useAuth'
import { api } from '../../services/api'

const HomePage: React.FC = () => {
  const { logout, token } = useAuth()

  async function getLogo() {
    const request = await api.get('/get-organization/')
    console.log('response', request.data)
  }

  return (
    <Layout>
      <div className='grid place-items-center py-6'>
        <button
          onClick={getLogo}
          type='button'
          className='btn btn-accent rounded-full px-10'
        >
          click here
        </button>
      </div>
    </Layout>
  )
}

export default HomePage
