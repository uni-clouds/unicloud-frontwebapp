import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { useAccessLevelZero } from '../../hooks/useAccessLevelZero'
import { ContractsList } from '../../templates/ContractsList'

const ContractsListPage: FC = () => {
  document.title = 'Uni.cloud | Contratos'
  const accessLevelZero = useAccessLevelZero('root')

  if (accessLevelZero) {
    return <ContractsList />
  }

  return <Navigate to='/not-found' replace />
}

export default ContractsListPage
