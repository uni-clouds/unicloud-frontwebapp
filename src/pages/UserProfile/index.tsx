import { Layout } from '../../components/Layout'
<<<<<<< HEAD
import { Profile } from '../../components/Profile'
=======
import Profile from '../../components/Profile'
>>>>>>> refs/remotes/origin/user-profile

const UserProfilePage: React.FC = () => {
  document.title = 'Uni.Cloud | Dashboard'

  return (
    <Layout>
      <Profile />
    </Layout>
  )
}

export default UserProfilePage
