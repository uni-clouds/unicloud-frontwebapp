import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import { useCanAccess } from '../../hooks/useCanAccess'
import { ResourcesPage } from '../../templates/Resources'

const Resources: FC = () => {
  document.title = 'Uni.cloud | Recursos'
  const accessLevelZero = useCanAccess({
    role: ['root']
  })

  if (accessLevelZero) {
    return <ResourcesPage />
  }

  return <Navigate to='/not-found' replace />
}

export default Resources
