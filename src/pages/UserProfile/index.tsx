import { Layout } from '../../components/Layout'
import { Profile } from '../../components/Profile'

const UserProfilePage: React.FC = () => {
  document.title = 'Uni.Cloud | Perfil'

  return (
    <Layout>
      <Profile />
    </Layout>
  )
}

export default UserProfilePage
