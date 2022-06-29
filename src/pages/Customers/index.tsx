import { lazy } from 'react'
import CustomersList from '../../Templates/CustomersList'

//const CustomersList = lazy(() => import('../../Templates/CustomersList'))
const Customers: React.FC = () => {
  document.title = 'Uni.Cloud | Clientes'
  return <CustomersList />
}
export default Customers
