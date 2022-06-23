import { Header } from './Header'
import { Layout } from '../../../components/Layout'
import { useUserList } from '../../../hooks/useUserList'
import { InvitesTable } from '../../../components/Tables/Invites'

export const InviteList: React.FC = ({}) => {
  const { data } = useUserList()
  return (
    <Layout>
      <Header data={data} />
      <InvitesTable />
    </Layout>
  )
}
