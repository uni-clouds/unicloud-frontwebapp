import { Navigate } from 'react-router-dom'
import { useCanAccess } from '../../hooks/useCanAccess'
import CustomerRequestsList from '../../templates/CustomersList/Requests'

const CustomerRequests: React.FC = () => {
  document.title = 'Uni.Cloud | Clientes'
  const accessLevelOne = useCanAccess({
    role: ['root', 'partner']
  })

  // if (accessLevelOne) {
  return <CustomerRequestsList />
  // }

  return <Navigate to='/not-found' replace />
}
export default CustomerRequests
