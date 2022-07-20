import { Navigate } from 'react-router-dom'
import { useCanAccess } from '../../hooks/useCanAccess'
import CustomersList from '../../templates/CustomersList'

const Customers: React.FC = () => {
  document.title = 'Uni.Cloud | Clientes'
  const accessLevelOne = useCanAccess({
    role: ['root', 'partner']
  })

  if (accessLevelOne) {
    return <CustomersList />
  }

  return <Navigate to='/not-found' replace />
}
export default Customers
