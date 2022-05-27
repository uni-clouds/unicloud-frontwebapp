import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import AuthPage from '../pages/Auth'
import ProtectedRoute from './ProtectedRoute'
import HomePage from '../pages/Home'
import PlaceholderPage from '../pages/Placeholder'

export default function MainRoutes() {
  const Error = lazy(() => import('../pages/Error'))
  const NotFound = lazy(() => import('../pages/NotFound'))
  const Timeout = lazy(() => import('../pages/Error/GatewayTimeout'))
  const ForgotPassword = lazy(() => import('../pages/Auth/ForgotPassword'))
  //const UnderConstruction = lazy(() => import('../pages/Placeholder'))

  return (
    <Routes>
      {/*error pages*/}
      <Route
        path='error'
        element={
          <Suspense fallback={<>...</>}>
            <Error />
          </Suspense>
        }
      />
      <Route
        path='*'
        element={
          <Suspense fallback={<>...</>}>
            <NotFound />
          </Suspense>
        }
      />
      <Route
        path='/error504'
        element={
          <Suspense fallback={<>...</>}>
            <Timeout />
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
