import { lazy } from 'react'

const CustomersList = lazy(() => import('../../Templates/CustomersList'))
const Customers: React.FC = () => {
  document.title = 'Uni.Cloud | Clientes'
  return <CustomersList />
}
export default Customers
