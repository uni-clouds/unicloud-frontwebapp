import { lazy, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import App from '../App'
import AuthPage from '../pages/Auth'
import ProtectedRoute from './ProtectedRoute'

export default function MainRoutes() {
  const Page404 = lazy(() => import('../pages/Error'))
  const ForgotPassword = lazy(() => import('../pages/Auth/ForgotPassword'))
  const Home = lazy(() => import('../pages/Home'))
  return (
    <BrowserRouter>
      <Routes>
        <Route path='#' element={<App />} />
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
            <Suspense fallback={<>...</>}>
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
