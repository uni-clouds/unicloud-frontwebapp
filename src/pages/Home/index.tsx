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
      <></>
    </Layout>
  )
}

export default HomePage
