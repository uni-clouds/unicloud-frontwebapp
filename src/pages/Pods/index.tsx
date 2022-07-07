import { Navigate } from 'react-router-dom'
import { Layout } from '../../components/Layout'
import { useCanAccess } from '../../hooks/useCanAccess'
import { ZadaraPods } from '../../Templates/ZadaraPods'

const Pods: React.FC = () => {
  document.title = 'Uni.cloud | Pods'
  const accessLevelZero = useCanAccess({
    role: ['root']
  })

  if (accessLevelZero) {
    return (
      <Layout>
        <ZadaraPods />
      </Layout>
    )
  }

  return <Navigate to='/not-found' replace />
}

export default Pods
