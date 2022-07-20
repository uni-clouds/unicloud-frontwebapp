import { Header } from './Header'
import { Layout } from '../../../components/Layout'
import { useInviteList } from '../../../hooks/useInviteList'
import { InvitesTable } from '../../../components/Tables/Invites'

export const InviteList: React.FC = ({}) => {
  const { data } = useInviteList()

  return (
    <Layout>
      <section
        className={`${
          data?.length >= 7 ? 'h-full' : 'h-screen'
        } w-full flex flex-col gap-6 p-6 items-center`}
      >
        <Header data={data} />
        <InvitesTable />
      </section>
    </Layout>
  )
}
