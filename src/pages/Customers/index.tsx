import { Navigate } from 'react-router-dom'
import { useAccessLevelOne } from '../../hooks/useAccessLevelOne'
import CustomersList from '../../templates/CustomersList'

const Customers: React.FC = () => {
  document.title = 'Uni.Cloud | Clientes'
  const accessLevelOne = useAccessLevelOne(['root', 'partner'])
  if (accessLevelOne) {
    return <CustomersList />
  }

  // return <Navigate to='/not-found' replace />
}
export default Customers
