import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import AuthPage from '../pages/Auth'
import ProtectedRoute from './ProtectedRoute'

export default function MainRoutes() {
  const Page404 = lazy(() => import('../pages/Error'))
  const ForgotPassword = lazy(() => import('../pages/Auth/ForgotPassword'))
  const Home = lazy(() => import('../pages/Home'))

  return (
    <Routes>
      <Route
        path='error'
        element={
          <Suspense fallback={<>...</>}>
            <Page404 />
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
            <Page404 />
          </Suspense>
        }
      />
      <Route
        path='help'
        element={
          <Suspense fallback={<>...</>}>
            <Page404 />
          </Suspense>
        }
      />
      <Route
        path='policitys'
        element={
          <Suspense fallback={<>...</>}>
            <Page404 />
          </Suspense>
        }
      />

      {/*private routes*/}

      <Route
        path='/'
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}
