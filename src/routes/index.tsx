import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import AuthPage from '../pages/Auth'
import ProtectedRoute from './ProtectedRoute'
import HomePage from '../pages/Home'
import PlaceholderPage from '../pages/Placeholder'
import Users from '../pages/Users'
import Register from '../pages/Auth/Register'
import InvitesPage from '../pages/Users/Invites'
import Customers from '../pages/Customers'
import Pods from '../pages/Pods'
import UserProfilePage from '../pages/UserProfile'

export default function MainRoutes() {
  const Error = lazy(() => import('../pages/Error'))
  const NotFound = lazy(() => import('../pages/NotFound'))
  const Timeout = lazy(() => import('../pages/Error/GatewayTimeout'))
  const ForgotPassword = lazy(() => import('../pages/Auth/ForgotPassword'))
  const UsersPanel = lazy(() => import('../pages/Users'))

  return (
    <Routes>
      {/*error pages*/}
      <Route
        path='/error'
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
        path='/not-found'
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
      <Route path='/auth' element={<AuthPage />} />
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
        path='/terms'
        element={
          <Suspense fallback={<>...</>}>
            <PlaceholderPage />
          </Suspense>
        }
      />
      <Route
        path='/help'
        element={
          <Suspense fallback={<>...</>}>
            <PlaceholderPage />
          </Suspense>
        }
      />
      <Route
        path='/policitys'
        element={
          <Suspense fallback={<>...</>}>
            <PlaceholderPage />
          </Suspense>
        }
      />

      <Route path='/auth-register' element={<Register />} />

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
      <Route
        path='/customers'
        element={
          <ProtectedRoute>
            <Customers />
          </ProtectedRoute>
        }
      />

      <Route
        path='/unicloud-pods'
        element={
          <ProtectedRoute>
            <Pods />
          </ProtectedRoute>
        }
      />

      <Route
        path='/monitor'
        element={
          <ProtectedRoute>
            <PlaceholderPage />
          </ProtectedRoute>
        }
      />

      <Route
        path='/user-list-default'
        element={
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        }
      />
      <Route
        path='/user-list-default/invite'
        element={
          <ProtectedRoute>
            <InvitesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path='/user-profile'
        element={
          <ProtectedRoute>
            <UserProfilePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}
