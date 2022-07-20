import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { useCanAccess } from '../../hooks/useCanAccess'
import { ResourcesTypesDashboard } from '../../templates/ResourcesTypes'

const Resources: FC = () => {
  document.title = 'Uni.cloud | Recursos'
  const accessLevelZero = useCanAccess({
    role: ['root']
  })

  if (accessLevelZero) {
    return <ResourcesTypesDashboard />
  }

  return <Navigate to='/not-found' replace />
}

export default Resources
