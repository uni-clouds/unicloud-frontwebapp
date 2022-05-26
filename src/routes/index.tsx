import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import AuthPage from '../pages/Auth'
import ProtectedRoute from './ProtectedRoute'
import HomePage from '../pages/Home'
import PlaceholderPage from '../pages/Placeholder'

export default function MainRoutes() {
  const Error = lazy(() => import('../pages/Error'))
  const ForgotPassword = lazy(() => import('../pages/Auth/ForgotPassword'))
  //const UnderConstruction = lazy(() => import('../pages/Placeholder'))

  return (
    <Routes>
      <Route
        path='error'
        element={
          <Suspense fallback={<>...</>}>
            <Error />
          </Suspense>
        }
      />
      {/*Auth routes */}
      <Route path='auth' element={<AuthPage />} />
      <Route
        path='auth/reset'
        element={
          <Suspense fallback={<>...</>}>
            <ForgotPassword />
          </Suspense>
        }
      />

      {/*header routes */}
      <Route
        path='terms'
        element={
          <Suspense fallback={<>...</>}>
            <PlaceholderPage />
          </Suspense>
        }
      />
      <Route
        path='help'
        element={
          <Suspense fallback={<>...</>}>
            <PlaceholderPage />
          </Suspense>
        }
      />
      <Route
        path='policitys'
        element={
          <Suspense fallback={<>...</>}>
            <PlaceholderPage />
          </Suspense>
        }
      />

      {/*private routes*/}

      <Route
        path='/'
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
      />

      <Route
        path='/notifications'
        element={
          <ProtectedRoute>
            <PlaceholderPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}
