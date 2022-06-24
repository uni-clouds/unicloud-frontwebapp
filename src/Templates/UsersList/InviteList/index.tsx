import { Header } from './Header'
import { Layout } from '../../../components/Layout'
import { useInviteList } from '../../../hooks/useInviteList'
import { InvitesTable } from '../../../components/Tables/Invites'

export const InviteList: React.FC = ({}) => {
  const { data } = useInviteList()

  return (
    <Layout>
      <Header data={data} />
      <InvitesTable />
    </Layout>
  )
}
