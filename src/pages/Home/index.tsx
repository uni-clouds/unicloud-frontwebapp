import { Dashboard } from '../../templates/Dashboard'
import { Layout } from '../../components/Layout'

const HomePage: React.FC = () => {
  document.title = 'Uni.Cloud | Dashboard'

  return (
    <Layout>
      <Dashboard />
    </Layout>
  )
}

export default HomePage
