import { Layout } from '../../components/Layout'
import { useAuth } from '../../hooks/useAuth'
import { api } from '../../services/api'

const HomePage: React.FC = () => {
  const { logout, token } = useAuth()

  async function getLogo() {
    try {
      const request = await api.get('/customers/')
      console.log('response', request.data)
    } catch (err) {
      console.error('erro chamada no clique', err)
    }
  }

  return (
    <Layout>
      <div className='hero h-screen'>
        <button
          className='btn btn-primary hero-content'
          onClick={() => getLogo()}
        >
          teste
        </button>
      </div>
    </Layout>
  )
}

export default HomePage
