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
      <Dashboard />
    </Layout>
  )
}

export default HomePage
