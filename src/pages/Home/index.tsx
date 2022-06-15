import { HiOutlineDocumentReport } from 'react-icons/hi'
import { PurpleButton } from '../../components/Elements/Buttons/PurpleButton'
import { Dashboard } from '../../components/Dashboard'
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
